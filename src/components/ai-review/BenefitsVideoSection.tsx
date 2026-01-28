 'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import BenefitsCardsRow, { BenefitCard } from './BenefitsCardsRow'

const defaultCards: BenefitCard[] = [
    {
        icon: '/assets/images/image 98.png',
        title: 'Supporting professional judgement',
        description:
            'VACEI AI Review is designed to support, not replace, professional judgement. It reduces manual checking and highlights areas requiring attention, while all conclusions and decisions remain with the professional team.',
    },
    {
        icon: '/assets/images/image 103.png',
        title: 'Built for audit-level review',
        description:
            'VACEI AI Review reflects audit-style thinking and practical review workflows. It is designed to support: accuracy, completeness, consistency and professional presentation.',
    },
    {
        icon: '/assets/images/image 102.png',
        title: 'Innovative solutions',
        description:
            'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.',
    },
]

interface BenefitsVideoSectionProps {
    cards?: BenefitCard[]
    videoSrc?: string
    posterImage?: string
}

const BenefitsVideoSection = ({
    cards = defaultCards,
    videoSrc = '/assets/videos/ai-review-demo.mp4',
    posterImage = '/assets/images/RectangleV.png',
}: BenefitsVideoSectionProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleTogglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
            setIsPlaying(true)
        } else {
            video.pause()
            setIsPlaying(false)
        }
    }

    return (
        <section className="bg-background py-16 lg:py-20">
            {/* Top row: three cards using reusable component */}
           <div className='py-12'>
            <BenefitsCardsRow cards={cards} />
            </div>

            {/* Video block */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-2">
                <div className="bg-purple-bg rounded-2xl p-3 md:p-4 shadow-md">
                    <div className="relative w-full rounded-xl overflow-hidden bg-black">
                        <video
                            ref={videoRef}
                            className="w-full h-auto max-h-[420px] object-cover"
                            src={videoSrc}
                            poster={posterImage}
                            controls={false}
                        />

                        {/* Play overlay button */}
                        <button
                            type="button"
                            onClick={handleTogglePlay}
                            className="absolute inset-0 flex items-center justify-center focus:outline-none"
                            aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/70 hover:bg-white/35 transition-colors">
                                <Play
                                    size={30}
                                    className="text-white"
                                    fill="currentColor"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsVideoSection


