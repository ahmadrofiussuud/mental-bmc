"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { useRouter } from "next/navigation";
import { GeminiChat } from "@/components/GeminiChat";
import { ResilienceJourney } from "@/components/ResilienceJourney";
import { AvatarEvolution } from "@/components/AvatarEvolution";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Wallet,
    ShieldAlert,
    Sparkles,
    TrendingUp,
    ShieldCheck,
    Lock,
    BrainCircuit,
    Zap,
    MessageSquare,
    AlertTriangle,
    ArrowUpRight,
    Search,
    PenTool,
    ArrowRight,
    ChevronDown
} from "lucide-react";

export default function DashboardPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-600">
            <Header variant="landing" />

            <main>
                {/* 1. MASSIVE IMMERSIVE HERO SECTION */}
                <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-50/50 pt-24 sm:pt-32 pb-12 sm:pb-20">
                    {/* High-Impact Cinematic Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-slate-900/10 z-10" />
                        <img
                            src="/hero-bg.png"
                            alt="Cinematic Background"
                            className="w-full h-full object-cover scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-900 to-transparent z-20" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-30">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-12"
                        >
                            <div className="space-y-4 sm:space-y-6">
                                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-indigo-300 border border-white/10 shadow-xl shadow-indigo-500/5">
                                    <Sparkles size={16} className="animate-pulse" />
                                    Premium Academic Account
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-[-0.04em] leading-[1.1] drop-shadow-lg">
                                    Halo, <br />
                                    <span className="text-indigo-400">Mahasiswa.</span>
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-medium max-w-xl leading-relaxed">
                                    Selamat datang kembali di ruang aman Anda. Mari kita lanjutkan perjalanan menuju ketenangan hari ini.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <Button className="bg-white hover:bg-slate-100 text-slate-900 px-8 sm:px-10 md:px-12 py-6 sm:py-8 md:py-10 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg md:text-xl shadow-2xl shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 group">
                                    Mulai Jurnal Hari Ini
                                    <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => router.push('/wallet')}
                                    className="bg-transparent hover:bg-white/10 border-2 sm:border-4 border-white/20 text-white px-8 py-6 sm:px-10 sm:py-8 md:px-12 md:py-10 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg md:text-xl transition-all"
                                >
                                    Eksplorasi Fitur
                                </Button>
                            </div>

                            <div className="flex flex-row items-center gap-4 sm:gap-6 md:gap-10 pt-4 border-t border-white/10 overflow-x-auto">
                                <div className="space-y-1 shrink-0">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter">4 Hari</p>
                                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/40">Current Streak</p>
                                </div>
                                <div className="w-px h-10 sm:h-12 bg-white/10 shrink-0" />
                                <div className="space-y-1 shrink-0">
                                    <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-indigo-400 tracking-tight sm:tracking-tighter">Mindful Traveler</p>
                                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/40">Evolution Stage</p>
                                </div>
                                <div className="w-px h-10 sm:h-12 bg-white/10 shrink-0" />
                                <div className="space-y-1 shrink-0">
                                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-emerald-400 tracking-tighter">3 Sesi</p>
                                    <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/40">Free Quota</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: "backOut" }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative w-[500px] h-[500px]">
                                {/* Decorative Rings */}
                                <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow opacity-50" />
                                <div className="absolute inset-10 border border-white/5 rounded-full animate-reverse-spin-slow opacity-30" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[400px] h-[400px] bg-white/5 backdrop-blur-2xl rounded-[80px] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 p-8 overflow-hidden">
                                        <AvatarEvolution level={4} />
                                    </div>
                                </div>

                                {/* Floating Labels */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute top-10 left-0 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                            <TrendingUp size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Resilience</p>
                                            <p className="text-lg font-black text-slate-900">+12% Up</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll</span>
                        <ChevronDown className="animate-bounce" />
                    </div>
                </section>

                {/* 2. AI CO-PILOT SECTION - FULL WIDTH EXPERIENCE */}
                <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
                        <div className="max-w-3xl space-y-6">
                            <Badge className="bg-indigo-50 text-indigo-600 hover:bg-indigo-50 px-5 py-2 rounded-full font-black uppercase text-xs tracking-widest border-indigo-100">
                                AI Companion
                            </Badge>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                Teman Chat <br />
                                <span className="text-indigo-600 italic">Tanpa Menghakimi.</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                                Teknologi screening berbasis CBT yang memahami Anda secara mendalam. AI kami siap mendengarkan 24/7 dan memberikan ringkasan diagnostik untuk profesional jika Anda membutuhkannya.
                            </p>
                        </div>

                        <div className="bg-slate-900 rounded-3xl sm:rounded-[40px] md:rounded-[60px] p-3 sm:p-6 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                            <GeminiChat />
                        </div>
                    </div>
                </section>

                {/* 3. SMART JOURNALING SECTION - AIRY LAYOUT */}
                <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-slate-50">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="relative">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                className="bg-white p-16 rounded-[60px] border-2 border-slate-100 shadow-2xl space-y-12 relative z-10"
                            >
                                <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-indigo-200">
                                    <PenTool size={40} />
                                </div>
                                <div className="space-y-6">
                                    <p className="text-sm font-black text-indigo-500 uppercase tracking-widest">Recommended prompt</p>
                                    <p className="text-3xl font-black text-slate-900 leading-tight italic">
                                        "Tuliskan tiga hal kecil yang membuatmu tersenyum hari ini, meskipun harimu terasa melelahkan."
                                    </p>
                                </div>
                                <Button className="w-full py-8 sm:py-10 rounded-[30px] bg-slate-900 text-white font-black text-base sm:text-lg md:text-xl uppercase tracking-wide sm:tracking-widest hover:bg-black transition-all whitespace-nowrap">
                                    Tulis Sekarang ✍️
                                </Button>
                            </motion.div>
                            <div className="absolute -inset-10 bg-indigo-100/50 rounded-[80px] blur-3xl -z-10 rotate-3" />
                        </div>

                        <div className="space-y-10">
                            <Badge className="bg-white text-indigo-600 px-5 py-2 rounded-full font-black uppercase text-xs tracking-widest border border-indigo-100 shadow-sm">
                                Smart Journaling
                            </Badge>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                Refleksi <br />
                                yang <span className="text-indigo-600 underline underline-offset-8 decoration-indigo-200 decoration-wavy">Cerdas.</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                Jangan bingung harus menulis apa. AI TenangIn memberikan rekomendasi prompt jurnal harian yang disesuaikan dengan mood Anda saat ini.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-slate-200">
                                <div>
                                    <p className="text-4xl font-black text-slate-900 tracking-tighter">12</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Jurnal</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-indigo-600 tracking-tighter">85%</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mood Clarity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. WALLET & SUBSIDY SECTION */}
                <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto space-y-32">
                        <div className="text-center max-w-4xl mx-auto space-y-8">
                            <Badge className="bg-emerald-50 text-emerald-600 px-5 py-2 rounded-full font-black uppercase text-xs tracking-widest border border-emerald-100">
                                Student Care Plan
                            </Badge>
                            <h2 className="text-6xl md:text-[8rem] font-black text-slate-900 tracking-tighter leading-[0.85]">
                                Status <span className="text-emerald-600 outline-text">Keanggotaan</span> & Proteksi.
                            </h2>
                            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                                Anda terlindungi sepenuhnya. Akses layanan kesehatan mental premium tanpa memikirkan biaya, berkat dukungan Universitas Anda.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-slate-900 rounded-[40px] sm:rounded-[60px] p-6 sm:p-12 md:p-16 lg:p-20 text-white space-y-8 sm:space-y-12 md:space-y-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full -mr-48 -mt-48 blur-3xl group-hover:bg-indigo-500/30 transition-colors" />

                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-2 flex-1">
                                            <p className="text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-40">Active Coverage</p>
                                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter">University Pro</p>
                                            <p className="text-xs sm:text-sm md:text-base text-emerald-400 font-bold">Tercover Penuh oleh Universitas Indonesia</p>
                                        </div>
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-md shrink-0">
                                            <ShieldCheck size={32} className="text-emerald-400 sm:w-10 sm:h-10" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 pt-6 sm:pt-8 border-t border-white/10">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Badge className="bg-emerald-500 text-white font-black text-[10px] uppercase">Active Plan</Badge>
                                                <p className="text-xs font-black uppercase tracking-widest opacity-60">Status</p>
                                            </div>
                                            <p className="text-base sm:text-lg md:text-xl font-bold">Valid until Dec 2026</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <p className="text-xs font-black uppercase tracking-widest opacity-60">Sesi Tersedia</p>
                                            </div>
                                            <div className="flex items-end gap-2">
                                                <p className="text-3xl sm:text-4xl font-black">3</p>
                                                <p className="text-sm font-bold opacity-60 mb-2">/ 5 Sesi</p>
                                            </div>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-[60%]" />
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full py-8 sm:py-10 rounded-[25px] sm:rounded-[30px] bg-white text-slate-900 font-black text-base sm:text-lg md:text-xl uppercase tracking-normal sm:tracking-wide hover:bg-slate-100 transition-all shadow-2xl">
                                        Sesi Sekarang 🩺
                                    </Button>
                                </motion.div>
                            </div>

                            <div className="lg:col-span-5 space-y-12 pl-0 lg:pl-12">
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">Kelebihan Wallet Kami:</h3>
                                    <ul className="space-y-8">
                                        <li className="flex gap-4">
                                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                                <ShieldCheck size={18} />
                                            </div>
                                            <p className="font-bold text-slate-600">Terintegrasi langsung dengan sistem akademik kampus.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                                <Lock size={18} />
                                            </div>
                                            <p className="font-bold text-slate-600">Privasi Anda tetap terjaga, kampus hanya melihat statistik agregat.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                                <Sparkles size={18} />
                                            </div>
                                            <p className="font-bold text-slate-600">Dapatkan akses prioritas ke psikolog klinis terbaik.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. SAFETY & CRISIS SECTION (ULT SYNC) */}
                <section className="py-40 px-6 md:px-12 bg-rose-600 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
                        <div className="space-y-12">
                            <Badge className="bg-white/20 text-white px-5 py-2 rounded-full font-black uppercase text-xs tracking-widest backdrop-blur-md">
                                Lapor Aman & ULT Sync
                            </Badge>
                            <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
                                Keamanan <br /> Prioritas <br /> <span className="text-rose-200">Mutlak.</span>
                            </h2>
                            <p className="text-2xl text-rose-100 font-medium leading-relaxed max-w-xl">
                                Kami tersinkronisasi secara real-time dengan Unit Layanan Terpadu (ULT) Universitas Anda untuk perlindungan instan saat terjadi krisis.
                            </p>
                            <div className="flex gap-8 items-center">
                                <div className="text-center">
                                    <p className="text-5xl font-black text-white tracking-tighter">~3s</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-rose-200">Sync Time</p>
                                </div>
                                <div className="w-px h-12 bg-white/20" />
                                <div className="text-center">
                                    <p className="text-5xl font-black text-white tracking-tighter">24/7</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-rose-200">Availability</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[60px] p-16 text-slate-900 shadow-2xl space-y-10 group hover:scale-[1.02] transition-transform">
                            <div className="w-24 h-24 bg-rose-50 rounded-[35px] flex items-center justify-center text-rose-600">
                                <ShieldAlert size={48} />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter">Laporan Darurat Anonim</h4>
                                <p className="text-sm sm:text-base md:text-lg text-slate-500 font-bold leading-relaxed">
                                    Butuh bantuan mendesak? Kirim laporan anonim sekarang. Kami menjamin kerahasiaan identitas Anda secara total.
                                </p>
                            </div>
                            <Button className="w-full py-8 sm:py-10 md:py-12 rounded-[30px] sm:rounded-[35px] bg-rose-600 text-white font-black text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-wide sm:tracking-widest hover:bg-rose-700 transition-all shadow-2xl shadow-rose-200">
                                Kirim Laporan
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
