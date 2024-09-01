import DashboardService from "../services";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    try {
        const services = new DashboardService();
        const { searchParams } = new URL(req.url);
        const userid = searchParams.get('userid');
        const response = await services.GetUserDashboardDetails(userid);
        return NextResponse.json({ response: response, success: true }, { status: 200 });

    } catch (error) {
        console.log('Error getting user dashboard details:', error);
        return NextResponse.json({ success: false, response: error }, { status: 500 });
    }
}