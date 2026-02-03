"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AvatarEvolutionProps {
    level: number;
}

export const AvatarEvolution: React.FC<AvatarEvolutionProps> = ({ level }) => {
    // Evolution Stages logic: Upgraded to "Realistic Vector" style.
    // Level 1-3: Calm Seeker
    // Level 4-7: Mindful Traveler (+Designer Scarf)
    // Level 8-10: Resilience Master (+Pro Headset & Core)
    // Level 11+: Zenith Hero (+Halo & Aura)

    return (
        <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg viewBox="0 0 100 100" className="w-[95%] h-[95%] drop-shadow-[0_25px_50px_rgba(99,102,241,0.3)]">
                {/* 1. LAYER: Background Atmosphere */}
                <defs>
                    <radialGradient id="auraGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#818CF8" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Background Shadow Circle */}
                <circle cx="50" cy="50" r="48" fill="white" className="opacity-50" />
                <circle cx="50" cy="50" r="45" fill="url(#auraGradient)" />

                {/* 2. LAYER: Body & Clothing (Hoodie Style) */}
                <motion.g
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hoodie Base - Main Torso */}
                    <path
                        d="M 22 98 Q 50 88 78 98 L 74 65 Q 50 55 26 65 Z"
                        fill={level >= 11 ? "#4F46E5" : level >= 8 ? "#6366F1" : "#818CF8"}
                    />

                    {/* Hoodie Hood (Inner/Shadow) */}
                    <path
                        d="M 32 62 Q 50 48 68 62 L 68 55 Q 50 40 32 55 Z"
                        fill={level >= 11 ? "#3730A3" : "#4338CA"}
                        opacity="0.8"
                    />

                    {/* Shoulder Highlights */}
                    <path d="M 28 85 Q 50 78 72 85" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" />
                </motion.g>

                {/* 3. LAYER: Face & Hair */}
                <motion.g
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {/* Neck */}
                    <path d="M 44 58 L 56 58 L 54 62 L 46 62 Z" fill="#FFD2A8" />

                    {/* Face Base */}
                    <path
                        d="M 38 45 Q 38 28 50 28 Q 62 28 62 45 Q 62 62 50 62 Q 38 62 38 45"
                        fill="#FFE4C4"
                    />

                    {/* Facial Details */}
                    <g className="opacity-90">
                        {/* Intelligent Eyes */}
                        <ellipse cx="45" cy="46" rx="1.5" ry="2" fill="#1E293B" />
                        <ellipse cx="55" cy="46" rx="1.5" ry="2" fill="#1E293B" />

                        {/* Eye Highlights */}
                        <circle cx="45.5" cy="45.3" r="0.4" fill="white" />
                        <circle cx="55.5" cy="45.3" r="0.4" fill="white" />

                        {/* Gentle Smile */}
                        <path d="M 46 54 Q 50 57 54 54" stroke="#94A3B8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    </g>

                    {/* Hair (Detailed Stylized Undercut) */}
                    <path
                        d="M 38 42 Q 38 28 50 26 Q 62 28 62 42 L 64 35 Q 50 20 36 35 Z"
                        fill="#475569"
                    />
                    <path
                        d="M 41 33 Q 50 24 59 33 L 57 29 Q 50 22 43 29 Z"
                        fill="#1E293B"
                    />
                </motion.g>

                {/* 4. LAYER: Evolution Accessories */}

                {/* Level 4+: Designer Scarf (Representing Warmth/Care) */}
                {level >= 4 && (
                    <motion.g initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <path
                            d="M 35 60 Q 50 72 65 60 L 68 78 Q 50 88 32 78 Z"
                            fill="#F472B6"
                            className="drop-shadow-md"
                        />
                        <path d="M 40 68 Q 50 75 60 68" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
                    </motion.g>
                )}

                {/* Level 8+: Pro Focus Headset (Representing Deep Work/Focus) */}
                {level >= 8 && (
                    <motion.g
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        {/* Headband */}
                        <path d="M 36 45 Q 36 26 50 26 Q 64 26 64 45" stroke="#10B981" strokeWidth="3" fill="none" />
                        {/* Earcups */}
                        <rect x="33" y="42" width="7" height="10" rx="3" fill="#059669" className="drop-shadow-sm" />
                        <rect x="60" y="42" width="7" height="10" rx="3" fill="#059669" className="drop-shadow-sm" />
                    </motion.g>
                )}

                {/* Level 8+: Resilience Energy Core */}
                {level >= 8 && (
                    <motion.g
                        animate={{
                            y: [0, -4, 0],
                            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <circle cx="50" cy="78" r="4" fill="#FDE047" className="blur-[1px]" />
                        <circle cx="50" cy="78" r="2" fill="white" />
                    </motion.g>
                )}

                {/* Level 11+: Zenith Halo (The Ultimate State) */}
                {level >= 11 && (
                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="origin-center"
                    >
                        <circle cx="50" cy="18" r="2.5" fill="#F59E0B" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                        <circle cx="34" cy="24" r="1.5" fill="#FBBF24" />
                        <circle cx="66" cy="24" r="1.5" fill="#FBBF24" />
                    </motion.g>
                )}
            </svg>

            {/* Ultimate Aura Glow */}
            {level >= 10 && (
                <motion.div
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 to-teal-400 blur-[80px] -z-10"
                />
            )}
        </div>
    );
};
