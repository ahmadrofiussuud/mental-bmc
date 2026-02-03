import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
    Lightbulb,
    Target,
    Users,
    BarChart4,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter">
                            Solusi Kami untuk <br /><span className="text-indigo-600">Ekosistem Mental</span> Anda.
                        </h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            Kami membawa pendekatan holistik untuk mendukung institusi dalam mengelola kesejahteraan mental secara proaktif.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <SolutionCard
                            icon={<Lightbulb className="text-amber-500" size={40} />}
                            title="CBT AI Integration"
                            description="Integrasi AI yang dilatih dengan prinsip Cognitive Behavioral Therapy untuk memberikan dukungan emosional 24/7."
                        />
                        <SolutionCard
                            icon={<Target className="text-indigo-500" size={40} />}
                            title="Risk Analysis Dashboard"
                            description="Monitor tren kesehatan mental komunitas secara agregat tanpa melanggar privasi individu."
                        />
                        <SolutionCard
                            icon={<Users className="text-emerald-500" size={40} />}
                            title="Hybrid Chat Referral"
                            description="Sistem rujukan otomatis dari AI ke konselor manusia pada saat yang paling krusial."
                        />
                        <SolutionCard
                            icon={<BarChart4 className="text-rose-500" size={40} />}
                            title="Institutional Insights"
                            description="Laporan berkala tentang tingkat kebahagiaan dan produktivitas komunitas Anda."
                        />
                    </div>

                    <div className="bg-indigo-600 rounded-[40px] p-12 md:p-20 text-center text-white space-y-8 shadow-2xl shadow-indigo-200">
                        <h2 className="text-4xl font-black tracking-tight">Siap mentransformasi Institusi Anda?</h2>
                        <Button className="bg-white text-indigo-600 hover:bg-slate-50 px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8 rounded-2xl font-black text-base sm:text-lg">
                            Hubungi Konsultan Kami
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function SolutionCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-indigo-100 transition-all group">
            <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                {icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-6 italic">
                {description}
            </p>
            <ArrowRight className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-2 transition-all" />
        </div>
    );
}
