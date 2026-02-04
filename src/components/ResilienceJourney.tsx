"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarEvolution } from './AvatarEvolution';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Trophy, HeartPulse } from 'lucide-react';

interface ResilienceJourneyProps {
    userXP: number;
    levelTitle: string;
    levelNumber: number;
}

export const ResilienceJourney: React.FC<ResilienceJourneyProps> = ({ userXP, levelTitle, levelNumber }) => {
    const [prevLevel, setPrevLevel] = useState(levelNumber);

    useEffect(() => {
        if (levelNumber > prevLevel) {
            // Level up event!
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#6366F1', '#10B981', '#F59E0B']
            });
            setPrevLevel(levelNumber);
        }
    }, [levelNumber, prevLevel]);

    const nextLevelXP = (levelNumber + 1) * 100;
    const progressPercent = Math.min((userXP / nextLevelXP) * 100, 100);

    return (
        <Card className="bg-white border-2 border-slate-50 rounded-[40px] shadow-2xl shadow-indigo-100/30 overflow-hidden relative group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />

            <CardContent className="p-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Visual Avatar Column */}
                    <div className="flex flex-col items-center justify-center space-y-8">
                        <div className="relative w-72 h-72">
                            {/* Inner Circle Glow */}
                            <div className="absolute inset-4 rounded-full bg-slate-50/50 border border-slate-100" />

                            <AvatarEvolution level={levelNumber} />

                            {/* XP Indicator Floating */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-100"
                            >
                                <Zap size={16} className="text-amber-500 fill-amber-500" />
                                <span className="font-black text-slate-900 text-sm">+{userXP} <span className="text-[10px] text-slate-400">XP</span></span>
                            </motion.div>
                        </div>

                        <div className="text-center space-y-2">
                            <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">{levelTitle}</h3>
                            <div className="flex items-center justify-center gap-2">
                                <Badge className="bg-indigo-600 px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-indigo-200">
                                    Stage {levelNumber}
                                </Badge>
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Evolution Engine Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Stats Column */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em]">Current Progress</p>
                                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">Menuju Evolusi Berikutnya</h4>
                                </div>
                                <Trophy className="text-slate-200" size={32} />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-widest">
                                    <span>{progressPercent.toFixed(0)}% Complete</span>
                                    <span className="text-indigo-600">{userXP} / {nextLevelXP} XP</span>
                                </div>
                                <div className="h-4 bg-slate-50 rounded-full border border-slate-100 p-1 flex items-center">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progressPercent}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Activity Rewards Bento Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <ActivityCard
                                icon={<HeartPulse size={20} className="text-rose-500" />}
                                label="Breathing"
                                xp="+15"
                                completed={true}
                            />
                            <ActivityCard
                                icon={<Zap size={20} className="text-amber-500" />}
                                label="Journaling"
                                xp="+20"
                                completed={false}
                            />
                            <ActivityCard
                                icon={<Sparkles size={20} className="text-indigo-500" />}
                                label="CBT Chat"
                                xp="+50"
                                completed={false}
                            />
                            <ActivityCard
                                icon={<Trophy size={20} className="text-emerald-500" />}
                                label="Counseling"
                                xp="+100"
                                completed={false}
                            />
                        </div>

                        <div className="bg-indigo-50/50 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-indigo-100/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">Today's Streak</p>
                                    <p className="text-[11px] sm:text-xs font-bold text-slate-500 italic">4 Days In A Row!</p>
                                </div>
                            </div>
                            <Button className="bg-indigo-600 hover:bg-slate-900 text-white rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase px-4 sm:px-6 py-2 sm:py-2.5 whitespace-nowrap">
                                Claim Bonus
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const ActivityCard = ({ icon, label, xp, completed }: { icon: React.ReactNode, label: string, xp: string, completed: boolean }) => (
    <div className={`p-6 rounded-[30px] border-2 transition-all group cursor-pointer ${completed ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-100 hover:border-indigo-200 hover:shadow-xl'
        }`}>
        <div className="flex flex-col gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${completed ? 'bg-white' : 'bg-slate-50'}`}>
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
                <p className="text-lg font-black text-slate-900">{xp} <span className="text-[9px] text-slate-300">XP</span></p>
            </div>
        </div>
    </div>
);
