"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simple Demo Logic
        setTimeout(() => {
            const isValidBoss = email === "boss@tenangin.com" && password === "tenang123";
            const isValidUser = email === "user@tenangin.com" && password === "user123";

            if (isValidBoss || isValidUser) {
                router.push("/dashboard");
            } else {
                setError("Email atau Password salah. Gunakan kredensial demo di bawah.");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-100/50 blur-[100px] rounded-full"></div>
            </div>

            <Card className="max-w-md w-full rounded-[40px] border-none shadow-2xl shadow-indigo-100 p-8 space-y-8 bg-white/80 backdrop-blur-xl">
                <CardHeader className="text-center space-y-6">
                    <Link href="/" className="inline-flex items-center gap-2 group mx-auto">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={28} />
                        </div>
                        <span className="font-black text-3xl text-slate-900 tracking-tighter">TenangIn</span>
                    </Link>
                    <div className="space-y-2">
                        <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">Login ke Platform</CardTitle>
                        <p className="text-slate-500 font-medium text-sm">Masukkan kredensial institusi Anda untuk melanjutkan.</p>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Email Address</label>
                            <Input
                                type="email"
                                placeholder="email@institusi.com"
                                className="rounded-2xl bg-slate-50 border-none py-6 px-6 focus:ring-2 focus:ring-indigo-500 font-medium"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Password</label>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                className="rounded-2xl bg-slate-50 border-none py-6 px-6 focus:ring-2 focus:ring-indigo-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <p className="text-rose-600 text-[10px] font-black uppercase text-center bg-rose-50 py-2 rounded-lg">{error}</p>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-slate-900 hover:bg-black text-white py-8 rounded-2xl font-black text-lg shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Sign In"}
                            {!isLoading && <ArrowRight size={20} />}
                        </button>
                    </form>

                    <div className="pt-6 border-t border-slate-100 space-y-4">
                        <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100/50 space-y-4">
                            <p className="text-[10px] font-black uppercase text-indigo-600 tracking-tighter">Demo Credentials</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-400 uppercase">Role: Boss</p>
                                    <p className="text-[10px] font-bold text-slate-700">boss@tenangin.com</p>
                                    <p className="text-[10px] font-bold text-indigo-600">tenang123</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-400 uppercase">Role: User</p>
                                    <p className="text-[10px] font-bold text-slate-700">user@tenangin.com</p>
                                    <p className="text-[10px] font-bold text-indigo-600">user123</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-xs text-slate-400">
                            Lupa password? <a href="#" className="text-indigo-600 font-bold hover:underline">Hubungi IT Support</a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
