import React from 'react'
import PageHeader from '@/components/common/PageHeader'
import ContactForm from '@/components/quote/ContactForm'
import QuoteProcess from '@/components/quote/QuoteProcess'
import QuoteFormSection from '@/components/quote/QuoteFormSection'

const QuotePage = () => {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <PageHeader
                    title="Get a Quote"
                    breadcrumbs={[
                        { label: 'Get a Quote' }
                    ]}
                />
            </div>
            <ContactForm />
            <QuoteProcess />
            <QuoteFormSection />
        </main>
    )
}

export default QuotePage

