import { OAuth2Client } from "google-auth-library";
import { NextResponse } from "next/server";
import authServices from "./services";
import cookie from 'cookie';
import DashboardDao from "../dashboard/dao";
import DashboardService from "../dashboard/services";
import { mongo_connection } from "../../../../lib/db";


// Function to get user data from Google
const getUserData = async (token) => {
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
    const data = await response.json();
    return data;
};


export async function GET(req) {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    try {
        mongo_connection()
        const oAuth2Client = new OAuth2Client(
            process.env.GOOGLE_ID,
            process.env.GOOGLE_SECRET,
            `${process.env.BASE_URL}/api/oauth`
        );


        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);
        console.log(tokens)
        const data = await getUserData(tokens.access_token);


        let user = await authServices.loginUser(data?.email, null, 'google', data?.sub);
        if (!user.success) {
            const botservice = new DashboardService();
            user = await authServices.registerUser(data?.given_name, data?.family_name, data?.picture, data?.email, null, 'google', data?.sub);
            const chatbot = {
                userid: user.response._id,
                type: 'free',
                chatbot_name: 'Default Chatbot'
            }
            const chatbot_response = await botservice.CreateUserChatBot(chatbot);

            console.log('Chatbot created successfully');

        }

        const authToken = user.token;


        const response = NextResponse.redirect(`${process.env.BASE_URL}/dashboard`);
        response.headers.set('Set-Cookie', cookie.serialize('authToken', authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'Lax',
            path: '/',
        }));

        return response;

    } catch (error) {
        console.error('Error in GET /api/oauth:', error);
        return NextResponse.json({ response: "OAuth error", success: false }, { status: 500 });
    }
}


// POST: Generates the OAuth authorization URL
export async function POST() {
    try {
        mongo_connection()
        const oAuth2Client = new OAuth2Client(
            process.env.GOOGLE_ID,
            process.env.GOOGLE_SECRET,
            `${process.env.BASE_URL}/api/oauth`
        );

        // Generate the OAuth authorization URL
        const authorizeURL = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/userinfo.email profile openid',
            prompt: 'consent',
        });

        // Return the URL for the client to redirect to
        return new Response(authorizeURL, { status: 200 });

    } catch (error) {
        console.error('Error in POST /api/oauth:', error);
        return new Response(error.message, { status: 400 });
    }
}
