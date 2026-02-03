import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { WalletService } from "@/lib/wallet-service";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { sessionCost, professionalId } = await req.json();

    try {
        const result = await WalletService.processSessionPayment(session.user.id, sessionCost);
        return NextResponse.json({ success: true, source: result.source });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
