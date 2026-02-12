"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', link: 'https://github.com', icon: FaGithub },
    { name: 'LinkedIn', link: 'https://linkedin.com', icon: FaLinkedin },
    { name: 'WhatsApp', link: 'https://whatsapp.com', icon: FaWhatsapp },
  ]

  const footerLinks = [
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '/projects' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <footer className="bg-(--background) border-t border-(--border) pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-(--primary)/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* --- BRAND SECTION --- */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-(--primary) to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    T
                </div>
                <span className="text-xl font-bold tracking-wide text-white">
                    TEAM<span className="text-(--primary)">.</span>
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
                  <Link 
                    href={item.link}
                    className="text-zinc-400 hover:text-(--primary) hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
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
            
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-(--primary) hover:bg-(--primary) transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
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