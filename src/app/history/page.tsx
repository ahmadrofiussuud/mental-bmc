"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Clock,
    Search,
    Calendar,
    Filter,
    MessageSquare,
    FileText,
    ChevronDown,
    ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header variant="history" />

            <main>
                {/* 1. HERO SECTION: MINIMALIST STACK ARCHIVE */}
                <section className="relative min-h-[70vh] flex flex-col items-center justify-start overflow-hidden bg-slate-50/50 pt-32 pb-20">
                    <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
                    <div className="absolute inset-y-0 left-[10%] w-px bg-slate-100 hidden lg:block" />
                    <div className="absolute inset-y-0 right-[10%] w-px bg-slate-100 hidden lg:block" />

                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-[0.05]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-full blur-[140px] -z-10" />

                    <div className="max-w-5xl mx-auto px-6 md:px-12 w-full text-center space-y-16 relative z-10">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-center"
                            >
                                <Badge className="bg-white text-slate-500 px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.5em] border-2 border-slate-100 shadow-xl shadow-slate-200/20">
                                    Personal Archive
                                </Badge>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[11rem] font-black text-slate-900 tracking-[-0.06em] sm:tracking-[-0.08em] leading-[0.9] sm:leading-[0.85]"
                            >
                                Arsip <br />
                                <span className="text-indigo-600 italic">Refleksi.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
                            >
                                Setiap jejak langkah, setiap momen ketenangan. <br className="hidden md:block" /> Tersimpan rapi dalam memori digital Anda.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-3xl mx-auto relative group"
                        >
                            <Search className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={20} />
                            <Input
                                className="w-full pl-14 sm:pl-24 pr-6 sm:pr-12 py-6 sm:py-10 md:py-12 rounded-[30px] sm:rounded-[50px] border-2 sm:border-4 border-white bg-white/70 backdrop-blur-xl font-bold text-base sm:text-lg md:text-2xl outline-none focus:ring-4 focus:ring-indigo-100 transition-all shadow-2xl shadow-indigo-500/5 placeholder:text-slate-200"
                                placeholder="Cari memori atau jurnal yang ingin Anda ulas..."
                            />
                        </motion.div>
                    </div>

                    <div className="mt-auto pb-10 flex flex-col items-center gap-2 opacity-20 group cursor-pointer hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Gulir ke Timeline</span>
                        <ChevronDown className="animate-bounce" />
                    </div>
                </section>

                {/* 2. ACTIVITY STREAM SECTION */}
                <section className="py-40 px-6 md:px-12 bg-white relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-slate-100 to-transparent" />

                    <div className="max-w-5xl mx-auto space-y-32">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b-2 border-slate-50 pb-16">
                            <div className="text-center md:text-left space-y-4">
                                <h2 className="text-6xl font-black text-slate-900 tracking-tight">Timeline Aktivitas</h2>
                                <p className="text-xl text-slate-400 font-medium italic">Penyimpanan aman untuk momen pertumbuhan Anda.</p>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" className="rounded-2xl border-2 py-8 px-10 font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                                    <Calendar size={18} className="mr-3" /> Filter
                                </Button>
                                <Button variant="outline" className="rounded-2xl border-2 py-8 px-10 font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                                    <Filter size={18} className="mr-3" /> Semua
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-16">
                            <HistoryGroup date="Februari 2026" />
                            <HistoryItem
                                icon={<FileText className="text-indigo-600" />}
                                title="Jurnal: Menemukan Kedamaian di Tengah Ujian"
                                type="Journal"
                                time="Today, 08:30 AM"
                            />
                            <HistoryItem
                                icon={<MessageSquare className="text-emerald-600" />}
                                title="Sesi Chat: Overcoming Academic Stress"
                                type="Chat Session"
                                time="Yesterday, 04:15 PM"
                            />
                            <HistoryGroup date="Januari 2026" />
                            <HistoryItem
                                icon={<FileText className="text-indigo-600" />}
                                title="Jurnal: Resolusi Ketenangan 2026"
                                type="Journal"
                                time="Jan 1, 2026"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

const HistoryGroup = ({ date }: { date: string }) => (
    <div className="relative flex items-center gap-10 py-8">
        <h3 className="text-2xl font-black text-slate-300 uppercase tracking-[0.3em] whitespace-nowrap">{date}</h3>
        <div className="w-full h-1 bg-slate-50" />
    </div>
);

const HistoryItem = ({ icon, title, type, time }: { icon: React.ReactNode, title: string, type: string, time: string }) => (
    <motion.div
        whileHover={{ x: 20 }}
        className="group flex items-center justify-between p-10 rounded-[40px] border-2 border-slate-50 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all cursor-pointer"
    >
        <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-800 shadow-sm group-hover:bg-white group-hover:shadow-xl transition-all">
                {icon}
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{type} • {time}</p>
                <h4 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h4>
            </div>
        </div>
        <Button variant="ghost" className="w-16 h-16 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <ArrowRight size={32} />
        </Button>
    </motion.div>
);
