import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart, Rocket, Zap, Shield, RefreshCw } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description, color, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group relative overflow-hidden`}
    >
        <div className={`absolute top-0 right-0 p-32 bg-${color}-500/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-${color}-500/10 transition-colors`} />

        <div className={`w-12 h-12 rounded-2xl bg-${color}-500/20 flex items-center justify-center mb-6 text-${color}-400 group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </motion.div>
);

export const ValueProps = () => {
    return (
        <section id="value-props" className="py-24 px-4 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* API Owners Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="px-4 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                                For E-Commerce APIs
                            </div>
                            <h3 className="text-2xl font-bold">Zero-Click Ready</h3>
                        </div>

                        <div className="grid gap-4">
                            <ValueCard
                                icon={CheckCircle}
                                title="Agent-Optimized Flows"
                                description="Enable zero-click buying. Map purchase intent to optimized checkout flows. Control which products and actions agents can access."
                                color="cyan"
                                delay={0.1}
                            />
                            <ValueCard
                                icon={BarChart}
                                title="Agent Traffic Intelligence"
                                description="Track agent vs human behavior. See conversion rates, purchase patterns, and identify optimization opportunities for agent-driven sales."
                                color="cyan"
                                delay={0.2}
                            />
                            <ValueCard
                                icon={Rocket}
                                title="Capture Agent Market"
                                description="Be discoverable to agent platforms. Enable seamless purchases without human clicks. Capture the 20%+ agentic traffic trend."
                                color="cyan"
                                delay={0.3}
                            />
                        </div>
                    </div>

                    {/* Developers Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                                For Agent Developers
                            </div>
                            <h3 className="text-2xl font-bold">Zero-Click Integration</h3>
                        </div>

                        <div className="grid gap-4">
                            <ValueCard
                                icon={Zap}
                                title="Instant E-Commerce Tools"
                                description="Enable zero-click buying in minutes. Pre-built purchase flows, cart management, and checkout tools for any e-commerce API."
                                color="purple"
                                delay={0.1}
                            />
                            <ValueCard
                                icon={Shield}
                                title="Purchase-Ready Tools"
                                description="Curated tools optimized for agent purchases. Handle payment, shipping, and inventory checks automatically."
                                color="purple"
                                delay={0.2}
                            />
                            <ValueCard
                                icon={RefreshCw}
                                title="Future-Proof Integration"
                                description="E-commerce APIs evolve. Your agent stays compatible. Zero maintenance as providers optimize for agent traffic."
                                color="purple"
                                delay={0.3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

