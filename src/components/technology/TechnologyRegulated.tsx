"use client"
import React from 'react'
import Image from 'next/image'
import GradientContainer from '@/components/common/GradientContainer'
import { motion } from 'framer-motion'

const TechnologyRegulated = () => {
    const features = [
        "Role-based access and permissions",
        "Controlled workflows and approvals",
        "Documentation and traceability",
        "Compliance with professional and regulatory standards"
    ]

    const workspaceCards = [
        {
            id: 1,
            title: "Bookkeeping",
            description: "Monthly books, reconciliation and reports",
            status: "Waiting",
            links: ["Open workspace", "Open"]
        },
        {
            id: 2,
            title: "Documentation",
            description: "Central document vault and request",
            links: ["Open", "Open workspace"]
        },
        {
            id: 3,
            title: "Bookkeeping workspace",
            description: "Central document vault and request",
            links: ["Open", "Open workspace"]
        },
        {
            id: 4,
            title: "Audit workspace",
            description: "Engagement, PBCs, queries, reports",
            links: ["Open", "Open workspace"]
        }
    ]

    return (
        <section className="py-16 lg:py-24 w-full">
            <GradientContainer
                className="w-full"
                backgroundColor="bg-[#D8E5E5]"
                showRadials={true}
                radialImage="/assets/images/radial4.png.png"
                topLeftRotation="rotate-180"
                bottomRightRotation="-rotate-360"
            >
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Column: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#181C42] leading-tight">
                                Designed for regulated environments
                            </h2>

                            <div className="space-y-4">
                                <p className="text-sm md:text-base text-[#52525B] leading-relaxed">
                                    All technology used by VACEI is designed to support:
                                </p>

                                <ul className="space-y-3">
                                    {features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-start gap-3 text-sm md:text-base text-[#52525B]"
                                        >
                                            <div className="mt-1 flex-shrink-0">
                                                <Image
                                                    src="/assets/images/bullet.png"
                                                    alt="Bullet point"
                                                    width={20}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-sm md:text-base text-[#52525B] leading-relaxed">
                                Technology supports the work – final responsibility always remains with the assigned professionals.
                            </p>

                            <div className="space-y-3 pt-4">
                                <h3 className="text-lg md:text-xl font-semibold text-[#181C42]">
                                    Availability for firms
                                </h3>
                                <p className="text-sm md:text-base text-[#52525B] leading-relaxed">
                                    Selected components of our technology environment may also be made available to firms through partnerships, licensing, or reseller arrangements.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: UI Container with Overlay Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full flex justify-end"
                        >
                            {/* Background Image Container - Exact dimensions */}
                            <div 
                                className="relative rounded-lg overflow-visible"
                                style={{
                                    width: '564px',
                                    height: '500px',
                                    borderRadius: '8px',
                                    opacity: 1
                                }}
                            >
                                <div className="absolute inset-0 rounded-lg overflow-hidden">
                                    <Image
                                        src="/assets/images/Rectangle 34624210.png"
                                        alt="Technology Background"
                                        fill
                                        className="object-cover"
                                        sizes="564px"
                                        priority
                                    />
                                </div>

                                {/* Overlay UI Container - Positioned on right side of image */}
                                <div 
                                    className="absolute"
                                    style={{
                                        top: '0px',
                                        left: '170px',
                                        width: '350px',
                                        height: '500px',
                                        borderRadius: '8px',
                                        opacity: 1,
                                        transform: 'rotate(0deg)'
                                    }}
                                >
                                    <div 
                                        className="bg-white rounded-lg shadow-lg w-full h-full p-6 relative z-10"
                                        style={{
                                            borderRadius: '8px',
                                            boxShadow: '0px 20px 30px 0px rgba(0, 0, 0, 0.07)'
                                        }}
                                    >
                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-[#181C42] mb-6">
                                        WE Carefully Handle
                                    </h3>

                                    {/* Cards List */}
                                    <div className="space-y-3">
                                        {workspaceCards.map((card, index) => (
                                            <motion.div
                                                key={card.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-sm transition-shadow"
                                            >
                                                <div className="flex items-start gap-3">
                                                    {/* Icon */}
                                                    <div className="mt-0.5 flex-shrink-0">
                                                        <Image
                                                            src="/assets/images/bullet.png"
                                                            alt="Card icon"
                                                            width={16}
                                                            height={16}
                                                            className="object-contain"
                                                        />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between gap-2 mb-1">
                                                            <h4 className="text-sm font-semibold text-[#181C42]">
                                                                {card.title}
                                                            </h4>
                                                            {card.status && (
                                                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                                                                    {card.status}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-[#52525B] mb-2 leading-relaxed">
                                                            {card.description}
                                                        </p>
                                                        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                                                            {card.links.map((link, linkIndex) => (
                                                                <button 
                                                                    key={linkIndex}
                                                                    className="text-xs text-[#6F74B8] hover:underline font-medium"
                                                                >
                                                                    {link}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    </div>
                </div>
            </GradientContainer>
        </section>
    )
}

export default TechnologyRegulated

