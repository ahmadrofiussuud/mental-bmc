import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, School, Landmark } from "lucide-react";

export default function InstitutionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] sm:leading-[0.85]">
                            Dukungan <br /> Berbasis <br /><span className="text-indigo-600">Institusi.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed italic">
                            TenangIn bermitra dengan Universitas (MBKM), Fakultas (Satgas), dan Perusahaan untuk membangun lingkungan yang sehat secara emosional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <InstitutionCard
                            icon={<School size={48} />}
                            title="Universitas (Mitra MBKM)"
                            points={[
                                "Integrasi Magang Klinis Digital untuk Mahasiswa Psikologi",
                                "Legalitas Jam Terbang (Clinical Hours) yang Terverifikasi",
                                "Akses Peer-Counselor tersertifikasi untuk seluruh mahasiswa"
                            ]}
                        />
                        <InstitutionCard
                            icon={<Building2 size={48} />}
                            title="Fakultas & Satgas PPKS"
                            points={[
                                "Dashboard Monitoring Tren Mental Mahasiswa (Anonim)",
                                "Sinkronisasi Laporan Bullying/Kekerasan Real-time ke ULT",
                                "Early Warning System (EWS) untuk mitigasi risiko self-harm"
                            ]}
                        />
                        <InstitutionCard
                            icon={<Landmark size={48} />}
                            title="Perusahaan (Corporate Wellness)"
                            points={[
                                "Integrasi Asuransi/Subsidi Konseling (Mental Health Wallet)",
                                "AI Co-Pilot untuk efisiensi dukungan emosional karyawan 24/7",
                                "Laporan Agregat Produktivitas & Wellbeing Karyawan"
                            ]}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function InstitutionCard({ icon, title, points }: { icon: React.ReactNode, title: string, points: string[] }) {
    return (
        <Card className="rounded-[40px] border-none bg-slate-50 overflow-hidden group hover:bg-slate-900 hover:text-white transition-all duration-700">
            <CardContent className="p-12 space-y-8">
                <div className="text-indigo-600 group-hover:text-indigo-400 group-hover:scale-125 transition-all duration-700 origin-left">
                    {icon}
                </div>
                <h3 className="text-4xl font-black tracking-tight">{title}</h3>
                <ul className="space-y-4">
                    {points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium opacity-70">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                            {p}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
