import { NextResponse, NextRequest } from "next/server";
import cookie from 'cookie';
import authServices from "../oauth/services";

export async function POST(req) {
    try {
        console.log("on start of login");


        const data = await req.json();

        console.log("Received data:", data);

        // Attempt to log in the user
        let user = await authServices.loginUser(data?.email, data?.password);

        // If login fails, register the user
        if (!user.success) {
            user = await authServices.registerUser(
                data?.firstName,
                data?.lastName,
                null,//img_link
                data?.email,
                data?.password,
                'local',
                null
            );
        }

        const authToken = user.token;

        // Create the response with the token set in a cookie
        const response = NextResponse.json(
            { response: authToken, success: true },
            { status: 200 }
        );

        // Set the cookie in the response headers
        response.headers.set('Set-Cookie', cookie.serialize('authToken', authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        }));

        return response;

    } catch (error) {
        console.error('Error during authentication:', error);
        return NextResponse.json({ response: "Error", success: false }, { status: 500 });
    }
}
