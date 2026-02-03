import { prisma } from "@/lib/prisma";
import { WebhookService } from "./webhook-service";

export class LaporService {
    static async submitReport(data: { subject: string, category: string, description: string, institutionId: string }) {
        const report = await prisma.laporAman.create({
            data: {
                subject: data.subject,
                category: data.category,
                description: data.description,
                institutionId: data.institutionId,
                status: 'PENDING'
            }
        });

        await prisma.reportLog.create({
            data: {
                reportId: report.id,
                action: 'REPORT_CREATED',
                details: 'Laporan baru diterima secara anonim.'
            }
        });

        await WebhookService.notifyInstitution(data.institutionId, 'NEW_REPORT', report);

        return report;
    }
}
