'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const apiServices = [
    { name: 'REST Gateway', status: 'active', latency: '14ms', endpoint: 'us-east-1' },
    { name: 'GraphQL', status: 'active', latency: '28ms', endpoint: 'global-edge' },
    { name: 'Indexer Stream', status: 'syncing', latency: '42ms', progress: 87 },
];

export default function StatusDashboard() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        High-Performance API Integration
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Connect to the decentralized web with Nebula's unified API surface. Designed for speed, reliability, and infinite scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Side - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Our SDKs provide type-safe access to over 50+ protocols with a single line of code.
                                Eliminate node maintenance and focus on building your application logic with 99.99% uptime guaranteed.
                            </p>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Instant global state access — stream events, query historical data, and broadcast transactions
                                with sub-millisecond latency.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
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
                        </div>
                    </motion.div>

                    {/* Right Side - Status Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="bg-card border-border">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl font-semibold">API Status</CardTitle>
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-2 h-2 bg-green-500 rounded-full"
                                        />
                                        <span className="text-sm text-green-500 font-medium">Systems Operational</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {apiServices.map((service, index) => (
                                    <motion.div
                                        key={service.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 bg-background/50 rounded-lg border border-border"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <motion.div
                                                    animate={service.status === 'active' ? { scale: [1, 1.2, 1] } : {}}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className={`w-2 h-2 rounded-full ${service.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                                                        }`}
                                                />
                                                <span className="font-mono text-sm font-medium">{service.name}</span>
                                            </div>
                                            <span className="text-sm text-muted-foreground font-mono">{service.latency}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span>{service.endpoint || 'Endpoint'}</span>
                                            <span className="capitalize">{service.status}</span>
                                        </div>
                                        {service.progress && (
                                            <div className="mt-3">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs text-muted-foreground">Syncing blocks...</span>
                                                    <span className="text-xs text-muted-foreground">{service.progress}%</span>
                                                </div>
                                                <div className="w-full bg-muted rounded-full h-1.5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${service.progress}%` }}
                                                        transition={{ duration: 1, ease: 'easeOut' }}
                                                        className="bg-primary h-1.5 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                <div className="pt-4 border-t border-border">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Uptime</span>
                                        <span className="font-mono text-foreground font-semibold">99.99%</span>
                                    </div>
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    View Analytics
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
