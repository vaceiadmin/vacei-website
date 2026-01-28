import React from 'react'
import GradientContainer from '@/components/common/GradientContainer'
import HowItWorksTimeline, { HowItWorksStep } from '@/components/how-it-works/HowItWorksTimeline'

const clientPortalSteps: HowItWorksStep[] = [
    {
        id: 'cp-step-1',
        number: '01.',
        title: 'Chat and Call Scheduling',
        description:
            'You can communicate directly with your VACEI team through built in messaging. Calls and meetings can be scheduled through the portal, reducing back and forth emails.',
        image: '/assets/images/Chat and Call Scheduling.png',
    },
    {
        id: 'cp-step-2',
        number: '02.',
        title: 'Deadlines and Compliance Tracking',
        description:
            'The portal tracks key deadlines across your services.\n\nThis includes:\n• VAT and payroll deadlines\n• Corporate filings\n• VAT and payroll processing\n• Audit milestones\n• Regulatory renewals\n\nYou can see what is due, what is in progress and what has been completed.',
        image: '/assets/images/Deadlines and Compliance Tracking.png',
    },
    {
        id: 'cp-step-3',
        number: '03.',
        title: 'Reports and Documents',
        description:
            'All reports, filings and confirmations are stored in the portal. You have continuous access to:\n• Financial reports\n• Filed documents\n• Audit deliverables\n• Corporate records\n\nEverything is stored securely and remains available for reference.',
        image: '/assets/images/Reports and Documents.png',
    },
    {
        id: 'cp-step-4',
        number: '04.',
        title: 'Billing and Invoices',
        description:
            'Invoices and billing information are accessible through the portal. This provides transparency and a clear record of services delivered.',
        image: '/assets/images/Billing and Invoices.png',
    },
    {
        id: 'cp-step-5',
        number: '05.',
        title: 'Security and Access Control',
        description:
            'Access to the client portal is controlled by role and permission. All data is encrypted and handled in line with GDPR and professional standards.',
        image: '/assets/images/Chat and Call Scheduling.png',
    },
]

const ClientPortalFeaturesTimelineSection = () => {
    return (
        <section className="py-16 lg:py-24">
            <div>
                <GradientContainer
                    showRadials={true}
                    backgroundColor="bg-gradient-container"
                    className="rounded-2xl px-4 md:px-8 py-10 md:py-12 lg:py-14"
                >
                     <HowItWorksTimeline
                         steps={clientPortalSteps}
                         backgroundClassName="bg-transparent"
                         mode="dark"
                     />
                </GradientContainer>
            </div>
        </section>
    )
}

export default ClientPortalFeaturesTimelineSection


