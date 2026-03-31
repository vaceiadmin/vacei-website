import React from "react";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import { LayoutDashboard, CheckCircle2 } from "lucide-react";

const MultiCompanySection = () => {
  const companies = [
    { name: "Atlas Holding Ltd", type: "Parent Group", active: true },
    { name: "Nova Logistics SpA", type: "Subsidiary", active: false },
    { name: "Polaris Tech GmbH", type: "Branch Office", active: false },
    { name: "Zenith Services Corp", type: "New Entity", active: false },
  ];

  const highlights = [
    "Unified Founders Dashboard",
    "Group-Level Visibility",
    "Instant Workspace Switching",
    "Standardised Coordination",
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden rounded-[48px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Visual: Workspace Switcher Mockup */}
          <div className="w-full lg:w-1/2 relative">
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
             
             {/* Switcher Interface */}
             <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] overflow-hidden">
                {/* Header Strip */}
                <div className="p-5 border-b border-slate-100 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                      <LayoutDashboard className="w-4 h-4" />
                   </div>
                   <span className="font-black text-slate-800 text-sm tracking-tight uppercase">Founders Hub</span>
                </div>
                
                {/* Company List */}
                <div className="p-4 space-y-2">
                   {companies.map((c, i) => (
                     <div 
                        key={i} 
                        className={`p-4 rounded-2xl flex items-center justify-between transition-all duration-300 ${c.active ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-[1.02]' : 'bg-slate-50 border border-slate-100 text-slate-900 hover:bg-white hover:border-blue-200'}`}
                      >
                        <div className="flex items-center gap-4">
                           <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${c.active ? 'bg-white/20 text-white' : 'bg-white border border-slate-200 text-blue-600'}`}>
                              {c.name.charAt(0)}
                           </div>
                           <div>
                              <p className="text-xs font-black leading-tight">{c.name}</p>
                              <p className={`text-[10px] font-bold ${c.active ? 'text-white/70' : 'text-slate-400'}`}>{c.type}</p>
                           </div>
                        </div>
                        {c.active ? (
                           <div className="px-3 py-1 rounded-full bg-white/20 border border-white/20 text-[9px] font-black uppercase tracking-widest">
                              Active
                           </div>
                        ) : (
                           <button className="text-[10px] font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest px-2 py-1">
                              Switch
                           </button>
                        )}
                     </div>
                   ))}
                </div>

                {/* Summary Strip */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                      ))}
                   </div>
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      32 Active Engagements across Group
                   </p>
                </div>
             </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100/50 mb-8">
                Multi-Entity Management
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Scale without <span className="text-primary-blue">the complexity.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 font-medium leading-relaxed">
              Managing one company is hard. Managing ten shouldn't be. VACEI is built for founders and groups managing multiple entities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
               {highlights.map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-bold text-sm leading-tight">{item}</span>
                 </div>
               ))}
            </div>

            <GetInstantQuoteButton
              text="Register Your Group"
              className="h-[56px] px-10 shadow-xl shadow-blue-600/20"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MultiCompanySection;
