import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundParticles } from './ui/Shared';
import { Search, Monitor, Settings, Zap } from 'lucide-react';

export const Footer = () => {
    return (
        <section id="footer" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden py-32 bg-black">
            {/* Intense Black Hole Effect Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="w-[150%] h-[150%] opacity-40 blur-[100px]"
                    style={{
                        background: 'radial-gradient(circle at center, #00d2ff 0%, #7700ff 30%, transparent 60%)'
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 360],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <BackgroundParticles count={150} color="rgba(255, 255, 255, 0.6)" />
                {Array.from({ length: 80 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-px h-[200px] bg-gradient-to-t from-transparent via-cyan-400/20 to-transparent"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scaleY: [0.5, 1.5, 0.5]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="z-10 text-center max-w-5xl"
            >
                <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight tracking-tighter">
                    The web is moving from <br /> <span className="text-cyan-400">'Click'</span> to <span className="italic text-gray-500 underline decoration-cyan-400/30 underline-offset-8">'Intent.'</span>
                </h2>
                <p className="text-2xl md:text-4xl text-gray-400 mb-16 font-light">Is your platform ready?</p>

                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-24 rounded-[4rem] shadow-[0_0_100px_-20px_rgba(0,210,255,0.2)]">
                    <div className="flex flex-col gap-10 items-center">
                        <div className="relative group w-full max-w-xl">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative flex items-center p-1.5 bg-black rounded-2xl overflow-hidden border border-white/20">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="bg-transparent border-none focus:ring-0 text-white px-8 py-5 w-full outline-none text-lg"
                                />
                                <button onClick={() => window.open('https://brevisai.notion.site/2e1c2084afbe805ba10af47b550e8a17?pvs=105', '_blank')} className="bg-white text-black font-black px-12 py-5 rounded-xl hover:bg-cyan-100 transition-all hover:scale-105 active:scale-95 whitespace-nowrap text-lg uppercase tracking-widest">
                                    Get Access
                                </button>
                            </div>
                        </div>
                        <label className="flex items-center gap-4 text-gray-400 cursor-pointer hover:text-white transition-colors group">
                            <input type="checkbox" className="w-6 h-6 rounded border-white/20 bg-white/5 checked:bg-cyan-500 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-black" />
                            <span className="text-base font-bold uppercase tracking-widest group-hover:tracking-[0.1em] transition-all">I want to integrate this into a production app</span>
                        </label>
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-16 text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
                    <div className="flex flex-col items-center gap-4 group cursor-help">
                        <Search className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                        <span>Explore</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group cursor-help">
                        <Monitor className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                        <span>Monitor</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group cursor-help">
                        <Settings className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                        <span>Configure</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group cursor-help">
                        <Zap className="w-6 h-6 group-hover:text-yellow-400 transition-colors" />
                        <span>Scale</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

