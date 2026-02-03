import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RiskEngine } from "@/lib/risk-engine";
import { GamificationService } from "@/lib/gamification-service";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { content, title, mood } = await req.json();

    // 1. Analyze Risk
    const riskAnalysis = RiskEngine.analyze(content);

    // 2. Save Journal (Simplified - Encryption should be handled client-side or in Lib)
    const journal = await prisma.journal.create({
        data: {
            userId: session.user.id,
            title,
            content,
            mood,
            riskScore: riskAnalysis.score
        }
    });

    // 3. Save Risk Assessment
    await prisma.riskAssessment.create({
        data: {
            userId: session.user.id,
            status: riskAnalysis.level,
            score: riskAnalysis.score,
            triggers: riskAnalysis.triggers
        }
    });

    // 4. Reward XP
    const xpResult = await GamificationService.completeActivity(session.user.id, 'JOURNAL');

    return NextResponse.json({
        success: true,
        journalId: journal.id,
        riskLevel: riskAnalysis.level,
        xpAwarded: 20,
        leveledUp: xpResult.leveledUp
    });
}
