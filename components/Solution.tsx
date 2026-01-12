import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, BarChart, Rocket, Zap, Shield, RefreshCw } from 'lucide-react';

export const Solution = () => {
    const [activeTab, setActiveTab] = useState<'owner' | 'dev'>('owner');

    return (
        <section id="solution" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(100,0,255,0.05)_0%,_transparent_50%)]" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">How it Works</h2>
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => setActiveTab('owner')}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'owner'
                                    ? 'bg-white text-black scale-105 shadow-lg shadow-cyan-500/20'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            For API Owners
                        </button>
                        <button
                            onClick={() => setActiveTab('dev')}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'dev'
                                    ? 'bg-white text-black scale-105 shadow-lg shadow-purple-500/20'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            For Developers
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'owner' ? (
                        <motion.div
                            key="owner"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-12"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Database className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">1. Connect & Define</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Connect your e-commerce API. Define purchase flows and product access rules. We generate zero-click buying tools optimized for agent behavior.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <BarChart className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">2. Track Agent Traffic</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Monitor agent-driven purchases. Conversion rates, zero-click success, and purchase patterns. Compare agent vs human buying behavior.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Rocket className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">3. Optimize for Agents</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Purchase flows improve based on agent behavior. Versioning keeps existing agents stable while new integrations get optimized zero-click tools.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dev"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-12"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Zap className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">1. Enable Zero-Click Buying</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        One SDK for any e-commerce API. Enable zero-click purchases in minutes. No weeks of custom checkout flow integration.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Shield className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">2. Purchase-Ready Tools</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Secure payment handling and auth. Get curated purchase tools: add_to_cart, checkout, track_order - not raw API endpoints.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <RefreshCw className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">3. Future-Proof</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        E-commerce APIs evolve. Your zero-click buying flows stay compatible. Opt-in to new purchase optimizations without refactoring.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

