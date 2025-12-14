'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS } from '@/data/navigation';

interface NavbarProps {
    variant?: 'home' | 'page';
}

export const Navbar = ({ variant = 'home' }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isScrolled = scrolled || variant === 'page';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                        <span className="font-serif font-bold text-xl">M</span>
                    </div>
                    <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                        Madina
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${isScrolled
                        ? 'bg-gray-900 text-white hover:bg-red-600'
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                        }`}>
                        Book Table
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b absolute w-full top-full left-0 overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-4">
                            {NAV_LINKS.map(link => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-bold text-gray-900 py-2 border-b border-gray-100"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold">
                                Book a Table
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
