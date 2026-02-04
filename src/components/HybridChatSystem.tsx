"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Users, Stethoscope, Send, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ChatMode = "counselor" | "community";

interface Message {
    id: number;
    sender: "user" | "counselor" | "peer";
    name?: string;
    avatar?: string;
    content: string;
    time: string;
}

// Initial welcome message
const INITIAL_MESSAGE: Message = {
    id: 1,
    sender: "counselor",
    name: "Dr. Aria",
    avatar: "AR",
    content: "Halo, saya Dr. Aria. Terima kasih sudah mempercayai TenangIn untuk berbagi. Sebelum kita mulai, boleh saya tahu apa yang sedang Anda rasakan saat ini? Tidak apa-apa untuk mengambil waktu menjawab.",
    time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
};

const communityMessages: Message[] = [
    {
        id: 1,
        sender: "peer",
        name: "Budi - Teknik Sipil",
        avatar: "BD",
        content: "Hai teman-teman! Ada yang lagi struggle sama tugas akhir juga? 😅",
        time: "13:20"
    },
    {
        id: 2,
        sender: "peer",
        name: "Amanda - Psikologi",
        avatar: "AM",
        content: "Sama nih! Aku juga lagi banyak deadline. Tapi kita gak sendirian kok! Yuk sharing tips coping strategy kalian 💪",
        time: "13:22"
    },
    {
        id: 3,
        sender: "user",
        content: "Terima kasih supportnya guys! Seneng banget ada komunitas seperti ini ❤️",
        time: "13:25"
    },
    {
        id: 4,
        sender: "peer",
        name: "Reza - Manajemen",
        avatar: "RZ",
        content: "We got your back! Kalau butuh ventilasi atau sekedar ngobrol, we're here anytime 🙌",
        time: "13:27"
    }
];

export default function HybridChatSystem() {
    const [chatMode, setChatMode] = useState<ChatMode>("counselor");
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const nextId = useRef(2);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading || chatMode !== "counselor") return;

        const userMessage: Message = {
            id: nextId.current++,
            sender: "user",
            content: inputValue.trim(),
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);
        setIsTyping(true);

        try {
            const response = await fetch('/api/ai-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage.content,
                    conversationHistory: messages
                })
            });

            if (!response.ok) throw new Error('Failed to get response');

            const data = await response.json();

            const aiMessage: Message = {
                id: nextId.current++,
                sender: "counselor",
                name: "Dr. Aria",
                avatar: "AR",
                content: data.message,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage: Message = {
                id: nextId.current++,
                sender: "counselor",
                name: "Dr. Aria",
                avatar: "AR",
                content: "Maaf, saya mengalami kendala teknis. Silakan coba lagi atau hubungi konselor manusia kami.",
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Display appropriate messages based on chat mode
    const displayMessages = chatMode === "counselor" ? messages : communityMessages;
    const chatColor = chatMode === "counselor" ? "indigo" : "emerald";

    return (
        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <Badge className="bg-purple-100 text-purple-600 px-6 py-2 rounded-full font-black uppercase text-sm tracking-[0.3em] border-none">
                        Hybrid Support System
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">
                        Dukungan dari <span className="text-purple-600">AI</span>, <span className="text-indigo-600">Ahli</span>, hingga{" "}
                        <span className="text-emerald-600">Komunitas</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto">
                        Sistem chat terintegrasi yang menggabungkan AI empatik 24/7, peer counselor terlatih, dan psikolog klinis berlisensi.
                    </p>
                </div>

                {/* Chat Interface Card */}
                <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/80 border border-slate-100 overflow-hidden">
                    {/* Tab Switcher */}
                    <div className="bg-slate-50 border-b border-slate-200 p-4">
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <button
                                onClick={() => setChatMode("counselor")}
                                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-sm transition-all ${chatMode === "counselor"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                    : "bg-white text-slate-500 hover:bg-slate-100"
                                    }`}
                            >
                                <Stethoscope size={18} />
                                Chat Konselor
                            </button>
                            <button
                                onClick={() => setChatMode("community")}
                                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-sm transition-all ${chatMode === "community"
                                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                                    : "bg-white text-slate-500 hover:bg-slate-100"
                                    }`}
                            >
                                <Users size={18} />
                                Chat Komunitas
                            </button>
                        </div>
                    </div>

                    {/* Chat Header */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={chatMode}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-white border-b border-slate-100 p-6"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg ${chatMode === "counselor" ? "bg-gradient-to-br from-indigo-500 to-purple-600" : "bg-gradient-to-br from-emerald-500 to-teal-600"
                                            }`}
                                    >
                                        {chatMode === "counselor" ? <Stethoscope size={24} /> : <Users size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900">
                                            {chatMode === "counselor" ? "Dr. Aria, M.Psi" : "Mental Health Community"}
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className={`w-2.5 h-2.5 rounded-full ${chatMode === "counselor" ? "bg-emerald-500" : "bg-emerald-500"} animate-pulse`} />
                                            <p className="text-sm font-bold text-emerald-600">
                                                {chatMode === "counselor" ? "Online" : "24 Members Active"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="rounded-xl">
                                    <MoreVertical size={20} className="text-slate-400" />
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Messages Container */}
                    <div className="h-[60vh] sm:h-[500px] overflow-y-auto bg-slate-50 p-4 sm:p-6 space-y-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={chatMode}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-4"
                            >
                                {displayMessages.map((message, index) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`flex gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                            {/* Avatar */}
                                            {message.sender !== "user" && (
                                                <div
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs flex-shrink-0 ${chatMode === "counselor" ? "bg-indigo-500" : "bg-emerald-500"
                                                        }`}
                                                >
                                                    {message.avatar}
                                                </div>
                                            )}

                                            {/* Message Bubble */}
                                            <div className="space-y-1">
                                                {message.sender !== "user" && message.name && (
                                                    <p className="text-xs font-bold text-slate-500 px-1">{message.name}</p>
                                                )}
                                                <div
                                                    className={`px-5 py-3.5 rounded-2xl ${message.sender === "user"
                                                        ? chatMode === "counselor"
                                                            ? "bg-indigo-600 text-white rounded-br-md"
                                                            : "bg-emerald-600 text-white rounded-br-md"
                                                        : "bg-white border border-slate-200 text-slate-800 rounded-bl-md shadow-sm"
                                                        }`}
                                                >
                                                    <p className="text-sm md:text-base font-medium leading-relaxed">{message.content}</p>
                                                </div>
                                                <p className={`text-xs font-medium text-slate-400 px-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                                                    {message.time}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing Indicator */}
                                {isTyping && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs ${chatMode === "counselor" ? "bg-indigo-500" : "bg-emerald-500"}`}>
                                            {chatMode === "counselor" ? "AR" : "AI"}
                                        </div>
                                        <div className="bg-white border border-slate-200 px-5 py-3.5 rounded-2xl rounded-bl-md shadow-sm">
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Scroll Anchor */}
                    <div ref={messagesEndRef} />

                    {/* Message Input */}
                    <div className="bg-white border-t border-slate-200 p-4">
                        <div className="flex gap-3 items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                disabled={isLoading || chatMode !== "counselor"}
                                placeholder={chatMode === "counselor" ? "Ketik pesan Anda..." : "Chat Komunitas (Coming Soon)"}
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            <Button
                                onClick={sendMessage}
                                disabled={isLoading || !inputValue.trim() || chatMode !== "counselor"}
                                className={`rounded-2xl px-6 py-4 font-black ${chatMode === "counselor" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"
                                    } text-white transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100`}
                            >
                                <Send size={20} />
                            </Button>
                        </div>
                        <p className="text-xs text-slate-400 font-medium mt-2 text-center">
                            🔒 End-to-End Encrypted • 100% Confidential
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-black text-lg shadow-xl shadow-purple-500/30 transition-all hover:scale-105">
                        Mulai Chat Sekarang
                    </Button>
                </div>
            </div>
        </section>
    );
}
