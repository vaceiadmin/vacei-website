import React from "react";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import { ClipboardList, Network, FileSpreadsheet, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
    number: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    isLast?: boolean;
}

const Step = ({ number, title, desc, icon, isLast }: StepProps) => (
  <div className="relative flex gap-8 md:gap-12 pb-12 last:pb-0 group">
    {!isLast && (
      <div className="absolute left-[27px] top-[60px] bottom-[-20px] w-px bg-white/10 group-hover:bg-blue-500 transition-colors duration-500 hidden md:block" />
    )}
    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-sm flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-500">
      {icon}
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-slate-900 border-2 border-slate-900">
        {number}
      </div>
    </div>
    <div className="flex-1 pt-2">
      <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 font-medium leading-relaxed max-w-xl">{desc}</p>
    </div>
  </div>
);

const MarketplaceSection = () => {
  const steps = [
    { number: "01", title: "Request Service", desc: "Select the service your business needs and provide preliminary details through your secure workspace.", icon: <ClipboardList className="w-6 h-6" /> },
    { number: "02", title: "VACEI Coordination", desc: "We notify verified partner firms and coordinate the proposal process to ensure quality and speed.", icon: <Network className="w-6 h-6" /> },
    { number: "03", title: "Structured Proposals", desc: "Receive standardized proposals through your workspace, making them easy to compare and evaluate.", icon: <FileSpreadsheet className="w-6 h-6" /> },
    { number: "04", title: "Choose & Engage", desc: "Compare options, choose the advisor that best fits your needs, and start the engagement immediately.", icon: <UserCheck className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-[#080B24] relative overflow-hidden rounded-[48px]">
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Header & Intro */}
          <div className="w-full lg:w-1/3">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 mb-8">
                Proposal Marketplace
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
              A marketplace <span className="text-blue-400">built on trust.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed">
              Send out a Request for Proposal (RFP) to top-tier firms. Choose between local, regional, and global providers. The VACEI Marketplace gives you direct access to a network of verified professional firms.
            </p>
             <GetInstantQuoteButton
              text="Register to Get Proposals"
              className="h-[56px] px-10 shadow-xl shadow-blue-600/20"
            />
          </div>

          {/* Timeline Steps */}
          <div className="w-full lg:w-2/3">
             <div className="bg-white/[0.03] backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
                <div className="space-y-4">
                   {steps.map((step, i) => (
                     <Step 
                        key={i} 
                        {...step} 
                        isLast={i === steps.length - 1} 
                      />
                   ))}
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MarketplaceSection;
