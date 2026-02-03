"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { GeminiChat } from "@/components/GeminiChat";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BrainCircuit,
  HeartHandshake,
  Lock,
  Globe,
  Award,
  Wallet
} from "lucide-react";
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-600">
      <Header variant="landing" />

      <main>
        {/* 1. CINEMATIC HERO: THE STORY OF PEACE */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 sm:py-0">
          {/* Cinematic Background Layer */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900/40 z-10" />
            <img
              src="/hero-bg.png"
              alt="Cinematic Background"
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-20" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-30 text-center lg:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="inline-flex items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-white shadow-2xl animate-fade-in">
                    <Sparkles size={18} className="animate-pulse text-indigo-300" />
                    The Future of Mental Peace
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-white tracking-[-0.04em] leading-[1.1] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    Mulai <br />
                    <span className="text-white/40 italic">Ketangguhan.</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-medium max-w-xl leading-relaxed">
                    Personalized AI-CBT Companion & Mental Identity Monitoring. <br className="hidden md:block" />
                    Membangun ketenangan dalam setiap langkah digital Anda.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start">
                  <Button className="bg-white hover:bg-slate-100 text-slate-900 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-12 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] font-black text-base sm:text-lg lg:text-xl xl:text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                    Mulai Sesi Gratis
                    <ArrowRight className="ml-2 sm:ml-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:translate-x-4 transition-transform text-indigo-600" />
                  </Button>
                  <Button variant="outline" className="border-2 sm:border-4 border-white/20 text-white hover:bg-white/10 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-12 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] font-black text-base sm:text-lg lg:text-xl xl:text-2xl transition-all">
                    Lihat Demo
                  </Button>
                </div>

                {/* Social Proof Cluster */}
                <div className="flex items-center gap-6 justify-center lg:justify-start animate-fade-in delay-500">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`}
                          alt="Student Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-white text-xs font-black">
                      2k+
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-black text-xl tracking-tighter">2,412 Mahasiswa Aktif</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Mempercayai TenangIn</p>
                  </div>
                </div>

                <div className="flex items-center gap-12 pt-12 border-t border-white/10 justify-center lg:justify-start">
                  <TrustBadge icon={<ShieldCheck size={24} className="text-indigo-300" />} label="Security ISO 27001" />
                  <div className="w-px h-12 bg-white/10" />
                  <TrustBadge icon={<Lock size={24} className="text-indigo-300" />} label="End-to-End Encryption" />
                </div>
              </div>

              {/* Floating Stat Card - Hidden on mobile/tablet to prevent overlap */}
              <div className="hidden xl:flex justify-end">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[60px] shadow-2xl space-y-8 max-w-sm rotate-3 hover:rotate-0 transition-all duration-700 group cursor-default">
                  <div className="w-20 h-20 bg-indigo-500 rounded-[30px] flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                    <BrainCircuit size={40} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-6xl font-black text-white tracking-tighter">98.4%</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Risk Detection Accuracy</p>
                  </div>
                  <p className="text-white/60 font-medium leading-relaxed">
                    Algoritma kami menganalisis pola ketenangan Anda secara real-time untuk pencegahan dini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BRAND MONUMENT: THE PEACE ENGINE */}
        <section className="py-40 px-6 md:px-12 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-indigo-50/30 rounded-full blur-[160px] -z-10" />

          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-32">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600">The High-Status Ecosystem</h2>
              <h3 className="text-6xl md:text-8xl font-black text-slate-900 tracking-[-0.04em]">Mesin <span className="text-indigo-600 italic">Ketenangan.</span></h3>
              <p className="text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                Empat pilar utama yang bekerja secara harmonis untuk menciptakan ekosistem perlindungan mental yang mutlak dan terpadu.
              </p>
            </div>

            <div className="relative h-[800px] flex items-center justify-center">
              {/* Central Core */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                className="relative z-20 w-80 h-80 rounded-full bg-white shadow-[0_60px_100px_-20px_rgba(79,70,229,0.3)] border-8 border-indigo-50 p-4 flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-indigo-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 opacity-5" />
                <div className="text-center space-y-2">
                  <div className="w-24 h-24 bg-indigo-600 rounded-[30px] mx-auto flex items-center justify-center text-white shadow-2xl shadow-indigo-500/50 mb-4 scale-110">
                    <ShieldCheck size={48} />
                  </div>
                  <p className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Tenangin</p>
                  <p className="text-[10px] font-black text-indigo-400 tracking-[0.3em] uppercase">Core Engine</p>
                </div>

                {/* Pulsing Aura */}
                <div className="absolute inset-[-40px] border border-indigo-100 rounded-full animate-ping opacity-20" />
              </motion.div>

              {/* Branching Pillars */}
              <div className="absolute inset-0 z-10">
                <EnginePillar
                  icon={<BrainCircuit size={40} />}
                  title="AI CBT Co-Pilot"
                  desc="Analisis mental real-time"
                  pos="top-0 left-1/2 -translate-x-1/2"
                  delay={0.2}
                />
                <EnginePillar
                  icon={<HeartHandshake size={40} />}
                  title="Evolution Path"
                  desc="Perjalanan tumbuh mandiri"
                  pos="bottom-0 left-1/2 -translate-x-1/2"
                  delay={0.4}
                />
                <EnginePillar
                  icon={<Lock size={40} />}
                  title="Anonymous Lapor"
                  desc="Proteksi identitas mutlak"
                  pos="left-0 top-1/2 -translate-y-1/2"
                  delay={0.6}
                />
                <EnginePillar
                  icon={<Wallet size={40} />}
                  title="Wellness Wallet"
                  desc="Ekosistem insentif sehat"
                  pos="right-0 top-1/2 -translate-y-1/2"
                  delay={0.8}
                />

                {/* Connecting Lines (Simplified for now) */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 -z-10" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURE GRID: PROOF AT SCALE */}
        <section className="bg-slate-50 py-40 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center space-y-6 mb-32">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">Terpercaya & Terukur</h2>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">Didesain untuk Dampak <br className="hidden md:block" /> <span className="text-indigo-600 italic">Nyata.</span></h3>
              <p className="text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                Teknologi yang menggabungkan presisi AI dengan empati manusia untuk hasil yang terukur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<BrainCircuit size={40} />}
                title="CBT AI Co-Pilot"
                description="Pendampingan Cognitive Behavioral Therapy 24/7 dengan enkripsi tingkat militer."
                color="indigo"
                badge="Premium AI"
                stats="12,400+ Sesi Terlindungi"
              />
              <FeatureCard
                icon={<Award size={40} />}
                title="Resilience Journey"
                description="Sistem gamifikasi pertumbuhan mental yang dipersonalisasi sesuai kebutuhan unik Anda."
                color="amber"
                badge="Gamified Growth"
                stats="Level 4 Evolution"
              />
              <FeatureCard
                icon={<Lock size={40} />}
                title="Lapor Aman Sync"
                description="Sistem pelaporan anonim dual-channel yang terintegrasi langsung dengan ULT Kampus."
                color="rose"
                badge="ULT Verified"
                stats="99.9% Anonymous Shield"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const TrustBadge = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center gap-3 text-white/50 font-black text-xs uppercase tracking-[0.2em] whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity cursor-default">
    {icon}
    <span>{label}</span>
  </div>
);

const FeatureCard = ({ icon, title, description, color, badge, stats }: {
  icon: React.ReactNode,
  title: string,
  description: string,
  color: 'indigo' | 'amber' | 'rose',
  badge: string,
  stats: string
}) => {
  const styles = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 shadow-indigo-500/10",
    amber: "bg-amber-50 text-amber-600 border-amber-100 shadow-amber-500/10",
    rose: "bg-rose-50 text-rose-600 border-rose-100 shadow-rose-500/10"
  };

  return (
    <div className="bg-white p-12 rounded-[60px] border border-slate-100 shadow-2xl shadow-slate-100/50 hover:shadow-indigo-500/10 transition-all group cursor-pointer hover:-translate-y-4 duration-700 relative overflow-hidden">
      <div className={`absolute top-0 right-0 px-8 py-3 rounded-bl-[30px] font-black text-[10px] uppercase tracking-widest ${styles[color]} opacity-40 group-hover:opacity-100 transition-opacity`}>
        {badge}
      </div>

      <div className={`w-24 h-24 rounded-[35px] flex items-center justify-center mb-10 border-4 border-white shadow-xl transition-all group-hover:scale-110 group-hover:rotate-6 ${styles[color]}`}>
        {icon}
      </div>

      <div className="space-y-4">
        <h4 className="text-3xl font-black text-slate-900 tracking-tight leading-none">{title}</h4>
        <p className="text-slate-400 font-medium leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-black text-slate-900 tracking-tighter uppercase">{stats}</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500/20" />)}
          </div>
        </div>
        <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

const EnginePillar = ({ icon, title, desc, pos, delay }: {
  icon: React.ReactNode,
  title: string,
  desc: string,
  pos: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 1 }}
    className={`absolute ${pos} group cursor-default`}
  >
    <div className="relative">
      {/* Animated Connector Line */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: delay + 0.5, duration: 1.5 }}
        className="absolute inset-0 bg-indigo-100 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-2xl space-y-4 text-center min-w-[240px] relative z-10 transition-all duration-500 group-hover:-translate-y-4">
        <div className="w-16 h-16 bg-slate-50 rounded-[20px] mx-auto flex items-center justify-center text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
          {icon}
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-black text-slate-900 tracking-tight">{title}</h4>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{desc}</p>
        </div>
      </div>
    </div>
  </motion.div>
);
