import { NextResponse } from "next/server";
import { verifyToken } from "../../../../lib/utils";
import cookie from 'cookie';

export async function GET(req) {
    try {

        const cookies = cookie.parse(req.headers.get('cookie') || '');
        const authToken = cookies.authToken;


        const verification = await verifyToken(authToken);

        if (!authToken || !verification.success) {
            return NextResponse.json({ response: "Unauthorized", success: false }, { status: 401 });
        }

        return NextResponse.json({ response: authToken, success: true }, { status: 200 });

    } catch (error) {
        console.error("Server Side Error:", error);
        return NextResponse.json({ response: "Server Side Error", success: false }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const cookies = cookie.parse(req.headers.get('cookie') || '');
        const authToken = cookies.authToken;

        const verification = await verifyToken(authToken);

        if (verification.success) {
            const cookieOpt = cookie.serialize('authToken', '', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Lax',
                path: '/',
                expires: new Date(0) // Set expiration date to the past
            });

            const response = NextResponse.json({ response: "Logged Out", success: true });
            response.headers.set('Set-Cookie', cookieOpt);
            return response;
        }

        return NextResponse.json({ response: "Unauthorized", success: false }, { status: 401 });

    } catch (error) {
        console.error("Server Side Error:", error);
        return NextResponse.json({ response: "Server Side Error", success: false }, { status: 500 });
    }
}