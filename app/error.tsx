"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto px-6 text-center"
            >
                {/* Error Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-[var(--primary)]/20 border border-red-500/30 mb-8"
                >
                    <FaExclamationTriangle className="text-5xl text-[var(--primary)]" />
                </motion.div>

                {/* Error Title */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Oops! Something Went Wrong
                </h1>

                <p className="text-zinc-400 text-lg mb-2">
                    We encountered an unexpected error. Don't worry, our team has been notified.
                </p>

                {/* Error Details - Only show in development */}
                {process.env.NODE_ENV === "development" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 p-4 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-left"
                    >
                        <p className="text-sm text-red-400 font-mono break-all">
                            {error.message}
                        </p>
                    </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <motion.button
                        onClick={reset}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-[var(--primary)] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,85,0,0.4)] transition-all"
                    >
                        <FaRedo />
                        Try Again
                    </motion.button>

                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-[var(--border)] hover:bg-white/5 transition-all"
                        >
                            <FaHome />
                            Back to Home
                        </motion.button>
                    </Link>
                </div>

                {/* Decorative Elements */}
                <div className="mt-12 flex justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 rounded-full bg-[var(--primary)]"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
