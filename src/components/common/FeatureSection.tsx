'use client'

import React from 'react'
import Image from 'next/image'
import GradientContainer from './GradientContainer'
import GetInstantQuoteButton from './GetInstantQuoteButton'
import TextAnimation from './TextAnimation'
import { FadeInUp, StaggerContainer } from './Animations'

interface FeatureItem {
    title: string
    description: string
    content?: string[] // For bullet points
    paragraph?: string // For paragraph text
    buttonText?: string
    buttonHref?: string
    mainImage?: string
    overlayImages?: {
        src: string
        alt: string
        position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right'
        size?: 'small' | 'medium' | 'large'
    }[]
    useImageBackground?: boolean // If true, use image instead of GradientContainer
    backgroundImage?: string
    reverseLayout?: boolean // If true, image on left, text on right
}

interface FeatureSectionProps {
    features: FeatureItem[]
    className?: string
    useGridLayout?: boolean // Force grid layout
}

const FeatureSection = ({ features, className = '', useGridLayout = false }: FeatureSectionProps) => {
    const getOverlayPosition = (position: string) => {
        const positions: Record<string, string> = {
            // Slightly offset positions to create a more dynamic, layered look
            'top-left': 'top-4 left-2 lg:top-6 lg:left-6',
            'top-right': 'top-4 right-0 lg:top-6 lg:right-4',
            'bottom-left': 'bottom-0 left-0 lg:bottom-4 lg:left-4',
            'bottom-right': 'bottom-1 right-1 lg:bottom-4 lg:right-8',
            'center-left': 'top-1/2 -translate-y-1/2 -left-2 lg:-left-4',
            'center-right': 'top-1/2 -translate-y-1/2 -right-2 lg:-right-4',
        }
        return positions[position] || positions['top-right']
    }

    const getOverlaySize = (size: string = 'medium') => {
        const sizes: Record<string, string> = {
            // Make size differences much more pronounced so each overlay feels unique
            // and better matches the provided reference tiles.
            'small': 'w-[28%] h-[22%] lg:w-[30%] lg:h-[24%]',
            'medium': 'w-[46%] h-[32%] lg:w-[50%] lg:h-[34%]',
            'large': 'w-[68%] h-[44%] lg:w-[70%] lg:h-[46%]',
        }
        return sizes[size] || sizes['medium']
    }

    // Auto-detect grid layout for 4 features (2x2 grid)
    const shouldUseGrid = useGridLayout && features.length === 4

    const renderCard = (feature: FeatureItem, index: number) => {
        // For 2-row layout: 1st card (index 0) = image left (order-1), content right (order-2)
        // 2nd card (index 1) = image right (order-2), content left (order-1)
        const getImageOrder = () => {
            // For 2-row layout: alternate image position
            if (shouldUseGrid) return ''
            return index === 0 ? 'lg:order-1' : 'lg:order-2'
        }

        const getContentOrder = () => {
            // For 2-row layout: alternate content position
            if (shouldUseGrid) return ''
            return index === 0 ? 'lg:order-2' : 'lg:order-1'
        }

        return (
            <div 
                key={index} 
                className={`flex flex-col h-full ${shouldUseGrid ? 'lg:flex-row' : 'lg:flex-row'} items-center gap-6 lg:gap-8`}
            >
                <FadeInUp className={`flex-1 w-full min-w-0 ${getImageOrder()}`}>
                    {feature.useImageBackground && feature.backgroundImage ? (
                        // Use image as background - fixed height
                        <div className="relative w-full h-[400px] overflow-hidden rounded-3xl bg-card">
                            <div className="absolute inset-0 w-full h-full [&>img]:object-contain! [&>img]:w-full! [&>img]:h-full!">
                                <Image
                                    src={feature.backgroundImage}
                                    alt={feature.title}
                                    fill
                                    className="object-contain!"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index === 0}
                                />
                            </div>
                            {/* Overlay Images */}
                            {feature.overlayImages &&
                                feature.overlayImages.map((overlay, overlayIndex) => (
                                    <div
                                        key={overlayIndex}
                                        className={`absolute ${getOverlayPosition(overlay.position)} ${getOverlaySize(
                                            overlay.size
                                        )} z-20 overflow-hidden`}
                                    >
                                        <Image
                                            src={overlay.src}
                                            alt={overlay.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                        </div>
                    ) : (
                        // Use image without background container - fixed height
                        <div className="relative w-full h-[400px] overflow-hidden rounded-3xl bg-card">
                            {/* Main Image */}
                            {feature.mainImage && (
                                <div className="absolute inset-0 w-full h-full [&>img]:object-contain! [&>img]:w-full! [&>img]:h-full!">
                                    <Image
                                        src={feature.mainImage}
                                        alt={feature.title}
                                        fill
                                        className="object-contain!"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                </div>
                            )}

                            {/* Overlay Images */}
                            {feature.overlayImages &&
                                feature.overlayImages.map((overlay, overlayIndex) => (
                                    <div
                                        key={overlayIndex}
                                        className={`absolute ${getOverlayPosition(overlay.position)} ${getOverlaySize(
                                            overlay.size
                                        )} z-20 rounded-3xl bg-white/95 border border-white/60 shadow-xl shadow-slate-900/20 backdrop-blur-sm overflow-hidden`}
                                    >
                                        <Image
                                            src={overlay.src}
                                            alt={overlay.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                        </div>
                    )}
                </FadeInUp>

                {/* Text Content */}
                <StaggerContainer className={`flex-1 space-y-4 lg:space-y-6 w-full flex flex-col justify-center ${getContentOrder()}`}>
                    <TextAnimation 
                        text={feature.title}
                        as="h2"
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading leading-tight"
                    />
                    <p className="text-base lg:text-lg text-gray leading-relaxed">
                        {feature.description}
                    </p>

                    {/* Content: Bullet Points or Paragraph */}
                    {feature.content && feature.content.length > 0 && (
                        <div className="space-y-3 lg:space-y-4 pt-2">
                            <FadeInUp>
                                <h3 className="font-bold text-heading text-base lg:text-lg">What clients see in the portal:</h3>
                            </FadeInUp>
                            <ul className="space-y-2">
                                {feature.content.map((item, i) => (
                                    <FadeInUp 
                                        key={i} 
                                        as="li"
                                        className="flex items-center gap-3 text-gray"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray shrink-0"></div>
                                        <span>{item}</span>
                                    </FadeInUp>
                                ))}
                            </ul>
                        </div>
                    )}

                    {feature.paragraph && (
                        <FadeInUp className="text-base lg:text-lg text-gray leading-relaxed pt-2 space-y-3">
                            {feature.paragraph.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </FadeInUp>
                    )}

                    {/* Button */}
                    {feature.buttonText && feature.buttonHref && (
                        <FadeInUp className="pt-4">
                            <GetInstantQuoteButton
                                variant="custom"
                                text={feature.buttonText}
                                href={feature.buttonHref}
                                bgColor="var(--card-hover-overlay)"
                                textColor="white"
                                className="px-6 lg:px-8 py-3 rounded-full font-semibold shadow-lg shadow-indigo-500/20"
                            />
                        </FadeInUp>
                    )}
                </StaggerContainer>
            </div>
        )
    }

    return (
        <section className={`w-full py-12 lg:py-20 ${className}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="space-y-16 lg:space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className="w-full">
                            {renderCard(feature, index)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
