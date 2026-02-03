"use client";

import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    MessageSquare,
    Wallet,
    ShieldAlert,
    Settings,
    LogOut,
    Bell
} from "lucide-react";

export const Navigation = () => {
    return (
        <div className="w-20 lg:w-64 h-screen bg-white border-r border-slate-100 flex flex-col p-4 fixed left-0 top-0 z-50">
            <div className="flex items-center gap-3 px-2 py-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">
                    T
                </div>
                <span className="font-black text-xl text-slate-900 hidden lg:block tracking-tighter">TenangIn</span>
            </div>

            <Separator className="my-4 opacity-50" />

            <nav className="flex-1 space-y-2">
                <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                <NavItem icon={<MessageSquare size={20} />} label="AI Companion" />
                <NavItem icon={<Wallet size={20} />} label="Mental Wallet" />
                <NavItem icon={<ShieldAlert size={20} />} label="Lapor Aman" />
            </nav>

            <div className="space-y-4 pt-4">
                <Separator className="opacity-50" />
                <NavItem icon={<Settings size={20} />} label="Settings" />

                <div className="p-2 lg:p-4 bg-slate-50 rounded-3xl flex items-center gap-3 group cursor-pointer hover:bg-slate-100 transition-colors mt-auto">
                    <Avatar className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-white shadow-sm">
                        <AvatarFallback className="bg-indigo-100 text-indigo-600 font-bold text-xs">RS</AvatarFallback>
                    </Avatar>
                    <div className="hidden lg:block">
                        <p className="text-xs font-black text-slate-800">Rofi'us Su'ud</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Free Plan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
    <div className={`
    flex items-center gap-3 p-3 lg:px-4 rounded-2xl cursor-pointer transition-all duration-300 group
    ${active
            ? 'bg-indigo-50 text-indigo-600 shadow-[0_4px_20px_rgba(79,70,229,0.1)]'
            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
  `}>
        <div className={`${active ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>
            {icon}
        </div>
        <span className="font-bold text-sm hidden lg:block">{label}</span>
    </div>
);
