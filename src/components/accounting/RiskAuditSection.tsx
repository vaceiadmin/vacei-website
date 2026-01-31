import React from 'react'
import Image from 'next/image'
import { CreditCard, PiggyBank } from 'lucide-react'
import SectionBadge from '@/components/common/SectionBadge'
import { FadeInUp, StaggerContainer } from '../common/Animations'

interface BulletList {
    items: string[]
}

interface DetailCard {
    title: string
    subtitle: string
    bullets: string[]
}

interface AccountRow {
    label: string
    value: string
    note?: string
}

interface RightOverlayCardProps {
    header: string
    totalLabel: string
    totalValue: string
    totalAccentColor?: string
    sections: {
        title: string
        rows: AccountRow[]
    }[]
}

type RiskAuditVariant = 'accounting' | 'audit'

interface RiskAuditSectionProps {
    variant?: RiskAuditVariant
    badgeText?: string
    heading?: string
    intro?: string
    introBullets?: BulletList
    leftCards?: DetailCard[]
    bulletIconSrc?: string
    backgroundImageSrc?: string
    rightOverlayCard?: RightOverlayCardProps
}

// ACCOUNTING VARIANT DEFAULTS
const accountingIntroBullets: BulletList = {
    items: [
        'Posting and reconciliation activities follow defined workflows',
        'Internal review layers ensure accuracy before outputs are finalised',
        'Changes, adjustments, and approvals are traceable',
    ],
}

const accountingLeftCards: DetailCard[] = [
    {
        title: 'VAT & payroll management',
        subtitle: 'VAT and payroll are embedded into the monthly workflow.',
        bullets: [
            'Preparation and review steps are clearly defined',
            'Supporting documentation is stored centrally',
            'Deadlines are tracked to avoid last-minute pressure',
            'Compliance activities are delivered on time and with appropriate checks.',
        ],
    },
    {
        title: 'Accounting & banking integrations',
        subtitle:
            'Where applicable, the Accounting Portal integrates with accounting and banking systems.',
        bullets: [
            'These integrations reduce manual data entry',
            'Improve reconciliation accuracy',
            'Provide better visibility over transactions and balances.',
        ],
    },
]

const accountingRightOverlayCard: RightOverlayCardProps = {
    header: 'My Account',
    totalLabel: 'Total Balance',
    totalValue: '€2,568.00',
    totalAccentColor: '#16A34A',
    sections: [
        {
            title: 'Bank Accounts',
            rows: [
                { label: 'Savings', value: '€800.22', note: 'Updated recently' },
                { label: 'Checking', value: '€1,456.00', note: 'Updated recently' },
            ],
        },
        {
            title: 'Credit Cards',
            rows: [
                { label: 'Visa', value: '€00', note: 'Updated recently' },
                { label: 'Checking', value: '-€157.75', note: 'Updated recently' },
            ],
        },
    ],
}

// AUDIT VARIANT DEFAULTS
const auditIntroBullets: BulletList = {
    items: [
        'Use of firm-defined procedures',
        'Risk-based procedures generated using client data',
        'Hybrid approaches that combine firm methodologies with additional risk-focused procedures',
    ],
}

const auditLeftCards: DetailCard[] = [
    {
        title: 'ISQM & quality management',
        subtitle: 'Quality management is embedded directly into the audit process.',
        bullets: [
            'ISQM policies and procedures documented within the portal',
            'Mapping of quality requirements to audit workflows',
            'Ongoing visibility over implementation and compliance',
            'This allows quality to be monitored continuously, not only at the final review stage.',
        ],
    },
    {
        title: 'KYC & client onboarding',
        subtitle:
            'Client onboarding and compliance are managed in a structured and consistent way.',
        bullets: [
            'Configurable KYC templates',
            'Clients complete required information through the Client Portal',
            'All compliance documentation stored centrally',
            'This ensures regulatory requirements are met from the start of each engagement.',
        ],
    },
]

const RiskAuditSection = ({
    variant = 'accounting',
    badgeText,
    heading,
    intro,
    introBullets,
    leftCards,
    bulletIconSrc = '/assets/images/bullet.png',
    backgroundImageSrc,
    rightOverlayCard,
}: RiskAuditSectionProps) => {
    const isAudit = variant === 'audit'

    const effectiveBadge = badgeText || (isAudit ? 'RISK BASRD AUDIT' : 'RISK BASED AUDIT')
    const effectiveHeading =
        heading ||
        (isAudit ? 'Risk - based audit Procedures' : 'Posting, reconciliations & accuracy')
    const effectiveIntro =
        intro ||
        (isAudit
            ? 'The portal supports different approaches to audit methodology, depending on the engagement:'
            : 'Accounting work is performed within controlled processes.')

    const effectiveIntroBullets =
        introBullets || (isAudit ? auditIntroBullets : accountingIntroBullets)
    const effectiveLeftCards = leftCards || (isAudit ? auditLeftCards : accountingLeftCards)
    const effectiveBackground =
        backgroundImageSrc ||
        (isAudit ? '/assets/images/Rectangle 34624210 (2).png' : '/assets/images/Rectangle 34624210 (1).png')
    const effectiveRightOverlay = rightOverlayCard || accountingRightOverlayCard

    const getSectionIcon = (title: string) => {
        if (title.toLowerCase().includes('bank')) return PiggyBank
        if (title.toLowerCase().includes('credit')) return CreditCard
        return null
    }
    return (
        <section className="py-16 lg:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.1fr] gap-10 lg:gap-14 items-center">
                    {/* Left content */}
                    <FadeInUp className="space-y-8 text-left">
                        <SectionBadge text={effectiveBadge} className="mb-2" />

                        <div className="space-y-3">
                            <h2 className="text-3xl md:text-4xl font-semibold text-heading leading-tight">
                                {effectiveHeading}
                            </h2>
                            <p className="text-sm md:text-base text-gray leading-relaxed max-w-xl">
                                {effectiveIntro}
                            </p>
                            {effectiveIntroBullets?.items?.length > 0 && (
                                <ul className="mt-2 space-y-1.5 text-sm md:text-[13px] text-gray">
                                    {effectiveIntroBullets.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            {bulletIconSrc && (
                                                <Image
                                                    src={bulletIconSrc}
                                                    alt=""
                                                    width={14}
                                                    height={14}
                                                    className="mt-[3px] h-[14px] w-[14px]"
                                                />
                                            )}
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <p className="text-xs md:text-[13px] text-gray leading-relaxed max-w-xl">
                            This reduces errors, rework, and inconsistencies across periods.
                        </p>

                        {/* Two detail cards */}
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {effectiveLeftCards.map((card, index) => (
                                <FadeInUp
                                    key={index}
                                    className="bg-white rounded-2xl border border-[#E5E7F1] shadow-[0_10px_28px_rgba(15,23,42,0.08)] px-5 py-5"
                                >
                                    <h3 className="text-[13px] md:text-sm font-semibold text-heading mb-1.5">
                                        {card.title}
                                    </h3>
                                    <p className="text-[11px] md:text-xs text-gray mb-3 leading-relaxed">
                                        {card.subtitle}
                                    </p>
                                    <ul className="space-y-1.5 text-[11px] md:text-xs text-gray">
                                        {card.bullets.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                {bulletIconSrc && (
                                                    <Image
                                                        src={bulletIconSrc}
                                                        alt=""
                                                        width={12}
                                                        height={12}
                                                        className="mt-[3px] h-3 w-3"
                                                    />
                                                )}
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeInUp>
                            ))}
                        </StaggerContainer>
                    </FadeInUp>

                    {/* Right image and overlay cards */}
                    <FadeInUp delay={0.2} className="w-full">
                        <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.45)] bg-[#0B1025]">
                            <div className="relative w-full pt-[115%]">
                                <Image
                                    src={effectiveBackground}
                                    alt="Audit background"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {isAudit ? (
                                // Overlay cards as images for audit variant
                                <div className="absolute inset-0">
                                    {/* Top-left requirements card */}
                                    <div className="absolute top-[7%] left-[7%] w-[52%] max-w-sm">
                                        <Image
                                            src="/assets/images/Frame 1618872509.png"
                                            alt="Requirement listing card"
                                            width={800}
                                            height={800}
                                            className="w-full h-auto object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.5)]"
                                        />
                                    </div>

                                    {/* Bottom-right integrations card */}
                                    <div className="absolute bottom-[8%] right-[7%] w-[32%] max-w-[260px]">
                                        <Image
                                            src="/assets/images/Frame 1618872510.png"
                                            alt="Integrations card"
                                            width={600}
                                            height={600}
                                            className="w-full h-auto object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
                                        />
                                    </div>
                                </div>
                            ) : (
                                // Original accounting overlay card
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="translate-x-[10%] bg-white rounded-2xl border border-[#E5E7F5] shadow-[0_28px_60px_rgba(15,23,42,0.4)] w-[72%] max-w-sm px-4 py-4 md:px-6 md:py-6 text-[11px] text-[#4B5563] pointer-events-auto min-h-[260px] md:min-h-[290px] flex flex-col">
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <p className="text-[10px] font-semibold text-[#111827]">
                                                    {effectiveRightOverlay.header}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between text-[10px] text-gray-500">
                                                <span>{effectiveRightOverlay.totalLabel}</span>
                                                <span
                                                    className="font-semibold"
                                                    style={{
                                                        color:
                                                            effectiveRightOverlay.totalAccentColor || '#16A34A',
                                                    }}
                                                >
                                                    {effectiveRightOverlay.totalValue}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-4 flex-1">
                                            {effectiveRightOverlay.sections.map((section, idx) => {
                                                const Icon = getSectionIcon(section.title)
                                                return (
                                                    <div
                                                        key={section.title}
                                                        className={
                                                            idx === 0 ? 'pt-3 border-t border-gray-200' : 'pt-2'
                                                        }
                                                    >
                                                        <div className="flex items-center gap-2 mb-2.5">
                                                            {Icon && (
                                                                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                                                                    <Icon className="h-3 w-3" strokeWidth={2} />
                                                                </span>
                                                            )}
                                                            <p className="text-[10px] font-semibold text-[#111827]">
                                                                {section.title}
                                                            </p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            {section.rows.map((row, rowIdx) => (
                                                                <div
                                                                    key={rowIdx}
                                                                    className="flex items-center justify-between text-[11px]"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="h-8 w-8 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center">
                                                                            {Icon && (
                                                                                <Icon
                                                                                    className="h-4 w-4 text-gray-500"
                                                                                    strokeWidth={1.9}
                                                                                />
                                                                            )}
                                                                        </div>
                                                                        <div className="flex flex-col leading-tight">
                                                                            <span className="text-[#111827]">
                                                                                {row.label}
                                                                            </span>
                                                                            {row.note && (
                                                                                <span className="text-[10px] text-[#9CA3AF]">
                                                                                    {row.note}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <span className="text-[#111827] font-semibold">
                                                                        {row.value}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    )
}

export default RiskAuditSection


