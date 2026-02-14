"use client"

import { motion, Variants } from "motion/react"
import Image from "next/image"


interface TeammembersProps {
    isVisible: boolean;
}

const Teammembers = ({ isVisible }: TeammembersProps) => {
    const members = [
        {
            name: "AbdulRahman",
            role: "Full Stack Developer",
            image: "/team/avatar.png",
            description: "Expertise in both frontend and backend technologies, building seamless user experiences."
        },
        {
            name: "Javeria",
            role: "UI/UX Designer",
            image: "/team/avatar (1).png",
            description: "Specializes in creating visually stunning interfaces with a keen eye for user-centric detail."
        },
        {
            name: "Ali",
            role: "SEO Specialist",
            image: "/team/avatar (2).png",
            description: "Helps businesses improve online visibility using data-driven organic traffic strategies."
        },
        {
            name: "Abdullah",
            role: "Automation Engineer",
            image: "/team/avatar.png",
            description: "Focuses on streamlining processes and improving efficiency with scalable automation tools."
        },
        {
            name: "Sara",
            role: "Data Analyst",
            image: "/team/avatar (3).png",
            description: "Interprets complex data sets to provide actionable insights for informed decision making."
        },
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    // Fix 2: Add 'as const' to the ease property so TS knows it's a specific literal, not just a string
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    }

    return (
        <section
            id="team"
            data-section="team"
            className="scroll-snap-section py-20 bg-[var(--background)] relative overflow-hidden"
        >
            {/* Fix 3: Updated Tailwind arbitrary values to standard scale (w-200 = 800px, h-150 = 600px) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* --- Section Header --- */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-white"
                    >
                        Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-orange-400">Minds</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg"
                    >
                        We are a collective of passionate innovators committed to delivering exceptional digital results.
                    </motion.p>
                </div>

                {/* --- Team Grid --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                >
                    {members.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={cardVariants}
                            className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(255,85,0,0.3)]"
                        >
                            {/* Image Container with Glow */}
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <div className="absolute inset-0 bg-[var(--primary)] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="relative rounded-full border-2 border-white/10 group-hover:border-[var(--primary)] transition-colors duration-300 object-cover w-full h-full"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--primary)] transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                                    {member.role}
                                </p>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Teammembers