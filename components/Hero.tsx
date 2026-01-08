import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundParticles, Tooltip } from './ui/Shared';

export const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Dynamic Warp Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <BackgroundParticles count={80} color="rgba(0, 210, 255, 0.2)" />
                <motion.div
                    className="absolute w-full h-full"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(0, 210, 255, 0.05) 0%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute border border-cyan-500/10 rounded-full"
                        initial={{ width: 0, height: 0, opacity: 0.5 }}
                        animate={{
                            width: ['0px', '1600px'],
                            height: ['0px', '1600px'],
                            opacity: [0.4, 0]
                        }}
                        transition={{
                            duration: 5,
                            delay: i * 1.6,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>

            <motion.div
                style={{ y: textY, opacity: textOpacity, scale }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 text-center max-w-5xl"
            >
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-cyan-400">
                    The Agent Access Layer
                </span>
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent leading-[1.1]">
                    Turn your REST API into <br /> an AI Agent platform.
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                    The solution that turns any REST API into agent-ready tools in minutes. Eliminate integration work for developers while giving API providers the observability and control they're missing.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="relative group w-full max-w-md">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative flex items-center p-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none focus:ring-0 text-white px-6 py-3 w-full outline-none placeholder:text-gray-600"
                            />
                            <button onClick={() => window.open('https://brevisai.notion.site/2e1c2084afbe805ba10af47b550e8a17?pvs=105', '_blank')} className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors whitespace-nowrap">
                                Start Building
                            </button>
                        </div>
                    </div>
                    <button 
                        onClick={() => window.open('https://www.notion.so/brevisai/OpenToolset-Hypothesis-doc-2e1c2084afbe803fb63bf9fbd729a295?source=copy_link', '_blank')}
                        className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold hover:bg-white/10 transition-colors whitespace-nowrap"
                    >
                        Read Hypothesis (5 min)
                    </button>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 text-gray-600 w-fit mx-auto"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-[10px] uppercase font-bold tracking-widest">Scroll to explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
            </motion.div>
        </section>
    );
};

