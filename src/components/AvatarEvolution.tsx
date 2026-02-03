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

    const getAvatarImage = () => {
        if (level >= 11) return "/avatars/stage-4.png";
        if (level >= 8) return "/avatars/stage-3.png";
        if (level >= 4) return "/avatars/stage-2.png";
        return "/avatars/stage-1.png";
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center p-2">
            <motion.div
                key={getAvatarImage()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full"
            >
                {/* Evolution Glow Effect */}
                {level >= 10 && (
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-indigo-500 rounded-full blur-[60px] opacity-40 mix-blend-screen"
                    />
                )}

                <img
                    src={getAvatarImage()}
                    alt={`Avatar Level ${level}`}
                    className="w-full h-full object-contain drop-shadow-2xl"
                />
            </motion.div>
        </div>
    );
};
