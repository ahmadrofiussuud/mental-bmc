import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";
import { RiskEngine, RiskLevel } from "@/lib/risk-engine";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || "");

export async function POST(req: Request) {
    const { messages } = await req.json();

    // 1. CBT-based System Prompt
    const systemInstruction = `
    Anda adalah 'TenangIn Co-Pilot', asisten kesehatan mental profesional yang menggunakan prinsip CBT (Cognitive Behavioral Therapy).
    Tujuan Anda adalah membantu pengguna mengidentifikasi pola pikir negatif dan memberikan empati.
    Tetaplah profesional, tenang, dan tidak menghakimi.
    Jika pengguna menunjukkan tanda-tanda bahaya nyata, arahkan mereka dengan lembut ke bantuan profesional.
    Gunakan bahasa Indonesia yang hangat dan mendukung.
  `;

    // 2. Risk Detection on the latest message
    const lastMessage = messages[messages.length - 1].content;
    const riskAnalysis = RiskEngine.analyze(lastMessage);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction,
    });

    // Convert messages to Gemini format
    const history = messages.slice(0, -1).map((m: Message) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
        history,
    });

    const response = await chat.sendMessageStream(lastMessage);

    // 3. Transform Gemini stream to AI SDK stream
    const stream = GoogleGenerativeAIStream(response, {
        onCompletion: async (completion) => {
            // Logic for saving chat to DB could go here
        }
    });

    // 4. Return streaming response with Risk Headers
    return new StreamingTextResponse(stream, {
        headers: {
            "X-TenangIn-Risk": riskAnalysis.level,
        },
    });
}
