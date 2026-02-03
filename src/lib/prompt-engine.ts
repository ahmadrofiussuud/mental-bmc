import { prisma } from "@/lib/prisma";

export class PromptEngine {
    static async getDailyPrompt(mood: string) {
        const emotionMapping: Record<string, string> = {
            'ANXIOUS': 'ANXIOUS', 'CEMAS': 'ANXIOUS',
            'SAD': 'SAD', 'SEDIH': 'SAD',
            'HAPPY': 'HAPPY', 'SENANG': 'HAPPY',
            'STRESSED': 'STRESSED', 'STRES': 'STRESSED'
        };

        const category = emotionMapping[mood.toUpperCase()] || 'GENERAL';

        const prompts = await prisma.prompt.findMany({
            where: { category: category }
        });

        if (prompts.length === 0) {
            return await prisma.prompt.findFirst({
                where: { category: 'GENERAL' }
            });
        }

        return prompts[Math.floor(Math.random() * prompts.length)];
    }
}
