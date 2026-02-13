"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa"

interface ContactProps {
    isVisible: boolean;
}

const Contact = ({ isVisible }: ContactProps) => {
    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Project Inquiry",
        message: ""
    })

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    // Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Handle Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error('Failed to send message')

            // Success Action
            setStatus("success")
            setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" })

            setTimeout(() => setStatus("idle"), 5000)

        } catch (error) {
            console.error(error);
            setStatus("error")
            setErrorMessage("Something went wrong. Please try again.")
        }
    }

    const contactMethods = [
        {
            type: "WhatsApp",
            value: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+92 315 295 9393",
            icon: FaWhatsapp,
            link: `${process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/923152959393"}${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ? `?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE)}` : ""}`,
            color: "group-hover:text-green-400"
        },
        {
            type: "Email",
            value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@teamportfolio.com",
            icon: FaEnvelope,
            link: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@teamportfolio.com"}`,
            color: "group-hover:text-blue-400"
        },
    ]

    return (
        <section
            data-section="contact"
            className="scroll-snap-section relative py-24 bg-[var(--background)] overflow-hidden"
            id="contact"
        >

            {/* --- Background Elements --- */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px] -z-10 translate-y-1/2 -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* --- Section Header --- */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-white"
                    >
                        Let&apos;s Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-400">Conversation</span>
                    </motion.h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Ready to transform your digital presence? Reach out to us for collaborations, inquiries, or just to say hi.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* --- LEFT: Contact Cards --- */}
                    <div className="space-y-6">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.type}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className={`w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center text-2xl text-zinc-400 ${method.color} transition-colors relative z-10 border border-white/5`}>
                                    <method.icon />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{method.type}</h3>
                                    <p className="text-white font-semibold text-lg group-hover:text-[var(--primary)] transition-colors">{method.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* --- RIGHT: Message Form --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative"
                    >
                        {/* Success Overlay */}
                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20 bg-zinc-900/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-8"
                                >
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                                        <FaCheckCircle className="text-4xl text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-zinc-400">We&apos;ll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-[var(--primary)] hover:text-white underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-400">Name</label>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-zinc-400">Email</label>
                                    <input
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-zinc-400">Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all appearance-none"
                                >
                                    <option value="Project Inquiry">Project Inquiry</option>
                                    <option value="General Question">General Question</option>
                                    <option value="Partnership">Partnership</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-zinc-400">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-[var(--primary)] hover:bg-orange-600 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    <>
                                        <FaSpinner className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Contact