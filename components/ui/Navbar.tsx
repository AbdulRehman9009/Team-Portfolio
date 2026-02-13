"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const name = process.env.NEXT_PUBLIC_SITE_NAME
    const firstLetter = name?.charAt(0)
    const firstWord = name?.split(" ")[0]
    const lastWord = name?.split(" ")[1]

    const navItems = [
        { name: 'Team', link: '#team' },
        { name: 'Projects', link: '#projects' },
        { name: 'About', link: '#about' },
        { name: 'Contact', link: '#contact' },
    ]

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
    }

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[var(--glass-border)]"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* --- BRANDING --- */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--primary)] to-orange-600 text-white font-bold text-xl shadow-[0_0_15px_rgba(255,85,0,0.4)] group-hover:shadow-[0_0_25px_rgba(255,85,0,0.6)] transition-all duration-300">
                            {firstLetter}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-wide text-foreground leading-none">
                                {firstWord}
                            </span>
                            <span className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
                                {lastWord}
                            </span>
                        </div>
                    </Link>

                    {/* --- DESKTOP MENU (With Liquid Spotlight) --- */}
                    <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-md">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative px-5 py-2 text-sm font-medium transition-colors duration-300"
                            >
                                {/* The "Spotlight" Effect */}
                                {hoveredIndex === index && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 bg-[var(--primary)]/20 rounded-full -z-10 mix-blend-screen"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                <span className={hoveredIndex === index ? "text-[var(--primary)]" : "text-zinc-400 hover:text-white"}>
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* --- CTA BUTTON --- */}
                    <div className="hidden md:block">
                        <motion.a
                            href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/923152959393"}${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ? `?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE)}` : ""}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[var(--primary)] text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_-5px_rgba(255,85,0,0.5)] hover:shadow-[0_0_30px_-5px_rgba(255,85,0,0.7)] transition-all"
                        >
                            Let&apos;s Talk
                        </motion.a>
                    </div>

                    {/* --- MOBILE TOGGLE --- */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-400 hover:text-white focus:outline-none p-2"
                        >
                            <span className="sr-only">Open menu</span>
                            <div className="w-6 flex flex-col items-end gap-1.5">
                                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`} />
                                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE DROPDOWN --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-[var(--background)] border-b border-white/10 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-light text-zinc-300 hover:text-[var(--primary)] hover:pl-4 transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full text-center bg-[var(--primary)] text-black font-bold py-4 rounded-xl text-lg"
                            >
                                Let&apos;s Talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar