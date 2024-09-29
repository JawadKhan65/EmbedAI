import { NextResponse } from "next/server";
import DashboardService from "../services";
import { mongo_connection } from "../../../../../lib/db";


export async function POST(req, res) {
    try {
        mongo_connection()
        const body = await req.json()

        const service = new DashboardService();
        if (body?.type === 'free') {
            console.log('Noob Enjoy the free plan');
        }

        const response = await service.CreateUserSubscription(body);

        return NextResponse.json({ response, success: true }, { status: 200 });

    } catch (error) {
        console.error('Error creating user subscription:', error);
        return NextResponse.json({ response: "Error in creating subscription", success: false }, { status: 500 });

    }

}

export async function PUT(req, res) {
    mongo_connection()
    const { userid, subscription } = await req.json();
    try {
        const service = new DashboardService();
        const response = await service.UpdateUserSubscription(userid, subscription);

        return NextResponse.json({ response, success: true }, { status: 200 });

    } catch (error) {
        console.error('Error updating user subscription:', error);
        return NextResponse.json({ response: "Error in updating subscription", success: false }, { status: 500 });

    }

}

