import { prisma } from "@/lib/prisma";

export class WalletService {
    static async processSessionPayment(userId: string, sessionCost: number) {
        const wallet = await prisma.wallet.findUnique({
            where: { userId: userId },
            include: {
                subsidies: {
                    where: { expiresAt: { gt: new Date() } },
                    orderBy: { createdAt: 'asc' }
                },
                sessionCredits: true
            }
        });

        if (!wallet) throw new Error('Wallet not found');

        if (wallet.sessionCredits.length > 0 && wallet.sessionCredits[0].count > 0) {
            await prisma.sessionCredit.update({
                where: { id: wallet.sessionCredits[0].id },
                data: { count: { decrement: 1 } }
            });
            return { status: 'PAID', source: 'SESSION_CREDIT' };
        }

        let remainingCost = sessionCost;
        if (wallet.subsidies.length > 0) {
            for (const subsidy of wallet.subsidies) {
                const subsidyAmount = Number(subsidy.amount);
                if (subsidyAmount >= remainingCost) {
                    await prisma.subsidy.update({
                        where: { id: subsidy.id },
                        data: { amount: { decrement: remainingCost } }
                    });
                    remainingCost = 0;
                    break;
                } else {
                    await prisma.subsidy.update({
                        where: { id: subsidy.id },
                        data: { amount: 0 }
                    });
                    remainingCost -= subsidyAmount;
                }
            }
        }

        if (remainingCost === 0) return { status: 'PAID', source: 'SUBSIDY' };

        const personalBalance = Number(wallet.balance);
        if (personalBalance >= remainingCost) {
            await prisma.wallet.update({
                where: { userId: userId },
                data: { balance: { decrement: remainingCost } }
            });
            return { status: 'PAID', source: 'PERSONAL_BALANCE' };
        }

        throw new Error('Insufficient funds');
    }
}
