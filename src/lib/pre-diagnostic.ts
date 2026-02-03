import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || "");

export class PreDiagnosticService {
    /**
     * Analyzes chat history to generate a structured summary for human psychologists.
     * Aims to make sessions 40% more effective by providing pre-session context.
     */
    static async generateSummary(chatHistory: string) {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
      Berikut adalah riwayat percakapan antara pengguna dan AI Mental Health:
      ---
      ${chatHistory}
      ---
      Tugas Anda adalah membuat Ringkasan Pra-Diagnostik untuk psikolog manusia.
      Berikan output dalam format JSON:
      {
        "mood_utama": "...",
        "pola_pikir_terdeteksi": ["...", "..."],
        "tingkat_risiko_estimasi": "Low/Medium/High",
        "poin_penting_untuk_psikolog": "..."
      }
      Gunakan bahasa Indonesia yang profesional.
    `;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return JSON.parse(response.text());
        } catch (error) {
            console.error("Gagal generate ringkasan pra-diagnostik:", error);
            return null;
        }
    }
}
