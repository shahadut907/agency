'use client';

import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
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

    return <span ref={ref}>{count}{suffix}</span>;
}

const caseStudies = [
    {
        company: 'TechCorp Solutions',
        industry: 'E-commerce',
        result: '300% efficiency increase',
        metric1: { value: 300, label: 'Efficiency Gain', suffix: '%' },
        metric2: { value: 85, label: 'Cost Reduction', suffix: '%' },
        testimonial: 'Nebula transformed our customer service operations. We now handle 3x more inquiries with the same team size.',
        author: 'Sarah Johnson',
        role: 'CTO',
        logo: '🚀',
    },
    {
        company: 'HealthCare Plus',
        industry: 'Healthcare',
        result: '50% cost reduction',
        metric1: { value: 50, label: 'Cost Savings', suffix: '%' },
        metric2: { value: 99, label: 'Accuracy Rate', suffix: '%' },
        testimonial: 'The document analysis AI has revolutionized our patient data processing. Faster, more accurate, and significantly cheaper.',
        author: 'Dr. Michael Chen',
        role: 'Head of Operations',
        logo: '⚕️',
    },
    {
        company: 'FinanceHub',
        industry: 'Finance',
        result: '10,000+ hours saved annually',
        metric1: { value: 10000, label: 'Hours Saved', suffix: '+' },
        metric2: { value: 24, label: 'Uptime', suffix: '/7' },
        testimonial: 'Automated compliance checks and fraud detection have saved countless hours and prevented significant losses.',
        author: 'Lisa Rodriguez',
        role: 'VP of Technology',
        logo: '💰',
    },
];

export default function CaseStudiesSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>

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
                        Proven Results Across Industries
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See how leading companies are transforming their operations with our AI automation solutions
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card border-border h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
                                <CardContent className="p-6">
                                    {/* Company Logo/Icon */}
                                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-4xl mb-4">
                                        {study.logo}
                                    </div>

                                    {/* Company Info */}
                                    <h3 className="text-2xl font-bold text-foreground mb-1">{study.company}</h3>
                                    <p className="text-sm text-primary mb-4">{study.industry}</p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-background/50 rounded-lg border border-border">
                                        <div>
                                            <p className="text-3xl font-bold text-primary">
                                                <CountUp end={study.metric1.value} suffix={study.metric1.suffix} />
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">{study.metric1.label}</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-primary">
                                                <CountUp end={study.metric2.value} suffix={study.metric2.suffix} />
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">{study.metric2.label}</p>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="relative">
                                        <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                                        <p className="text-muted-foreground italic mb-4 pl-6 leading-relaxed">
                                            &quot;{study.testimonial}&quot;
                                        </p>
                                    </div>

                                    {/* Author */}
                                    <div className="pt-4 border-t border-border">
                                        <p className="font-semibold text-foreground">{study.author}</p>
                                        <p className="text-sm text-muted-foreground">{study.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-5xl font-bold text-primary mb-2">
                                <CountUp end={500} suffix="+" />
                            </p>
                            <p className="text-muted-foreground">Active Clients</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-primary mb-2">
                                <CountUp end={1200} suffix="+" />
                            </p>
                            <p className="text-muted-foreground">AI Agents Deployed</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-primary mb-2">
                                <CountUp end={99} suffix=".9%" />
                            </p>
                            <p className="text-muted-foreground">Uptime Guarantee</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-primary mb-2">
                                <CountUp end={15} suffix="M+" />
                            </p>
                            <p className="text-muted-foreground">API Calls/Month</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
