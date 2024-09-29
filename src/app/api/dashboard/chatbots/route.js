import { mongo_connection } from "../../../../../lib/db";
import DashboardService from "../services";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        mongo_connection()
        const service = new DashboardService();
        const { searchParams } = new URL(req.url);
        const userid = searchParams.get('userid');
        console.log(userid);
        const response = await service.GetUserChatBots(userid);

        return NextResponse.json(
            { response, success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error getting user chatbots:', error);
        return NextResponse.json(
            { response: "Error in getting chatbots", success: false },
            { status: 500 }
        );
    }
}


export async function POST(req, res) {
    try {
        mongo_connection()
        const service = new DashboardService();
        const body = await req.json();
        const response = await service.CreateUserChatBot(body);
        return NextResponse.json({
            success: true,
            response: "Chatbot created successfully"
        }, { status: 200 })
    } catch (error) {
        console.error('Error getting user chatbots:', error);
        return NextResponse.json({
            success: false,
            response: error
        }, {
            status: 200
        })
    }
}
