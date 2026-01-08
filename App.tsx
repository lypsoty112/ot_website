import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProgressBar } from './components/ui/Shared';
import { FloatingOrb } from './components/ui/FloatingOrb';
import { Hero } from './components/Hero';
import { Hypothesis } from './components/Hypothesis';
import { Comparison } from './components/Comparison';
import { Solution } from './components/Solution';
import { ValueProps } from './components/ValueProps';
import { Dashboard } from './components/Dashboard';
import { Playground } from './components/Playground';
import { Footer } from './components/Footer';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white font-sans">
      <ProgressBar />
      <FloatingOrb />

      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between pointer-events-none transition-all duration-300">
        <div
          className="flex items-center gap-3 pointer-events-auto cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div
            whileHover={{ rotate: 90, scale: 1.1 }}
            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black text-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <img src="/logo.png" alt="OpenTooling" width={40} height={40} />
          </motion.div>
          <span className="font-black tracking-tighter text-2xl group-hover:text-cyan-400 transition-colors hidden sm:block">OpenTooling</span>
        </div>

        <nav className="flex items-center gap-8 pointer-events-auto bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-2xl">
          <button onClick={() => scrollToSection('solution')} className="text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest hidden md:block">
            How it Works
          </button>
          <button onClick={() => scrollToSection('value-props')} className="text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest hidden md:block">
            Value
          </button>
          <button onClick={() => scrollToSection('playground')} className="text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest hidden md:block">
            Developers
          </button>

          <button onClick={() => window.open('https://brevisai.notion.site/2e1c2084afbe805ba10af47b550e8a17?pvs=105', '_blank')} className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Join Waitlist
          </button>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <Hypothesis />
        <Comparison />
        <Solution />
        <ValueProps />
        <Dashboard />
        <Playground />
        <Footer />
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase font-black tracking-[0.5em] bg-black">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="opacity-50">&copy; 2025 Maarten Boon & BREVIS AI</p>
          <div className="flex gap-12 opacity-50">
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">GitHub</a>
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors hover:opacity-100">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
