import React from 'react'
import { motion } from "framer-motion"
import GetInstantQuoteButton from '../common/GetInstantQuoteButton'
import TextAnimation from '../common/TextAnimation'
import GlassyEffect from '../common/GlassyEffect'
import BoxShadow from '../common/BoxShadow'
import { FadeInUp, StaggerContainer } from '../common/Animations'

const CompanySetupSection = () => {
  return (
    <section className="w-full py-16 lg:py-20 bg-section-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <FadeInUp className="text-center mb-8 lg:mb-10 max-w-2xl mx-auto">
          <TextAnimation
            text="Start a Company in Malta"
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight"
          />
          <TextAnimation
            text="We handle incorporation and setup end-to-end – and you manage everything through one client portal."
            as="p"
            className="text-base md:text-lg text-text-dark max-w-3xl mx-auto leading-relaxed"
          />
        </FadeInUp>

        {/* Three Content Boxes */}
        <div className="relative mb-10 lg:mb-12">
            {/* Background blob for glass effect */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-r from-blue-50/60 via-purple-50/60 to-blue-50/60 blur-3xl -z-10 rounded-full pointer-events-none" 
            />

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
            {/* What we handle */}
            <FadeInUp className="h-full">
            <BoxShadow className="h-full p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-primary mb-5">
                What we handle
                </h3>
                <ul className="space-y-3.5">
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • Company incorporation and registration
                </li>
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • Statutory setup and compliance onboarding
                </li>
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • Corporate services and ongoing filings
                </li>
                </ul>
            </BoxShadow>
            </FadeInUp>

            {/* What you do */}
            <FadeInUp className="h-full">
            <BoxShadow className="h-full p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-primary mb-5">
                What you do
                </h3>
                <ul className="space-y-3.5">
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • Complete KYC (guided, step-by-step)
                </li>
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • Upload required documents
                </li>
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • Approve key details
                </li>
                </ul>
            </BoxShadow>
            </FadeInUp>

            {/* What you get */}
            <FadeInUp className="h-full">
            <BoxShadow className="h-full p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-primary mb-5">
                What you get
                </h3>
                <ul className="space-y-3.5">
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • Your company fully set up
                </li>
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • A compliance calendar from day one
                </li>
                <li className="text-sm lg:text-base text-text-dark leading-relaxed">
                    • One portal to track everything
                </li>
                </ul>
            </BoxShadow>
            </FadeInUp>
            </StaggerContainer>
        </div>

        {/* Call-to-Action Buttons */}
        <FadeInUp 
          delay={0.4}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GetInstantQuoteButton
            variant="custom"
            text="Start a Company in Malta"
            href="/company-setup"
            bgColor="var(--primary-blue)"
            textColor="white"
            className="px-8 py-3.5 text-base font-medium rounded-full"
            hasShadow={true}
          />
          <GetInstantQuoteButton
            variant="custom"
            text="Book a Call"
            href="/book-call"
            bgColor="var(--primary)"
            textColor="white"
            className="px-8 py-3.5 text-base font-medium rounded-full"
            hasShadow={false}
          />
        </FadeInUp>
      </div>
    </section>
  )
}

export default CompanySetupSection

