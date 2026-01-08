import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Search, Activity } from 'lucide-react';

export const Comparison = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const oldBlur = useTransform(scrollYProgress, [0.3, 0.5], ["blur(0px)", "blur(12px)"]);
    const oldOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.2]);
    const oldX = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    const newScale = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 1.05]);
    const newGlow = useTransform(scrollYProgress, [0.3, 0.5], ["0 0 0px rgba(0, 255, 255, 0)", "0 0 60px rgba(0, 255, 255, 0.3)"]);
    const newRotate = useTransform(scrollYProgress, [0, 0.5], [-2, 0]);
    const newX = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

    const oldCode = `{
  "openapi": "3.0.0",
  "info": { "title": "Shop API", "version": "1.0.0" },
  "paths": {
    "/products": {
      "get": {
        "parameters": [
          { "name": "limit", "in": "query", "schema": { "type": "integer" } },
          { "name": "offset", "in": "query", "schema": { "type": "integer" } }
        ]
      }
    }
  }
  // ... 480 more lines of schema hell
}`;

    return (
        <section id="comparison" ref={containerRef} className="py-24 px-4 overflow-hidden bg-black relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
                        <CheckCircle className="w-3 h-3" />
                        <span>Problem</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">Tools ≠ Endpoints</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        A single endpoint might become multiple specialized tools. OpenTooling analyzes your endpoints and creates AI-ready tools optimized for agent behavior, not just REST structure.
                    </p>
                </motion.div>

                <div className="relative h-[550px] flex items-center justify-center">
                    {/* Left: The Old Way */}
                    <motion.div
                        style={{ filter: oldBlur, opacity: oldOpacity, x: oldX }}
                        className="absolute left-0 w-full md:w-4/5 h-4/5 bg-red-950/20 backdrop-blur-md border border-red-500/30 rounded-3xl p-6 font-mono text-xs overflow-hidden shadow-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4 border-b border-red-500/20 pb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="text-red-400 uppercase tracking-widest font-bold">Raw OpenAPI</span>
                        </div>
                        <pre className="text-red-300/60 leading-relaxed">{oldCode}</pre>
                    </motion.div>

                    {/* Right: The New Way */}
                    <motion.div
                        style={{ scale: newScale, boxShadow: newGlow, rotate: newRotate, x: newX }}
                        className="absolute left-1/4 md:left-auto md:right-0 w-full md:w-4/5 h-1/2 bg-cyan-950/40 backdrop-blur-2xl border border-cyan-500/50 rounded-3xl p-8 flex flex-col justify-center font-mono text-sm z-10 shadow-2xl"
                    >
                        <div className="flex items-center gap-2 mb-6 border-b border-cyan-500/20 pb-4">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                            <span className="text-cyan-400 uppercase tracking-widest font-bold">Agent-Ready Tools</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                                <Search className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-100">search_products_by_intent</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                                <Activity className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-100">check_availability_realtime</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-cyan-500/20">
                            <span className="text-cyan-400/80 italic text-xs">// Semantically mapped from your endpoints</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

