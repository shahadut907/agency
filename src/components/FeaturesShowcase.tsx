'use client';

import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function FeaturesShowcase() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        OFFERING UNMATCHED CONTROL & INSIGHT
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Enterprise-grade infrastructure built for scale
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-sm">
                            {/* Phone Frame */}
                            <div className="bg-gradient-to-br from-card to-background rounded-3xl border-2 border-border p-4 shadow-2xl shadow-primary/10">
                                {/* Status Bar */}
                                <div className="flex items-center justify-between mb-6 px-2">
                                    <span className="text-xs text-muted-foreground">9:41</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-4 h-3 border border-muted-foreground rounded-sm"></div>
                                    </div>
                                </div>

                                {/* Header */}
                                <div className="flex items-center justify-between mb-6 px-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-semibold">Nebula Core</span>
                                    </div>
                                    <button className="text-muted-foreground">⋯</button>
                                </div>

                                {/* Total Volume Card */}
                                <Card className="bg-background/50 backdrop-blur-sm border-border p-6 mb-4">
                                    <p className="text-xs text-muted-foreground mb-2">TOTAL VOLUME</p>
                                    <p className="text-3xl font-bold mb-2">$8,245.32</p>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-green-500 font-medium">↑ +12.4%</span>
                                        <span className="text-muted-foreground">this week</span>
                                    </div>
                                    {/* Mini Chart */}
                                    <div className="mt-4 h-16 flex items-end gap-1">
                                        {[30, 50, 40, 70, 60, 80, 65, 90, 75, 85].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                                className="flex-1 bg-primary/50 rounded-sm"
                                            />
                                        ))}
                                    </div>
                                </Card>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    <button className="bg-primary text-primary-foreground rounded-lg p-3 flex flex-col items-center gap-1">
                                        <span className="text-lg">📤</span>
                                        <span className="text-xs">Deposit</span>
                                    </button>
                                    <button className="bg-card border border-border rounded-lg p-3 flex flex-col items-center gap-1">
                                        <span className="text-lg">⚡</span>
                                        <span className="text-xs">Swap</span>
                                    </button>
                                    <button className="bg-card border border-border rounded-lg p-3 flex flex-col items-center gap-1">
                                        <span className="text-lg">📨</span>
                                        <span className="text-xs">Send</span>
                                    </button>
                                </div>

                                {/* Active Nodes */}
                                <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4">
                                    <p className="text-xs text-muted-foreground mb-3">ACTIVE NODES</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Node 1</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                <span className="text-xs text-muted-foreground">Online</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Node 2</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                <span className="text-xs text-muted-foreground">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Feature Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
                                <h3 className="text-2xl font-bold mb-3">Enterprise Infrastructure</h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    99.99% uptime guarantee with auto-scaling capabilities and zero-knowledge security proofs built in.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                                        zk-SNARKs
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                                        Auto-scale
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                                        CLI Access
                                    </span>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
                                <h3 className="text-2xl font-bold mb-3">Real-Time Analytics</h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Live performance metrics, system monitoring, and transaction tracking across all your operations.
                                </p>
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div>
                                        <p className="text-3xl font-bold text-primary">
                                            <CountUp end={99} />%
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">Accuracy</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-primary">
                                            <CountUp end={24} />/7
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">Monitoring</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-primary">
                                            &lt;<CountUp end={50} />ms
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">Latency</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors">
                                <h3 className="text-2xl font-bold mb-3">API Performance</h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    Sub-millisecond latency on global edge network with support for 50+ protocols.
                                </p>
                                <div className="bg-background/50 rounded-lg p-3 font-mono text-xs text-muted-foreground border border-border">
                                    <code>
                                        <span className="text-primary">const</span> client = <span className="text-primary">new</span> Nebula(&#123;<br />
                                        &nbsp;&nbsp;apiKey: <span className="text-green-500">&apos;***&apos;</span>,<br />
                                        &nbsp;&nbsp;region: <span className="text-green-500">&apos;auto&apos;</span><br />
                                        &#125;);
                                    </code>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Live Logs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Live Logs</h3>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                            View all →
                        </Button>
                    </div>
                    <Card className="bg-background/50 backdrop-blur-sm border-border p-4">
                        <div className="space-y-2 font-mono text-xs">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <span className="text-green-500">●</span>
                                <span className="text-muted-foreground/50">19:35:42</span>
                                <span>Contract Deployed</span>
                                <span className="ml-auto text-muted-foreground/50">0x4a...3bc1</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <span className="text-primary">●</span>
                                <span className="text-muted-foreground/50">19:35:38</span>
                                <span>New Block Synced</span>
                                <span className="ml-auto text-muted-foreground/50">#2847392</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
