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
                                For API Owners
                            </div>
                            <h3 className="text-2xl font-bold">Control & Intelligence</h3>
                        </div>

                        <div className="grid gap-4">
                            <ValueCard
                                icon={CheckCircle}
                                title="Granular Control"
                                description="Define behavioral guardrails. Decide which endpoints become tools. Version control updates without breaking integration."
                                color="cyan"
                                delay={0.1}
                            />
                            <ValueCard
                                icon={BarChart}
                                title="Deep Intelligence"
                                description="Semantic usage patterns. Identify gaps and missing features. Compare agent vs human ROI directly."
                                color="cyan"
                                delay={0.2}
                            />
                            <ValueCard
                                icon={Rocket}
                                title="New Distribution"
                                description="Become discoverable to agent developers. 'AI-ready' positioning differentiates you in a crowded market."
                                color="cyan"
                                delay={0.3}
                            />
                        </div>
                    </div>

                    {/* Developers Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                                For Developers
                            </div>
                            <h3 className="text-2xl font-bold">Speed & Reliability</h3>
                        </div>

                        <div className="grid gap-4">
                            <ValueCard
                                icon={Zap}
                                title="Lightning Speed"
                                description="Eliminate weeks of custom tool definition. Single SDK call to integrate any platform instantly."
                                color="purple"
                                delay={0.1}
                            />
                            <ValueCard
                                icon={Shield}
                                title="Built-in Reliability"
                                description="Tools curated by providers. Auto-handling of auth, rate limits, and validation errors."
                                color="purple"
                                delay={0.2}
                            />
                            <ValueCard
                                icon={RefreshCw}
                                title="Zero Maintenance"
                                description="API updates don't break your agent. Opt-in to improvements without code changes."
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

