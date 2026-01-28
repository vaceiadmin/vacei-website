"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <section className="relative w-full h-[1080px] min-h-screen bg-hero overflow-hidden flex flex-col items-center pt-32">

            {/* Background Elements based on User Specs */}

            {/* Top Right Large Wash - Adjusted opacity/mix-blend for usability, assuming it's a glow */}
            <div
                className="absolute top-[110px] left-5 w-[1880px] h-[1080px] bg-hero-glow blur-[50px] opacity-15 pointer-events-none z-0"
                style={{
                    width: '1880px',
                    height: '1080px',
                    top: '110px',
                    left: '20px',
                    filter: 'blur(50px)',
                    opacity: 0.15,
                }}
            />

            {/* Top Left Beam */}
            <div
                className="absolute -top-[50px] -left-[50px] w-[116px] h-[470px] bg-hero-glow blur-[50px] opacity-60 pointer-events-none z-[1]"
                style={{
                    width: '116px',
                    height: '470px',
                    top: '-50px',
                    left: '-50px',
                    transform: 'rotate(-135deg)',
                    filter: 'blur(50px)',
                    opacity: 0.6
                }}
            />

            {/* Behind Image Left - "Shadow" */}
            <div
                className="hidden xl:block absolute top-[607px] left-[464px] w-[116px] h-[470px] bg-hero-glow blur-[50px] rounded-lg opacity-50 pointer-events-none z-0"
                style={{
                    width: '116px',
                    height: '470px',
                    top: '607px',
                    left: '464px', // This is absolute, might drift on wide screens. Keeping per spec for now but might need media query
                    transform: 'rotate(180deg)',
                    filter: 'blur(50px)',
                    borderRadius: '8px',
                    opacity: 0.5
                }}
            />

            {/* Behind Image Right */}
            <div
                className="hidden 2xl:block absolute top-[607px] left-[1300px] w-[116px] h-[470px] bg-hero-glow blur-[50px] rounded-lg opacity-50 pointer-events-none z-0"
                style={{
                    width: '116px',
                    height: '470px',
                    top: '607px',
                    left: '1300px',
                    transform: 'rotate(180deg)',
                    filter: 'blur(50px)',
                    borderRadius: '8px',
                    opacity: 0.5
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center text-center mt-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl"
                >
                    Accounting, Audit & Corporate Services Delivered Through One Portal
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-300 text-sm md:text-base max-w-2xl mb-10"
                >
                    VACEI is a professional firm that does the work for you. You get a dedicated team, full visibility, and one place for documents, deadlines, and communication.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-4 mb-20"
                >
                    <button className="px-8 py-3 bg-primary-blue hover:bg-primary-blue-hover text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(59,73,230,0.5)]">
                        Get Instant Quote &rarr;
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all">
                        Request a Service &rarr;
                    </button>
                </motion.div>

                {/* Dashboard Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative w-full max-w-[904px]"
                >
                    <div className="aspect-[904/582] relative rounded-t-xl overflow-hidden shadow-2xl border border-white/10 bg-hero-dark">
                        {/* Using a placeholder or the provided frame if suitable */}
                        <Image
                            src="/assets/images/Frame 1618872628 1.png"
                            alt="VACEI Portal Dashboard"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>

                    {/* Glow effect under the image */}
                    <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full opacity-40"></div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-12 left-12 flex flex-col items-center gap-4 animate-bounce hidden md:flex">
                <div className="text-white/50 text-xs tracking-widest uppercase -rotate-90 origin-bottom translate-y-8 absolute bottom-12 whitespace-nowrap">
                    Scroll Down
                </div>
                <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Gradient overlay for bottom fade if needed */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hero to-transparent z-20"></div>

        </section>
    )
}

export default HeroSection
