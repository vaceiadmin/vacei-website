import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PortalFeatureProps {
    portalImage: string
}

const PortalFeature = ({ portalImage }: PortalFeatureProps) => {
    return (
        <section className="bg-[#D8E5E5] py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-4 lg:h-[658px]">

                    {/* Left Column: Dashboard Screenshot */}
                    <div className="w-full lg:w-1/2 flex flex-col h-full">
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-white min-h-[400px] lg:min-h-0">
                            <Image
                                src={portalImage}
                                alt="Client Portal Dashboard"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Portal Details Grid */}
                    <div className="w-full lg:w-1/2 h-full">
                        <div className="flex flex-col gap-4 h-full">

                            {/* 1. Top Wide Card: How it is used */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-grow flex flex-col justify-center">
                                <h2 className="text-2xl lg:text-3xl font-medium text-[#181C42] mb-3 text-left">
                                    How the Client Portal Is Used
                                </h2>
                                <p className="text-[#52525B] text-sm mb-4 text-left">
                                    Through the client portal, you can:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {[
                                        "Submit required information and documentation",
                                        "Review and approve filings",
                                        "Track progress and key milestones",
                                        "Access confirmations and closing documentation",
                                        "Communicate directly with the assigned team"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-[#181C42] font-medium text-left">
                                            {/* Circle Container with Diamond Bullet (Dark) */}
                                            <div className="mt-1 flex-shrink-0">
                                                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle opacity="0.2" cx="10" cy="10" r="9" stroke="#181C42" />
                                                    <path d="M10 6L14 10L10 14L6 10Z" fill="#181C42" />
                                                </svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[#52525B] text-sm mb-4 text-left">
                                    All activity is recorded and traceable in one place.
                                </p>

                                <div className="text-left">
                                    <Link
                                        href="/portals"
                                        className="inline-flex items-center gap-2 text-[#181C42] font-semibold text-sm hover:text-[var(--primary-blue)] transition-colors group"
                                    >
                                        Explore The Client Portal
                                        <div className="w-5 h-5 rounded-full bg-[#181C42] group-hover:bg-[var(--primary-blue)] flex items-center justify-center transition-colors">
                                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5H9M19 5V15" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* 2. Bottom Row: Split 2:3 Ratio */}
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 h-[35%] min-h-[200px]">
                                {/* Client Portal Info */}
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center h-full">
                                    <h3 className="text-lg font-medium text-[#181C42] mb-3 text-left">Client Portal</h3>
                                    <p className="text-[#52525B] text-sm leading-relaxed text-left">
                                        Documents, tasks, deadlines and communication in one place.
                                    </p>
                                </div>

                                {/* Quote Card */}
                                <div className="bg-[#6A70B8] rounded-2xl p-6 shadow-sm flex flex-col justify-center relative overflow-hidden h-full">
                                    {/* Quote Icon Top Left */}
                                    <div className="absolute top-4 left-4 opacity-30">
                                        <Image
                                            src="/assets/images/Vector (3).png"
                                            alt="Quote icon"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </div>

                                    <p className="text-white text-[13px] leading-relaxed text-center relative z-10 pt-2 pb-2">
                                        Good firms rely on experience. Great firms rely on structure. VACEI exists to make that structure visible, auditable, and scalable
                                    </p>

                                    {/* Quote Icon Bottom Right */}
                                    <div className="absolute bottom-4 right-4 opacity-30 rotate-180">
                                        <Image
                                            src="/assets/images/Vector (3).png"
                                            alt="Quote icon"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortalFeature
