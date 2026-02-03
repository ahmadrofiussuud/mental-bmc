import { NextResponse } from "next/server";
import { PromptEngine } from "@/lib/prompt-engine";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const mood = searchParams.get('mood') || 'GENERAL';

    const prompt = await PromptEngine.getDailyPrompt(mood);
    return NextResponse.json(prompt);
}
