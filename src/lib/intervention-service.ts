import { prisma } from "@/lib/prisma";
import { RiskLevel } from "@prisma/client";

export class InterventionService {
    static async checkInstitutionalTrend(institutionId: string) {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const assessments = await prisma.riskAssessment.findMany({
            where: {
                user: { institutionId: institutionId },
                createdAt: { gte: sevenDaysAgo }
            },
            select: { score: true }
        });

        if (assessments.length < 5) return;

        const totalScore = assessments.reduce((acc, curr) => acc + curr.score, 0);
        const averageScore = totalScore / assessments.length;

        if (averageScore > 30) {
            await this.triggerInstitutionalAlert(institutionId, averageScore);
        }
    }

    private static async triggerInstitutionalAlert(institutionId: string, averageScore: number) {
        let severity: RiskLevel = RiskLevel.WARNING;
        if (averageScore > 60) severity = RiskLevel.HIGH_RISK;

        const summary = `Trend Kesehatan Mental Menurun: Rata-rata indeks risiko organisasi naik ke ${averageScore.toFixed(1)}.`;

        await prisma.institutionalAlert.create({
            data: {
                institutionId,
                type: 'DECLINING_MENTAL_HEALTH_TREND',
                severity,
                summary,
                isResolved: false
            }
        });
    }
}
