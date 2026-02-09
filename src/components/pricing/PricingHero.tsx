"use client";

import React from "react";
import { motion } from "framer-motion";
import TextAnimation from "@/components/common/TextAnimation";
import { FadeInUp } from "@/components/common/Animations";
import SectionBadge from "@/components/common/SectionBadge";

const PricingHero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#ecf0f0]">
      {/* Wave Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.07,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <FadeInUp delay={0.2} className="relative z-10">
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl shadow-gray-100/50">
              <SectionBadge 
                text="Transparent Pricing" 
                className="bg-white border border-blue-100 text-[#3b49e6] mb-6 shadow-sm" 
              />
              
              <TextAnimation
                text="Fair, Transparent, and Tailored to Your Needs"
                as="h1"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1c35] mb-6 leading-tight tracking-tight"
              />
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At VACEI, we don't believe in one-size-fits-all pricing. Every business is unique, 
                  and your pricing should reflect the actual work involved.
                </p>
                
                <p>
                  We provide <strong className="text-[#1a1c35]">tailored quotes</strong> based on scope, 
                  complexity, and requirements—with <strong className="text-[#1a1c35]">no hidden costs</strong> and 
                  <strong className="text-[#1a1c35]"> no obligation</strong> to proceed.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-blue flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-[#1a1c35]">No Fixed Packages</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-blue flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-[#1a1c35]">No Hidden Fees</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-blue flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-[#1a1c35]">Clear Communication</span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="mt-12 w-20 h-1.5 bg-primary-blue rounded-full opacity-80" />
            </div>
          </FadeInUp>

          {/* Right Column: Visual Element */}
          <div className="hidden lg:block relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative Cards Stack */}
              <div className="relative w-full aspect-square">
                {/* Background Card */}
                <div className="absolute top-8 right-0 w-[85%] h-[85%] bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl shadow-xl transform rotate-6 opacity-60" />
                
                {/* Middle Card */}
                <div className="absolute top-4 right-4 w-[90%] h-[90%] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl transform rotate-3 opacity-80" />
                
                {/* Front Card - Main Content */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                      <div className="w-2 h-2 bg-[#3b49e6] rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-[#3b49e6]">Tailored Quote</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#1a1c35] mb-4">
                      Your Custom Pricing
                    </h3>
                    
                    <div className="space-y-3">
                      {[
                        "Scope Assessment",
                        "Complexity Analysis",
                        "Volume Evaluation",
                        "Risk Consideration"
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#3b49e6] flex items-center justify-center text-white font-bold text-sm">
                            {idx + 1}
                          </div>
                          <span className="text-gray-600 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray">Transparent & Fair</span>
                      <svg className="w-6 h-6 text-[#3b49e6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
