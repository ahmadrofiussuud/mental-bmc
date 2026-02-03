import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RiskEngine } from "@/lib/risk-engine";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { content, sessionId, level } = await req.json();

    // 1. Analyze Risk in Chat
    const analysis = RiskEngine.analyze(content);

    // 2. Save Message
    const message = await prisma.message.create({
        data: {
            sessionId,
            content,
            senderType: 'USER',
            senderId: (session?.user as any)?.id || 'anonymous'
        }
    });

    // 3. Response Logic (Hybrid AI/Human)
    // Simplified: Always return AI response unless escalated
    const botResponse = "Saya mengerti perasaanmu. Terima kasih sudah berbagi.";

    return NextResponse.json({
        success: true,
        botResponse,
        riskLevel: analysis.level,
        escalate: analysis.level === 'HIGH_RISK'
    });
}
