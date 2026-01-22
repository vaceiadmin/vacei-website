import React, { ReactNode } from 'react'
import Image from 'next/image'

interface ServiceOverviewProps {
    title: string
    description: ReactNode
    image: string
}

const ServiceOverview = ({ title, description, image }: ServiceOverviewProps) => {
    return (
        <section className=" py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Image */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                        {/* If image is a placeholder path that might not exist, we should handle it, 
                 but for now assuming the prop is a valid path or we use a fallback */}
                        <Image
                            src={image}
                            alt={`${title} Overview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col pt-2">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#181C42] mb-4 leading-tight">
                            {title}
                        </h2>
                        <div className="text-sm md:text-base text-[#52525B] leading-[1.8]">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceOverview
