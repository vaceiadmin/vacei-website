"use client"
import React from 'react'
import Image from 'next/image'
import { FadeInUp, StaggerContainer } from '@/components/common/Animations'

interface SecurityCard {
    id: number
    title: string
    description: string
    points?: string[]
    icon: string
}

import { useReduceMotion, usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

const SecurityComplianceCards = () => {
    const { isIPhone, isLowPerformance } = usePerformance();
    const cards: SecurityCard[] = [
        {
            id: 1,
            title: "Data Security",
            description: "VACEI treats data security as a core operational requirement.",
            points: [
                "Role-based access controls",
                "Secure document storage",
                "Controlled user permissions",
                "Segregation between client-facing and internal systems",
                "Access to data is limited strictly to authorised personnel."
            ],
            icon: "/assets/images/image 115.png"
        },
        {
            id: 2,
            title: "Confidentiality",
            description: "All client information is handled confidentially.",
            points: [
                "Client data is not shared with third parties without authorisation",
                "Confidentiality obligations apply to all staff and partners",
                "Engagement-specific access ensures information is visible only where required"
            ],
            icon: "/assets/images/image 116.png"
        },
        {
            id: 3,
            title: "Compliance and Professional Standards",
            description: "VACEI operates within professional and regulatory frameworks applicable to accounting and audit services.",
            points: [
                "Internal workflows aligned with professional standards",
                "Quality controls embedded into delivery processes",
                "Documentation and audit trails maintained throughout engagements"
            ],
            icon: "/assets/images/image 117.png"
        },
        {
            id: 4,
            title: "Audit and Quality Controls",
            description: "Quality is managed throughout the lifecycle of each engagement.",
            points: [
                "Internal review stages",
                "Manager and partner sign-offs",
                "Traceable workflows and documentation",
                "This ensures work is delivered consistently and defensibly."
            ],
            icon: "/assets/images/image 118.png"
        },
        {
            id: 5,
            title: "Technology and Compliance",
            description: "Technology is used to support compliance, not replace professional judgement.",
            points: [
                "Structured workflows reduce human error",
                "Centralised documentation supports regulatory reviews",
                "AI tools are assistive and subject to human oversight"
            ],
            icon: "/assets/images/image 120.png"
        },
        {
            id: 6,
            title: "Client Responsibility",
            description: "Clients retain ownership of their data and remain responsible for the accuracy of information provided. VACEI supports review, organisation, and compliance but relies on timely and accurate client input.",
            icon: "/assets/images/image 115.png"
        },
        {
            id: 7,
            title: "Ongoing Improvements",
            description: "VACEI continuously reviews and improves its internal processes to meet evolving regulatory, security and professional requirements.",
            icon: "/assets/images/image 120.png"
        }
    ]

    return (
        <section className="relative py-16 lg:py-24 bg-[#f8fafc] overflow-hidden">
             {/* Background Decor - consistent light gradients */}
            {!isIPhone && !isLowPerformance && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[80px]" />
                    <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-50/60 rounded-full blur-[80px]" />
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
                    {cards.map((card, index) => {
                        // Grid Logic: Top 4 cards span 3 cols (2 per row), Bottom 3 cards span 2 cols (3 per row)
                        const getGridColSpan = () => {
                            if (index < 4) {
                                return "lg:col-span-3"
                            } else {
                                return "lg:col-span-2"
                            }
                        }

                        return (
                        <FadeInUp
                            key={card.id}
                            className={cn(
                                "group relative border border-white/60 rounded-3xl p-6 lg:p-8 shadow-xl transition-all duration-300 flex flex-col",
                                isIPhone || isLowPerformance ? "bg-white" : "bg-white/40 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-100/40 hover:-translate-y-1",
                                getGridColSpan()
                            )}
                        >
                             {/* Gradient overlay on hover */}
                             {!isIPhone && !isLowPerformance && (
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
                             )}

                            {/* Icon with Glass Circle */}
                            <div className="mb-6 flex-shrink-0 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-white/50">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-heading mb-3 relative z-10 group-hover:text-primary-blue transition-colors">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-gray leading-relaxed mb-6 flex-grow relative z-10">
                                {card.description}
                            </p>

                            {/* Bullet Points */}
                            {card.points && card.points.length > 0 && (
                                <ul className="space-y-3 mt-auto relative z-10 pt-6 border-t border-white/40">
                                    {card.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-3 text-sm text-gray/90">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </FadeInUp>
                        )
                    })}
                </StaggerContainer>
            </div>
        </section>
    )
}

export default SecurityComplianceCards

