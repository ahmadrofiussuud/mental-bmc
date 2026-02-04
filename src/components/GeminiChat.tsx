"use client";

import { useChat } from "ai/react";
import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    BrainCircuit,
    Sparkles,
    Users,
    ShieldCheck,
    PhoneCall,
    SendHorizontal,
    AlertCircle,
    FileJson
} from "lucide-react";

type SupportTier = 'AI' | 'PEER' | 'PROFESSIONAL';

export const GeminiChat = () => {
    const router = useRouter();
    const [tier, setTier] = useState<SupportTier>('AI');
    const [showEmergency, setShowEmergency] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: "/api/chat/companion",
        body: { tier },
        onResponse: (response: Response) => {
            const riskHeader = response.headers.get("X-TenangIn-Risk");
            if (riskHeader === "HIGH_RISK") {
                setShowEmergency(true);
            }
        }
    });

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto"
        >
            <Card className="h-[750px] flex flex-col shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] rounded-[40px] overflow-hidden border-none bg-white/80 backdrop-blur-xl ring-1 ring-slate-100">
                {/* Header with Glassmorphism */}
                <CardHeader className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <CardTitle className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter">TenangIn Co-Pilot</CardTitle>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300">CBT & Mindfulness AI</p>
                            </div>
                        </div>

                        {/* Tier Selection (Hybrid System) */}
                        <div className="flex bg-white/10 p-1 sm:p-1.5 rounded-2xl sm:rounded-[22px] backdrop-blur-md">
                            <TierButton
                                active={tier === 'AI'}
                                onClick={() => setTier('AI')}
                                icon={<Sparkles size={14} />}
                                label="AI Companion"
                            />
                            <TierButton
                                active={tier === 'PEER'}
                                onClick={() => setTier('PEER')}
                                icon={<Users size={14} />}
                                label="Peer Support"
                            />
                            <TierButton
                                active={tier === 'PROFESSIONAL'}
                                onClick={() => router.push('/consultation')}
                                icon={<ShieldCheck size={14} />}
                                label="Professional"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="flex-1 overflow-hidden p-0 flex flex-col relative">
                    <ScrollArea ref={scrollRef as any} className="flex-1 p-8 scroll-smooth">
                        <AnimatePresence mode="popLayout">
                            {messages.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col items-center justify-center py-20 text-center space-y-4 opacity-30"
                                >
                                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
                                        <Sparkles size={32} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-lg font-black text-slate-900 tracking-tight italic">"Apa yang sedang membebani pikiran Anda hari ini?"</p>
                                        <p className="text-[10px] uppercase font-black tracking-widest">TenangIn AI is ready to listen</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="space-y-6">
                                    {messages.map((m: any, idx: number) => (
                                        <motion.div
                                            key={m.id}
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div className={`max-w-[80%] p-6 rounded-[30px] shadow-sm text-[15px] leading-relaxed font-medium ${m.role === "user"
                                                ? "bg-indigo-600 text-white rounded-br-none"
                                                : "bg-slate-50 text-slate-800 rounded-bl-none border border-slate-100"
                                                }`}>
                                                {m.content}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </AnimatePresence>

                        {/* Emergency Referral Card */}
                        {showEmergency && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 bg-rose-50 border-2 border-rose-200 p-8 rounded-[40px] space-y-6 shadow-2xl shadow-rose-200/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white">
                                        <AlertCircle size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-rose-900">Kami Peduli Dengan Anda</h3>
                                        <p className="text-sm font-bold text-rose-700 opacity-70 italic">Situasi Anda terdeteksi berisiko tinggi.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Button className="bg-rose-600 hover:bg-rose-700 text-white py-8 rounded-2xl font-black text-lg shadow-xl shadow-rose-500/20 group uppercase tracking-widest h-auto">
                                        <PhoneCall className="mr-3 group-hover:shake" />
                                        Hotline 119
                                    </Button>
                                    <Button variant="outline" className="border-2 border-rose-200 bg-white text-rose-600 py-8 rounded-2xl font-black text-lg h-auto">
                                        Sesi Darurat Psikolog
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </ScrollArea>

                    {/* Screening Summary Overlay (Pre-Diagnostic) */}
                    <AnimatePresence>
                        {showSummary && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-slate-900/95 backdrop-blur-md z-50 p-10 text-white flex flex-col justify-center items-center text-center space-y-8"
                            >
                                <div className="w-20 h-20 bg-indigo-500 rounded-3xl flex items-center justify-center mb-4">
                                    <FileJson size={40} />
                                </div>
                                <h4 className="text-4xl font-black tracking-tighter">Diagnostic Summary Generated</h4>
                                <div className="bg-white/10 p-8 rounded-[30px] font-mono text-left text-xs max-w-md w-full border border-white/10">
                                    <pre className="text-indigo-300">
                                        {`{
  "emotional_state": "Anxious",
  "cbt_pattern": "Overgeneralization",
  "risk_score": 12,
  "intensity": "Moderate",
  "recommended_tier": "PROFESSIONAL",
  "session_efficiency_boost": "42%"
}`}
                                    </pre>
                                </div>
                                <Button onClick={() => setShowSummary(false)} className="bg-white text-slate-900 py-8 px-12 rounded-2xl font-black">
                                    Kembali ke Chat
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Integrated Controls */}
                    <div className="p-3 sm:p-4 md:p-6 bg-white border-t border-slate-100 flex flex-col gap-3 sm:gap-4">
                        <div className="flex gap-4">
                            <form onSubmit={handleSubmit} className="flex-1 flex gap-4">
                                <div className="flex-1 relative">
                                    <input
                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-[28px] pl-6 sm:pl-8 pr-16 py-4 sm:py-6 text-base sm:text-lg font-bold text-slate-900 focus:border-indigo-500 focus:bg-white outline-none transition-all shadow-inner placeholder:text-slate-300"
                                        value={input}
                                        placeholder="Tulis perasaan..."
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                    />
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">
                                        {input.length > 0 && <span className="text-[10px] font-black">{input.length} char</span>}
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="rounded-[28px] w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600 hover:bg-slate-900 text-white shadow-2xl shadow-indigo-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center p-0"
                                >
                                    {isLoading ? (
                                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <SendHorizontal className="w-6 h-6 sm:w-8 sm:h-8" />
                                    )}
                                </Button>
                            </form>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-center px-4 gap-2 sm:gap-0">
                            <button
                                onClick={() => setShowSummary(true)}
                                className="text-[9px] sm:text-[10px] font-black uppercase tracking-wide sm:tracking-widest text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1.5 sm:gap-2"
                            >
                                <FileJson className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                <span className="hidden sm:inline">Export Screening Data (JSON)</span>
                                <span className="sm:hidden">Export</span>
                            </button>
                            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wide sm:tracking-widest text-slate-300">
                                <span className="hidden sm:inline">Protected by TenangIn Guard v2.0</span>
                                <span className="sm:hidden">Protected by TenangIn</span>
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const TierButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] md:text-[11px] font-black transition-all ${active
            ? "bg-white text-slate-900 shadow-xl shadow-black/10 scale-105"
            : "text-white/50 hover:text-white"
            }`}
    >
        {icon}
        {label}
    </button>
);
