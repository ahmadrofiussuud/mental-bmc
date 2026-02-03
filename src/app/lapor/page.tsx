"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
    ShieldAlert,
    ShieldCheck,
    Lock,
    PhoneCall,
    MessageSquareWarning,
    FileText,
    Send,
    CheckCircle2,
    ChevronDown,
    ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function LaporAmanPage() {
    const [step, setStep] = useState<'info' | 'form' | 'success'>('info');
    const [isSyncing, setIsSyncing] = useState(false);

    const handleReport = () => {
        setIsSyncing(true);
        setTimeout(() => {
            setIsSyncing(false);
            setStep('success');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header variant="lapor" />

            <main>
                <AnimatePresence mode="wait">
                    {step === 'info' && (
                        <motion.div
                            key="info"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            {/* 1. HERO SECTION: REVERSED SPLIT SECURITY focus */}
                            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rose-50/20 pt-20">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />

                                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">

                                    {/* LEFT SIDE: THE SHIELD (REVERSED) */}
                                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                                        <motion.div
                                            animate={{ y: [0, -20, 0] }}
                                            transition={{ duration: 6, repeat: Infinity }}
                                            className="relative group"
                                        >
                                            <div className="w-[500px] h-[600px] bg-white rounded-[100px] shadow-[0_120px_180px_-40px_rgba(225,29,72,0.2)] flex items-center justify-center p-20 ring-1 ring-rose-100 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />
                                                <ShieldAlert size={240} className="text-rose-600 relative z-10 group-hover:scale-110 transition-transform duration-700" />
                                            </div>

                                            {/* Floating Verification Badges */}
                                            <motion.div
                                                animate={{ x: [0, 20, 0] }}
                                                transition={{ duration: 6, repeat: Infinity }}
                                                className="absolute -top-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl border border-rose-50 flex items-center gap-4"
                                            >
                                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                                                    <ShieldCheck size={28} />
                                                </div>
                                                <p className="font-black text-slate-900 tracking-tight text-xl">Verified Secure</p>
                                            </motion.div>

                                            <motion.div
                                                animate={{ x: [0, -20, 0] }}
                                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                                className="absolute -bottom-10 -left-10 bg-slate-900 p-8 rounded-[40px] shadow-2xl border border-slate-800 flex items-center gap-4 text-white"
                                            >
                                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                                    <Lock size={24} />
                                                </div>
                                                <p className="font-black tracking-tight text-xl">E2E Encrypted</p>
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    {/* RIGHT SIDE: THE CALL TO ACTION */}
                                    <div className="space-y-12 order-1 lg:order-2">
                                        <div className="space-y-8">
                                            <Badge className="bg-rose-100 text-rose-700 px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.4em] border-2 border-rose-200 shadow-xl shadow-rose-500/10">
                                                Zero Tolerance Policy
                                            </Badge>
                                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-slate-900 tracking-[-0.07em] leading-[1.1]">
                                                Kesehatan <br />
                                                <span className="text-rose-600">Terjaga.</span>
                                            </h1>
                                            <p className="text-2xl text-slate-500 font-medium max-w-xl leading-relaxed">
                                                Lapor Aman adalah jalur merah untuk situasi darurat. <br className="hidden md:block" /> Anonimitas Anda adalah prioritas mutlak kami.
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center gap-8">
                                            <Button
                                                onClick={() => setStep('form')}
                                                className="bg-rose-600 hover:bg-rose-700 text-white px-16 py-12 rounded-[50px] font-black text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                                            >
                                                Mulai Laporan Aman
                                                <ArrowRight size={32} className="ml-4" />
                                            </Button>
                                            <div className="flex items-center gap-6 text-slate-400 group cursor-pointer hover:text-rose-600 transition-colors">
                                                <div className="w-16 h-16 rounded-[30px] bg-slate-50 flex items-center justify-center group-hover:bg-rose-50 transition-all">
                                                    <PhoneCall size={28} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-black text-xs uppercase tracking-[0.3em]">SOS HOTLINE</span>
                                                    <span className="font-bold text-lg text-slate-900 group-hover:text-rose-600">Call Now</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-12 pt-12 border-t border-slate-100">
                                            <div className="group">
                                                <p className="text-5xl font-black text-slate-900 tracking-tighter group-hover:scale-110 transition-transform">100%</p>
                                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mt-2">Anonymous</p>
                                            </div>
                                            <div className="w-px h-16 bg-slate-200" />
                                            <div className="group">
                                                <p className="text-5xl font-black text-slate-900 tracking-tighter group-hover:scale-110 transition-transform">AES-256</p>
                                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mt-2">Encrypted</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Pelajari Lebih Lanjut</span>
                                    <ChevronDown className="animate-bounce" />
                                </div>
                            </section>

                            <section className="py-40 px-6 md:px-12 bg-white">
                                <div className="max-w-7xl mx-auto space-y-32">
                                    <div className="max-w-3xl space-y-10">
                                        <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                            Privasi Anda <br />
                                            Adalah <span className="text-rose-600 italic">Senjata Terkuat.</span>
                                        </h2>
                                        <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                                            Kami membangun sistem ini dengan filosofi "Anonymity First". Tidak ada log IP, tidak ada data tracker, hanya kebenaran yang Anda laporkan.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        <SafetyCard icon={<ShieldCheck />} title="100% Anonim" text="Identitas Anda tersembunyi selamanya." />
                                        <SafetyCard icon={<Lock />} title="AES-256 Bit" text="Enkripsi standar militer paling aman." />
                                        <SafetyCard icon={<PhoneCall />} title="Direct SOS" text="Akses cepat ke tim krisis kampus." />
                                        <SafetyCard icon={<FileText />} title="Legal Aid" text="Bantuan hukum gratis bagi pelapor." />
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {step === 'form' && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="py-40 px-6"
                        >
                            <div className="max-w-4xl mx-auto bg-white rounded-[80px] border-4 border-slate-50 p-16 md:p-32 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] space-y-16">
                                <div className="space-y-6">
                                    <Badge className="bg-rose-50 text-rose-600 px-6 py-2 rounded-full font-black uppercase text-xs tracking-widest border-rose-100">
                                        Confidential Form
                                    </Badge>
                                    <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">Detail Laporan.</h2>
                                    <p className="text-xl text-slate-500 font-medium italic">Data di bawah ini akan dienkripsi sebelum dikirim ke dashboard ULT.</p>
                                </div>

                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <label className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-400 pl-6">Subjek Masalah</label>
                                        <Input className="py-10 px-10 rounded-[35px] bg-slate-50 border-none font-bold text-2xl placeholder:text-slate-200" placeholder="Apa yang terjadi?" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-400 pl-6">Kategori Konten</label>
                                        <select className="w-full py-8 px-10 rounded-[35px] bg-slate-50 border-none font-bold text-2xl outline-none appearance-none">
                                            <option>Perundungan (Bullying)</option>
                                            <option>Pelecehan Seksual</option>
                                            <option>Kekerasan Mental</option>
                                            <option>Situasi Krisis</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-400 pl-6">Deskripsi Kejadian</label>
                                        <textarea className="w-full bg-slate-50 border-none rounded-[40px] p-10 font-medium text-2xl min-h-[300px] outline-none placeholder:text-slate-200" placeholder="Ceritakan secara detail..." />
                                    </div>

                                    <Button
                                        onClick={handleReport}
                                        disabled={isSyncing}
                                        className="w-full py-12 rounded-[40px] bg-slate-900 text-white font-black text-2xl uppercase tracking-[0.2em] shadow-2xl hover:bg-rose-600 transition-all"
                                    >
                                        {isSyncing ? (
                                            <div className="flex items-center gap-4">
                                                <div className="w-6 h-6 border-4 border-rose-300 border-t-transparent rounded-full animate-spin" />
                                                Syncing to ULT...
                                            </div>
                                        ) : (
                                            "Kirim Laporan Sekarang"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="min-h-screen flex items-center justify-center px-6"
                        >
                            <div className="max-w-4xl w-full text-center space-y-12">
                                <div className="w-48 h-48 bg-emerald-500 rounded-[60px] shadow-2xl shadow-emerald-200 flex items-center justify-center text-white mx-auto">
                                    <CheckCircle2 size={100} />
                                </div>
                                <h2 className="text-7xl font-black text-slate-900 tracking-tighter">Laporan Terkirim.</h2>
                                <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                                    Laporan Anda telah diamankan. Id Anonim Anda adalah: <br />
                                    <span className="text-indigo-600 font-black text-4xl mt-4 inline-block">TX-820-ANON</span>
                                </p>
                                <Button onClick={() => setStep('info')} className="bg-slate-900 text-white px-16 py-10 rounded-3xl font-black text-xl uppercase tracking-widest h-auto">
                                    Kembali ke Beranda
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}

const SafetyCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div className="bg-white p-12 rounded-[50px] border-2 border-slate-50 shadow-xl shadow-slate-100 flex flex-col items-center text-center space-y-6 hover:scale-105 transition-all group">
        <div className="w-20 h-20 bg-rose-50 rounded-[30px] flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm">
            {icon}
        </div>
        <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
            <p className="text-sm text-slate-500 font-bold italic leading-relaxed">{text}</p>
        </div>
    </div>
);
