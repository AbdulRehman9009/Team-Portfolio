"use client"

import { FaWhatsapp } from "react-icons/fa"
import { motion } from "motion/react"

export default function WhatsAppButton() {
    const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/923152959393"
    const whatsappMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE
    const fullUrl = whatsappMessage ? `${whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}` : whatsappUrl

    return (
        <motion.a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />


            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
        </motion.a>
    )
}
