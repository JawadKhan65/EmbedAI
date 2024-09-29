import { mongo_connection } from "../../../../../lib/db";
import DashboardService from "../services";

import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        mongo_connection
        const body = await req.json()
        // console.log(body)
        const service = new DashboardService()
        const response = await service.CreateTrainingData(body)
        if (response.success) {

            return NextResponse.json({ success: true, response: "Sourced Added" }, { status: 200 })
        }
    } catch (error) {
        console.error('Error creating training data:', error);
        return NextResponse.json({ success: false, response: error }, { status: 500 })
    }
}


export async function GET(req) {
    try {
        mongo_connection()
        let searchParams = new URL(req.url).searchParams;
        let userid = searchParams.get('userid');
        let chatbot_id = searchParams.get('chatbot_id');
        const service = new DashboardService()
        const response = await service.GetAddedData({ userid, chatbot_id })
        if (response.success) {
            return NextResponse.json({ success: true, response: response.response }, { status: 200 })
        }


    } catch (error) {
        console.error('Error fetching training data:', error);
        return NextResponse.json({ success: false, response: error }, { status: 500 })

    }
}