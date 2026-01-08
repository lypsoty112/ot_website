import React from 'react';
import { motion } from 'framer-motion';

export const Hypothesis = () => {
    return (
        <section id="hypothesis" className="py-24 px-4 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                            The Agentic Gap
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            The web is shifting to an agentic layer led by platforms like Comet and Manus.
                            <br /><br />
                            <strong className="text-white">API Providers</strong> have no visibility or control over agents.
                            <br />
                            <strong className="text-white">Developers</strong> spend weeks manually integrating each API.
                        </p>
                        <div className="p-6 bg-cyan-950/30 border border-cyan-500/20 rounded-2xl backdrop-blur-sm">
                            <p className="text-lg text-cyan-100 font-medium italic">
                                "The solution is an agent access layer that turns any REST API into agent-ready tools in minutes."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bridge Visualization */}
                <div className="flex-1 w-full h-[400px] relative flex items-center justify-center">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10 rounded-3xl" />

                    {/* Left Side: Chaos (Agents) */}
                    <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full flex flex-col justify-center items-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                animate={{
                                    x: [0, Math.random() * 40 - 20, 0],
                                    y: [0, Math.random() * 40 - 20, 0],
                                }}
                                transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                            />
                        ))}
                        <span className="text-purple-400 font-bold tracking-widest uppercase text-xs">Agents</span>
                    </motion.div>

                    {/* Right Side: Walls (APIs) */}
                    <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 flex flex-col justify-center items-center gap-2 border-l-2 border-dashed border-gray-700 pl-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="w-full h-8 bg-cyan-900/20 border border-cyan-500/30 rounded mb-2" />
                        <div className="w-full h-8 bg-cyan-900/20 border border-cyan-500/30 rounded mb-2" />
                        <div className="w-full h-8 bg-cyan-900/20 border border-cyan-500/30 rounded" />
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mt-4">REST APIs</span>
                    </motion.div>

                    {/* Center: The Bridge */}
                    <motion.div
                        className="absolute left-1/3 right-1/3 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <motion.div
                            className="absolute top-1/2 left-1/2 bg-black border border-white/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap z-20"
                            initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                            whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            transition={{ delay: 1.2 }}
                        >
                            opentoolset
                        </motion.div>

                        {/* Flowing Data Particles */}
                        <motion.div
                            className="absolute top-0 bottom-0 w-4 bg-white blur-sm rounded-full"
                            animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

