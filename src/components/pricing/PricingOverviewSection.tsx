import React from 'react'
import SectionBadge from '@/components/common/SectionBadge'
import TextAnimation from '@/components/common/TextAnimation'
import { FadeInUp, StaggerContainer } from '@/components/common/Animations'

const pricingCards = [
    {
        title: 'Accounting and Finance',
        intro:
            'Pricing depends on factors such as transaction volume, reporting needs and business complexity. Services typically include.',
        sections: [
            {
                heading: 'Through the client portal, you can:',
                items: [
                    'Bookkeeping',
                    'Accounting and reporting',
                    'Management accounts',
                    'Cash flow monitoring',
                ],
            },
        ],
        footer: 'Pricing is offered as a monthly fee, based on scope.',
    },
    {
        title: 'Audit and Assurance',
        intro:
            'Audit fees depend on factors such as company size, structure and audit complexity.',
        sections: [
            {
                heading: 'We provide:',
                items: [
                    'Indicative audit fee ranges',
                    'Clear scope definitions',
                    'Predictable timelines',
                ],
            },
        ],
        footer:
            'Final audit fees are confirmed following an initial assessment.',
    },
    {
        title: 'Corporate and Licensing Services',
        intro:
            'Corporate and regulated services are generally priced on a project basis.',
        sections: [
            {
                heading: 'This includes:',
                items: [
                    'Company incorporations',
                    'Share transfers and restructurings',
                    'Liquidations and wind-ups',
                    'Licence applications and renewals',
                ],
            },
        ],
        footer:
            'Pricing is quoted upfront based on the specific request.',
    },
    {
        title: 'Advisory and Growth',
        intro:
            'Advisory services are scoped based on the nature and duration of support required.',
        sections: [
            {
                heading: 'Pricing may be:',
                items: ['Project based', 'Retainer based', 'Time based'],
            },
        ],
        footer:
            'All advisory work is agreed in advance with clear outcomes and deliverables.',
    },
    {
        title: 'Transparent Quotes, No Surprises',
        intro: 'Every VACEI client receives:',
        sections: [
            {
                heading: 'Pricing may be:',
                items: [
                    'A clear service breakdown',
                    'Defined pricing or pricing ranges',
                    'Clear next steps',
                ],
            },
        ],
        footer:
            'There is no obligation to proceed after receiving a quote.',
    },
]

const PricingOverviewSection = () => {
    return (
        <section className="bg-section-light py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <FadeInUp>
                    <div className="text-center mb-12 lg:mb-16">
                        <SectionBadge text="Pricing" className="px-6 py-1.5 text-xs text-heading" />
                        <TextAnimation
                            text="Overview"
                            as="h2"
                            className="mt-5 text-3xl md:text-4xl font-semibold text-heading leading-tight"
                        />
                        <p className="mt-4 text-sm md:text-base text-gray max-w-2xl mx-auto leading-relaxed">
                            VACEI is designed to be simple to start and easy to work with. From the first enquiry to
                            ongoing delivery, everything follows a clear and structured process.
                        </p>
                    </div>
                </FadeInUp>

                {/* Cards */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {pricingCards.map((card, index) => (
                        <FadeInUp
                            key={index}
                            className="bg-background-secondary rounded-2xl shadow-sm border border-gray-200 px-6 py-6 md:px-7 md:py-7 flex flex-col min-h-[450px]"
                        >
                            <div className="mb-4 min-h-[120px]">
                                <TextAnimation
                                    text={card.title}
                                    as="h3"
                                    className="text-lg md:text-xl font-semibold text-heading mb-3"
                                />
                                <p className="text-sm text-gray leading-relaxed">
                                    {card.intro}
                                </p>
                            </div>
                            <hr className="mb-3 border-gray-200" />
                            {card.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="mt-3">
                                    {section.heading && (
                                        <p className="text-sm font-semibold text-heading mb-2">
                                            {section.heading}
                                        </p>
                                    )}
                                    <ul className="space-y-1 text-sm text-gray">
                                        {section.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-start gap-2 leading-relaxed"
                                            >
                                                <span className="mt-[5px] text-[10px] text-heading">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <p className="mt-5 text-xs md:text-sm text-gray leading-relaxed">
                                {card.footer}
                            </p>
                        </FadeInUp>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

export default PricingOverviewSection


