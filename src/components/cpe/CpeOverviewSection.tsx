 import React from 'react'
 import BenefitsCardsRow, { BenefitCard } from '@/components/ai-review/BenefitsCardsRow'
 import SectionBadge from '@/components/common/SectionBadge'

const cpeCards: BenefitCard[] = [
    {
        icon: '/assets/images/image 163.png',
        title: 'CPE',
        description:
            'VACEI provides structured Continuing Professional Education sessions focused on practical and relevant topics.',
    },
    {
        icon: '/assets/images/image 164.png',
        title: 'Upcoming Sessions',
        description:
            'Scheduled live sessions covering current technical, regulatory and professional themes.',
    },
    {
        icon: '/assets/images/image 167.png',
        title: 'On-Demand Library',
        description:
            'Recorded CPE sessions available for viewing on demand to suit your schedule.',
    },
    {
        icon: '/assets/images/image 168.png',
        title: 'Certificates',
        description:
            'Participation certificates are issued where applicable, based on session requirements.',
    },
]

const CpeOverviewSection = () => {
    return (
         <section className="py-16 lg:py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-10 lg:mb-12">
                     <SectionBadge text="CPE &amp; Podcast" className="text-heading" />
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-heading leading-tight">
                        Overview
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-gray max-w-2xl mx-auto leading-relaxed">
                        VACEI is designed to be simple to start and easy to work with. From the first enquiry to
                        ongoing delivery, everything follows a clear and structured process.
                    </p>
                </div>
            </div>

            {/* Cards row */}
            <BenefitsCardsRow cards={cpeCards} columns={4} />
        </section>
    )
}

export default CpeOverviewSection


