'use client'

import React from 'react'
import Image from 'next/image'
import GetInstantQuoteButton from '@/components/common/GetInstantQuoteButton'

const RadialImage = '/assets/images/Radial.png'
const FinancialOverviewImage = '/assets/images/financial-overview.png'
const CashflowImage = '/assets/images/cashflow.png'
const ComplianceSnapshotImage = '/assets/images/compliance-snapshot.png'

const GetStartedHero = () => {
  return (
    <section 
      className="relative z-50 w-full overflow-visible py-8 lg:py-12"
      style={{
        background: 'linear-gradient(to bottom, var(--background) 50%, var(--background-secondary) 50%)'
      }}
    >
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className="relative w-full overflow-hidden bg-[var(--purple-bg)] max-w-6xl h-[22.5rem] rounded-lg shadow-[inset_4px_4px_24px_rgba(36,39,72,0.24),inset_-4px_-4px_24px_rgba(36,39,72,0.24)]"
        >
          {/* Radial Gradient Pattern Image - Right side full width */}
          <div className="absolute top-6 right-0 w-96 h-96 overflow-hidden">
            <Image
              src={RadialImage}
              alt="Radial Gradient Pattern"
              fill
              className="object-cover object-right"
              style={{ opacity: 0.6 }}
            />
          </div>
          
          <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
              {/* Left Content */}
              <div className="text-white space-y-5">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Get Started
                </h1>
                
                <p className="text-base lg:text-lg leading-relaxed opacity-90 max-w-xl">
                  Modernise how your business handles accounting, audit and compliance. One firm. One platform. Full visibility.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <GetInstantQuoteButton variant="default" />
                  <GetInstantQuoteButton variant="book-demo" />
                </div>
              </div>
              
              {/* Right Content - Cards Overlay */}
              <div className="relative lg:min-h-[20rem] h-full">
                {/* Financial Overview Card - Top Right */}
                <div className="absolute -top-6 right-0 lg:right-6 w-full sm:w-64 h-36 z-20">
                  <div className="relative w-full h-auto">
                    <Image
                      src={FinancialOverviewImage}
                      alt="Financial Overview"
                      width={320}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Cashflow Summary Card - Middle Left */}
                <div className="absolute top-2 -left-6 w-full sm:w-[22rem] lg:w-[26rem] h-60 z-10 mt-6">
                  <div className="relative w-full h-auto">
                    <Image
                      src={CashflowImage}
                      alt="Cashflow Summary"
                      width={400}
                      height={250}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                
                {/* Compliance Snapshot Card - Bottom Left */}
                <div className="absolute top-[14rem] -left-16 w-full sm:w-64 h-48 z-30 transform -rotate-1">
                  <div className="relative w-full h-auto">
                    <Image
                      src={ComplianceSnapshotImage}
                      alt="Compliance Snapshot"
                      width={300}
                      height={180}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedHero

