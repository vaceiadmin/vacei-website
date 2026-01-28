import React from 'react'
import { notFound } from 'next/navigation'
import PageHeader from '@/components/common/PageHeader'
import { getServiceBySlug, servicesData } from '@/data/servicesData'
import ServiceOverview from '@/components/services/ServiceOverview'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import PortalFeature from '@/components/services/PortalFeature'

interface ServicePageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }))
}

const ServicePage = async ({ params }: ServicePageProps) => {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <PageHeader
                    title={service.title}
                    breadcrumbs={service.breadcrumbs}
                />

                {/* Placeholder for service content */}
            </div>

            <ServiceOverview
                title={service.title}
                description={service.description}
                image={service.image}
            />

            {service.featuresSection && (
                <div className="mt-16 lg:mt-24">
                    <ServiceFeatures
                        title={service.featuresSection.title}
                        subtitle={service.featuresSection.subtitle}
                        features={service.featuresSection.features}
                    />
                </div>
            )}

            {service.portalImage && (
                <PortalFeature portalImage={service.portalImage} />
            )}
        </main>
    )
}

export default ServicePage
