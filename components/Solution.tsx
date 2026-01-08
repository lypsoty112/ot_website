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
                                        Provide your base URL and auth. Define behavioral goals (e.g., "Active purchase" vs "Browsing"). We generate specialized tools from your endpoints.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <BarChart className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">2. Monitor Behavior</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        See how agents use your tools. Success rates, failure patterns, and semantic intent. Understand how end-users *think* about your product.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Rocket className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">3. Auto-Improve</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Tools update automatically based on usage data. Versioning keeps existing agents stable while new integrations get the best tools.
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
                                    <h3 className="text-2xl font-bold mb-4">1. Integrate in Minutes</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        One SDK for any supported API. Single line of code to add tools. No more weeks of manual integration work.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Shield className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">2. Auth & Curation</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        We handle OAuth and keys securely. You get curated, purpose-built tools with typed parameters, not raw endpoints.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <RefreshCw className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">3. Maintenance-Free</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        API updates don't break your agent. We handle versioning and compatibility. Opt-in to improvements without refactoring.
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

