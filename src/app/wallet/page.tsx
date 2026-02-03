"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Wallet,
    ShieldCheck,
    CreditCard,
    History,
    ArrowUpRight,
    ChevronDown,
    Plus,
    Tag,
    Lock,
    ArrowRight
} from "lucide-react";

export default function WalletPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header variant="wallet" />

            <main>
                {/* 1. HERO SECTION: FLOATING OVERLAP WELLNESS */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-50/20 pt-20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-fabrics.png')] opacity-10" />

                    {/* Background Artistic Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none">
                        <h2 className="text-[20rem] font-black text-emerald-100/50 tracking-[-0.1em] opacity-50 uppercase">Balance.</h2>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

                        {/* LEFT SIDE: THE TEXT (COL-7) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-7 space-y-12 relative z-10"
                        >
                            <div className="space-y-8">
                                <Badge className="bg-emerald-100 text-emerald-700 px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.4em] border-2 border-emerald-200 shadow-xl shadow-emerald-500/10">
                                    Financial Wellness
                                </Badge>
                                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-slate-900 tracking-[-0.04em] leading-[1.1]">
                                    Wealth of <br />
                                    <span className="text-emerald-600">Wellness.</span>
                                </h1>
                                <p className="text-2xl text-slate-500 font-medium max-w-xl leading-relaxed">
                                    Investasi terbaik adalah pada diri Anda sendiri. Kelola subsidi, asuransi, dan saldo sesi Anda dalam satu tempat yang aman.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-16 py-12 rounded-[40px] font-black text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                                    <Plus className="mr-3" size={28} /> Top Up Saldo
                                </Button>
                                <Button variant="outline" className="border-4 border-slate-100 hover:bg-slate-50 px-16 py-12 rounded-[40px] font-black text-2xl transition-all">
                                    <Tag className="mr-3" size={28} /> Pakai Voucher
                                </Button>
                            </div>

                            <div className="flex items-center gap-12 pt-12 border-t border-slate-100">
                                <div className="group">
                                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Total Savings</p>
                                    <p className="text-5xl font-black text-slate-900 tracking-tighter group-hover:scale-110 transition-transform">Rp 12,4jt</p>
                                </div>
                                <div className="w-px h-16 bg-slate-200" />
                                <div className="group">
                                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Active Subsidy</p>
                                    <p className="text-5xl font-black text-emerald-600 tracking-tighter group-hover:scale-110 transition-transform">85%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE: THE OVERLAPPING CARD (COL-5 + Offset) */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.8, x: 100 }}
                            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="lg:col-span-5 relative lg:-ml-20 perspective-[2000px]"
                        >
                            <div className="relative group cursor-pointer h-[400px]">
                                {/* The Card itself */}
                                <div className="absolute inset-0 bg-slate-900 rounded-[50px] shadow-[0_120px_180px_-40px_rgba(0,0,0,0.5)] p-14 text-white flex flex-col justify-between overflow-hidden border border-white/10 transform-gpu transition-all duration-700 group-hover:rotate-y-6 group-hover:rotate-x-12 group-hover:scale-105">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-40" />

                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <ShieldCheck size={20} className="text-emerald-400" />
                                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Verified Identity</p>
                                            </div>
                                            <p className="text-7xl font-black tracking-tighter">Rp 2.500k</p>
                                        </div>
                                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center backdrop-blur-md">
                                            <Wallet size={40} className="text-white/30" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-end relative z-10">
                                        <div className="space-y-3">
                                            <p className="font-mono text-lg tracking-[0.4em] text-white/30">**** **** **** 7820</p>
                                            <div className="flex items-center gap-4">
                                                <Badge className="bg-emerald-500/20 text-emerald-400 border-none px-4 py-1 font-black text-[10px]">PREMIUM</Badge>
                                                <p className="font-black text-xl uppercase tracking-widest">USER STUDENT</p>
                                            </div>
                                        </div>
                                        <div className="w-20 h-14 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-xl">
                                            <CreditCard size={32} className="text-white/40" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Accessory - Lock */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -top-8 -left-8 w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white shadow-2xl border-4 border-white"
                                >
                                    <Lock size={32} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Transaction Flow</span>
                        <ChevronDown className="animate-bounce" />
                    </div>
                </section>

                {/* 2. SUBSIDY & B2B INFO SECTION */}
                <section className="py-40 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto space-y-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                    Akses Adil <br />
                                    Harapan <span className="text-emerald-600">Nyata.</span>
                                </h2>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                    TenangIn bekerja sama dengan instansi pendidikan dan perusahaan untuk memberikan subsidi biaya konsultasi hingga 90%, memastikan tidak ada penghalang biaya bagi kesehatan mental Anda.
                                </p>
                                <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 space-y-6">
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Your Current Sponsoship</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                                <img src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0b/Logo_Universitas_Indonesia.svg/1200px-Logo_Universitas_Indonesia.svg.png" className="w-10 h-10 object-contain" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-black text-slate-900">Universitas Indonesia</p>
                                                <p className="text-sm font-bold text-slate-400 italic">Institutional Mental Health Subsidy (Plan A)</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-emerald-500 text-white font-black py-2 px-4 rounded-full">ACTIVE</Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <InfoCard icon={<Lock className="text-slate-400" />} title="Private Billing" desc="Rincian transaksi tidak akan dibagikan ke pihak instansi." />
                                <InfoCard icon={<Plus className="text-emerald-500" />} title="Direct Top-Up" desc="Dukung saldo Anda secara mandiri kapan saja." />
                                <InfoCard icon={<ArrowUpRight className="text-indigo-500" />} title="Referral Credit" desc="Dapatkan saldo tambahan setiap referensi teman." />
                                <InfoCard icon={<History className="text-slate-400" />} title="Full Archive" desc="Akses riwayat pembayaran 24/7." />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. TRANSACTION HISTORY SECTION */}
                <section className="py-40 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="flex justify-between items-end">
                            <div className="space-y-2">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Riwayat Transaksi</h2>
                                <p className="text-slate-500 font-medium">Jejak investasi pada pertumbuhan diri Anda.</p>
                            </div>
                            <Button variant="ghost" className="text-xs font-black uppercase tracking-widest text-indigo-600 hover:bg-white px-8">View All Records</Button>
                        </div>

                        <div className="space-y-4">
                            <TransactionRow title="Sesi Konseling #782" type="Payment" date="Today, 10:20" amount="- Rp 150.000" status="Success" />
                            <TransactionRow title="Sponsorship UI Monthly" type="Subsidy" date="Yesterday" amount="+ Rp 1.000.000" status="Success" isPos />
                            <TransactionRow title="Voucher Redeem: NEWYEAR2026" type="Voucher" date="1 Jan 2026" amount="+ Rp 50.000" status="Success" isPos />
                            <TransactionRow title="Personal Top-Up" type="Deposit" date="28 Dec 2025" amount="+ Rp 500.000" status="Success" isPos />
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
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isPos ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {isPos ? <ArrowRight className="rotate-[-45deg]" size={20} /> : <ArrowRight className="rotate-[135deg]" size={20} />}
            </div>
            <div>
                <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase text-sm tracking-tight">{title}</p>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{type} • {date}</p>
            </div>
        </div>
        <div className="text-right">
            <p className={`text-xl font-black ${isPos ? 'text-emerald-600' : 'text-slate-900'} tracking-tighter`}>{amount}</p>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500">{status}</p>
        </div>
    </div>
);
