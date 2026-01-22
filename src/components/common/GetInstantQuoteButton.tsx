import React from 'react'
import Link from 'next/link'

interface GetInstantQuoteButtonProps {
  hasShadow?: boolean
  className?: string
  variant?: 'default' | 'book-demo'
}

const GetInstantQuoteButton = ({ hasShadow = true, className = "", variant = 'default' }: GetInstantQuoteButtonProps) => {
  if (variant === 'book-demo') {
    return (
      <Link
        href="/demo"
        className={`
          inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-full transition-all text-[15px] font-medium 
          ${className}
        `}
      >
        Book a Demo
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    )
  }

  return (
    <Link
      href="/quote"
      className={`
        inline-flex items-center gap-2 bg-[var(--primary-blue)] hover:bg-[#2F3BC4] text-white px-6 py-3 rounded-full transition-all text-[15px] font-medium 
        ${hasShadow ? 'shadow-[0_4px_30px_rgba(59,73,230,0.6)] hover:shadow-[0_6px_40px_rgba(59,73,230,0.8)] transform hover:-translate-y-0.5' : ''}
        ${className}
      `}
    >
      Get Instant Quote
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  )
}

export default GetInstantQuoteButton
