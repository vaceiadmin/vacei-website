"use client"

import React from 'react'
import Link from 'next/link'
import { useIsSafari } from "@/hooks/use-safari"
import { usePerformance } from "@/contexts/ReduceMotionContext"
import GetInstantQuoteButton from '../common/GetInstantQuoteButton'

const CompanySetupSection = () => {
  const isSafari = useIsSafari();
  const { isIPhone, isLowPerformance } = usePerformance();

  return (
    <section className="w-full py-16 sm:py-20 relative overflow-hidden bg-[#fafaf9]">
      
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[120px]" />
        {/* Soft geometric accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/Background pattern.svg')] opacity-[0.03] rotate-12 scale-150" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100/50 mb-6">
                Incorporation Made Simple
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Start your company and <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">manage everything.</span>
            </h2>

            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                From incorporation and statutory setup to ongoing filings and support, VACEI keeps every step structured inside one workspace.
            </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Card 1: What We Handle */}
            <div className="group relative">
                <div className="h-full bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] group-hover:-translate-y-1.5">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-6 transition-transform duration-500">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">What We Handle</h3>
                    <ul className="space-y-3">
                        {[
                            "Company incorporation & registration",
                            "Statutory setup & compliance",
                            "Bank account assistance",
                            "Corporate services & filings"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-600 text-sm font-bold">
                                <span className="w-5 h-5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-[10px] shadow-sm">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Card 2: What You Do */}
            <div className="group relative">
                <div className="h-full bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] group-hover:-translate-y-1.5">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:-rotate-6 transition-transform duration-500">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">What You Do</h3>
                    <ul className="space-y-3">
                         {[
                            "Complete KYC (Guided Steps)",
                            "Upload required documents",
                            "Approve key details",
                            "Sign digitally"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-600 text-sm font-bold">
                                <span className="w-5 h-5 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 text-[10px] shadow-sm">➜</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Card 3: What You Get */}
            <div className="group relative">
                <div className="h-full bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] transition-all duration-500 group-hover:-translate-y-1.5 relative overflow-hidden">
                    {/* Interior Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full" />
                    
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 relative z-10">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 relative z-10">What You Get</h3>
                    <ul className="space-y-3 relative z-10">
                        {[
                            "Fully registered company",
                            "Compliance calendar setup",
                            "Unified portal access",
                            "24/7 Support team"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-300 text-sm font-bold">
                                <span className="w-5 h-5 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 text-[10px] shadow-[0_0_15px_rgba(37,99,235,0.4)]">★</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <GetInstantQuoteButton 
              text="Start Incorporation"
              href="/company-setup"
              className="px-8 py-4 sm:px-10 sm:py-5 !text-xs !font-black uppercase tracking-widest"
            />
            <Link 
                href="/quote#process-steps"
                className="px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white border border-slate-200 text-slate-900 font-black text-xs uppercase tracking-widest transition-all hover:bg-slate-50 hover:border-slate-300 hover:scale-105 active:scale-95 shadow-sm"
            >
                Book a Consultation
            </Link>
        </div>

      </div>
    </section>
  )
}

export default CompanySetupSection
