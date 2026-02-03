import { NextResponse } from "next/server";
import { LaporService } from "@/lib/lapor-service";

export async function POST(req: Request) {
    // Lapor Aman is Anonymous - No session check
    const data = await req.json();

    try {
        const report = await LaporService.submitReport(data);
        return NextResponse.json({ success: true, reportId: report.id });
    } catch (error) {
        return NextResponse.json({ error: "Failed to submit report" }, { status: 500 });
    }
}
