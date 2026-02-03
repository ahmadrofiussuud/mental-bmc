"use client";

import React from 'react';
import {
    ShieldCheck,
    Linkedin,
    Twitter,
    Instagram,
    Mail,
    ArrowRight
} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-20 px-6 md:px-12 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Brand Column */}
                <div className="md:col-span-4 space-y-8">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-900 group-hover:rotate-12 transition-transform">
                            <ShieldCheck size={24} />
                        </div>
                        <span className="font-black text-2xl text-white tracking-tighter">TenangIn</span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-sm">
                        Platform kesehatan mental & pelaporan anonim kelas dunia untuk institusi pendidikan dan korporasi. Melindungi kesejahteraan dengan teknologi AI & privasi mutlak.
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon icon={<Linkedin size={20} />} />
                        <SocialIcon icon={<Twitter size={20} />} />
                        <SocialIcon icon={<Instagram size={20} />} />
                    </div>
                </div>

                {/* Links Columns */}
                <div className="md:col-span-2 space-y-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Platform</h4>
                    <ul className="space-y-4 text-sm">
                        <li><FooterLink label="Risk Engine" /></li>
                        <li><FooterLink label="CBT AI Chat" /></li>
                        <li><FooterLink label="Lapor Aman" /></li>
                        <li><FooterLink label="Wallet System" /></li>
                    </ul>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
                    <ul className="space-y-4 text-sm">
                        <li><FooterLink label="About Us" /></li>
                        <li><FooterLink label="Pricing" /></li>
                        <li><FooterLink label="Legal Policy" /></li>
                        <li><FooterLink label="Privacy" /></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="md:col-span-4 space-y-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Stay Connected</h4>
                    <p className="text-sm">Bergabunglah dengan buletin kami untuk info kesejahteraan mental terbaru.</p>
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm group-hover:border-slate-600"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-900">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-xs opacity-60">
                        <Mail size={14} />
                        <span>hello@tenangin.com</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs">© 2026 TenangIn Inc. All rights reserved.</p>
                <div className="flex gap-8 text-xs font-bold">
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <div className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-500 cursor-pointer transition-all hover:-translate-y-1">
        {icon}
    </div>
);

const FooterLink = ({ label }: { label: string }) => (
    <a href="#" className="hover:text-indigo-400 transition-colors flex items-center group">
        <span className="group-hover:translate-x-1 transition-transform">{label}</span>
    </a>
);
