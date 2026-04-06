"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, ArrowRight, FileText, BookOpen, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LocalizedLink from "@/components/common/LocalizedLink";
import { INSIGHTS_RESOURCES_VIDEO } from "@/data/video";

const resources = [
  {
    type: "Article",
    icon: <FileText className="w-5 h-5 text-emerald-400" />,
    category: "Audit & Accounting",
    title: "How to prepare your business for a seamless audit",
    desc: "Discover the exact documents, workflows, and timelines required to navigate the audit process without friction.",
    href: "/insights/preparing-for-seamless-audit",
    color: "emerald"
  },
  {
    type: "Video",
    icon: <Play className="w-5 h-5 pl-0.5 text-blue-400" />,
    category: "Compliance",
    title: "3-minute guide to European corporate compliance",
    desc: "Watch a quick breakdown of exactly what documents and deadlines you need to manage when operating in the EU.",
    videoUrl: INSIGHTS_RESOURCES_VIDEO,
    color: "blue"
  },
  {
    type: "Guide",
    icon: <BookOpen className="w-5 h-5 text-purple-400" />,
    category: "Business Operations",
    title: "The ultimate checklist for scaling your operations",
    desc: "Use this comprehensive checklist to ensure your legal, accounting, and operational infrastructure is ready to scale.",
    href: "/insights/scaling-operations-checklist",
    color: "purple"
  }
];

const VideoModal = ({ isOpen, onClose, videoUrl }: { isOpen: boolean; onClose: () => void; videoUrl: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-10050 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10051 w-full max-w-5xl aspect-video bg-[#0A0B10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10052"
            >
              <X className="w-6 h-6" />
            </button>
            {/youtube\.com\/embed|youtu\.be/i.test(videoUrl) ? (
              <iframe
                src={`${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
                className="w-full h-full"
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={videoUrl}
                className="h-full w-full bg-black object-contain"
                controls
                autoPlay
                playsInline
              />
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const InsightsAndResourcesSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden rounded-[48px]">
       <VideoModal 
         isOpen={!!selectedVideo} 
         onClose={() => setSelectedVideo(null)} 
         videoUrl={selectedVideo || ""} 
       />

       {/* Background glow behind title */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,transparent_60%)] pointer-events-none" />

       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         
         {/* Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 mb-6">
                INSIGHTS & RESOURCES
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Practical insights for modern businesses
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Explore short videos, guides, and articles on accounting, audit, compliance, and business operations — designed to help businesses stay organised, informed, and ready to scale.
            </p>
         </div>

         {/* Grid of Resource Placeholder Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((item, index) => {
               const isVideo = item.type === "Video";
               
               const CardContent = (
                 <div className="flex flex-col h-full bg-[#0A0B10] border border-white/5 rounded-3xl p-8 hover:bg-[#0D0F18] hover:border-white/10 transition-all duration-300 group shadow-2xl hover:shadow-[0_20px_40px_-20px_rgba(59,130,246,0.15)] cursor-pointer">
                   {/* Card Header (Type & Category) */}
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                         {item.icon}
                      </div>
                      <div>
                         <span className={`text-[10px] font-black uppercase tracking-widest text-${item.color}-400`}>
                            {item.type}
                         </span>
                         <div className="text-sm font-semibold text-slate-500 mt-0.5">
                            {item.category}
                         </div>
                      </div>
                   </div>

                   {/* Card Content */}
                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                   </h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                      {item.desc}
                   </p>

                   {/* Card Footer */}
                   <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                      {isVideo ? "Watch video" : "Read more"}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </div>
                 </div>
               );

               if (isVideo) {
                 return (
                   <div key={index} onClick={() => setSelectedVideo(item.videoUrl || null)}>
                     {CardContent}
                   </div>
                 );
               }

               return (
                 <LocalizedLink key={index} href={item.href || "#"}>
                   {CardContent}
                 </LocalizedLink>
               );
            })}
         </div>

         {/* Bottom Action */}
         <div className="mt-12 text-center">
            <LocalizedLink 
               href="/insights"
               className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-6 py-3 rounded-xl border border-blue-500/20"
            >
               View all resources <ArrowRight className="w-4 h-4" />
            </LocalizedLink>
         </div>

       </div>
    </section>
  );
};

export default InsightsAndResourcesSection;

