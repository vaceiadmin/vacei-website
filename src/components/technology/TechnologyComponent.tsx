import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const TechnologyComponent = () => {
    const technologyCards = [
        {
            id: 1,
            title: "Client Portal",
            description: "The single portal used by clients to upload documents, respond to requests, communicate with their assigned team, and track progress.",
            image: "/assets/images/image 173.png"
        },
        {
            id: 2,
            title: "Accounting Portal",
            description: "The internal portal used by VACEI accounting teams to manage monthly workflows, postings, reviews, VAT, payroll, and integrations.",
            image: "/assets/images/image 174.png"
        },
        {
            id: 3,
            title: "Audit Portal",
            description: "The internal audit environment used to manage planning, procedures, quality management, document requests, reviews, and sign-off in line with professional standards.",
            image: "/assets/images/image 175 (2).png"
        },
        {
            id: 4,
            title: "Financial Statement Review Tools",
            description: "Tools used to support the preparation and review of financial statements, helping identify inconsistencies early and reduce rework before finalisation.",
            image: "/assets/images/image 176.png" // Using same image as placeholder, replace with actual image when available
        }
    ]

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    {/* TECHNOLOGY Tag */}
                    <div className="inline-block mb-3 sm:mb-3.5 lg:mb-4">
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider px-3 sm:px-3.5 lg:px-4 py-1.5 sm:py-1.5 lg:py-2 rounded border border-dashed border-gray-400">
                            TECHNOLOGY
                        </span>
                    </div>
                    
                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-heading mb-3 sm:mb-3.5 lg:mb-4">
                        Technology Component
                    </h2>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray max-w-3xl mx-auto px-2 sm:px-0">
                        Each of the components below has its own dedicated page with further details.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-4">
                    {technologyCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow min-h-[360px] sm:min-h-[390px] lg:min-h-[413px]"
                        >
                            {/* Icon/Image with Background */}
                            <div className="mb-5 sm:mb-5.5 lg:mb-6 flex-shrink-0 h-[56px] sm:h-[60px] lg:h-[64px] flex items-center">
                                <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] lg:w-[64px] lg:h-[64px] bg-icon rounded-lg flex items-center justify-center p-2 sm:p-2.5 lg:p-2.5">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={48}
                                        height={48}
                                        className="object-contain w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px]"
                                        sizes="(max-width: 640px) 40px, (max-width: 1024px) 44px, 48px"
                                    />
                                </div>
                            </div>

                            {/* Title - Fixed Height */}
                            <h3 className="text-lg sm:text-xl lg:text-xl font-medium text-heading mb-3 sm:mb-3.5 lg:mb-4 flex-shrink-0 h-[48px] sm:h-[50px] lg:h-[52px] flex items-start">
                                {card.title}
                            </h3>

                            {/* Description - Flexible Height */}
                            <p className="text-xs sm:text-sm lg:text-base text-gray leading-relaxed mb-5 sm:mb-5.5 lg:mb-6 flex-grow min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]">
                                {card.description}
                            </p>

                            {/* Read More Button - Fixed at Bottom */}
                            <div className="flex items-center gap-2 mt-auto flex-shrink-0 cursor-pointer group h-[28px] sm:h-[30px] lg:h-[32px]">
                                <span className="text-purple-bg font-semibold text-xs sm:text-sm lg:text-base group-hover:underline">
                                    Read More
                                </span>
                                <div className="w-7 h-7 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-purple-bg flex items-center justify-center group-hover:bg-purple-hover transition-colors">
                                    <ArrowRight className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechnologyComponent

