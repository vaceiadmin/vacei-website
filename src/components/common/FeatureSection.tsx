'use client'

import React from 'react'
import Image from 'next/image'
import GradientContainer from './GradientContainer'
import GetInstantQuoteButton from './GetInstantQuoteButton'
import TextAnimation from './TextAnimation'
import { FadeInUp, StaggerContainer } from './Animations'
import { motion } from 'framer-motion'

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
        // Automatically alternate layout based on index (index 0 = left, index 1 = right, etc.)
        // But respect explicit reverseLayout if provided in the data
        const isReversed = feature.reverseLayout !== undefined ? feature.reverseLayout : index % 2 === 1

        const getImageOrder = () => {
            if (shouldUseGrid) return ''
            return isReversed ? 'lg:order-2' : 'lg:order-1'
        }

        const getContentOrder = () => {
            if (shouldUseGrid) return ''
            return isReversed ? 'lg:order-1' : 'lg:order-2'
        }

        return (
            <div 
                key={index} 
                className={`group flex flex-col h-full ${shouldUseGrid ? 'lg:flex-row' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
            >
                <motion.div 
                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`flex-1 w-full min-w-0 ${getImageOrder()}`}
                >
                    {feature.useImageBackground && feature.backgroundImage ? (
                        // Use image as background - fixed height
                        <div className="relative w-full h-[450px] overflow-hidden rounded-[2.5rem] bg-card transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                            <div className="absolute inset-0 w-full h-full [&>img]:object-contain! [&>img]:w-full! [&>img]:h-full! transition-transform duration-1000 group-hover:scale-105">
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
                            <StaggerContainer staggerDelay={0.2}>
                                {feature.overlayImages &&
                                    feature.overlayImages.map((overlay, overlayIndex) => (
                                        <motion.div
                                            key={overlayIndex}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                                visible: { 
                                                    opacity: 1, 
                                                    scale: 1, 
                                                    y: 0,
                                                    transition: { duration: 0.8, ease: "easeOut" }
                                                }
                                            }}
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                y: {
                                                    duration: 3 + overlayIndex,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 0.8
                                                }
                                            }}
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
                                        </motion.div>
                                    ))}
                            </StaggerContainer>
                        </div>
                    ) : (
                        // Use image without background container - fixed height
                        <div className="relative w-full h-[450px] overflow-hidden rounded-[2.5rem] bg-card transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                            {/* Main Image */}
                            {feature.mainImage && (
                                <div className="absolute inset-0 w-full h-full [&>img]:object-contain! [&>img]:w-full! [&>img]:h-full! transition-transform duration-1000 group-hover:scale-105">
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
                            <StaggerContainer staggerDelay={0.2}>
                                {feature.overlayImages &&
                                    feature.overlayImages.map((overlay, overlayIndex) => (
                                        <motion.div
                                            key={overlayIndex}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                                visible: { 
                                                    opacity: 1, 
                                                    scale: 1, 
                                                    y: 0,
                                                    transition: { duration: 0.8, ease: "easeOut" }
                                                }
                                            }}
                                            animate={{
                                                y: [0, -15, 0], // Gentle float
                                            }}
                                            transition={{
                                                y: {
                                                    duration: 4 + overlayIndex,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 0.8
                                                }
                                            }}
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
                                        </motion.div>
                                    ))}
                            </StaggerContainer>
                        </div>
                    )}
                </motion.div>

                {/* Text Content */}
                <StaggerContainer 
                    className={`flex-1 space-y-4 lg:space-y-6 w-full flex flex-col justify-center ${getContentOrder()}`}
                    staggerDelay={0.15}
                >
                    <TextAnimation 
                        text={feature.title}
                        as="h2"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight"
                    />
                    <FadeInUp>
                        <p className="text-base lg:text-xl text-gray/80 leading-relaxed font-medium">
                            {feature.description}
                        </p>
                    </FadeInUp>

                    {/* Content: Bullet Points or Paragraph */}
                    {feature.content && feature.content.length > 0 && (
                        <div className="space-y-4 pt-2">
                            <FadeInUp>
                                <h3 className="font-bold text-heading text-lg lg:text-xl">What clients see in the portal:</h3>
                            </FadeInUp>
                            <ul className="space-y-3">
                                {feature.content.map((item, i) => (
                                    <FadeInUp 
                                        key={i} 
                                        as="li"
                                        className="flex items-center gap-4 text-gray text-base lg:text-lg"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary-blue shadow-[0_0_10px_rgba(59,73,230,0.3)] shrink-0"></div>
                                        <span>{item}</span>
                                    </FadeInUp>
                                ))}
                            </ul>
                        </div>
                    )}

                    {feature.paragraph && (
                        <FadeInUp className="text-base lg:text-lg text-gray/70 leading-relaxed pt-2 space-y-4">
                            {feature.paragraph.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </FadeInUp>
                    )}

                    {/* Button */}
                    {feature.buttonText && feature.buttonHref && (
                        <FadeInUp className="pt-6">
                            <GetInstantQuoteButton
                                variant="custom"
                                text={feature.buttonText}
                                href={feature.buttonHref}
                                bgColor="var(--card-hover-overlay)"
                                textColor="white"
                                className="px-8 lg:px-10 py-4 rounded-full font-bold shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
                            />
                        </FadeInUp>
                    )}
                </StaggerContainer>
            </div>
        )
    }

    return (
        <section className={`w-full py-12 lg:py-20 overflow-hidden ${className}`}>
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
