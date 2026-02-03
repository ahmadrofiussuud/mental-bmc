"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    CreditCard,
    History,
    ArrowUpRight,
    ChevronDown,
    Plus,
    Tag,
    Lock,
    ArrowRight,
    GraduationCap,
    HeartHandshake,
    CalendarCheck
} from "lucide-react";

export default function WalletPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header variant="landing" />

            <main>
                {/* 1. HERO SECTION: MEMBERSHIP STATUS */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/hero-bg-wallet.png"
                            alt="Membership Background"
                            className="w-full h-full object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-20" />
                    </div>

                    {/* Background Artistic Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none">
                        <h2 className="text-[20rem] font-black text-white/5 tracking-[-0.1em] opacity-50 uppercase">Protected.</h2>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-30">

                        {/* LEFT SIDE: TEXT CONTENT (COL-7) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-7 space-y-12 relative z-10"
                        >
                            <div className="space-y-8">
                                <Badge className="bg-blue-500/20 text-blue-300 px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.4em] border border-blue-500/30 backdrop-blur-md shadow-xl shadow-blue-500/10">
                                    Official Coverage
                                </Badge>
                                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-[-0.04em] leading-[1.1] drop-shadow-2xl">
                                    Status <br />
                                    <span className="text-blue-400">Terlindungi.</span>
                                </h1>
                                <p className="text-2xl text-white/70 font-medium max-w-xl leading-relaxed">
                                    Fokus pada pemulihan, bukan biaya. <br className="hidden md:block" />
                                    Kesehatan mental Anda dijamin penuh oleh Universitas.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-16 py-12 rounded-[40px] font-black text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                                    <CreditCard className="mr-3" size={28} /> Lihat Kartu Member
                                </Button>
                                <Button variant="outline" className="bg-transparent hover:bg-white/10 border-4 border-white/20 text-white px-16 py-12 rounded-[40px] font-black text-2xl transition-all">
                                    <Tag className="mr-3" size={28} /> Benefit Saya
                                </Button>
                            </div>

                            <div className="flex items-center gap-12 pt-12 border-t border-white/10">
                                <div className="group">
                                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Sesi Tersedia</p>
                                    <p className="text-5xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform">3 Sesi</p>
                                </div>
                                <div className="w-px h-16 bg-white/10" />
                                <div className="group">
                                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Status</p>
                                    <p className="text-5xl font-black text-emerald-400 tracking-tighter group-hover:scale-110 transition-transform">Active</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE: MEMBERSHIP CARD (COL-5) */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.8, x: 100 }}
                            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="lg:col-span-5 relative lg:-ml-20 perspective-[2000px]"
                        >
                            <div className="relative group cursor-pointer h-[450px]">
                                {/* The Card itself */}
                                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-3xl rounded-[50px] shadow-[0_120px_180px_-40px_rgba(37,99,235,0.3)] p-14 text-white flex flex-col justify-between overflow-hidden border border-white/10 transform-gpu transition-all duration-700 group-hover:rotate-y-6 group-hover:rotate-x-6 group-hover:scale-105">

                                    {/* Holographic/Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-emerald-500/20 opacity-60" />
                                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/40 rounded-full blur-[80px]" />

                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white/10 p-2 rounded-lg">
                                                    <GraduationCap size={24} className="text-white" />
                                                </div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">University Plan</p>
                                            </div>
                                            <p className="text-4xl font-black tracking-tighter leading-tight">Universitas <br /> Indonesia</p>
                                        </div>
                                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                                            <ShieldCheck size={32} className="text-emerald-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-6 relative z-10">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2">Sesi Gratis Tersedia</p>
                                            <div className="flex items-baseline gap-2">
                                                <p className="text-7xl font-black tracking-tighter">3</p>
                                                <span className="text-xl font-bold opacity-50">/ 5</span>
                                            </div>
                                        </div>
                                        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[60%] shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center relative z-10 pt-4">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Member ID</p>
                                            <p className="font-mono text-lg tracking-widest text-white/80">UI-2026-8829</p>
                                        </div>
                                        <Badge className="bg-emerald-500 text-white border-none px-4 py-1 font-black text-[10px]">ACTIVE</Badge>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Lihat Detail Coverage</span>
                        <ChevronDown className="animate-bounce" />
                    </div>
                </section>

                {/* 2. COVERAGE BENEFITS SECTION */}
                <section className="py-40 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto space-y-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                    Anda Dijamin <br />
                                    <span className="text-blue-600">Aman & Privat.</span>
                                </h2>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                    Sebagai mahasiswa aktif, Anda berhak mendapatkan layanan kesehatan mental terbaik tanpa biaya tambahan. Ini adalah komitmen kampus untuk kesejahteraan Anda.
                                </p>
                                <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 space-y-6">
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Penyedia Jaminan</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm p-2">
                                                <GraduationCap className="w-full h-full text-slate-900" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-black text-slate-900">Universitas Indonesia</p>
                                                <p className="text-sm font-bold text-slate-400 italic">Student Wellness Program 2026</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-emerald-500 text-white font-black py-2 px-4 rounded-full">ACTIVE</Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <InfoCard icon={<Lock className="text-emerald-500" />} title="100% Rahasia" desc="Kampus tidak akan mengetahui isi sesi curhat/konsultasi Anda." />
                                <InfoCard icon={<HeartHandshake className="text-rose-500" />} title="5 Sesi Gratis/Sem" desc="Jatah sesi per semester yang bisa digunakan kapan saja." />
                                <InfoCard icon={<ArrowUpRight className="text-blue-500" />} title="Prioritas Booking" desc="Dapatkan slot waktu eksklusif di jam sibuk." />
                                <InfoCard icon={<History className="text-slate-400" />} title="Riwayat Lengkap" desc="Pantau penggunaan kuota sesi Anda dengan mudah." />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. SESSION HISTORY SECTION */}
                <section className="py-40 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="flex justify-between items-end">
                            <div className="space-y-2">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Riwayat Penggunaan</h2>
                                <p className="text-slate-500 font-medium">Jejak sesi konsultasi yang telah Anda gunakan.</p>
                            </div>
                            <Button variant="ghost" className="text-xs font-black uppercase tracking-widest text-blue-600 hover:bg-white px-8">Lihat Semua</Button>
                        </div>

                        <div className="space-y-4">
                            <TransactionRow title="Sesi Konseling: Dr. Sarah Wijaya" type="Penggunaan Kuota" date="Hari Ini, 10:20" amount="- 1 Sesi" status="Selesai" />
                            <TransactionRow title="Reset Kuota Semester Genap" type="Pembaruan Sistem" date="1 Feb 2026" amount="+ 5 Sesi" status="Aktif" isPos />
                            <TransactionRow title="Sesi Konseling: Budi Santoso" type="Penggunaan Kuota" date="15 Jan 2026" amount="- 1 Sesi" status="Selesai" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
}

const InfoCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-lg shadow-slate-100 space-y-6 group hover:scale-105 transition-all">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TransactionRow = ({ title, type, date, amount, status, isPos = false }: { title: string, type: string, date: string, amount: string, status: string, isPos?: boolean }) => (
    <div className="bg-white p-8 rounded-[30px] border border-slate-100 flex items-center justify-between group hover:shadow-xl transition-all">
        <div className="flex items-center gap-6">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPos ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'}`}>
                {isPos ? <ArrowRight className="rotate-[-45deg]" size={20} /> : <CalendarCheck size={20} />}
            </div>
            <div>
                <p className="font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase text-sm tracking-tight">{title}</p>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{type} • {date}</p>
            </div>
        </div>
        <div className="text-right">
            <p className={`text-xl font-black ${isPos ? 'text-emerald-600' : 'text-slate-900'} tracking-tighter`}>{amount}</p>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500">{status}</p>
        </div>
    </div>
);
