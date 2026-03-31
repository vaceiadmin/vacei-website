import React from "react";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import { Database, ShieldCheck, UserCheck, TrendingUp, ArrowRight } from "lucide-react";

const WhyVaceiSection = () => {
   return (
      <section className="py-24 bg-slate-50 relative overflow-hidden rounded-[48px]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100/50 mb-6">
                  The VACEI Advantage
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                  Structured. <span className="text-primary-blue">Secure. Scalable.</span>
               </h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                  VACEI is built for the modern business. Whether you're a startup or an established group, our platform provides the structure you need to grow.
               </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">

               {/* Card 1: Large - Single Source of Truth */}
               <div className="md:col-span-8 p-10 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-center flex flex-col items-center">
                     <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">
                        <Database className="w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 mb-4">Single Source of Truth</h3>
                     <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-lg mb-8">
                        All your companies, services, documents, and advisors in one place. No more searching through emails or fragmented spreadsheets.
                     </p>
                     <div className="flex gap-3">
                        {[1, 2, 3, 4].map(i => (
                           <div key={i} className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                              <div className="w-6 h-1.5 rounded-full bg-slate-200" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Card 2: Medium - Bank-Grade Security */}
               <div className="md:col-span-4 p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-between group hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent opacity-50" />
                  <div className="relative z-10">
                     <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-blue-400" />
                     </div>
                     <h3 className="text-xl font-black mb-3">Bank-Grade Security</h3>
                     <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        Your data and documents are protected by the same security standards used by leading financial institutions.
                     </p>
                  </div>
                  <div className="relative z-10 mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">ISO 27001 Certified</span>
                     <ArrowRight className="w-4 h-4 text-slate-600" />
                  </div>
               </div>

               {/* Card 3: Small - Verified Professionals */}
               <div className="md:col-span-5 p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-500 group">
                  <div className="flex items-center gap-6 mb-6">
                     <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <UserCheck className="w-7 h-7" />
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-slate-900">Verified Firms</h3>
                        <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Quality Guaranteed</p>
                     </div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                     We only work with pre-vetted firms that meet our high standards for delivery, communication, and technical expertise.
                  </p>
               </div>

               {/* Card 4: Small - Built for Scale */}
               <div className="md:col-span-7 p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl transition-all duration-500 group">
                  <div className="flex-1">
                     <h3 className="text-2xl font-black text-slate-900 mb-4">Built for Scale</h3>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Whether you're a single-entity founder or a multi-company group, VACEI scales with your business needs across every European jurisdiction.
                     </p>
                  </div>
                  <div className="w-32 h-32 rounded-3xl bg-blue-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                     <TrendingUp className="w-12 h-12 text-blue-600" />
                  </div>
               </div>

            </div>

            <div className="text-center">
               <GetInstantQuoteButton
                  text="Experience VACEI"
                  className="h-[56px] px-12 shadow-xl shadow-blue-600/20"
               />
            </div>

         </div>
      </section>
   );
};

export default WhyVaceiSection;
