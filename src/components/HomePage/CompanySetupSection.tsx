"use client"

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { DirectionalDiv } from "../common/Animations"
import { useIsSafari } from "@/hooks/use-safari"
import { cn } from "@/lib/utils"


const CompanySetupSection = () => {
  const isSafari = useIsSafari();

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-[#D8E5E5]"> {/* Light Premium Background */}
      
      {/* Wave Background Pattern - Matching AuditPlatform */}
      <div 
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.08, // Subtle visibility
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
             <DirectionalDiv 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-block px-3 py-1 rounded-full bg-white border border-blue-100 text-xs font-bold tracking-widest text-[#3b49e6] uppercase mb-4 shadow-sm"
             >
                Incorporation Made Simple
             </DirectionalDiv>
             <DirectionalDiv 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                as="h2"
                className="text-3xl md:text-5xl font-bold text-[#1a1c35] mb-6 leading-tight"
             >
                Starts with a Company, <br/>
                <span className="text-[#3b49e6]">Grows with VACEI.</span>
             </DirectionalDiv>
             <DirectionalDiv
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                as="p"
                className="text-lg text-gray-600 leading-relaxed"
             >
                We handle specific incorporation and setup, but our real value lies in the ongoing partnership. Manage everything through one unified portal.
             </DirectionalDiv>
        </div>

        {/* 3-Column Glass Grid - Monochromatic Blue Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1: What We Handle */}
            <DirectionalDiv 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="relative group h-full"
            >
                <div className={cn(
                  "h-full border border-white/60 p-8 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500",
                  isSafari ? "bg-white/90" : "bg-white/70 backdrop-blur-xl hover:shadow-[0_30px_60px_-15px_rgba(59,73,230,0.15)] hover:-translate-y-2"
                )}>

                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b49e6] mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-100">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1c35] mb-4 group-hover:text-[#3b49e6] transition-colors">What We Handle</h3>
                    <ul className="space-y-4">
                        {[
                            "Company incorporation & registration",
                            "Statutory setup & compliance",
                            "Bank account assistance",
                            "Corporate services & filings"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-sm font-medium">
                                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#3b49e6] flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </DirectionalDiv>

            {/* Card 2: What You Do */}
            <DirectionalDiv 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="relative group h-full"
            >
                <div className={cn(
                  "h-full border border-white/60 p-8 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500",
                  isSafari ? "bg-white/90" : "bg-white/70 backdrop-blur-xl hover:shadow-[0_30px_60px_-15px_rgba(59,73,230,0.15)] hover:-translate-y-2"
                )}>

                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b49e6] mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-100">
                        {/* Switched to User Icon for 'You Do' */}
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1c35] mb-4 group-hover:text-[#3b49e6] transition-colors">What You Do</h3>
                    <ul className="space-y-4">
                         {[
                            "Complete KYC (Guided Steps)",
                            "Upload required documents",
                            "Approve key details",
                            "Sign digitally"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-sm font-medium">
                                <span className="w-5 h-5 rounded-full bg-white border border-blue-200 text-[#3b49e6] flex items-center justify-center shrink-0 text-xs font-bold">➜</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </DirectionalDiv>

            {/* Card 3: What You Get */}
            <DirectionalDiv 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="relative group h-full"
            >
                {/* Dark Blue Gradient Card */}
                <div className="h-full bg-gradient-to-br from-[#111235] to-[#1e2040] text-white p-8 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(17,18,53,0.3)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b49e6]/30 blur-[50px] rounded-full" />
                    
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 border border-white/10">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">What You Get</h3>
                    <ul className="space-y-4 relative z-10">
                        {[
                            "Fully registered company",
                            "Compliance calendar setup",
                            "Unified portal access",
                            "24/7 Support team"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-white/90 text-sm font-medium">
                                <span className="w-5 h-5 rounded-full bg-[#3b49e6] text-white flex items-center justify-center shrink-0 text-xs">★</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </DirectionalDiv>

        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
                href="/company-setup"
                className="px-8 py-4 rounded-xl bg-[#3b49e6] text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all"
            >
                Start Incorporation
            </Link>
            <Link 
                href="/quote"
                className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 transition-all hover:border-gray-300"
            >
                Book a Consultation
            </Link>
        </div>

      </div>
    </section>
  )
}

export default CompanySetupSection
