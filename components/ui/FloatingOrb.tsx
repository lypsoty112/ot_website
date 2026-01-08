import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const FloatingOrb = () => {
    const { scrollY } = useScroll();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const orbX = useSpring(mousePos.x - 20, { stiffness: 50, damping: 20 });
    const orbY = useSpring(mousePos.y - 20, { stiffness: 50, damping: 20 });

    return (
        <motion.div
            className="fixed z-40 pointer-events-none w-10 h-10 rounded-full blur-md opacity-70"
            style={{
                left: orbX,
                top: orbY,
                background: 'radial-gradient(circle, #00d2ff 0%, #3a7bd5 100%)',
                boxShadow: '0 0 20px 5px rgba(0, 210, 255, 0.5)'
            }}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};

