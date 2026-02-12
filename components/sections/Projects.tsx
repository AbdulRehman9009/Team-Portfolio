"use client"

import { motion } from "motion/react"
import { FaShoppingCart, FaLaptopCode, FaTasks, FaRobot, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa"

interface ProjectsProps {
    isVisible: boolean;
}

const Projects = ({ isVisible }: ProjectsProps) => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-featured online store with seamless user experience, secure Stripe payments, and real-time inventory management.",
            icon: FaShoppingCart,
            tags: ["Next.js", "Stripe", "Supabase"]
        },
        {
            title: "Personal Portfolio",
            description: "A sleek, high-performance portfolio website featuring 3D animations and a headless CMS for easy content updates.",
            icon: FaLaptopCode,
            tags: ["React", "Three.js", "Tailwind"]
        },
        {
            title: "Task Management App",
            description: "An intuitive productivity tool helping remote teams organize workflows with drag-and-drop Kanban boards.",
            icon: FaTasks,
            tags: ["Vue", "Firebase", "Redux"]
        },
        {
            title: "AI Student Assistant",
            description: "An NLP-powered chatbot designed to help students answer academic queries and generate personalized study plans.",
            icon: FaRobot,
            tags: ["Python", "OpenAI", "FastAPI"]
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section
            data-section="projects"
            className="scroll-snap-section py-24 bg-[var(--background)] relative overflow-hidden"
        >

            {/* --- Background Grid Pattern --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* --- Header --- */}
                <div className="mb-16 md:flex md:justify-between md:items-end">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-white"
                        >
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-400">Masterpieces</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-400 text-lg"
                        >
                            We don't just write code; we engineer digital solutions that scale, convert, and impress.
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden md:flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-white transition-colors"
                    >
                        View Github <FaExternalLinkAlt className="text-xs" />
                    </motion.button>
                </div>

                {/* --- Projects Grid --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--primary)]/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon & Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-lg bg-zinc-900 border border-white/10 text-[var(--primary)] group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                                        <project.icon size={28} />
                                    </div>
                                    <div className="p-2 rounded-full border border-white/10 text-zinc-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                        <FaArrowRight />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed mb-6 grow">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-full border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <button className="text-white border-b border-[var(--primary)] pb-1">View All Projects</button>
                </div>
            </div>
        </section>
    )
}

export default Projects