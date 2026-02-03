"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ResilienceJourney } from "@/components/ResilienceJourney";
import { AvatarEvolution } from "@/components/AvatarEvolution";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Compass,
    TrendingUp,
    Trophy,
    Target,
    HeartPulse,
    Zap,
    ChevronDown,
    ArrowRight
} from "lucide-react";

export default function JourneyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header variant="landing" />

            <main>
                {/* 1. HERO SECTION: MAJESTIC CENTERED EVOLUTION */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/hero-bg-journey.png"
                            alt="Cinematic Background"
                            className="w-full h-full object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-20" />
                    </div>

                    {/* Background Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[160px] -z-10" />

                    <div className="max-w-5xl mx-auto px-6 md:px-12 w-full text-center space-y-16 relative z-30">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-center"
                            >
                                <Badge className="bg-indigo-500/20 text-indigo-300 px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.4em] border border-indigo-500/30 shadow-xl shadow-indigo-500/10 backdrop-blur-md">
                                    Resilience Journey
                                </Badge>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-[-0.07em] leading-[1.1] max-w-4xl mx-auto drop-shadow-2xl"
                            >
                                Evolusi <br />
                                <span className="text-indigo-400 italic">Diri Anda.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed"
                            >
                                Lihat bagaimana ketahanan mental Anda tumbuh. <br className="hidden md:block" /> Dari benih ketenangan menjadi bunga ketabahan yang kuat.
                            </motion.p>
                        </div>

                        {/* Avatar Monument - The Centerpiece */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative flex justify-center py-10"
                        >
                            <div className="w-[500px] h-[500px] bg-white/5 backdrop-blur-xl rounded-[100px] shadow-[0_120px_180px_-40px_rgba(79,70,229,0.2)] flex items-center justify-center p-16 ring-1 ring-white/10 relative group">
                                <AvatarEvolution level={4} />

                                {/* Floating Badges around Avatar */}
                                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -right-6 bg-emerald-500 text-white p-6 rounded-3xl shadow-2xl border-4 border-white/10 backdrop-blur-sm">
                                    <TrendingUp size={32} />
                                </motion.div>
                                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-3xl shadow-2xl border-4 border-white/10 backdrop-blur-sm">
                                    <Zap size={32} />
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8">
                            <div className="text-center group">
                                <p className="text-7xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform">LVL 4</p>
                                <p className="text-[12px] font-black uppercase tracking-[0.5em] text-white/40 mt-2">Current Stage</p>
                            </div>
                            <div className="hidden md:block w-px h-20 bg-white/10" />
                            <div className="text-center group">
                                <p className="text-7xl font-black text-indigo-400 tracking-tighter group-hover:scale-110 transition-transform">240</p>
                                <p className="text-[12px] font-black uppercase tracking-[0.5em] text-white/40 mt-2">Total XP Earned</p>
                            </div>
                        </div>

                        <Button className="bg-white hover:bg-slate-100 text-slate-900 px-16 py-12 rounded-[40px] font-black text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                            Cek Milestone Berikutnya
                            <ArrowRight size={28} className="ml-3 group-hover:translate-x-3 transition-transform" />
                        </Button>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Detail Progress</span>
                        <ChevronDown className="animate-bounce" />
                    </div>
                </section>

                {/* 2. PROGRESS DETAILS SECTION */}
                <section className="py-40 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <ResilienceJourney userXP={240} levelTitle="Mindful Traveler" levelNumber={4} />
                    </div>
                </section>

                {/* 3. MILESTONES ROADMAP */}
                <section className="py-40 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-7xl mx-auto space-y-32">
                        <div className="text-center space-y-6">
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Jejak Perubahan.</h2>
                            <p className="text-xl text-slate-500 font-medium italic">Milestone harian yang membentuk masa depan Anda.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <MilestoneCard
                                icon={<Zap className="text-amber-500" />}
                                title="Morning Serenity"
                                date="3 Feb 2026"
                                xp="+20"
                                desc="Menyelesaikan latihan pernapasan pertama hari ini."
                            />
                            <MilestoneCard
                                icon={<Target className="text-indigo-500" />}
                                title="Mindful Check-in"
                                date="2 Feb 2026"
                                xp="+50"
                                desc="Berhasil mengidentifikasi 3 pola pikir negatif."
                            />
                            <MilestoneCard
                                icon={<Trophy className="text-emerald-500" />}
                                title="Resilience Seed"
                                date="1 Feb 2026"
                                xp="+100"
                                desc="Resmi bergabung dalam perjalanan evolusi diri."
                            />
                        </div>
                    </div>
                </section>

                {/* 4. CALL TO ACTION */}
                <section className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-5xl mx-auto bg-slate-900 rounded-[60px] p-20 text-center space-y-10 text-white shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent pointer-events-none" />
                        <HeartPulse size={80} className="mx-auto text-indigo-400 opacity-50 mb-4" />
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Sudah Siap Melangkah <br /> Lebih Jauh?</h2>
                        <p className="text-xl text-indigo-200 font-medium max-w-xl mx-auto opacity-70">
                            Setiap Milestone kecil adalah kemenangan besar bagi kesehatan mental Anda. Teruslah tumbuh.
                        </p>
                        <Button className="bg-white text-slate-900 hover:bg-slate-100 px-16 py-10 rounded-3xl font-black text-2xl uppercase tracking-widest transition-all">
                            Mulai Latihan 🚀
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

const MilestoneCard = ({ icon, title, date, xp, desc }: { icon: React.ReactNode, title: string, date: string, xp: string, desc: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-12 rounded-[50px] border-2 border-slate-100 shadow-xl space-y-8"
    >
        <div className="flex justify-between items-start">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 shadow-sm">
                {icon}
            </div>
            <p className="text-3xl font-black text-indigo-600 tracking-tighter">{xp} <span className="text-xs text-slate-300">XP</span></p>
        </div>
        <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{date}</p>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);
