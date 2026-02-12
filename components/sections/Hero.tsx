"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image" // Ensure you have an image at /public/hero.png
import { FaWhatsapp, FaArrowRight } from "react-icons/fa"

interface HeroProps {
    isVisible: boolean;
}

const Hero = ({ isVisible }: HeroProps) => {
    const textOptions = ["Web Development", "AUTOMATION", "UI/UX Design", "SEO Optimization"]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % textOptions.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [textOptions.length])

    return (
        <section
            data-section="hero"
            className="scroll-snap-section relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)] pt-20 md:pt-0"
        >

            {/* --- Background Gradients (The Glow) --- */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* --- Left Side: Content --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 z-10"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-white/5 w-fit backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                        <span className="text-xs font-medium text-zinc-400 tracking-wider uppercase">
                            Available for new projects
                        </span>
                    </div>

                    {/* Headline with Changing Text */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                        Turn Your Ideas Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-400">
                            High Performing
                        </span>
                        <div className="h-14 md:h-20 overflow-hidden relative mt-2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "backOut" }}
                                    className="absolute top-0 left-0 text-white"
                                >
                                    {textOptions[index]}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                        We are a team of passionate developers crafting exceptional digital experiences.
                        From stunning websites to intuitive mobile apps, we bring your vision to life
                        with innovation and code.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/923152959393"} target="_blank" rel="noopener noreferrer">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--primary)] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,85,0,0.4)] transition-all transform hover:-translate-y-1">
                                <FaWhatsapp className="text-xl" />
                                Chat on WhatsApp
                            </button>
                        </a>

                        <a href="#projects">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-[var(--border)] hover:bg-white/5 transition-all group">
                                View Projects
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* --- Right Side: Image (Hidden on Mobile) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block relative w-full h-[500px]"
                >
                    {/* Abstract Shapes behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-transparent opacity-20 rounded-[2rem] rotate-3 transform scale-95" />

                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm">
                        {/* NOTE: Make sure 'hero.png' is in your /public folder. 
                            If you don't have one yet, this div acts as a placeholder.
                        */}
                        <Image
                            src="/hero.png"
                            alt="Team working on digital product"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />

                        {/* Floating Card Overlay */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-8 left-8 right-8 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                                ✓
                            </div>
                            <div>
                                <p className="text-white font-bold">100+ Projects</p>
                                <p className="text-xs text-zinc-400">Successfully Delivered</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Hero