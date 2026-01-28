import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import ClientPortalOverviewSection from '@/components/client-portal/ClientPortalOverviewSection'
import ClientPortalFeaturesTimelineSection from '@/components/client-portal/ClientPortalFeaturesTimelineSection'
import PortalFeature from '@/components/services/PortalFeature'

const ClientPortalPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <div className="w-full">
                <PageHeader
                    title="Client Portal"
                    breadcrumbs={[
                        { label: 'Client Portal' },
                    ]}
                />
            </div>

            <ClientPortalOverviewSection />
            <PortalFeature
                portalImage="/assets/images/portal.png"
                sectionLabel="Our services"
                heading="Task and Documents Upload"
                description="The portal allows you to upload documents securely and respond to requests easily."
                bulletIntro="You can:"
                bulletItems={[
                    'Upload invoices, receipts and supporting documents',
                    'Respond to accounting, compliance or audit requests',
                    'View what’s pending, completed or overdue',
                    'Keep documents organised and accessible at all times',
                ]}
                closingText="Documents remain organised and accessible at all times, so your team and the VACEI team always have the information they need."
                bottomTitle="Client Portal"
                bottomDescription="Documents, tasks, deadlines and communication in one place."
            />
            <ClientPortalFeaturesTimelineSection />
        </main>
    )
}

export default ClientPortalPage


