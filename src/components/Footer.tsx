import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-1"></div>
                                <div className="w-2 h-2 bg-primary/60 rounded-full mr-1"></div>
                                <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                            </div>
                            <span className="text-xl font-bold text-foreground ml-2">Nebula</span>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            The unified infrastructure layer for the AI automation. Build intelligent systems with enterprise-grade reliability.
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-foreground">Subscribe to our newsletter</p>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-background border-border focus:border-primary"
                                />
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">About Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#mission" className="text-muted-foreground hover:text-primary transition-colors">
                                    Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" className="text-muted-foreground hover:text-primary transition-colors">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="#careers" className="text-muted-foreground hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#newsletter" className="text-muted-foreground hover:text-primary transition-colors">
                                    Newsletter
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#refund" className="text-muted-foreground hover:text-primary transition-colors">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                                    FAQ&apos;s
                                </Link>
                            </li>
                            <li>
                                <Link href="#status" className="text-muted-foreground hover:text-primary transition-colors">
                                    Status
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Social</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <Instagram className="w-4 h-4" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <Youtube className="w-4 h-4" />
                                    <span>YouTube</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <Twitter className="w-4 h-4" />
                                    <span>Twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                            <Link href="#privacy" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#terms" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#cookies" className="hover:text-primary transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            © 2024 Nebula. All rights reserved.
                        </p>
                    </div>

                    {/* System Metrics (Optional - for tech aesthetic) */}
                    <div className="mt-6 flex justify-end gap-6 text-xs font-mono text-muted-foreground/50">
                        <span>FPS: 60</span>
                        <span>GPU UTIL: 14%</span>
                        <span>CPU TEMP: 42°C</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
