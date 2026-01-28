import React from 'react'
import Image from 'next/image'

interface GradientContainerProps {
    children: React.ReactNode
    className?: string
    showRadials?: boolean
    backgroundColor?: string
    radialImage?: string
    topLeftRotation?: string
    bottomRightRotation?: string
}

const GradientContainer = ({ 
    children, 
    className = "", 
    showRadials = true, 
    backgroundColor, 
    radialImage,
    topLeftRotation = "-rotate-90",
    bottomRightRotation = "rotate-90"
}: GradientContainerProps) => {
    const bgColor = backgroundColor || 'bg-primary'
    const radialSrc = radialImage || '/assets/images/radial2.png'
    
    return (
        <div className={`relative w-full ${bgColor} overflow-hidden  ${className}`}>
            {/* Background Radial Image - Top Left */}
            {showRadials && (
                <div className={`absolute top-0 left-0 w-[350px] h-[330px] z-0 pointer-events-none transform ${topLeftRotation}`}>
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
                <div className={`absolute bottom-0 right-0 w-[350px] h-[330px] z-0 pointer-events-none transform ${bottomRightRotation}`}>
                    <Image
                        src={radialSrc}
                        alt="Radial Gradient"
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Noise Overlay */}
            <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-soft-light opacity-50 rounded-2xl overflow-hidden">
                <Image
                    src="/assets/images/Noise.png"
                    alt="Noise Overlay"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default GradientContainer
