"use client"
import React from "react"
import { motion } from "framer-motion"
import GetInstantQuoteButton from "../common/GetInstantQuoteButton"
import TextAnimation from "../common/TextAnimation"
import { FadeInUp } from "../common/Animations"

const ReadyToSimplifySection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#ecf0f0]"> {/* Light Theme Background matching root */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { 
                        duration: 0.6, 
                        ease: [0.16, 1, 0.3, 1],
                        staggerChildren: 0.1
                    } 
                }
            }}
            className="relative rounded-[2.5rem] bg-white p-8 md:p-12 lg:p-16 text-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden"
        >
            
            {/* Decorative soft gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.4, 0.6] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[80px]" 
                />
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.4, 0.6] }}
                    transition={{ duration: 8, delay: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-50 rounded-full blur-[80px]" 
                />
            </div>

            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="relative z-10 flex flex-col items-center"
            >
                <TextAnimation
                text="Ready to simplify your business?"
                as="h2"
                className="max-w-2xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1c35] mb-6"
                />
                <p className="max-w-xl text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
                    Join hundreds of companies that trust VACEI for their accounting, audit, and corporate needs.
                </p>

                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <GetInstantQuoteButton
                    text="Get Instant Quote"
                    className="px-8 py-3.5 text-base rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
                    bgColor="#3b49e6"
                    textColor="white"
                    hasShadow={true}
                />
                <GetInstantQuoteButton
                    variant="custom"
                    text="View Our Services"
                    href="/services"
                    bgColor="white"
                    textColor="#1a1c35"
                    className="px-8 py-3.5 text-base rounded-xl font-medium border border-gray-200 hover:bg-gray-50 hover:scale-105 transition-all"
                    hasShadow={false}
                />
                </div>
            </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default ReadyToSimplifySection
