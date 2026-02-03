"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RiskEngine, RiskLevel } from '@/lib/risk-engine';

type SupportLevel = 'AI' | 'PEER' | 'PROFESSIONAL';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    level: SupportLevel;
}

export const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Halo! Saya TenangIn AI. Apa yang bisa saya bantu hari ini?', sender: 'bot', level: 'AI' }
    ]);
    const [inputText, setInputText] = useState('');
    const [currentLevel, setCurrentLevel] = useState<SupportLevel>('AI');
    const [showEmergency, setShowEmergency] = useState(false);

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text: inputText, sender: 'user', level: currentLevel };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');

        const analysis = RiskEngine.analyze(inputText);

        if (analysis.level === RiskLevel.HIGH_RISK) {
            setShowEmergency(true);
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: 'risk-bot',
                    text: 'Saya mendeteksi situasi yang sangat berat. Saya sarankan Anda segera berbicara dengan Profesional.',
                    sender: 'bot',
                    level: 'PROFESSIONAL'
                }]);
            }, 500);
        } else {
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: 'bot-reply',
                    text: 'Terima kasih sudah berbagi. Saya di sini untuk mendengarkan.',
                    sender: 'bot',
                    level: currentLevel
                }]);
            }, 1000);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto h-[600px] flex flex-col shadow-2xl rounded-3xl overflow-hidden border-none bg-slate-50">
            <CardHeader className={`text-white py-6 ${currentLevel === 'AI' ? 'bg-indigo-600' :
                    currentLevel === 'PEER' ? 'bg-teal-600' : 'bg-rose-600'
                }`}>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl">TenangIn Support</CardTitle>
                        <Badge variant="outline" className="text-[10px] text-white/80 border-white/20 mt-1">
                            {currentLevel} SUPPORT
                        </Badge>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${msg.sender === 'user'
                                ? 'bg-indigo-600 text-white rounded-br-none'
                                : 'bg-white text-slate-800 rounded-bl-none border border-slate-100'
                            }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                            {msg.sender !== 'user' && (
                                <span className="text-[9px] mt-2 block font-black opacity-40 tracking-wider">
                                    {msg.level}
                                </span>
                            )}
                        </div>
                    </div>
                ))}

                {showEmergency && (
                    <div className="bg-rose-50 border-2 border-rose-200 p-5 rounded-2xl space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">⚠️</span>
                            <h3 className="text-rose-900 font-bold text-sm">Bantuan Darurat Tersedia</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button variant="destructive" className="w-full font-bold shadow-lg shadow-rose-200">
                                📞 Hubungi Hotline 119
                            </Button>
                            <Button variant="outline" className="w-full border-rose-300 text-rose-700 bg-white">
                                👨‍⚕️ Konsul Psikolog Sekarang
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>

            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Tuliskan ceritamu..."
                    className="flex-1 bg-slate-100 border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                    onClick={handleSendMessage}
                    className="rounded-full w-12 h-12 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100"
                >
                    ✈️
                </Button>
            </div>
        </Card>
    );
};
