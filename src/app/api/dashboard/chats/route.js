import { NextResponse } from "next/server";
import DashboardService from "../services";
import { mongo_connection } from "../../../../../lib/db";

export async function GET(req, res) {
    try {
        mongo_connection()
        const { searchParams } = new URL(req.url);
        const userid = searchParams.get('userid');
        // console.log(userid);
        const dashboardService = new DashboardService();
        const ChatbotChats = await dashboardService.GetChats(userid);
        return NextResponse.json({ success: true, response: ChatbotChats.response }, { status: 200 });


    } catch (error) {
        console.error('Error getting user dashboard details:', error);
        return NextResponse.json({ success: false, response: error }, { status: 500 });

    }
}

export async function POST(req, res) {
    try {
        mongo_connection()
        const body = await req.json()
        const dashboardService = new DashboardService();
        const chats = await dashboardService.CreateChat(body)
        return NextResponse.json({ success: true, response: chats }, { status: 200 });

    } catch (error) {
        console.error('Error getting user dashboard details:', error);
        return NextResponse.json({ success: false, response: error }, { status: 500 });

    }
}