"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { useIsSafari } from "@/hooks/use-safari"
import { cn } from "@/lib/utils"

import { FadeInUp, StaggerContainer, DirectionalDiv } from "../common/Animations"
import { useReduceMotion } from "@/contexts/ReduceMotionContext"
import TextAnimation from "../common/TextAnimation"


import GradientContainer from "../common/GradientContainer"
import { HOW_IT_WORKS_VIDEO } from "@/data/video"

// Icons - dark theme
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
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const userPausedRef = useRef(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isMobile] = useMobile()
    const isSafari = useIsSafari()
    const reduceMotion = useReduceMotion()



    const togglePlayPause = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault()
            e.stopPropagation()
        }
        const video = videoRef.current
        if (!video) return
        if (video.paused) {
            userPausedRef.current = false
            video.play().catch((err) => console.error("Video play failed:", err))
        } else {
            userPausedRef.current = true
            video.pause()
        }
    }

    useEffect(() => {
        const video = videoRef.current
        const container = containerRef.current
        if (!video || !container) return

        const onPlay = () => setIsPlaying(true)
        const onPause = () => setIsPlaying(false)

        video.addEventListener("play", onPlay)
        video.addEventListener("pause", onPause)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) video.pause()
                })
            },
            { threshold: 0.1, rootMargin: "0px" }
        )

        observer.observe(container)

        return () => {
            video.removeEventListener("play", onPlay)
            video.removeEventListener("pause", onPause)
            observer.disconnect()
            video.pause()
        }
    }, [])

    return (
        <section className="w-full">
            <GradientContainer
                backgroundColor="bg-primary"
                showRadials={true}
                className="py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
            >
                <div className="relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

                    {/* Header */}
                    <FadeInUp duration={0.6} delay={0} className="text-center mb-16">
                        <TextAnimation
                            text="How It Works"
                            as="h2"
                            className="text-primary-blue text-sm font-bold uppercase tracking-widest mb-4"
                        />
                        <TextAnimation
                            text="One portal. One team. Everything handled."
                            as="h3"
                            delay={0.15}
                            className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight"
                        />
                        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            See how VACEI simplifies accounting, audit, compliance, and corporate services with a streamlined, tech-enabled approach.
                        </p>
                    </FadeInUp>

                    {/* Video Banner - autoplay on scroll into view */}
                    <FadeInUp duration={0.6} delay={0.15} className={cn(
                        "relative w-full max-w-5xl mx-auto aspect-video md:aspect-video rounded-3xl overflow-hidden shadow-2xl mb-20 border border-white/10",
                        isSafari ? "bg-slate-900" : "bg-slate-950 backdrop-blur-2xl"
                    )}>

                        <div
                            ref={containerRef}
                            className="absolute inset-0 cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <video
                                ref={videoRef}
                                src={HOW_IT_WORKS_VIDEO}
                                preload="auto"
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Full-area invisible tap layer for pause/play */}
                            <div 
                                className="absolute inset-0 z-10 cursor-pointer"
                                onClick={() => togglePlayPause()}
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
                            
                            {/* Centered glassmorphism play/pause button - controlled visibility */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                {(!isPlaying || (isHovered && !isMobile)) && (
                                    <motion.button
                                        type="button"
                                        onClick={togglePlayPause}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="pointer-events-auto flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-primary-blue border-2 border-white/40 text-white shadow-[0_8px_32px_rgba(59,73,230,0.5)] backdrop-blur-sm transition-all duration-300 hover:bg-primary-blue-hover hover:border-white/60 hover:shadow-[0_8px_40px_rgba(59,73,230,0.6)]"
                                        aria-label={isPlaying ? "Pause" : "Play"}
                                    >
                                        {!isPlaying && !isSafari && !reduceMotion && (
                                            <motion.span
                                                className="absolute inset-0 rounded-full border-2 border-white/50"
                                                animate={{ scale: [1, 1.3, 1.3], opacity: [0.6, 0, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                            />
                                        )}


                                        {isPlaying ? (
                                            <Pause className="w-8 h-8 md:w-10 md:h-10 relative z-10" fill="currentColor" />
                                        ) : (
                                            <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 relative z-10" fill="currentColor" />
                                        )}
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </FadeInUp>

                    {/* Steps Grid - Dark glassy cards with connectors */}
                    <div className="relative">
                        <StaggerContainer staggerDelay={0.1} className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch gap-6 lg:gap-2">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <DirectionalDiv
                                    whileHover={isSafari ? {} : { y: -5 }}
                                    className={cn(
                                        "relative p-6 rounded-2xl border border-white/10 transition-all duration-300 group hover:border-primary-blue/30 lg:flex-1 lg:min-w-0 hardware-accelerated",
                                        isSafari ? "bg-white/10" : "bg-white/5 backdrop-blur-md hover:bg-white/10"
                                    )}
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
                                </DirectionalDiv>

                                {/* Connector: line + chevron (desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-center shrink-0 w-6 xl:w-10" aria-hidden>
                                        <div className="flex items-center w-full">
                                            <div className="flex-1 h-[2px] bg-linear-to-r from-white/10 via-white/20 to-white/10 rounded-full" />
                                            <svg className="w-4 h-4 text-white/40 shrink-0 -ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 18l6-6-6-6v12z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                        </StaggerContainer>
                    </div>

                </div>
            </GradientContainer>
        </section>
    )
}

export default HowItWorks
