import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import AIReviewFeature from '@/components/ai-review/AIReviewFeature'
import PortalFeature from '@/components/services/PortalFeature'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ReviewOutputSection from '@/components/ai-review/ReviewOutputSection'
import BenefitsVideoSection from '@/components/ai-review/BenefitsVideoSection'

const AIReviewPage = () => {
    const aiReviewServiceFeatures = {
        title: "All advisory activity is organized and accessible in one place",
        subtitle: "Request a clear quote based on your business",
        features: [
            {
                title: "Who It's For",
                items: [
                    "Operating companies that need ongoing bookkeeping and accounting",
                    "Growing businesses that require structured financial reporting",
                    "Management teams that need visibility over performance and cash flow",
                    "Businesses preparing for audit, investment or expansion"
                ]
            },
            {
                title: "Who It's For",
                items: [
                    "Operating companies that need ongoing bookkeeping and accounting",
                    "Growing businesses that require structured financial reporting",
                    "Management teams that need visibility over performance and cash flow",
                    "Businesses preparing for audit, investment or expansion"
                ]
            },
            {
                title: "Who It's For",
                items: [
                    "Operating companies that need ongoing bookkeeping and accounting",
                    "Growing businesses that require structured financial reporting",
                    "Management teams that need visibility over performance and cash flow",
                    "Businesses preparing for audit, investment or expansion"
                ]
            },
            {
                title: "Who It's For",
                items: [
                    "Operating companies that need ongoing bookkeeping and accounting",
                    "Growing businesses that require structured financial reporting",
                    "Management teams that need visibility over performance and cash flow",
                    "Businesses preparing for audit, investment or expansion"
                ]
            },
            {
                title: "Who It's For",
                items: [
                    "Operating companies that need ongoing bookkeeping and accounting",
                    "Growing businesses that require structured financial reporting",
                    "Management teams that need visibility over performance and cash flow",
                    "Businesses preparing for audit, investment or expansion"
                ]
            }
        ]
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <PageHeader
                    title="AI Review"
                    breadcrumbs={[
                        { label: 'AI Review' }
                    ]}
                />
            </div>

            <AIReviewFeature />
            
            <PortalFeature portalImage="/assets/images/Frame 1618872451.png" />
            <ServiceFeatures
                title={aiReviewServiceFeatures.title}
                subtitle={aiReviewServiceFeatures.subtitle}
                features={aiReviewServiceFeatures.features}
            />
            <ReviewOutputSection />
            <BenefitsVideoSection />
        </main>
    )
}

export default AIReviewPage
