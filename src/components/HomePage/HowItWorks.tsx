"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { FadeInUp, StaggerContainer } from "../common/Animations"
import TextAnimation from "../common/TextAnimation"

import Image from "next/image"
import { HOW_IT_WORKS_VIDEO, HOW_IT_WORKS_POSTER } from "@/data/video"

// Icons matching the reference - work on light theme
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
    const userPausedRef = useRef(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlayPause = () => {
        const video = videoRef.current
        if (!video) return
        if (video.paused) {
            userPausedRef.current = false
            video.play().catch(() => {})
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
                    if (entry.isIntersecting) {
                        if (!userPausedRef.current) video.play().catch(() => {})
                    } else {
                        video.pause()
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px" }
        )

        observer.observe(container)

        const onCanPlay = () => {
            if (container && video && !userPausedRef.current) {
                const rect = container.getBoundingClientRect()
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0
                if (isVisible) video.play().catch(() => {})
            }
        }
        video.addEventListener("canplay", onCanPlay)
        if (video.readyState >= 3) onCanPlay()

        return () => {
            video.removeEventListener("play", onPlay)
            video.removeEventListener("pause", onPause)
            observer.disconnect()
            video.removeEventListener("canplay", onCanPlay)
            video.pause()
        }
    }, [])

    return (
        <section className="w-full relative overflow-hidden">
            <div className="relative w-full bg-background py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden rounded-[32px] md:rounded-[48px]">
                {/* Radial gradients - like footer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
                    <div className="absolute bottom-0 left-0 w-[350px] h-[330px] z-0 transform -rotate-360">
                        <Image
                            src="/assets/images/radial3.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 w-[350px] h-[330px] z-0 transform -rotate-90">
                        <Image
                            src="/assets/images/radial3.png"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

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
                            className="text-text-heading text-3xl md:text-5xl font-bold mb-4 leading-tight"
                        />
                        <p className="text-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            See how VACEI simplifies accounting, audit, compliance, and corporate services with a streamlined, tech-enabled approach.
                        </p>
                    </FadeInUp>

                    {/* Video Banner - autoplay on scroll into view */}
                    <FadeInUp duration={0.6} delay={0.15} className="relative w-full max-w-5xl mx-auto aspect-video md:aspect-video rounded-3xl overflow-hidden shadow-2xl mb-20 border border-input bg-slate-950">
                        <div ref={containerRef} className="absolute inset-0">
                            <video
                                ref={videoRef}
                                src={encodeURI(HOW_IT_WORKS_VIDEO)}
                                poster={encodeURI(HOW_IT_WORKS_POSTER)}
                                preload="metadata"
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                            {/* Glassmorphism play/pause button */}
                            <button
                                type="button"
                                onClick={togglePlayPause}
                                className="absolute bottom-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 shadow-lg"
                                aria-label={isPlaying ? "Pause" : "Play"}
                            >
                                {isPlaying ? (
                                    <Pause className="w-5 h-5" fill="currentColor" />
                                ) : (
                                    <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                                )}
                            </button>
                        </div>
                    </FadeInUp>

                    {/* Steps Grid - Glassy cards with connectors */}
                    <div className="relative">
                        <StaggerContainer staggerDelay={0.1} className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch gap-6 lg:gap-2">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className="relative p-6 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 group hover:bg-white/45 hover:border-white/60 hover:shadow-[0_12px_48px_rgba(59,73,230,0.1)] lg:flex-1 lg:min-w-0"
                                >
                                    {/* Icon Box */}
                                    <div className="w-14 h-14 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary-blue group-hover:border-primary-blue group-hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(255,255,255,0.3)]">
                                        {step.icon}
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-bold text-text-heading mb-2 group-hover:text-primary-blue transition-colors">{step.title}</h4>
                                        <p className="text-gray text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>

                                {/* Connector: line + chevron (desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-center shrink-0 w-6 xl:w-10" aria-hidden>
                                        <div className="flex items-center w-full">
                                            <div className="flex-1 h-[2px] bg-linear-to-r from-transparent via-primary-blue/30 to-primary-blue/40 rounded-full" />
                                            <svg className="w-4 h-4 text-primary-blue/50 shrink-0 -ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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
            </div>
        </section>
    )
}

export default HowItWorks
