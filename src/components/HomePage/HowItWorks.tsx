"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Icons matching the reference image closely
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
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="none" />
        <path d="M17.5 19c0-3.038-2.462-5.5-5.5-5.5S6.5 15.962 6.5 19" stroke="currentColor" />
        <path d="M12 10V3" />
        <path d="M8 7l4-4 4 4" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
)

const WorkIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M14 2v4" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
    </svg>
)

const TrackIcon = () => ( // Using a power/standby icon as seen in the image (circle with line)
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
        icon:
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12v9" />
                <path d="M8 17l4 4 4-4" />
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                <polyline points="16 16 12 12 8 16" transform="rotate(180 12 14)" />
            </svg>
        , // Replacing with a cloud upload icon
    },
    {
        title: "We do the work",
        description: "Accounting, audit, payroll, compliance.",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
            </svg>
        ,
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
        <section className="w-full py-12 lg:py-16 ">
            <div className=" mx-auto px-4 md:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-primary text-2xl md:text-3xl font-bold mb-2">How It Works</h2>
                    <h3 className="text-primary text-xl md:text-2xl font-semibold mb-2">
                        One portal. One team. Everything handled.
                    </h3>
                    <p className="text-gray text-sm md:text-base max-w-2xl mx-auto">
                        See how VACEI simplifies accounting, audit, compliance, and corporate services.
                    </p>
                </div>

                {/* Video Banner */}
                <div className="relative w-full aspect-video md:aspect-[2.4/1] rounded-2xl overflow-hidden shadow-sm mb-12 group bg-gray-200">
                    {!isPlaying ? (
                        <>
                            <Image
                                src="/assets/images/Rectangle 34624231.png"
                                alt="How VACEI Works"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-105 transition-all duration-300 group-hover:bg-white/30 shadow-lg"
                                    aria-label="Play Video"
                                >
                                    {/* Play Triangle */}
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </button>
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
                </div>

                {/* Steps Grid - Row Layout matching the design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 border-t border-input pt-8 mt-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-row items-center lg:items-start gap-4"
                        >
                            {/* Icon Box */}
                            <div className="w-12 h-12 rounded-lg bg-hero-dark flex items-center justify-center text-white shrink-0 shadow-sm">
                                {step.icon}
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col pt-1">
                                <h4 className="text-[15px] font-bold text-primary leading-tight mb-1">{step.title}</h4>
                                <p className="text-[13px] text-gray leading-snug font-medium">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HowItWorks
