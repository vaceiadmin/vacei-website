import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import ClientPortalOverviewSection from '@/components/client-portal/ClientPortalOverviewSection'
import PortalFeature from '@/components/services/PortalFeature'
import RiskAuditSection from '@/components/accounting/RiskAuditSection'
import HowItWorksTimeline, { HowItWorksStep } from '@/components/how-it-works/HowItWorksTimeline'
import ServiceFeatures from '@/components/services/ServiceFeatures'

const auditWorkflowSteps: HowItWorksStep[] = [
    {
        id: 'audit-1',
        number: '01.',
        title: 'Document requests & communication',
        description:
            'All audit-related requests and communication are centralised.\n\n• Structured PBC and document request lists\n• Clear tracking of received and outstanding items\n• Communication linked directly to requests and audit sections\n\nThis reduces delays, avoids duplication, and keeps evidence organised throughout the audit.',
        image: '/assets/images/Document requests & communication.png',
    },
    {
        id: 'audit-2',
        number: '02.',
        title: 'Trial balance & ETB review',
        description:
            'The audit process begins with trial balance upload and review.\n\n• Trial balances uploaded directly into the portal\n• Accounts classified using predefined rules\n• Consistent structure applied across engagements\n\nOnce classified, the portal generates the relevant audit sections, removing repetitive setup work and improving consistency year-on-year.',
        image: '/assets/images/Trial balance & ETB review.png',
    },
    {
        id: 'audit-3',
        number: '03.',
        title: 'AI-supported audit workflows',
        description:
            'AI is used as a support layer within the audit process. It assists with:\n\n• Risk analysis\n• Procedure support\n• Drafting of procedure responses\n\nProcedure responses are evidence-driven and linked to:\n• The specific account tested\n• The working papers used\n• The supporting evidence attached',
        image: '/assets/images/AI-supported audit workflows.png',
    },
    {
        id: 'audit-4',
        number: '04.',
        title: 'Financial statements support',
        description:
            'The portal supports the preparation and review of financial statements as part of the audit workflow.\n\n• Support for balance sheets and income statements\n• Structure and consistency checks\n• Alignment between underlying data and reported figures',
        image: '/assets/images/Financial statements support.png',
    },
    {
        id: 'audit-5',
        number: '05.',
        title: 'Reviews & sign-off',
        description:
            'Audit progress and quality are managed through structured review stages.\n\n• Review points raised and tracked within the portal\n• Manager and partner sign-off stages\n• Complete audit trail from planning to completion\n\nThis ensures accountability, transparency, and defensible audit outcomes.',
        image: '/assets/images/Reviews & sign-off.png',
    },
]

const auditServiceFeatures = {
    title: (
        <>
            How VACEI delivers structured,
            <br />
            high-quality audits.
        </>
    ),
    subtitle: 'Who It’s For',
    features: [
        {
            title: "Who It’s For",
            items: [
                'Operating companies that need ongoing bookkeeping and accounting',
                'Growing businesses that require structured financial reporting',
                'Management teams that need visibility over performance and cash flow',
                'Businesses preparing for audit, investment or expansion',
            ],
        },
        {
            title: "Who It’s For",
            items: [
                'Operating companies that need ongoing bookkeeping and accounting',
                'Growing businesses that require structured financial reporting',
                'Management teams that need visibility over performance and cash flow',
                'Businesses preparing for audit, investment or expansion',
            ],
        },
        {
            title: "Who It’s For",
            items: [
                'Operating companies that need ongoing bookkeeping and accounting',
                'Growing businesses that require structured financial reporting',
                'Management teams that need visibility over performance and cash flow',
                'Businesses preparing for audit, investment or expansion',
            ],
        },
        {
            title: "Who It’s For",
            items: [
                'Operating companies that need ongoing bookkeeping and accounting',
                'Growing businesses that require structured financial reporting',
                'Management teams that need visibility over performance and cash flow',
                'Businesses preparing for audit, investment or expansion',
            ],
        },
    ],
}

const AuditPortalPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <PageHeader
                    title="Audit Portal"
                    breadcrumbs={[
                        { label: 'Audit Portal' },
                    ]}
                />
            </div>

            <ClientPortalOverviewSection
                variant="audit"
                heading="How VACEI delivers structured, high-quality audits"
                paragraphs={[
                    'The VACEI Audit Portal is the environment our audit teams use to manage audit engagements from start to finish.',
                    'It brings planning, documentation, evidence, communication, reviews, and sign-off into one structured workflow, ensuring audits are delivered efficiently, consistently, and in line with professional standards.',
                    'Clients interact through the Client Portal.',
                    'All audit execution and quality control takes place within the Audit Portal.',
                ]}
            />

            <PortalFeature
                portalImage="/assets/images/Audit.jpg"
                sectionLabel="Risk-based audit"
                heading="Audit engagement setup & Planning"
                description="Each audit engagement is set up and managed centrally within the portal."
                bulletIntro=""
                bulletItems={[
                    'Engagement details configured in one place',
                    'Clear structure from planning through completion',
                    'Defined ownership and responsibilities across the audit team',
                ]}
                closingText="This ensures audits are client-specific, risk-driven, and aligned with professional standards, rather than relying on generic checklists."
                bottomTitle="Audit Portal"
                bottomDescription="Documents, tasks, deadlines and communication in one place."
                quoteText="Good firms rely on experience. Great firms rely on structure. VACEI exists to make that structure visible, auditable, and scalable"
            />

            <RiskAuditSection variant="audit" />

            <HowItWorksTimeline
                steps={auditWorkflowSteps}
                backgroundClassName="bg-[#AAACC8]"
                mode="dark"
                showHeader={false}
            />

            <ServiceFeatures
                title={auditServiceFeatures.title}
                subtitle={auditServiceFeatures.subtitle}
                features={auditServiceFeatures.features}
                bulletIconSrc="/assets/images/bullet2.png"
                bulletIconAlt="Bullet"
            />
        </main>
    )
}

export default AuditPortalPage

