import React from 'react'

interface SectionBadgeProps {
    text: string
    className?: string
}

const SectionBadge = ({ text, className = '' }: SectionBadgeProps) => {
    return (
        <div
            className={`inline-flex items-center rounded-lg border-2 border-dashed border-[#6F74B8] px-4 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#1C2340] bg-transparent ${className}`}
        >
            {text}
        </div>
    )
}

export default SectionBadge


