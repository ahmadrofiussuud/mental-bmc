"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Calendar, ShieldCheck, ArrowRight, MessageSquare, Star, Clock, Video } from "lucide-react";
import Image from "next/image";

export default function ConsultationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header variant="consultation" />

            <main>
                {/* 1. HERO SECTION: PROFESSIONAL & TRUST */}
                <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/consultation-bg.png"
                            alt="Professional Consultation"
                            className="w-full h-full object-cover scale-105 opacity-90"
                        />
                        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-20" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-30">
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <Badge className="bg-blue-500/20 text-blue-300 px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.4em] border border-blue-500/30 backdrop-blur-md shadow-xl shadow-blue-500/10">
                                    Licensed Professionals
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-[-0.03em] sm:tracking-[-0.04em] leading-[1.15] sm:leading-[1.1] drop-shadow-2xl">
                                    Bicara dengan <br />
                                    <span className="text-blue-400 italic">Ahli.</span>
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium max-w-xl leading-relaxed">
                                    Terkadang, langkah paling berani adalah meminta bantuan. <br className="hidden md:block" />
                                    Terhubung dengan psikolog klinis berlisensi untuk sesi terapi yang aman, rahasia, dan empatik.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-6"
                            >
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 sm:px-10 sm:py-8 md:px-12 md:py-10 rounded-[25px] sm:rounded-[30px] font-black text-base sm:text-lg md:text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                                    Jadwalkan Sesi
                                    <Calendar className="ml-2 sm:ml-3 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                                <div className="flex items-center gap-4 text-white/60 pl-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                                                IMG
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm font-bold">
                                        <p className="text-white">12+ Psikolog</p>
                                        <p>Online Sekarang</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Feature Cards or Abstract Visual */}
                        <div className="relative hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="relative z-10 grid grid-cols-2 gap-6"
                            >
                                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 space-y-4 hover:bg-white/10 transition-colors">
                                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white">100% Rahasia</h3>
                                    <p className="text-slate-400 font-medium text-sm">Privasi Anda dilindungi oleh kode etik psikologi dan enkripsi end-to-end.</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 space-y-4 hover:bg-white/10 transition-colors mt-12">
                                    <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                                        <Video size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white">Video Call HD</h3>
                                    <p className="text-slate-400 font-medium text-sm">Platform telekonsultasi stabil yang dirancang untuk kenyamanan sesi terapi.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. PSYCHOLOGIST DIRECTORY */}
                <section className="py-20 px-6 md:px-12 bg-white" id="directory">
                    <div className="max-w-7xl mx-auto space-y-20">
                        <div className="text-center max-w-3xl mx-auto space-y-6">
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Pilih Mitra <span className="text-blue-600">Terbaik.</span></h2>
                            <p className="text-xl text-slate-500 font-medium">Kami telah mengurasi psikolog klinis dengan pengalaman minimal 5 tahun dan spesialisasi beragam untuk kebutuhan unik Anda.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Psych Card 1 */}
                            <PsychologistCard
                                image="/psychologist-sarah.png"
                                name="Dra. Sarah Wijaya, M.Psi"
                                status="Online"
                                speciality="Anxiety & Trauma"
                                experience="8 Tahun"
                                rating="4.9"
                                price="Rp 350k"
                            />
                            {/* Psych Card 2 */}
                            <PsychologistCard
                                image="/psychologist-budi.png"
                                name="Budi Santoso, S.Psi, M.Psi"
                                status="Offline"
                                speciality="Depression & Burnout"
                                experience="12 Tahun"
                                rating="5.0"
                                price="Rp 450k"
                            />
                            {/* Psych Card 3 */}
                            <PsychologistCard
                                image="/psychologist-amanda.png"
                                name="Amanda Putri, M.Psi"
                                status="Available Today"
                                speciality="Relationship & Family"
                                experience="6 Tahun"
                                rating="4.8"
                                price="Rp 300k"
                            />
                        </div>

                        <div className="text-center">
                            <Button variant="outline" className="border-2 border-slate-200 text-slate-600 px-10 py-6 rounded-2xl font-black text-lg hover:border-blue-500 hover:text-blue-600 transition-all">
                                Lihat Semua Psikolog
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 3. HOW IT WORKS */}
                <section className="py-20 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-slate-900 rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -mr-32 -mt-32" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                                <div className="space-y-10">
                                    <h2 className="text-5xl font-black tracking-tighter leading-tight">Langkah Mudah <br />Memulai Sesi.</h2>
                                    <div className="space-y-8">
                                        <StepItem number="01" title="Pilih Psikolog" desc="Telusuri profil dan pilih ahli yang sesuai dengan preferensi Anda." />
                                        <StepItem number="02" title="Booking Jadwal" desc="Pilih slot waktu yang tersedia. Pembayaran otomatis via Wallet." />
                                        <StepItem number="03" title="Mulai Sesi" desc="Masuk ke 'Ruang Terapi' tepat waktu. Aman dan privat." />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-lg p-10 rounded-[50px] border border-white/10 max-w-md w-full text-center space-y-6">
                                        <div className="w-20 h-20 bg-emerald-500 rounded-3xl mx-auto flex items-center justify-center shadow-xl shadow-emerald-500/30">
                                            <Clock size={40} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-slate-300">Durasi Sesi</p>
                                            <p className="text-4xl font-black">60 Menit</p>
                                        </div>
                                        <p className="text-sm text-slate-400">Cukup waktu untuk didengar, dipahami, dan menemukan solusi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}

function PsychologistCard({ image, name, status, speciality, experience, rating, price }: { image: string, name: string, status: string, speciality: string, experience: string, rating: string, price: string }) {
    return (
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 hover:border-blue-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-start mb-8">
                <div className="w-20 h-20 bg-slate-100 rounded-[24px] overflow-hidden relative">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <Badge className={`${status === 'Online' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'} border-none px-3 py-1`}>
                    {status}
                </Badge>
            </div>

            <div className="space-y-4 mb-8">
                <div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{name}</h3>
                    <p className="text-sm font-bold text-blue-500 mt-1">{speciality}</p>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-lg">
                        <Clock size={14} /> {experience}
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-lg">
                        <Star size={14} fill="currentColor" /> {rating}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Per Sesi</p>
                    <p className="text-lg font-black text-slate-900">{price}</p>
                </div>
                <Button className="rounded-xl bg-slate-900 text-white font-bold text-sm px-6 hover:bg-blue-600 transition-colors">
                    Book
                </Button>
            </div>
        </div>
    );
}

function StepItem({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6 items-start">
            <div className="text-3xl font-black text-blue-500 opacity-50">{number}</div>
            <div className="space-y-2">
                <h4 className="text-xl font-black">{title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed max-w-sm">{desc}</p>
            </div>
        </div>
    );
}
