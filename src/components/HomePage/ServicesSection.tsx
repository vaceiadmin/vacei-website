'use client'

import React, { useState } from 'react'
import GradientContainer from '../common/GradientContainer'
import GetInstantQuoteButton from '../common/GetInstantQuoteButton'

interface ServiceCard {
  id: number
  title: string
  illustration: React.ReactNode
  content?: React.ReactNode
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'experts' | 'products'>('services')
  const [currentIndex, setCurrentIndex] = useState(0)

  const services: ServiceCard[] = [
    {
      id: 1,
      title: 'Accounting and Finance',
      illustration: (
        <div className="flex gap-3 mb-4">
          <div className="flex-1 bg-[#C2C7FF] rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--purple-bg)] opacity-60"></div>
              <div className="w-12 h-8 bg-[var(--purple-bg)] rounded opacity-40"></div>
            </div>
            <div className="w-full h-2 bg-[var(--purple-bg)] rounded opacity-30"></div>
            <div className="w-3/4 h-2 bg-[var(--purple-bg)] rounded opacity-30"></div>
          </div>
          <div className="flex-1 bg-[#C2C7FF] rounded-lg p-4 flex flex-col gap-2">
            <div className="w-full h-3 bg-[var(--purple-bg)] rounded opacity-40"></div>
            <div className="w-full h-3 bg-[var(--purple-bg)] rounded opacity-30"></div>
            <div className="w-2/3 h-3 bg-[var(--purple-bg)] rounded opacity-30"></div>
            <div className="w-full h-8 bg-[var(--purple-bg)] rounded mt-2 opacity-20"></div>
          </div>
        </div>
      ),
      content: (
        <div className="text-sm text-[var(--text-dark)] space-y-1">
          <p className="font-medium">Transaction Joel Kenley -$68.00</p>
          <p className="text-xs text-gray-500">$3280 Spent this month 56% &gt;</p>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Tax and Compliance',
      illustration: (
        <div className="mb-4 space-y-3">
          <div className="bg-[#C2C7FF] rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-[var(--primary)]">Tax Form List</h4>
              <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-green-600">Approved</span>
              </div>
            </div>
            <div className="space-y-2">
              {['Tax Form Update', 'Compliance Review', 'Audit Preparation', 'Audit Preparation'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[var(--primary)]">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-[var(--primary)] mb-2">Documents</p>
              <div className="space-y-1">
                <div className="w-full h-1 bg-gray-200 rounded"></div>
                <div className="w-full h-1 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Audit and Assurance',
      illustration: (
        <div className="mb-4 space-y-3">
          <div className="bg-[#C2C7FF] rounded-lg p-4">
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-[var(--primary)]">€8,232.61</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">0% vs last month</p>
                <div className="w-full h-8 bg-[var(--purple-bg)] rounded opacity-30"></div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="space-y-1 text-xs text-[var(--primary)]">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[var(--purple-bg)] rounded-full"></div>
                    <span>Checklist 1</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[var(--purple-bg)] rounded-full"></div>
                    <span>Checklist 2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[var(--purple-bg)] rounded-full"></div>
                    <span>Checklist 3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-3">
              {['70%', '30%', '50%'].map((percent, idx) => (
                <div key={idx} className="w-12 h-12 rounded-full bg-[var(--purple-bg)] opacity-20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[var(--primary)]">{percent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Regulated and Licensing',
      illustration: (
        <div className="mb-4 space-y-3">
          <div className="bg-[#C2C7FF] rounded-lg p-4">
            <div className="flex items-center justify-center mb-3">
              <div className="bg-blue-100 px-4 py-2 rounded-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-bold text-blue-600">License Approved</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 bg-white rounded p-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--purple-bg)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 bg-white rounded p-3 flex flex-col items-center justify-center gap-2">
                <svg className="w-6 h-6 text-[var(--purple-bg)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <div className="w-8 h-1 bg-[var(--purple-bg)] rounded opacity-30"></div>
                <div className="w-6 h-1 bg-[var(--purple-bg)] rounded opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  // Show all 4 cards at once, carousel can cycle through them
  const visibleCards = 4
  const displayServices = []
  
  for (let i = 0; i < visibleCards; i++) {
    const index = (currentIndex + i) % services.length
    displayServices.push(services[index])
  }

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <GradientContainer className="py-12 lg:py-16 bg-[var(--primary)]">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-10 lg:mb-12">
            <div className="inline-flex bg-white/10 rounded-lg p-1 gap-1">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'services'
                    ? 'bg-[var(--primary-blue)] text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('experts')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'experts'
                    ? 'bg-[var(--primary-blue)] text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Experts
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'products'
                    ? 'bg-[var(--primary-blue)] text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Products
              </button>
            </div>
          </div>

          {/* Service Cards Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              {displayServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Illustration */}
                  <div className="mb-4">{service.illustration}</div>

                  {/* Content */}
                  {service.content && <div className="mb-4">{service.content}</div>}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[var(--primary)] mb-4">
                    {service.title}
                  </h3>

                  {/* Request Service Button */}
                  <GetInstantQuoteButton
                    variant="custom"
                    text="Request Service"
                    href={`/services/${service.id}`}
                    bgColor="var(--primary)"
                    textColor="white"
                    className="w-full justify-center text-sm py-2.5"
                    hasShadow={false}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[var(--purple-bg)] text-white flex items-center justify-center hover:bg-[var(--primary-blue)] transition-colors"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-[var(--purple-bg)] text-[var(--purple-bg)] flex items-center justify-center hover:bg-[var(--purple-bg)] hover:text-white transition-colors"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </GradientContainer>
      </div>
    </section>
  )
}

export default ServicesSection

