import React from 'react'
import Image from 'next/image'
import SectionBadge from '@/components/common/SectionBadge'

const ReviewOutputSection = () => {
    return (
        <section className="bg-section-light py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-12 lg:gap-16 items-center">
                    {/* Left: Text and cards */}
                    <div className="space-y-6 text-left">
                        <div>
                            <SectionBadge text="Review output" className="text-heading" />
                            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-heading leading-tight">
                                Review output
                            </h2>
                            <p className="mt-2 text-sm md:text-base text-gray max-w-md leading-relaxed">
                                Within minutes, a structured review report is generated.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            {/* The report is */}
                            <div className="bg-background-secondary rounded-2xl shadow-sm border border-gray-200 px-5 py-5 flex-1 min-w-[230px]">
                                <h3 className="text-sm md:text-base font-semibold text-heading mb-3">
                                    The report is:
                                </h3>
                                <ul className="space-y-2 text-sm text-gray">
                                    {['Clear', 'Actionable', 'Easy to work through'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Image
                                                src="/assets/images/fluent_shape-intersect-16-filled.png"
                                                alt=""
                                                width={16}
                                                height={16}
                                                className="mt-[2px] object-contain"
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Each item is marked as */}
                            <div className="bg-background-secondary rounded-2xl shadow-sm border border-gray-200 px-5 py-5 flex-1 min-w-[230px]">
                                <h3 className="text-sm md:text-base font-semibold text-heading mb-3">
                                    Each item is marked as:
                                </h3>
                                <ul className="space-y-2 text-sm text-gray">
                                    {['Confirmed', 'Disclosed', 'Flagged for review'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Image
                                                src="/assets/images/fluent_shape-intersect-16-filled.png"
                                                alt=""
                                                width={16}
                                                height={16}
                                                className="mt-[2px] object-contain"
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="text-xs md:text-sm text-gray max-w-lg leading-relaxed">
                            This allows teams to resolve issues efficiently and with confidence.
                        </p>
                    </div>

                    {/* Right: Background image with overlay card */}
                    <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px]">
                        {/* Background brain image */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/images/Rectangle 34624219.png"
                                alt="AI Review visual background"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Overlay audit result card */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[78%] max-w-md bg-white/95 rounded-2xl shadow-xl border border-gray-100 px-5 py-4 backdrop-blur">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[11px] font-semibold text-heading">Audit Result</p>
                                </div>
                                <p className="text-[10px] font-semibold text-red-500 mb-2">Critical Errors</p>

                                <div className="space-y-2">
                                    {['CS01 - Profit for the year does...', 'CS01 - Profit for the year does...', 'CS01 - Profit for the year does...', 'CS01 - Profit for the year does...'].map(
                                        (item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#FFF9F9] border border-red-50"
                                            >
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-[10px] text-red-500">
                                                        !
                                                    </span>
                                                    <span className="text-[10px] text-gray-700 truncate">
                                                        {item}
                                                    </span>
                                                </div>
                                                <span className="ml-3 px-2 py-0.5 rounded bg-gray-100 text-[9px] font-semibold text-gray-600 uppercase tracking-wide">
                                                    Balance sheet
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewOutputSection


