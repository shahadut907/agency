'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#services', label: 'Product' },
        { href: '#features', label: 'Docs' },
        { href: '#pricing', label: 'Customers' },
        { href: '#about', label: 'Pricing' },
    ];

    return (
        <>
            {/* Floating Pill Navigation - Desktop */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
            >
                <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />

                    {/* Main navbar pill */}
                    <div className="relative flex items-center gap-1 px-3 py-2.5 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 px-3 py-1.5">
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                                <div className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Nebula</span>
                        </Link>

                        {/* Divider */}
                        <div className="w-px h-5 bg-border/50" />

                        {/* Nav Links */}
                        <div className="flex items-center gap-1 px-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#signin"
                                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
                            >
                                Sign In
                            </Link>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-5 bg-border/50" />

                        {/* CTA Button */}
                        <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 rounded-full px-4 py-1.5 h-auto text-sm font-medium group"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            REQUEST DEMO
                            <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <div className="w-2 h-2 bg-primary/60 rounded-full" />
                                <div className="w-2 h-2 bg-primary/30 rounded-full" />
                            </div>
                            <span className="text-lg font-bold text-foreground">Nebula</span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            className="p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-border/50 bg-background/95 backdrop-blur-xl"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#signin"
                                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign In
                            </Link>
                            <div className="pt-2">
                                <Button
                                    className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                                    onClick={() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        setIsOpen(false);
                                    }}
                                >
                                    REQUEST DEMO
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
}
