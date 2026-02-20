"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import GradientContainer from "../common/GradientContainer"
import TextAnimation from "../common/TextAnimation"
import GetInstantQuoteButton from "../common/GetInstantQuoteButton"
import { useDirectionalInView } from "@/hooks/use-directional-in-view"
import { DirectionalDiv } from "../common/Animations"
import { useRef } from "react"
import { useReduceMotion, usePerformance } from "@/contexts/ReduceMotionContext"

const features = [
        {
            title: "Bookkeeping that powers everything else",
            description: "Your bookkeeping runs continuously in the background. You upload documents – our team posts, reconciles, and reviews everything. Once bookkeeping is complete, VAT, tax, audit and reporting can proceed smoothly.",
            content: [
                'Monthly bookkeeping status',
                'Missing documents clearly listed',
                'Bank and ledger reconciled',
                'Ready for VAT and audit'
            ],
            buttonText: "See How Bookkeeping Works",
            buttonHref: "/bookkeeping",
            overlayImages: [
            { src: "/assets/images/Frame 1618872461.png", alt: "Main Dashboard", className: "w-[90%] md:w-[80%] z-20 top-6 -right-6 md:right-0" },
            { src: "/assets/images/Frame 1618872471.png", alt: "Progress Chart", className: "w-[45%] z-30 -bottom-10 -left-6" },
            { src: "/assets/images/Frame 1618872663.png", alt: "Upload Status", className: "w-[40%] z-10 -top-6 -left-10" }
        ],
        },
        {
            title: "VAT & payroll filings, period by period",
            description: "VAT and payroll run on fixed periods. Each submission is tracked, prepared, submitted, and archived automatically. If nothing changes, you simply confirm – and we take care of the rest.",
            content: [
                'VAT periods with due dates',
                'Payroll runs per month',
                'Submission confirmations',
                'No-change confirmations'
            ],
            buttonText: "See VAT & Payroll in Action",
            buttonHref: "/vat-payroll",
            overlayImages: [
            { src: "/assets/images/Frame 1618872474.png", alt: "Main Dashboard", className: "w-[85%] z-20 bottom-6 -left-4 md:left-0" },
            { src: "/assets/images/Frame 1618872664.png", alt: "Status Badge", className: "w-[40%] z-30 -top-8 -right-8" },
            { src: "/assets/images/Frame 1618872473.png", alt: "Missing Items", className: "w-[45%] z-10 bottom-10 -right-10" }
        ],
        },
        {
            title: "Corporate & CSP services with expiry tracking",
            description: "Corporate services don't run monthly – they expire. Directorships, registered office, and company secretary services are monitored by expiry date. Renewals are triggered automatically – with reminders and billing.",
            content: [
                'Active corporate services',
                'Expiry dates clearly shown',
                'Renewal alerts before deadlines',
                'No missed obligations'
            ],
            buttonText: "View Corporate Services",
            buttonHref: "/corporate",
            overlayImages: [
            { src: "/assets/images/Frame 1618872666.png", alt: "Main Dashboard", className: "w-[90%] md:w-[80%] z-20 top-4 right-4" },
            { src: "/assets/images/Frame 1618872667.png", alt: "Trial Balance", className: "w-[45%] z-30 top-1/2 -translate-y-1/2 -left-8" },
            { src: "/assets/images/Frame 1618872508.png", alt: "User Profile", className: "w-[35%] z-10 -bottom-6 -right-4" }
        ],
    }
]

const PortalFeature = () => {
    const sectionRef = useRef(null);
    const isInViewGlobal = useDirectionalInView(sectionRef);
    const { reduceMotion, isIPhone, isLowPerformance } = usePerformance();

    return (
        <section ref={sectionRef} className="w-full relative">
            <GradientContainer
                backgroundColor="bg-primary"
                showRadials={true}
                className="py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 lg:space-y-40">
                    {features.map((feature, idx) => {
                        const isReversed = idx % 2 !== 0;

                        return (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                                
                                {/* Image Column (Glassy Portal) */}
                                <DirectionalDiv 
                                    initial={{ opacity: 0, x: isReversed ? 60 : -60, rotateY: isReversed ? -5 : 5 }}
                                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full lg:w-1/2 relative perspective-1000 group"
                                >
                                    {/* Glass Base - Sleek Dark Card */}
                                    <div className={`relative aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-primary/90 ${isIPhone || isLowPerformance ? "" : "backdrop-blur-2xl"} border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-700 group-hover:bg-primary/95 group-hover:border-white/30 group-hover:shadow-[0_40px_80px_-20px_rgba(59,73,230,0.4)] overflow-visible`}>
                                        
                                        {/* Internal Glow - Enhanced */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 via-transparent to-purple-500/20 opacity-60 rounded-[2.5rem]" />
                                        
                                        {/* Subtle inner border glow */}
                                        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 pointer-events-none" />

                                        {/* Floating Images Container */}
                                        <div className="absolute inset-4 md:inset-8 flex items-center justify-center">
                                            {feature.overlayImages.map((img, imgIdx) => (
                                                <DirectionalDiv
                                                    key={imgIdx}
                                                    className={`absolute ${img.className} transition-transform duration-700 group-hover:scale-105`}
                                                    initial={{ 
                                                        y: 10, 
                                                        opacity: 0 
                                                    }}
                                                    whileInView={{ 
                                                        y: 0, 
                                                        opacity: 1 
                                                    }}
                                                    transition={{ 
                                                        duration: 0.8, 
                                                        delay: 0.2 + (imgIdx * 0.2), 
                                                        ease: [0.16, 1, 0.3, 1] 
                                                    }}
                                                >
                                                    {/* Floating Animation Wrapper */}
                                                    <motion.div
                                                        animate={isInViewGlobal && !isIPhone && !isLowPerformance ? {
                                                            y: [0, -12, 0],
                                                        } : { y: 0 }}
                                                        transition={{
                                                            duration: 4 + imgIdx,
                                                            repeat: 0,
                                                            ease: "easeInOut",
                                                            delay: imgIdx * 1.5
                                                        }}
                                                    >
                                                         <Image 
                                                            src={img.src} 
                                                            alt={img.alt} 
                                                            width={600} 
                                                            height={400} 
                                                            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                                                         />
                                                    </motion.div>
                                                </DirectionalDiv>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Decorative Background Blur - Enhanced */}
                                    <div className={`absolute -inset-12 bg-primary-blue/30 blur-[100px] -z-10 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-700 ${isReversed ? "left-0" : "right-0"}`} />
                                    
                                    {/* Additional subtle glow */}
                                    <div className={`absolute -inset-8 bg-purple-500/20 blur-[60px] -z-10 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${isReversed ? "right-0" : "left-0"}`} />
                                </DirectionalDiv>

                                {/* Text Column */}
                                <DirectionalDiv 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full lg:w-1/2 space-y-8"
                                >
                                    <div className="space-y-4">
                                        <DirectionalDiv 
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-[#989fea] uppercase mb-2"
                                        >
                                            Feature {idx + 1}
                                        </DirectionalDiv>
                                        <TextAnimation 
                                            text={feature.title} 
                                            as="h2" 
                                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                                        />
                                    </div>
                                    
                                    <p className="text-lg text-white/70 leading-relaxed font-medium max-w-xl">
                                        {feature.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {feature.content.map((item, i) => (
                                            <DirectionalDiv 
                                                key={i}
                                                as="li"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (i * 0.1), duration: 0.6, ease: "easeOut" }}
                                                className="flex items-center gap-4 text-white/90 text-lg"
                                            >
                                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-blue/20 border border-primary-blue/50 text-primary-blue">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                </span>
                                                {item}
                                            </DirectionalDiv>
                                        ))}
                                    </ul>

                                    <DirectionalDiv 
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className="pt-6"
                                    >
                                        <GetInstantQuoteButton
                                            variant="custom"
                                            text={feature.buttonText}
                                            href={feature.buttonHref}
                                            bgColor="#3b49e6" // Primary Blue
                                            textColor="white"
                                            className="px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 hover:scale-105 transition-all text-sm md:text-base border border-white/10"
                                        />
                                    </DirectionalDiv>
                                </DirectionalDiv>

                            </div>
                        );
                    })}
                </div>
            </GradientContainer>
        </section>
    )
}

export default PortalFeature
