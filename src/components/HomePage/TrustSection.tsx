"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, Headset, ShieldAlert, Zap, Globe, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePerformance } from "@/contexts/ReduceMotionContext";

const TrustSection = () => {
  const { reduceMotion, isLowPerformance } = usePerformance();

  const cards = [
    {
      title: "Bank-Grade Security",
      desc: "All documents and communications are stored in a secure environment with end-to-end encryption.",
      icon: <Lock className="w-6 h-6" />,
      size: "lg:col-span-7",
      color: "blue",
      visual: (
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
             <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="4 4" />
             <motion.circle 
                cx="50" cy="50" r="30" 
                stroke="currentColor" fill="none" 
                strokeWidth="1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
             <motion.path 
                d="M50 20 L50 80 M20 50 L80 50" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
             />
          </svg>
        </div>
      )
    },
    {
      title: "Verified Firms",
      desc: "Pre-vetted partners for quality and reliability.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      size: "lg:col-span-5",
      color: "emerald",
      visual: (
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
      )
    },
    {
      title: "Structured Environments",
      desc: "VACEI provides the digital environment for unified coordination and workflow management.",
      icon: <ShieldCheck className="w-6 h-6" />,
      size: "lg:col-span-5",
      color: "indigo",
      visual: (
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
         </div>
      )
    },
    {
      title: "24/7 Platform Support",
      desc: "Join the future of professional services management with round-the-clock support.",
      icon: <Headset className="w-6 h-6" />,
      size: "lg:col-span-7",
      color: "blue",
      visual: (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-1">
           {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
             <motion.div 
                key={i}
                className="w-1 bg-blue-500/40 rounded-full"
                animate={{ height: [8, h * 6, 8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
             />
           ))}
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#020410] relative overflow-hidden rounded-[48px]">
      
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

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-8 sm:p-10 transition-all duration-500",
                card.size,
                !reduceMotion && !isLowPerformance && "hover:border-white/10 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5"
              )}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-700",
                  card.color === 'blue' ? "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-blue-500/20" : 
                  card.color === 'emerald' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-xl group-hover:shadow-emerald-500/20" :
                  "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-indigo-500/20"
                )}>
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-[15px] font-medium leading-relaxed max-w-[400px]">
                  {card.desc}
                </p>

                {/* Microstatus indicator (only for first card) */}
                {i === 0 && (
                   <div className="mt-8 flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">AES-256 Active</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">SSL v3</span>
                      </div>
                   </div>
                )}
              </div>

              {/* Decorative Visuals */}
              {card.visual}

              {/* Shine effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
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
