'use client'

import React from 'react'
import GradientContainer from './GradientContainer'

const MissionVisionSection = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                    {/* Our Mission */}
                    <GradientContainer
                        showRadials={false}
                        backgroundColor="bg-hero-dark"
                        className="rounded-2xl px-6 py-7 md:px-7 md:py-8 lg:px-8 lg:py-9 shadow-[0_18px_35px_rgba(0,0,0,0.45)] border border-white/5"
                    >
                        <div className="text-white">
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-white">
                                Our Mission
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-[#E5E5E5] mb-4">
                                VACEI&apos;s mission is to deliver accounting, audit and corporate services in a way
                                that is structured, transparent and accountable.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-[#E5E5E5] mb-4">
                                We remove fragmentation, uncertainty and inefficiency from professional service
                                delivery by combining experienced teams with clear workflows and purpose-built
                                systems.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-[#E5E5E5]">
                                Our focus is on delivering work properly, on time and in line with professional and
                                regulatory standards, while giving clients full visibility without operational burden.
                            </p>
                        </div>
                    </GradientContainer>

                    {/* Our Vision */}
                    <GradientContainer
                        showRadials={false}
                        backgroundColor="bg-hero-dark"
                        className="rounded-2xl px-6 py-7 md:px-7 md:py-8 lg:px-8 lg:py-9 shadow-[0_18px_35px_rgba(0,0,0,0.45)] border border-white/5"
                    >
                        <div className="text-white">
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-white">
                                Our Vision
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-[#E5E5E5] mb-4">
                                Our vision is to redefine how professional accounting and audit services are
                                delivered in a modern, digital-first environment.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-[#E5E5E5] mb-4">
                                We envision a future where structured workflows, clear ownership and integrated
                                technology give clients real-time visibility rather than relying on reactive updates.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-[#E5E5E5]">
                                VACEI is building this future by aligning people, process and technology into one
                                integrated delivery model that supports professionals without replacing judgement.
                            </p>
                        </div>
                    </GradientContainer>
                </div>
            </div>
        </section>
    )
}

export default MissionVisionSection


