import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import TechnologyOverview from '@/components/technology/TechnologyOverview'
import TechnologyServices from '@/components/technology/TechnologyServices'
import TechnologyComponent from '@/components/technology/TechnologyComponent'
import TechnologyRegulated from '@/components/technology/TechnologyRegulated'
import PortalFeature from '@/components/services/PortalFeature'

const TechnologyPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <PageHeader
                    title="Our Technology"
                    breadcrumbs={[
                        { label: 'Our Technology' }
                    ]}
                />
            </div>

            <TechnologyOverview />
            {/* <TechnologyServices /> */}
            <PortalFeature
                variant="technology"
                portalImage="/assets/images/Frame 1618872736.png"
                sectionLabel="Our services"
                heading="How our technology supports delivery"
                description="Each client is managed through a defined monthly accounting cycle."
                bulletIntro=""
                bulletItems={[
                    'Bookkeeping and transaction posting',
                    'Reconciliations and internal checks',
                    'VAT and payroll preparation',
                    'Review and finalisation',
                ]}
                closingText="Workflows are structured so tasks are completed in the correct sequence, responsibilities are clear, and progress is visible at every stage."
                bottomTitle="Our Technology"
                bottomDescription="Documents, tasks, deadlines and communication in one place."
                quoteText="Good firms rely on experience. Great firms rely on structure. VACEI exists to make that structure visible, auditable, and scalable"
            />
            <TechnologyComponent />
            <TechnologyRegulated />

        </main>
    )
}

export default TechnologyPage

