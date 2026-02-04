"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle2, Radio, Building2, AlertTriangle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ULTIntegration() {
    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <Badge className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-black uppercase text-sm tracking-[0.3em] border-none">
                        Institutional Protection
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">
                        ULT Seamless Integration
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto">
                        Sinkronisasi real-time dengan sistem pelaporan bullying/kekerasan. Layanan Terpadu Institusi memantau 24/7.
                    </p>
                </div>

                {/* Main Integration Card */}
                <div className="bg-white rounded-[50px] shadow-2xl shadow-slate-200/80 border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* LEFT: Visual/Illustration */}
                        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 md:p-16 flex items-center justify-center overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl" />

                            {/* Main Visual */}
                            <div className="relative z-10 w-full max-w-md">
                                {/* Mockup Device Frame */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-[30px] p-8 border border-white/20 shadow-2xl">
                                    {/* Device Header */}
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <Building2 className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-sm">Universitas Indonesia</p>
                                            <p className="text-white/60 text-xs font-bold">ULT Kampus</p>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="flex items-center gap-1.5 bg-emerald-500/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-400/50">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                                <span className="text-emerald-300 text-xs font-black">LIVE</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sync Status Items */}
                                    <div className="space-y-3">
                                        <SyncStatusItem
                                            icon={<Radio size={16} />}
                                            label="Real-time Monitoring"
                                            status="Active"
                                            color="emerald"
                                        />
                                        <SyncStatusItem
                                            icon={<Shield size={16} />}
                                            label="Early Warning System"
                                            status="Protected"
                                            color="blue"
                                        />
                                        <SyncStatusItem
                                            icon={<Clock size={16} />}
                                            label="Response Time"
                                            status="< 5 min"
                                            color="purple"
                                        />
                                    </div>

                                    {/* Last Sync Info */}
                                    <div className="mt-6 pt-4 border-t border-white/20">
                                        <p className="text-white/60 text-xs font-bold">Last synced: 2 minutes ago</p>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-emerald-500" size={24} />
                                        <div>
                                            <p className="text-xs font-black text-slate-900">Verified</p>
                                            <p className="text-[10px] font-bold text-slate-500">Integration</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <div className="space-y-8">
                                {/* Title */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                                        Perlindungan Penuh dari Kampus Anda
                                    </h3>
                                    <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                                        Sistem TenangIn terintegrasi langsung dengan Unit Layanan Terpadu (ULT) kampus untuk memastikan respons cepat terhadap kasus bullying, kekerasan, atau krisis mental health.
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4">
                                    <FeatureItem
                                        icon={<Radio className="text-blue-600" size={20} />}
                                        title="Sinkronisasi Real-time"
                                        description="Data sensitif langsung tersampaikan ke ULT tanpa delay"
                                    />
                                    <FeatureItem
                                        icon={<AlertTriangle className="text-amber-600" size={20} />}
                                        title="Early Warning System (EWS)"
                                        description="Deteksi dini untuk mitigasi risiko self-harm atau kekerasan"
                                    />
                                    <FeatureItem
                                        icon={<Shield className="text-emerald-600" size={20} />}
                                        title="Privacy Terjaga"
                                        description="End-to-end encrypted. Hanya ULT resmi yang dapat akses"
                                    />
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                                    <StatCard number="<5 min" label="Response Time" />
                                    <StatCard number="24/7" label="Monitoring" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Info Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 bg-blue-50 border border-blue-100 rounded-3xl p-8 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                                <Building2 className="text-white" size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-black text-slate-900">Partner Resmi</p>
                                <p className="text-xs font-bold text-slate-500">50+ Universitas di Indonesia</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-slate-200" />
                        <p className="text-sm font-medium text-slate-600 max-w-xl">
                            Terintegrasi dengan <span className="font-black text-blue-600">Satgas PPKS</span> dan <span className="font-black text-blue-600">ULT Kampus</span> untuk perlindungan maksimal mahasiswa
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Sub-components
function SyncStatusItem({ icon, label, status, color }: { icon: React.ReactNode, label: string, status: string, color: string }) {
    const colorClasses = {
        emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
        blue: "bg-blue-500/20 text-blue-300 border-blue-400/30",
        purple: "bg-purple-500/20 text-purple-300 border-purple-400/30"
    };

    return (
        <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorClasses[color as keyof typeof colorClasses]}`}>
                    {icon}
                </div>
                <span className="text-white text-sm font-bold">{label}</span>
            </div>
            <span className="text-white/80 text-xs font-black">{status}</span>
        </div>
    );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-black text-slate-900 text-sm mb-1">{title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function StatCard({ number, label }: { number: string, label: string }) {
    return (
        <div className="text-center">
            <p className="text-3xl font-black text-slate-900 mb-1">{number}</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
        </div>
    );
}
