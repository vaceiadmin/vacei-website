"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, Headset, ShieldAlert, Zap, Globe, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePerformance } from "@/contexts/ReduceMotionContext";

const TrustSection = () => {
  const { reduceMotion, isLowPerformance } = usePerformance();

  const mainFeatures = [
    {
      title: "Bank-Grade Encryption",
      desc: "All documents and communications are protected with end-to-end AES-256 encryption within a secure digital vault.",
      icon: <Lock className="w-6 h-6" />,
      color: "blue",
      visual: (
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>
      )
    },
    {
      title: "Verified Professional Firms",
      desc: "Every advisor on the platform undergoes a rigorous vetting process to ensure technical excellence and reliability.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "emerald",
      visual: (
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />
      )
    },
    {
      title: "24/7 Enterprise Support",
      desc: "Our dedicated support team is available around the clock to assist with platform navigation and coordination.",
      icon: <Headset className="w-6 h-6" />,
      color: "blue",
      visual: (
        <div className="absolute right-6 bottom-6 flex items-end gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
           {[6, 12, 8, 16, 10, 14, 8].map((h, i) => (
             <motion.div 
                key={i}
                className="w-1.5 bg-blue-500 rounded-full"
                animate={{ height: [h, h * 1.5, h] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
             />
           ))}
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden rounded-[48px]">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] animate-pulse-subtle" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center mb-20">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 mb-8"
           >
              <Activity className="w-3.5 h-3.5" />
              <span>Security First</span>
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]"
          >
            Trusted by <br />
            <span className="text-blue-400">Businesses Worldwide.</span>
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-slate-400 font-medium leading-relaxed"
          >
            From onboarding to ongoing compliance, everything runs through one workspace. Join the future of professional services management.
          </motion.p>
        </div>

        {/* Unique Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Large Hero Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative overflow-hidden rounded-[3.5rem] bg-[#0F111A] border border-white/20 p-10 lg:p-14 transition-all duration-700 hover:border-blue-500/40 hover:shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)]"
          >
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/20" />
            </div>

            {/* Scan Line Effect */}
            <motion.div 
              className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent z-10 pointer-events-none"
              animate={{ top: ['-20%', '120%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-2xl shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                  Global Infrastructure <br />
                  <span className="text-blue-400">Built for Reliability.</span>
                </h3>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
                  VACEI provides a resilient digital environment for unified coordination, ensuring your business stays operational and compliant across every territory.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0F111A] bg-blue-500/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-400" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-black text-blue-300 uppercase tracking-widest">Multi-Region Redundancy</span>
                </div>
              </div>

              <div className="relative aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                <svg viewBox="0 0 200 200" className="w-full h-full text-blue-500/40 relative z-10">
                   <circle cx="100" cy="100" r="80" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="4 8" />
                   <motion.circle 
                      cx="100" cy="100" r="60" 
                      stroke="currentColor" fill="none" 
                      strokeWidth="1"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   />
                   <motion.path 
                      d="M100 40 L100 160 M40 100 L160 100" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                   />
                   <circle cx="100" cy="100" r="4" fill="currentColor" className="text-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)]" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Pillar Card (Uptime/Realtime) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 group relative overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-[#121421] to-[#0A0A15] border border-white/10 p-10 flex flex-col justify-between transition-all duration-700 hover:border-blue-500/30"
          >
             <div>
                <div className="h-2 w-12 bg-blue-500/20 rounded-full mb-8 overflow-hidden">
                   <motion.div 
                      className="h-full bg-blue-600 w-full"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Unmatched Uptime</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                   Our platform operates at 99.99% availability, ensuring your workspace is always ready when you need it.
                </p>
             </div>

             <div className="mt-12 flex flex-col gap-6">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Systems</span>
                   </div>
                   <span className="text-[10px] font-black text-emerald-400">OPERATIONAL</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Data Sync</span>
                   </div>
                   <span className="text-[10px] font-black text-blue-400">SYNCHRONIZED</span>
                </div>
             </div>
          </motion.div>

          {/* Bottom Triple Cards */}
          {mainFeatures.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className={cn(
                "lg:col-span-4 group relative overflow-hidden rounded-[3rem] border border-white/20 bg-[#0F111A] backdrop-blur-3xl p-8 sm:p-10 transition-all duration-500 hover:border-blue-500/30 hover:bg-[#151825] hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5"
              )}
            >
              {/* Subtle Interior Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent pointer-events-none" />
              
              {/* Scan Line Effect for small cards */}
              <motion.div 
                className="absolute inset-x-0 h-16 bg-blue-500/5 z-10 pointer-events-none opacity-0 group-hover:opacity-100"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-700",
                  card.color === 'blue' ? "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-blue-500/20" : 
                  "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-xl group-hover:shadow-emerald-500/20"
                )}>
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Decorative Visuals */}
              {card.visual}
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
           >
              <Link
                href="/security"
                className="group inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
              >
                <ShieldCheck className="w-4 h-4 text-blue-600 transition-transform group-hover:scale-125" />
                View Security & Compliance
              </Link>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                 <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-600" />
                    Real-time Protection
                 </div>
                 <div className="w-1 h-1 rounded-full bg-slate-800" />
                 <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    Global Infrastructure
                 </div>
              </div>
           </motion.div>
        </div>

      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default TrustSection;
