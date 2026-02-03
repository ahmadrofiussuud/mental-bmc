import { prisma } from "@/lib/prisma";

export class WebhookService {
    static async notifyInstitution(institutionId: string, event: string, payload: any) {
        const webhooks = await prisma.institutionWebhook.findMany({
            where: { institutionId, isActive: true }
        });

        for (const webhook of webhooks) {
            try {
                await fetch(webhook.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-TenangIn-Event': event,
                        'X-TenangIn-Signature': webhook.secret || 'none'
                    },
                    body: JSON.stringify({ event, timestamp: new Date().toISOString(), data: payload })
                });
            } catch (error) {
                console.error(`[WEBHOOK_ERROR] ${institutionId}:`, error);
            }
        }
    }
}
