"use client";

import { motion } from "motion/react";

export default function Loading() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10 animate-pulse" />

            <div className="flex flex-col items-center gap-8">
                {/* Logo/Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-orange-600 text-white font-bold text-3xl shadow-[0_0_30px_rgba(255,85,0,0.4)]"
                >
                    T
                </motion.div>

                {/* Animated Bars */}
                <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scaleY: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut",
                            }}
                            className="w-2 h-12 bg-gradient-to-t from-[var(--primary)] to-orange-400 rounded-full"
                        />
                    ))}
                </div>

                {/* Loading Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-zinc-400 font-medium tracking-wide"
                >
                    Loading excellence...
                </motion.p>

                {/* Spinning Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-transparent border-t-[var(--primary)] rounded-full"
                />
            </div>
        </div>
    );
}
