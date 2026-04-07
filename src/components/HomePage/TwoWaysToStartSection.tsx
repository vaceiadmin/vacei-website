"use client";

import React from 'react';
import { ClipboardList, Network, FileSpreadsheet, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const MarketplaceSteps = [
  {
    title: "Request Service",
    desc: "Select the service your business needs and provide preliminary details through your secure workspace.",
    icon: <ClipboardList className="w-5 h-5" />
  },
  {
    title: "VACEI Coordination",
    desc: "We notify verified partner firms and coordinate the proposal process to ensure quality and speed.",
    icon: <Network className="w-5 h-5" />
  },
  {
    title: "Structured Proposals",
    desc: "Receive standardised proposals through your workspace, making them easy to compare and evaluate.",
    icon: <FileSpreadsheet className="w-5 h-5" />
  },
  {
    title: "Choose & Engage",
    desc: "Compare options, choose the advisor that best fits your needs, and start the engagement immediately.",
    icon: <UserCheck className="w-5 h-5" />
  }
];

const InviteSteps = [
  "Keep your existing advisor relationships",
  "Centralise documents, requests, and approvals",
  "Track deadlines and services in one place",
  "Create a clearer and more professional workflow for everyone involved"
];

const StepItem = ({ title, desc, icon, number, isLast }: { title: string; desc: string; icon: React.ReactNode; number: number; isLast: boolean }) => (
  <div className="relative flex gap-5 pb-8 last:pb-0 group">
    {!isLast && (
      <div className="absolute left-[20px] top-[40px] bottom-[-20px] w-px bg-slate-200 group-hover:bg-blue-500/50 transition-colors duration-500 hidden md:block" />
    )}
    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500">
      {icon}
      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center text-[8px] font-black text-white border border-slate-900">
        {number}
      </div>
    </div>
    <div className="flex-1 pt-0">
      <h3 className="text-base font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TwoWaysToStartSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-32 bg-black relative overflow-hidden isolate z-0 rounded-[48px]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[1000px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        
        {/* Header Style (Matching Before/After) */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest">GET STARTED YOUR WAY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Two ways to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">get started</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-400 max-w-2xl mx-auto">
            Whether you need to find a new provider or already work with trusted advisors, VACEI gives you one structured workspace to manage everything in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 w-full items-stretch">
          
          {/* Marketplace Card (Light Theme) */}
          <div className="relative z-10 flex flex-col group/card h-full w-full">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-[2.5rem] blur-xl opacity-40 group-hover/card:opacity-60 transition duration-500 pointer-events-none" />
            
            <div className="relative w-full h-full flex flex-col bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl transition-all duration-500 group-hover/card:-translate-y-2">
              <div className="p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50 shrink-0">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">MARKETPLACE</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white bg-blue-600 px-3 py-1 rounded-full shadow-lg shadow-blue-500/20 animate-pulse">RECOMMENDED</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Find the right advisor</h3>
                  <p className="text-[15px] font-semibold text-slate-500 max-w-sm leading-relaxed">
                    Submit a request and receive structured proposals from verified firms. Compare options and choose the right partner.
                  </p>
                </div>
              </div>

              {/* Window Wrapper */}
              <div className="p-4 sm:p-8 bg-slate-100/50 flex flex-col items-center">
                <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm w-full mb-10">
                  <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="relative w-full aspect-video bg-white overflow-hidden p-[2px]">
                    <img 
                      src="/assets/videos/Request%20Service_V1.2.gif" 
                      alt="Request Service" 
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover/card:opacity-100" 
                    />
                  </div>
                </div>

                <div className="w-full">
                  {MarketplaceSteps.map((step, i) => (
                    <StepItem key={i} {...step} number={i + 1} isLast={i === MarketplaceSteps.length - 1} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Invite Advisors Card (Dark Theme) */}
          <div className="relative z-10 flex flex-col group/card h-full w-full mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[2.5rem] blur-xl opacity-30 group-hover/card:opacity-50 transition duration-500 pointer-events-none" />
            
            <div className="relative w-full h-full flex flex-col bg-[#020410] rounded-[2rem] border border-blue-500/30 overflow-hidden shadow-2xl transition-all duration-500 group-hover/card:-translate-y-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="p-8 border-b border-white/10 flex items-start justify-between relative z-10 bg-white/5 backdrop-blur-sm shrink-0">
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">INVITE</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Work with your advisors</h3>
                  <p className="text-[15px] font-semibold text-blue-300/60 max-w-sm leading-relaxed">
                    Already have trusted advisors? Bring them into your structured workspace to manage everything in one place.
                  </p>
                </div>
              </div>

              {/* Window Wrapper */}
              <div className="p-4 sm:p-8 bg-black/20 flex flex-col relative flex-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />
                
                <div className="rounded-xl overflow-hidden bg-[#0e1222] border border-white/10 shadow-xl relative z-10 w-full mb-10">
                  <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="relative w-full aspect-video bg-[#0a0d1d] overflow-hidden p-[2px]">
                    <img 
                      src="/assets/videos/Invite%20Advisor%20V1.2.gif" 
                      alt="Invite Advisors" 
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover/card:opacity-100" 
                    />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <ul className="space-y-5">
                    {InviteSteps.map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group/li">
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-1.5 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.1)] mt-0.5 group-hover/li:bg-blue-500 group-hover/li:text-white transition-all duration-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 group-hover/li:text-white" />
                        </div>
                        <span className="text-slate-300 font-semibold text-[15px] leading-relaxed group-hover/li:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Area Area */}
        <div className="mt-16 text-center flex flex-col items-center relative z-20">
          <GetInstantQuoteButton 
            text="Create Workspace"
            className="h-[56px] px-12 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)] mb-6 text-[15px] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-105"
          />
          <p className="text-[13px] font-black text-slate-500 uppercase tracking-widest max-w-md mx-auto">
             Get started in 2 minutes
          </p>
        </div>

      </div>
    </section>
  );
};

export default TwoWaysToStartSection;
