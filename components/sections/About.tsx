"use client";

import { motion } from "motion/react";
import { FaWhatsapp, FaCheckCircle, FaRocket, FaUsers, FaCode } from "react-icons/fa";

interface AboutProps {
  isVisible: boolean;
}

const About = ({ isVisible }: AboutProps) => {
  // SEO-Rich Trust Points
  const features = [
    "Custom High-Performance Code",
    "SEO-First Architecture",
    "User-Centric UI/UX Design",
    "Scalable Automation Systems"
  ];

  const stats = [
    { label: "Years Experience", value: "4+", icon: FaRocket },
    { label: "Projects Shipped", value: "50+", icon: FaCode },
    { label: "Happy Clients", value: "100%", icon: FaUsers },
  ]

  return (
    <section
      data-section="about"
      className="scroll-snap-section relative py-24 bg-[var(--background)] overflow-hidden"
      id="about"
    >

      {/* --- Background Ambient Glow --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* --- LEFT: SEO Content --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              More Than Just Developers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-400">
                We Are Growth Partners.
              </span>
            </h2>

            {/* SEO Optimized Paragraph */}
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              At <strong className="text-white">TeamWeb</strong>, we don&apos;t just write code; we engineer digital ecosystems designed to scale.
              We are a collective of elite <span className="text-zinc-300">Full Stack Developers, Creative Designers, and SEO Strategists</span> united by a single goal:
              transforming complex business challenges into intuitive, high-converting digital solutions.
              <br /><br />
              Whether you are a startup looking for a lightning-fast launch or an enterprise seeking
              process automation, our data-driven approach ensures your investment delivers real ROI.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[var(--primary)] text-lg shrink-0" />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-[var(--primary)] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_-5px_rgba(255,85,0,0.5)] hover:bg-orange-600 transition-all"
              >
                Let&apos;s Build Together
                <FaWhatsapp className="text-xl" />
              </motion.button>
            </a>
          </motion.div>

          {/* --- RIGHT: Unique Stats Grid (Visual Interest) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract Decorative Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-transparent opacity-20 rounded-3xl rotate-6 scale-105 blur-lg" />

            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 shadow-lg">
                      <stat.icon className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
                        {stat.value}
                      </h3>
                      <p className="text-zinc-500 font-medium uppercase tracking-wider text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Trust Badge */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-zinc-400 text-sm italic">
                  &quot;They transformed our outdated site into a lead-generating machine.&quot;
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-500 text-sm">★★★★★</div>
                  <span className="text-xs text-zinc-500">- Verified Client</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About