'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const pricingTiers = [
    {
        name: 'Starter',
        price: { monthly: 99, yearly: 950 },
        description: 'Perfect for small teams getting started with AI automation',
        popular: false,
        features: [
            '5 AI agents',
            'Basic AI automation',
            '10,000 API calls/month',
            'Email support',
            'Community access',
            'Basic analytics',
        ],
    },
    {
        name: 'Professional',
        price: { monthly: 299, yearly: 2990 },
        description: 'Advanced automation for growing businesses',
        popular: true,
        features: [
            'Unlimited AI agents',
            'Advanced automation workflows',
            '100,000 API calls/month',
            'Priority support (24/7)',
            'Custom integrations',
            'Advanced analytics',
            'Multi-agent systems',
            'Dedicated account manager',
        ],
    },
    {
        name: 'Enterprise',
        price: { monthly: null, yearly: null },
        description: 'Custom solutions for large organizations',
        popular: false,
        features: [
            'Unlimited everything',
            'Dedicated infrastructure',
            'SLA guarantee (99.99%)',
            '24/7 premium support',
            'Custom AI development',
            'White-label options',
            'On-premise deployment',
            'Security audit & compliance',
        ],
    },
];

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Choose the perfect plan for your business needs
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 p-1 bg-card border border-border rounded-lg">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-md transition-all ${billingCycle === 'monthly'
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2 rounded-md transition-all ${billingCycle === 'yearly'
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Yearly
                            <span className="ml-2 text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <Card
                                className={`h-full ${tier.popular
                                        ? 'border-primary shadow-lg shadow-primary/20 bg-gradient-to-b from-card to-background'
                                        : 'border-border bg-card'
                                    } hover:border-primary/50 transition-all duration-300 hover:-translate-y-1`}
                            >
                                <CardHeader className="text-center pb-8">
                                    <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                                    <CardDescription className="text-muted-foreground min-h-[3rem] flex items-center justify-center">
                                        {tier.description}
                                    </CardDescription>
                                    <div className="mt-6">
                                        {tier.price.monthly !== null ? (
                                            <>
                                                <span className="text-5xl font-bold text-foreground">
                                                    ${billingCycle === 'monthly' ? tier.price.monthly : Math.floor(tier.price.yearly! / 12)}
                                                </span>
                                                <span className="text-muted-foreground ml-2">/month</span>
                                                {billingCycle === 'yearly' && (
                                                    <p className="text-sm text-muted-foreground mt-2">
                                                        ${tier.price.yearly} billed annually
                                                    </p>
                                                )}
                                            </>
                                        ) : (
                                            <span className="text-5xl font-bold text-foreground">Custom</span>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        className={`w-full mb-6 ${tier.popular
                                                ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30'
                                                : 'bg-card hover:bg-accent border border-border'
                                            }`}
                                    >
                                        {tier.price.monthly !== null ? 'Get Started' : 'Contact Sales'}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>

                                    <div className="space-y-3">
                                        {tier.features.map((feature, i) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="mt-0.5">
                                                    <Check className="w-5 h-5 text-primary" />
                                                </div>
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground">
                        All plans include a 14-day free trial. No credit card required.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
