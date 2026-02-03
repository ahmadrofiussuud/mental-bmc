"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Menu,
    X,
    ChevronRight,
    Settings
} from "lucide-react";

interface HeaderProps {
    variant?: 'dashboard' | 'journey' | 'wallet' | 'lapor' | 'history' | 'settings' | 'landing' | 'default' | 'consultation';
}

export const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Theme Mapping for different pages
    const themeMap = {
        dashboard: { accent: 'text-indigo-600', bg: 'bg-indigo-50/10', border: 'border-indigo-100', indicator: 'bg-indigo-600' },
        journey: { accent: 'text-indigo-600', bg: 'bg-indigo-50/10', border: 'border-indigo-100', indicator: 'bg-indigo-600' },
        wallet: { accent: 'text-emerald-600', bg: 'bg-emerald-50/10', border: 'border-emerald-100', indicator: 'bg-emerald-600' },
        lapor: { accent: 'text-rose-600', bg: 'bg-rose-50/10', border: 'border-rose-100', indicator: 'bg-rose-600' },
        history: { accent: 'text-slate-900', bg: 'bg-slate-50/10', border: 'border-slate-100', indicator: 'bg-slate-900' },
        settings: { accent: 'text-white', bg: 'bg-white/10', border: 'border-white/10', indicator: 'bg-white' },
        consultation: { accent: 'text-blue-600', bg: 'bg-blue-50/10', border: 'border-blue-100', indicator: 'bg-blue-600' },
        landing: { accent: 'text-white', bg: 'bg-white/10', border: 'border-white/10', indicator: 'bg-white' },
        default: { accent: 'text-indigo-600', bg: 'bg-indigo-50/10', border: 'border-indigo-100', indicator: 'bg-indigo-600' }
    };

    const currentTheme = themeMap[variant] || themeMap.default;

    // 6 Core Features Paths - Any of these should trigger "Dashboard Mode"
    const dashboardPaths = [
        '/dashboard',
        '/journey',
        '/wallet',
        '/lapor',
        '/history',
        '/settings',
        '/settings',
        '/profile',
        '/consultation'
    ];

    // Mock auth state: If current path is in dashboardPaths, consider logged in
    const isLoggedIn = dashboardPaths.some(path => pathname.startsWith(path));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 6 Core Features for Dashboard Navigation (Text Only)
    const dashboardFeatures = [
        { label: "Home", href: "/dashboard" },
        { label: "Journey", href: "/journey" },
        { label: "Care Plan", href: "/wallet" },
        { label: "Lapor Aman", href: "/lapor" },
        { label: "Riwayat", href: "/history" },
        { label: "Konsultasi", href: "/consultation" },
    ];

    const publicLinks = [
        { label: "Solutions", href: "/solutions" },
        { label: "Security", href: "/security" },
        { label: "Institutions", href: "/institutions" },
        { label: "About Us", href: "/about" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-3 shadow-2xl shadow-slate-100/50" : "bg-transparent py-8"
            }`}>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3">

                {/* Logo - Permanent and Consistent */}
                <Link href="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:rotate-12 ${(variant === 'settings' || variant === 'landing') && !isScrolled ? 'bg-indigo-500 shadow-indigo-500/20' : 'bg-indigo-600 shadow-indigo-200'}`}>
                        <ShieldCheck size={26} />
                    </div>
                    <span className={`font-black text-2xl tracking-tighter transition-colors duration-500 ${(variant === 'settings' || variant === 'landing') && !isScrolled ? 'text-white' : 'text-slate-900'}`}>TenangIn</span>
                </Link>

                {/* Dynamic Navigation - Synchronized with current path */}
                <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center">
                    {isLoggedIn ? (
                        dashboardFeatures.map((feature) => {
                            const isActive = pathname === feature.href;

                            // Dynamic Style for Active State based on Scroll
                            let activeStyle = currentTheme.accent;
                            let indicatorStyle = currentTheme.indicator;

                            if (isScrolled && (variant === 'landing' || variant === 'settings')) {
                                activeStyle = "text-slate-900";
                                indicatorStyle = "bg-slate-900";
                            }

                            return (
                                <Link
                                    key={feature.label}
                                    href={feature.href}
                                    className={`px-5 py-2.5 rounded-2xl transition-all duration-500 group relative ${isActive
                                        ? activeStyle
                                        : variant === 'settings' && !isScrolled ? "text-white/60 hover:text-white hover:bg-white/5" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                                        }`}
                                >
                                    <span className="font-black text-[13px] uppercase tracking-[0.2em]">{feature.label}</span>
                                    {isActive && (
                                        <div className={`absolute -bottom-1 left-5 right-5 h-1 rounded-full ${indicatorStyle}`} />
                                    )}
                                </Link>
                            );
                        })
                    ) : (
                        publicLinks.map((link) => (
                            <NavLink key={link.label} label={link.label} href={link.href} variant={variant} isScrolled={isScrolled} />
                        ))
                    )}
                </nav>

                {/* Actions / Profile - Consistent Avatar (HIDDEN ON MOBILE) */}
                <div className="hidden md:flex items-center gap-5 shrink-0">
                    {isLoggedIn ? (
                        <div className="flex items-center gap-3">
                            <div className={`flex items-center gap-4 p-1.5 pl-5 rounded-2xl border transition-all duration-500 group cursor-pointer ${variant === 'settings' && !isScrolled ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-50 border-slate-200/50 hover:bg-slate-100 shadow-sm'}`}>
                                <span className={`hidden lg:block font-black text-[10px] uppercase tracking-[0.3em] transition-colors ${variant === 'settings' && !isScrolled ? 'text-indigo-300' : 'text-slate-400 group-hover:text-indigo-600'}`}>Premium</span>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-105 ${variant === 'settings' && !isScrolled ? 'bg-indigo-500' : 'bg-indigo-600'}`}>
                                    <span className="text-sm font-black italic">U</span>
                                </div>
                            </div>

                            {/* Settings Icon - Right of Profile */}
                            <Link href="/settings">
                                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 border ${variant === 'settings' && !isScrolled ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-50 border-slate-200/50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 shadow-sm'}`}>
                                    <Settings size={20} />
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="ghost" className="font-black text-white hover:text-indigo-200 px-4 sm:px-6">Login</Button>
                            </Link>
                            <Link href="/trial" className="hidden sm:block">
                                <Button className="bg-slate-900 hover:bg-black text-white px-8 h-12 rounded-2xl font-black shadow-lg shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                                    Get Trial
                                </Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Toggle - ALWAYS VISIBLE */}
                <button
                    className={`md:hidden w-12 h-12 flex items-center justify-center rounded-2xl border transition-all duration-500 ${(variant === 'settings' || variant === 'landing') && !isScrolled ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-100 text-slate-900 shadow-sm'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
        </div>

            {/* Mobile Menu */ }
    {
        mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden animate-in slide-in-from-top-4 duration-300 shadow-xl">
                <div className="flex flex-col gap-3">
                    {isLoggedIn ? (
                        dashboardFeatures.map((feature) => (
                            <Link
                                key={feature.label}
                                href={feature.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center justify-between p-4 rounded-2xl transition-all ${pathname === feature.href
                                    ? "bg-indigo-50 text-indigo-600"
                                    : "bg-slate-50 text-slate-900"
                                    }`}
                            >
                                <span className="font-black uppercase text-xs tracking-widest">{feature.label}</span>
                                <ChevronRight size={16} className={pathname === feature.href ? "text-indigo-400" : "text-slate-300"} />
                            </Link>
                        ))
                    ) : (
                        publicLinks.map((link) => (
                            <NavLink key={link.label} label={link.label} href={link.href} mobile />
                        ))
                    )}
                    {!isLoggedIn && (
                        <Link href="/trial" onClick={() => setMobileMenuOpen(false)} className="mt-4">
                            <Button className="bg-indigo-600 text-white w-full rounded-2xl py-7 font-black text-lg">Start Free Trial</Button>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
        </header >
    );
};

const NavLink = ({ label, href, mobile = false, variant = 'default', isScrolled = false }: { label: string, href: string, mobile?: boolean, variant?: string, isScrolled?: boolean }) => (
    <Link href={href} className={`font-black tracking-tight transition-all duration-300 ${mobile
        ? "text-slate-900 text-lg py-4 px-6 rounded-2xl bg-slate-50 hover:bg-slate-100 flex justify-between items-center mb-2"
        : (variant === 'landing' || variant === 'settings') && !isScrolled
            ? "text-white/70 hover:text-white px-4 py-2 hover:bg-white/5 rounded-xl text-sm"
            : "text-slate-500 hover:text-indigo-600 text-sm px-4 py-2 hover:bg-slate-50 rounded-xl"
        }`}>
        {label}
        {mobile && <ChevronRight size={20} className="text-slate-400" />}
    </Link>
);
