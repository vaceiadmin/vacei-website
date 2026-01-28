import React from 'react'
import Link from 'next/link'
import GradientContainer from './GradientContainer'

interface BreadcrumbItem {
    label: string
    href?: string
}

interface PageHeaderProps {
    title: string
    breadcrumbs: BreadcrumbItem[]
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
    return (
        <GradientContainer className="my-6">
            <div className="flex flex-col items-center justify-center py-20 md:py-32 lg:py-40 px-4 text-center">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
                    {title}
                </h1>

                {/* Breadcrumbs */}
                <div
                    className="flex items-center gap-4 rounded-full px-6 py-2.5 shadow-sm bg-text-heading border border-gray-600 backdrop-blur-md"
                >
                    <Link href="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                        <svg
                            className="w-4 h-4 group-hover:text-white transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span className="text-sm font-normal">Home</span>
                    </Link>

                    {breadcrumbs.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Separator - Always show separator as we have Home icon first */}
                            <span className="text-white/20 text-[10px]">●</span>

                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="text-white/80 hover:text-white transition-colors text-sm font-normal"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-white text-sm font-normal">
                                    {item.label}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </GradientContainer>
    )
}

export default PageHeader
