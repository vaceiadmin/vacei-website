import React from 'react'
import GetInstantQuoteButton from '../common/GetInstantQuoteButton'

const CompanySetupSection = () => {
  return (
    <section className="w-full py-16 lg:py-20" style={{ backgroundColor: 'var(--section-bg-light)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-8 lg:mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-4 leading-tight">
            Start a Company in Malta
          </h2>
          <p className="text-base md:text-lg text-[var(--text-dark)] max-w-3xl mx-auto leading-relaxed">
            We handle incorporation and setup end-to-end – and you manage everything through one client portal.
          </p>
        </div>

        {/* Three Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* What we handle */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-5">
              What we handle
            </h3>
            <ul className="space-y-3.5">
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • Company incorporation and registration
              </li>
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • Statutory setup and compliance onboarding
              </li>
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • Corporate services and ongoing filings
              </li>
            </ul>
          </div>

          {/* What you do */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-5">
              What you do
            </h3>
            <ul className="space-y-3.5">
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • Complete KYC (guided, step-by-step)
              </li>
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • Upload required documents
              </li>
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • Approve key details
              </li>
            </ul>
          </div>

          {/* What you get */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg lg:text-xl font-bold text-[var(--primary)] mb-5">
              What you get
            </h3>
            <ul className="space-y-3.5">
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • Your company fully set up
              </li>
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • A compliance calendar from day one
              </li>
              <li className="text-sm lg:text-base text-[var(--text-dark)] leading-relaxed">
                • One portal to track everything
              </li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <GetInstantQuoteButton
            variant="custom"
            text="Start a Company in Malta"
            href="/company-setup"
            bgColor="#3b49e6"
            textColor="white"
            className="px-8 py-3.5 text-base font-medium rounded-full"
            hasShadow={true}
          />
          <GetInstantQuoteButton
            variant="custom"
            text="Book a Call"
            href="/book-call"
            bgColor="#242748"
            textColor="white"
            className="px-8 py-3.5 text-base font-medium rounded-full"
            hasShadow={false}
          />
        </div>
      </div>
    </section>
  )
}

export default CompanySetupSection

