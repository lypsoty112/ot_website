import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight, CheckCircle, Code2 } from 'lucide-react';

export const Playground = () => {
    const [lang, setLang] = useState('ts');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const code: Record<string, string> = {
        ts: `import { opentoolset } from "@opentoolset/sdk";

const agent = new opentoolset({
  apiKey: process.env.OT_KEY,
  namespace: "ecommerce"
});

const result = await agent.execute(
  "Find the best-selling blue shirt"
);

console.log(result.data);`,
        py: `from opentoolset import Agent

agent = Agent(
    api_key="ot_...",
    namespace="ecommerce"
)

result = agent.execute(
    "Find the best-selling blue shirt"
)

print(result.data)`,
        go: `package main

import "github.com/opentoolset/sdk-go"

func main() {
    agent := opentoolset.NewAgent("ecommerce")
    
    res, _ := agent.Execute(
        "Find the best-selling blue shirt",
    )
    
    fmt.Println(res.Data)
}`
    };

    return (
        <section id="playground" ref={containerRef} className="py-32 px-4 bg-zinc-950/50">
            <motion.div
                style={{ scale, opacity }}
                className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center"
            >
                <div className="flex-1 space-y-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs font-bold tracking-widest uppercase">
                        <Terminal className="w-4 h-4" />
                        <span>Developer Sandbox</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">Implement in minutes, <br /> not weeks.</h2>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-lg">
                        Add opentoolset's SDK to your agent. Browse available APIs and add them with a single line of code.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            'No per-API auth logic',
                            'Tools stay updated automatically',
                            'Curated, agent-optimized tools',
                            'Typed parameters & error handling'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 text-gray-300 font-medium"
                            >
                                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                                </div>
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full max-w-2xl relative">
                    <div className="absolute -inset-10 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                        <div className="flex items-center justify-between px-8 py-5 bg-white/5 border-b border-white/10">
                            <div className="flex gap-3">
                                {['ts', 'py', 'go'].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => setLang(l)}
                                        className={`px-5 py-2 rounded-xl text-xs font-black uppercase transition-all tracking-wider ${lang === l ? 'bg-white text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {l === 'ts' ? 'TypeScript' : l === 'py' ? 'Python' : 'Go'}
                                    </button>
                                ))}
                            </div>
                            <button
                                className="text-[10px] text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 uppercase font-black tracking-[0.2em]"
                                onClick={() => {
                                    navigator.clipboard.writeText(code[lang]);
                                }}
                            >
                                <Code2 className="w-4 h-4" />
                                Copy Source
                            </button>
                        </div>
                        <div className="p-10 font-mono text-sm overflow-x-auto min-h-[400px] bg-[#020202]">
                            <AnimatePresence mode="wait">
                                <motion.pre
                                    key={lang}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="text-gray-300 leading-relaxed"
                                >
                                    {code[lang].split('\n').map((line, i) => (
                                        <div key={i} className="flex gap-8 group">
                                            <span className="text-zinc-800 text-right w-5 shrink-0 select-none group-hover:text-zinc-600 transition-colors">{i + 1}</span>
                                            <span className="whitespace-pre">{line}</span>
                                        </div>
                                    ))}
                                </motion.pre>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

