import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ShieldCheck, Lock, EyeOff, CheckCircle, Smartphone } from "lucide-react";

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6 space-y-24">
                    <div className="text-center space-y-6">
                        <div className="inline-block bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
                            <p className="text-[10px] font-black uppercase text-indigo-600 tracking-widest flex items-center gap-2">
                                <ShieldCheck size={14} /> Enterprise-Grade Security
                            </p>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                            Keamanan Anda adalah <br /><span className="text-indigo-600">Prioritas Mutlak.</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        <SecurityFeature
                            icon={<Lock size={32} />}
                            title="End-to-End Encryption"
                            description="Setiap jurnal dan percakapan dienkripsi menggunakan standar AES-256 tingkat militer sebelum disimpan di server kami."
                        />
                        <SecurityFeature
                            icon={<EyeOff size={32} />}
                            title="Total Anonymity"
                            description="Layanan 'Lapor Aman' menggunakan enkripsi asimetris yang memastikan identitas Anda tidak pernah terungkap, bahkan kepada tim kami."
                        />
                        <SecurityFeature
                            icon={<CheckCircle size={32} />}
                            title="GDPR & HIPAA Compliance"
                            description="Kami mematuhi standar privasi data internasional untuk memberikan ketenangan pikiran bagi institusi dan individu."
                        />
                        <SecurityFeature
                            icon={<Smartphone size={32} />}
                            title="Biometric Access"
                            description="Dukungan untuk FaceID dan TouchID untuk memastikan akses aplikasi hanya oleh Anda."
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function SecurityFeature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-white p-12 rounded-[40px] shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-8 items-start hover:scale-[1.02] transition-transform duration-500">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-[24px] flex items-center justify-center shrink-0 shadow-lg shadow-slate-200">
                {icon}
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
