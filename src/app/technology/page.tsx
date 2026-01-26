import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import TechnologyOverview from '@/components/technology/TechnologyOverview'
import TechnologyServices from '@/components/technology/TechnologyServices'
import TechnologyComponent from '@/components/technology/TechnologyComponent'
import TechnologyRegulated from '@/components/technology/TechnologyRegulated'

const TechnologyPage = () => {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <PageHeader
                    title="Our Technology"
                    breadcrumbs={[
                        { label: 'Our Technology' }
                    ]}
                />
            </div>

            <TechnologyOverview />
            <TechnologyServices />
            <TechnologyComponent />
            <TechnologyRegulated />

        </main>
    )
}

export default TechnologyPage

