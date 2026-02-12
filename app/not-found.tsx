"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto px-6 text-center"
            >
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <motion.h1
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="text-[150px] md:text-[250px] font-bold leading-none"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-orange-400 to-[var(--primary)] bg-[length:200%_auto] animate-gradient">
                            404
                        </span>
                    </motion.h1>

                    {/* Floating Search Icon */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                    >
                        <FaSearch className="text-3xl text-[var(--primary)]" />
                    </motion.div>
                </div>

                {/* Content */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Page Not Found
                </h2>

                <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                    Looks like you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Action Button */}
                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-[var(--primary)] text-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,85,0,0.4)] hover:shadow-[0_0_40px_rgba(255,85,0,0.6)] transition-all"
                    >
                        <FaHome className="text-xl" />
                        Return Home
                    </motion.button>
                </Link>

                {/* Decorative Grid */}
                <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto opacity-20">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                            className="h-2 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full"
                        />
                    ))}
                </div>
            </motion.div>

            {/* Add gradient animation to CSS */}
            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </div>
    );
}
