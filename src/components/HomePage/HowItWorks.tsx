"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeInUp, StaggerContainer } from "../common/Animations"
import TextAnimation from "../common/TextAnimation"

import GradientContainer from "../common/GradientContainer"

// Icons matching the reference image closely but styled for dark mode
const RequestServiceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M6 16v-6a2 2 0 0 1 2-2h8" />
        <line x1="18" y1="8" x2="18" y2="12" />
    </svg>
)

const SetupIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M8 11l3 3 5-5" />
    </svg>
)

const UploadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12v9" />
        <path d="M8 17l4 4 4-4" />
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
        <polyline points="16 16 12 12 8 16" transform="rotate(180 12 14)" />
    </svg>
)

const WorkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
        <path d="M10 9H8"></path>
    </svg>
)

const TrackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
)

const steps = [
    {
        title: "Request a service",
        description: "Get a quote or start a company.",
        icon: <RequestServiceIcon />,
    },
    {
        title: "We set everything up",
        description: "Portal, systems, and your team.",
        icon: <SetupIcon />,
    },
    {
        title: "Upload documents",
        description: "Or confirm no changes.",
        icon: <UploadIcon />,
    },
    {
        title: "We do the work",
        description: "Accounting, audit, payroll, compliance.",
        icon: <WorkIcon />,
    },
    {
        title: "Track everything",
        description: "Deadlines, status, documents.",
        icon: <TrackIcon />,
    },
]

const HowItWorks = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="w-full">
            <GradientContainer
                backgroundColor="bg-primary"
                showRadials={true}
                className="py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
            >
                <div className="relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

                    {/* Header */}
                    <FadeInUp className="text-center mb-16">
                        <TextAnimation
                            text="How It Works"
                            as="h2"
                            className="text-primary-blue text-sm font-bold uppercase tracking-widest mb-4"
                        />
                        <TextAnimation
                            text="One portal. One team. Everything handled."
                            as="h3"
                            delay={0.3}
                            className="text-white text-3xl md:text-5xl font-bold mb-6"
                        />
                        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            See how VACEI simplifies accounting, audit, compliance, and corporate services with a streamlined, tech-enabled approach.
                        </p>
                    </FadeInUp>

                    {/* Video Banner with Glassmorphism Play Button */}
                    <FadeInUp delay={0.2} className="relative w-full max-w-5xl mx-auto aspect-video md:aspect-[2.4/1] rounded-3xl overflow-hidden shadow-2xl mb-20 group border border-white/10 bg-primary/80">
                        {!isPlaying ? (
                            <>
                                <Image
                                    src="/assets/images/Rectangle 34624231.png"
                                    alt="How VACEI Works"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent" />

                                {/* Glassy Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.07, y: -2 }}
                                        whileTap={{ scale: 0.96, y: 0 }}
                                        onClick={() => setIsPlaying(true)}
                                        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full group/btn outline-none"
                                        aria-label="Play Video"
                                    >
                                        {/* Pulse Effect */}
                                        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 duration-1000"></span>
                                        
                                        {/* Glass Button Base */}
                                        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white/20 group-hover/btn:border-white/50">
                                            {/* Play Triangle */}
                                            <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-1 drop-shadow-lg"></div>
                                        </div>
                                    </motion.button>
                                </div>
                            </>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="VACEI Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        )}
                    </FadeInUp>

                    {/* Steps Grid - Modern Glass Cards */}
                    <div className="relative">
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ y: -5 }}
                                className="relative p-6 rounded-2xl bg-primary/50 border border-white/5 backdrop-blur-sm hover:bg-primary/70 hover:border-primary-blue/30 transition-all duration-300 group"
                            >
                                {/* Icon Box */}
                                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-primary-blue group-hover:border-primary-blue transition-all duration-300 shadow-lg">
                                    {step.icon}
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-blue transition-colors">{step.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                                </div>
                                
                                {/* Connector Line (Desktop Only, except last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-11 -right-7 w-8 h-[2px] bg-linear-to-r from-white/10 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                        </StaggerContainer>
                    </div>

                </div>
            </GradientContainer>
        </section>
    )
}

export default HowItWorks
