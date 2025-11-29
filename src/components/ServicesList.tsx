'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { Service } from '@prisma/client';

export default function ServicesList({ services }: { services: Service[] }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                    Our Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive AI automation solutions designed to transform your business operations
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {services.map((service, index) => {
                    // @ts-ignore
                    const Icon = Icons[service.icon] || Icons.HelpCircle;
                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Link
                                        href={service.link || '#'}
                                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group/link"
                                    >
                                        Learn More
                                        <svg
                                            className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
}
