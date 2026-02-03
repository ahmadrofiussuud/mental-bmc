export enum RiskLevel {
    SAFE = 'SAFE',
    WARNING = 'WARNING',
    HIGH_RISK = 'HIGH_RISK',
}

interface AnalysisResult {
    level: RiskLevel;
    score: number;
    triggers: string[];
}

const RISK_KEYWORDS = {
    HIGH_RISK: [
        'akhiri hidup', 'bunuh diri', 'tidak tahan lagi', 'selamat tinggal dunia',
        'suicide', 'self harm', 'menyakiti diri', 'putus asa', 'ingin mati'
    ],
    WARNING: [
        'sendiri', 'sedih sekali', 'menangis terus', 'lelah mental', 'stres berat',
        'depresi', 'tidak berguna', 'hampa', 'cemas', 'insomnia'
    ]
};

export class RiskEngine {
    static analyze(text: string): AnalysisResult {
        const lowerText = text.toLowerCase();
        const triggers: string[] = [];
        let score = 0;

        RISK_KEYWORDS.HIGH_RISK.forEach(keyword => {
            if (lowerText.includes(keyword)) {
                triggers.push(keyword);
                score += 50;
            }
        });

        RISK_KEYWORDS.WARNING.forEach(keyword => {
            if (lowerText.includes(keyword)) {
                triggers.push(keyword);
                score += 10;
            }
        });

        let level = RiskLevel.SAFE;
        if (score >= 50 || triggers.some(t => RISK_KEYWORDS.HIGH_RISK.includes(t))) {
            level = RiskLevel.HIGH_RISK;
        } else if (score >= 20) {
            level = RiskLevel.WARNING;
        }

        return { level, score, triggers };
    }
}
