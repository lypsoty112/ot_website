import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity } from 'lucide-react';

export const Dashboard = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const intents = [
        { label: "Price Comparison", color: "bg-cyan-500", x: "20%", y: "30%", size: "w-32 h-32", delay: 0 },
        { label: "Bulk Order", color: "bg-blue-600", x: "60%", y: "45%", size: "w-40 h-40", delay: 0.2 },
        { label: "Exploration", color: "bg-purple-500", x: "35%", y: "60%", size: "w-28 h-28", delay: 0.1 },
        { label: "Inventory Check", color: "bg-indigo-400", x: "75%", y: "20%", size: "w-24 h-24", delay: 0.3 },
    ];

    const yMove = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

    return (
        <section id="dashboard" ref={containerRef} className="py-32 px-4 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Monitor & Learn
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
                        Agent behavior reveals how end-users *think* about your product. <br />
                        Extract business learnings traditional analytics miss.
                    </p>
                </div>

                <motion.div
                    style={{ rotateX, y: yMove }}
                    className="relative aspect-video w-full bg-[#0a0a0a] rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] p-12 group perspective-1000"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />

                    <div className="flex items-center justify-between mb-12 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="flex gap-2">
                                <div className="w-3.5 h-3.5 rounded-full bg-red-500/50" />
                                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/50" />
                                <div className="w-3.5 h-3.5 rounded-full bg-green-500/50" />
                            </div>
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-gray-500">
                                insights.opentoolset.io/realtime/intents
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-gray-400">Live Feedback</div>
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full border-t border-white/10 pt-12">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-8">Agent Intent Landscape</h4>

                        {/* Cluster Orbs */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {intents.map((intent, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`absolute ${intent.size} ${intent.color} rounded-full mix-blend-screen blur-[80px] opacity-10`}
                                    style={{ left: intent.x, top: intent.y }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        x: [0, 20, 0],
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        duration: 6 + idx,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}

                            {intents.map((intent, idx) => (
                                <motion.div
                                    key={`label-${idx}`}
                                    className="absolute p-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col items-center gap-3 group-hover:scale-110 transition-transform pointer-events-auto cursor-pointer"
                                    style={{ left: intent.x, top: intent.y }}
                                    whileHover={{ y: -10, boxShadow: '0 20px 60px -15px rgba(0,210,255,0.3)', borderColor: 'rgba(255,255,255,0.3)' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: intent.delay }}
                                >
                                    <div className={`w-3 h-3 rounded-full ${intent.color} shadow-[0_0_15px_${intent.color}]`} />
                                    <span className="text-base font-bold text-white">{intent.label}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full ${intent.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '70%' }}
                                                transition={{ duration: 2, delay: 0.5 }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-mono tracking-tighter">{(Math.random() * 100).toFixed(0)} calls</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Grid lines */}
                        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none opacity-[0.03]">
                            {Array.from({ length: 144 }).map((_, i) => (
                                <div key={i} className="border-[0.5px] border-white" />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

