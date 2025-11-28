'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
            {/* Refined Dotted Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

            {/* Gradient Overlays - More subtle */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

            {/* Subtle Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Refined Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/40 mb-8"
                    >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground font-medium">New release: Nebula Protocol v2.0</span>
                    </motion.div>

                    {/* Main Headline - Better hierarchy */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
                    >
                        <span className="block mb-2">Scale your business with</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/60">
                            intelligent AI automation
                        </span>
                    </motion.h1>

                    {/* Refined Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg sm:text-xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed font-normal"
                    >
                        Enterprise-grade AI agents and automation solutions. Build custom AI workflows
                        and autonomous business systems on one unified platform.
                    </motion.p>

                    {/* Premium CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group px-8 h-12 text-base font-medium rounded-full"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            REQUEST DEMO
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border/50 hover:border-border hover:bg-card/50 backdrop-blur-sm text-foreground h-12 px-8 text-base rounded-full transition-all duration-300"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Our Services
                        </Button>
                    </motion.div>

                    {/* Subtle Stats or Social Proof (Optional Enhancement) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-background"></div>
                                ))}
                            </div>
                            <span>Trusted by 500+ companies</span>
                        </div>
                        <div className="h-4 w-px bg-border/50"></div>
                        <div className="flex items-center gap-1.5">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                            <span>4.9/5 rating</span>
                        </div>
                    </motion.div>

                    {/* Refined Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="inline-flex flex-col items-center text-muted-foreground/60"
                        >
                            <span className="text-xs mb-2 font-medium">Scroll to explore</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient - Smoother transition */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </section>
    );
}
