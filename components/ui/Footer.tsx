"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const footerLinks = [
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '#projects' },
    { name: 'About', link: '#about' },
    { name: 'Contact', link: '#contact' },
  ]

  const name = process.env.NEXT_PUBLIC_SITE_NAME
  const firstLetter = name?.charAt(0)
  const firstWord = name?.split(" ")[0]
  // const lastWord = name?.split(" ")[1]

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* --- BRAND SECTION --- */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--primary)] to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                {firstLetter}
              </div>
              <span className="text-xl font-bold tracking-wide text-white">
                {firstWord}<span className="text-[var(--primary)]">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Building high-performance digital experiences for startups and visionary brands. Let&apos;s code the future together.
            </p>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-zinc-400 hover:text-[var(--primary)] hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT & SOCIALS --- */}
          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Have a project in mind? <br />
              <span className="text-white font-medium">hello@teamportfolio.com</span>
            </p>

            <div className="flex flex-wrap gap-4">
              {/* WhatsApp - Most Prominent, Always Visible */}
              <motion.a
                href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/923152959393"}${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ? `?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE)}` : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </motion.a>

              {/* LinkedIn - Desktop Only */}
              {process.env.NEXT_PUBLIC_TEAM_LINKEDIN && (
                <motion.a
                  href={process.env.NEXT_PUBLIC_TEAM_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 items-center justify-center text-zinc-400 hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-300"
                  aria-label="Visit LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
              )}

              {/* GitHub - Desktop Only */}
              {process.env.NEXT_PUBLIC_TEAM_GITHUB && (
                <motion.a
                  href={process.env.NEXT_PUBLIC_TEAM_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 items-center justify-center text-zinc-400 hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-300"
                  aria-label="Visit GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Team Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-sm">Privacy Policy</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-400 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer