import React from 'react';
import { ClipboardList, Network, FileSpreadsheet, UserCheck, CheckCircle2 } from "lucide-react";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";

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

// Reusable Step component for left card
const StepItem = ({ title, desc, icon, number, isLast }: { title: string; desc: string; icon: React.ReactNode; number: number; isLast: boolean }) => (
  <div className="relative flex gap-5 pb-8 last:pb-0 group">
    {!isLast && (
      <div className="absolute left-[20px] top-[40px] bottom-[-20px] w-px bg-white/10 group-hover:bg-blue-500/50 transition-colors duration-500 hidden md:block" />
    )}
    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-xl bg-[#121420] border border-white/10 shadow-sm flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500">
      {icon}
      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-white flex items-center justify-center text-[8px] font-black text-slate-900 border border-slate-900">
        {number}
      </div>
    </div>
    <div className="flex-1 pt-0">
      <h3 className="text-base font-black text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TwoWaysToStartSection = () => {
  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden rounded-[48px]">
       
       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         
         {/* Top Header Label */}
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 mb-6">
                GET STARTED YOUR WAY
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Two ways to get started
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Whether you need to find a new provider or already work with trusted advisors, VACEI gives you one structured workspace to manage everything in one place.
            </p>
         </div>

         <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Card - Marketplace */}
            <div className="bg-[#0D0F18] flex flex-col border border-white/10 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
               {/* GIF Presentation at top */}
               <div className="relative rounded-2xl overflow-hidden bg-[#1D1E30] border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02] w-full mb-10 shrink-0">
                  <div className="h-8 w-full bg-[#181926] border-b border-white/5 flex items-center px-4 gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                     <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                     <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="relative w-full aspect-[16/10] bg-[#050505] overflow-hidden">
                     <img 
                       src="/assets/videos/Request%20Service_V1.2.gif" 
                       alt="Request Service" 
                       className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                     />
                  </div>
               </div>

               <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">REQUEST A SERVICE</span>
               </div>
               <h3 className="text-3xl font-black text-white mb-4">Find the right advisor</h3>
               <p className="text-slate-400 leading-relaxed mb-10">
                 Submit a request and receive structured proposals from verified firms. Compare options and choose the right advisor for your business.
               </p>

               <div className="bg-black/30 p-6 md:p-8 rounded-3xl border border-white/5 mt-auto">
                 {MarketplaceSteps.map((step, i) => (
                    <StepItem key={i} {...step} number={i + 1} isLast={i === MarketplaceSteps.length - 1} />
                 ))}
               </div>
            </div>

            {/* Right Card - Invite Advisors */}
            <div className="bg-[#0D0F18] flex flex-col border border-white/10 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
               {/* GIF Presentation at top */}
               <div className="relative rounded-2xl overflow-hidden bg-[#1D1E30] border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02] w-full mb-10 shrink-0">
                  <div className="h-8 w-full bg-[#181926] border-b border-white/5 flex items-center px-4 gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                     <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                     <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="relative w-full aspect-[16/10] bg-[#050505] overflow-hidden">
                     <img 
                       src="/assets/videos/Invite%20Advisor%20V1.2.gif" 
                       alt="Invite Advisors" 
                       className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                     />
                  </div>
               </div>

               <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">INVITE YOUR ADVISORS</span>
               </div>
               <h3 className="text-3xl font-black text-white mb-4">Work with your existing advisors</h3>
               <p className="text-slate-400 leading-relaxed mb-10">
                 Already working with an accountant, auditor, lawyer, tax advisor, or corporate service provider? Bring them into your workspace and manage everything through one structured platform.
               </p>

               <div className="bg-black/30 p-6 md:p-8 rounded-3xl border border-white/5 mt-auto h-full">
                 <ul className="space-y-6 h-full flex flex-col justify-center">
                    {InviteSteps.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-1.5 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.1)] mt-1">
                          <CheckCircle2 className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-slate-300 font-semibold text-[15px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                 </ul>
               </div>
            </div>

         </div>

         {/* Shared CTA Area */}
         <div className="mt-16 text-center flex flex-col items-center relative z-20">
            <GetInstantQuoteButton 
              text="Create Workspace"
              className="h-[56px] px-12 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.4)] mb-6 text-[15px] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.6)]"
            />
            <p className="text-[13px] font-bold text-slate-500 uppercase tracking-wider max-w-md mx-auto">
               Create your workspace first, then invite your advisors or request services at any time.
            </p>
         </div>

       </div>
    </section>
  );
};

export default TwoWaysToStartSection;
