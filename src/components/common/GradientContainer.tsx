import React from 'react'
import Image from 'next/image'
import { usePerformance } from '@/contexts/ReduceMotionContext'

interface GradientContainerProps {
    children: React.ReactNode
    className?: string
    showRadials?: boolean
    backgroundColor?: string
    radialImage?: string
    topLeftRotation?: string
    bottomRightRotation?: string
    /** Optional position classes for the left radial (e.g. 'top-0 left-0', 'bottom-0 left-0') */
    leftPositionClass?: string
    /** Optional position classes for the right radial (e.g. 'bottom-0 right-0') */
    rightPositionClass?: string
}

const GradientContainer = ({ 
    children, 
    className = "", 
    showRadials = true, 
    backgroundColor, 
    radialImage,
    topLeftRotation = "-rotate-90",
    bottomRightRotation = "rotate-90",
    leftPositionClass,
    rightPositionClass,
}: GradientContainerProps) => {
    const { isIPhone, isLowPerformance } = usePerformance()
    const bgColor = backgroundColor || 'bg-primary'
    const radialSrc = radialImage || '/assets/images/radial2.png'
    const leftPos = leftPositionClass || 'top-0 left-0'
    const rightPos = rightPositionClass || 'bottom-0 right-0'
    
    
    return (
        <div
            className={`
                relative w-full ${bgColor} ${className}
                rounded-[32px] md:rounded-[48px] 
                overflow-hidden
            `}
        >
            {/* Background Wrapper with Overflow Hidden */}
            <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
                {/* Background Radial Image - Top Left - Hide on iPhone if performance is an issue */}
                {showRadials && (
                    <div className={`absolute ${leftPos} w-[350px] h-[330px] z-0 transform ${topLeftRotation} ${isIPhone ? 'opacity-40' : ''}`}>
                        <Image
                            src={radialSrc}
                            alt="Radial Gradient"
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Background Radial Image - Bottom Right */}
                {showRadials && (
                    <div className={`absolute ${rightPos} w-[350px] h-[330px] z-0 transform ${bottomRightRotation} ${isIPhone ? 'opacity-40' : ''}`}>
                        <Image
                            src={radialSrc}
                            alt="Radial Gradient"
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Noise Overlay - mix-blend-mode is VERY expensive on iOS Safari/Chrome */}
                <div className={`absolute inset-0 z-[1] opacity-50 ${isIPhone || isLowPerformance ? 'mix-blend-normal' : 'mix-blend-soft-light'}`}>
                    <Image
                        src="/assets/images/Noise.png"
                        alt="Noise Overlay"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default GradientContainer
