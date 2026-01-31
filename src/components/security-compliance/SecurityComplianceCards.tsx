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

const SecurityComplianceCards = () => {
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
        <section className="py-16 lg:py-24 bg-section-light mx-2 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
                    {cards.map((card, index) => {
                        // First 4 cards: span 3 columns each (2 cards per row)
                        // Last 3 cards: span 2 columns each (3 cards per row)
                        const getGridColSpan = () => {
                            if (index < 4) {
                                // Cards 1-4: span 3 columns on large screens
                                return "lg:col-span-3"
                            } else {
                                // Cards 5-7: span 2 columns on large screens
                                return "lg:col-span-2"
                            }
                        }

                        return (
                        <FadeInUp
                            key={card.id}
                            className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col ${getGridColSpan()}`}
                        >
                            {/* Icon */}
                            <div className="mb-4 flex-shrink-0">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={56}
                                        height={56}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-heading mb-3">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-gray leading-relaxed mb-4 flex-grow">
                                {card.description}
                            </p>

                            {/* Bullet Points */}
                            {card.points && card.points.length > 0 && (
                                <ul className="space-y-2 mt-auto">
                                    {card.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-2 text-sm md:text-base text-gray">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-gray flex-shrink-0"></span>
                                            <span>{point}</span>
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

