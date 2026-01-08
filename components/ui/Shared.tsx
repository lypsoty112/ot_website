import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';

export const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["#ffffff", "#ff0055", "#00d2ff", "#7700ff", "#00ffcc"]
    );

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
            style={{ scaleX, backgroundColor }}
        />
    );
};

export const Tooltip = ({ text, children }: { text: string; children?: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                        className="absolute z-50 bottom-full mb-2 left-1/2 w-48 p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-xs font-medium text-white shadow-2xl pointer-events-none"
                    >
                        {text}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const BackgroundParticles = ({ count = 50, color = "rgba(255, 255, 255, 0.3)" }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: count }).map((_, i) => {
                const size = Math.random() * 2 + 1;
                const initialX = Math.random() * 100;
                const initialY = Math.random() * 100;
                const duration = 10 + Math.random() * 20;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: size,
                            height: size,
                            left: `${initialX}%`,
                            top: `${initialY}%`,
                            backgroundColor: color,
                            boxShadow: `0 0 10px ${color}`
                        }}
                        animate={{
                            y: [0, -200, 0],
                            x: [0, (Math.random() - 0.5) * 100, 0],
                            opacity: [0.1, 0.5, 0.1],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                );
            })}
        </div>
    );
};

