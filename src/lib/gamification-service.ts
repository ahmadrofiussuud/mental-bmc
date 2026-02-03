import { prisma } from "@/lib/prisma";

export class GamificationService {
    static async addXP(userId: string, xpAmount: number) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { level: true }
        });

        if (!user) throw new Error('User not found');

        const newXP = user.xp + xpAmount;

        // Check for level-up
        const nextLevel = await prisma.userLevel.findFirst({
            where: { xpRequired: { gt: user.xp, lte: newXP } },
            orderBy: { levelNumber: 'desc' }
        });

        const updateData: any = { xp: newXP };
        let leveledUp = false;

        if (nextLevel) {
            updateData.levelId = nextLevel.id;
            leveledUp = true;
        }

        await prisma.user.update({
            where: { id: userId },
            data: updateData
        });

        return { leveledUp, newXP };
    }

    static async completeActivity(userId: string, activityType: 'JOURNAL' | 'BREATHING' | 'SESSION') {
        const xpMap = { JOURNAL: 20, BREATHING: 10, SESSION: 100 };
        const xp = xpMap[activityType];
        return await this.addXP(userId, xp);
    }
}
