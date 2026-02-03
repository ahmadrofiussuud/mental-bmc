"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import {
    User,
    Bell,
    Shield,
    Settings as SettingsIcon,
    Moon,
    Globe,
    Lock,
    ExternalLink,
    ChevronRight,
    LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header variant="landing" />

            <main>
                {/* 1. HERO SECTION: COMMAND CENTER */}
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/hero-bg.png"
                            alt="Cinematic Background"
                            className="w-full h-full object-cover scale-105 opacity-80"
                        />
                        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-20" />
                    </div>

                    <div className="absolute inset-x-0 top-0 h-px bg-white/10 z-20" />
                    <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-indigo-600/30 rounded-full blur-[160px] z-10" />

                    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-30">
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <Badge className="bg-white/10 text-indigo-300 border-indigo-500/30 px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.4em] backdrop-blur-md">
                                    Personalized Space
                                </Badge>
                                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.04em] leading-[1.1] drop-shadow-2xl text-white">
                                    Kontrol <br />
                                    <span className="text-indigo-400 italic">Privat Anda.</span>
                                </h1>
                                <p className="text-2xl text-slate-300 font-medium max-w-xl leading-relaxed">
                                    Atur cara Anda berinteraksi dengan TenangIn. <br className="hidden md:block" /> Privasi, notifikasi, dan pengalaman visual.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex justify-center lg:justify-end">
                            <div className="w-[450px] h-[450px] bg-white/5 rounded-[80px] border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl relative">
                                <SettingsIcon size={180} className="text-white opacity-10 animate-spin-slow" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-indigo-600 rounded-[35px] flex items-center justify-center shadow-2xl shadow-indigo-500/50">
                                        <User size={60} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SETTINGS MODULES SECTION */}
                <section className="py-40 px-6 md:px-12 bg-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-4 space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Konfigurasi</h2>
                                <p className="text-lg text-slate-400 font-medium italic">Personalisasi ekosistem TenangIn.</p>
                            </div>
                            <nav className="space-y-4">
                                <SettingsNavLink icon={<User />} label="Profil Akun" active />
                                <SettingsNavLink icon={<Bell />} label="Notifikasi" />
                                <SettingsNavLink icon={<Shield />} label="Keamanan & Privasi" />
                                <SettingsNavLink icon={<Moon />} label="Tampilan (Theme)" />
                                <SettingsNavLink icon={<Globe />} label="Bahasa & Regional" />
                            </nav>
                            <div className="pt-10 border-t border-slate-100">
                                <Button variant="ghost" className="w-full justify-start py-8 px-6 rounded-2xl text-rose-600 hover:bg-rose-50 font-black text-xl gap-4">
                                    <LogOut /> Keluar Sesi
                                </Button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8 space-y-16">
                            <div className="bg-slate-50 rounded-[60px] p-12 md:p-20 space-y-12">
                                <div className="space-y-8">
                                    <h3 className="text-4xl font-black text-slate-900 tracking-tight">Detail Profil</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <SettingsField label="Nama Lengkap" value="Mahasiswa TenangIn" />
                                        <SettingsField label="Email Kampus" value="mahasiswa@ui.ac.id" />
                                        <SettingsField label="Student ID" value="2006123456" />
                                        <SettingsField label="Institusi" value="Universitas Indonesia" />
                                    </div>
                                </div>

                                <div className="space-y-8 pt-12 border-t border-slate-200">
                                    <h3 className="text-4xl font-black text-slate-900 tracking-tight">Privasi Data</h3>
                                    <div className="space-y-6">
                                        <SettingsToggle title="Sembunyikan Riwayat Chat" desc="Hanya Anda yang dapat melihat arsip percakapan." active />
                                        <SettingsToggle title="Mode Anonim Lapor Aman" desc="Selalu gunakan enkripsi anonim saat mengirim laporan." active />
                                    </div>
                                </div>

                                <Button className="w-full py-10 rounded-[30px] bg-slate-900 text-white font-black text-xl uppercase tracking-widest hover:bg-black transition-all shadow-2xl">
                                    Simpan Perubahan
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

const SettingsNavLink = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <div className={`flex items-center justify-between p-8 rounded-[30px] transition-all cursor-pointer ${active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'bg-white border-2 border-slate-50 text-slate-600 hover:border-indigo-100 hover:bg-indigo-50/20'}`}>
        <div className="flex items-center gap-6">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${active ? 'bg-white/20' : 'bg-slate-100'}`}>
                {icon}
            </div>
            <span className="text-xl font-black tracking-tight">{label}</span>
        </div>
        <ChevronRight size={24} className={active ? 'opacity-100' : 'opacity-20'} />
    </div>
);

const SettingsField = ({ label, value }: { label: string, value: string }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 ml-4">{label}</label>
        <div className="bg-white p-8 rounded-[30px] border-2 border-slate-100 font-bold text-xl text-slate-900 shadow-sm">
            {value}
        </div>
    </div>
);

const SettingsToggle = ({ title, desc, active }: { title: string, desc: string, active: boolean }) => (
    <div className="flex items-center justify-between p-8 bg-white rounded-[35px] border-2 border-slate-100 shadow-sm">
        <div className="space-y-1">
            <p className="text-xl font-black text-slate-900 tracking-tight">{title}</p>
            <p className="text-sm text-slate-400 font-medium italic">{desc}</p>
        </div>
        <div className={`w-16 h-8 rounded-full p-1 transition-colors ${active ? 'bg-indigo-600' : 'bg-slate-200'}`}>
            <div className={`w-6 h-6 bg-white rounded-full transition-transform ${active ? 'translate-x-8' : 'translate-x-0'}`} />
        </div>
    </div>
);
