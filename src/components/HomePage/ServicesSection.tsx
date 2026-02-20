"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GradientContainer from "../common/GradientContainer";
import { servicesData } from "@/data/servicesData";
import { DirectionalDiv } from "../common/Animations";
import { useIsSafari } from "@/hooks/use-safari";
import { cn } from "@/lib/utils";


interface BaseCard {
  id: string | number;
  title: string;
  subtitle: string;
  link: string;
  category: string;
  badge?: string;
  /** Feature titles for animated glassy pills (services only) */
  featureTitles?: string[];
  /** Product icon component key (products only) - deprecated, use image instead */
  productIcon?: "box" | "grid" | "file";
  /** Product image for portal cards */
  image?: string;
  hoverImage?: string;
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"services" | /* "experts" | */ "products">("services");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const isSafari = useIsSafari();


  const serviceSubtitleMap: Record<string, string> = {
    "accounting-finance": "Ongoing accounting, reporting and CFO support for your business.",
    "tax-compliance": "Ongoing support for tax, payroll and statutory filings.",
    "audit-assurance": "Structured statutory audits and assurance work with clear timelines.",
    "corporate-csp-services": "Registered office, company secretary and ongoing corporate administration.",
    "regulated-licensing": "Support for licence applications, renewals and key regulatory submissions.",
    "advisory-growth": "Advisory projects that help you plan, grow and navigate key decisions.",
    "company-structure-corporate-changes": "Project-based changes to ownership, management and company structure.",
    "liquidation-wind-down": "Support to formally close, wind down or strike off entities.",
    "international-business-structuring": "Design and coordination of international structures and expansions.",
    "crypto-digital-assets": "Structuring, banking and compliance support around crypto and digital assets.",
    "audit-readiness": "Preparation so records and documentation are ready before the audit starts.",
    "group-consolidation": "Group reporting and consolidation support across multiple entities.",
    "banking-payments-support": "Support for accessing and maintaining banking and payment solutions.",
    "corporate-transactions": "Support for defined corporate transactions and one-off corporate projects.",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleItems(1);
      else if (window.innerWidth < 1280) setVisibleItems(2);
      else setVisibleItems(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Data ---
  const services: BaseCard[] = servicesData.map((service) => ({
    id: service.id,
    title: service.title,
    subtitle:
      serviceSubtitleMap[service.id] ||
      "Structured support delivered through one digital platform.",
    link: `/services/${service.slug}`,
    category: "Service",
    featureTitles:
      service.featuresSection?.features
        .slice(0, 3)
        .map((f) => f.title) ?? [],
  }));

  /* const experts: BaseCard[] = [
    { id: 1, title: "Senior CPAs", subtitle: "Chartered accountants.", image: "/assets/images/pngegg (2) 1.png", link: "/team", category: "Experts", badge: "Elite" },
    { id: 2, title: "Bookkeepers", subtitle: "Day-to-day accuracy.", image: "/assets/images/pngegg (3) 1.png", link: "/team", category: "Experts" },
    { id: 3, title: "Tax Advisors", subtitle: "Strategic tax planning.", image: "/assets/images/pngegg (1) 1.png", link: "/team", category: "Experts" },
    { id: 4, title: "Audit Leads", subtitle: "Compliance assurance.", image: "/assets/images/pngegg (4) 1.png", link: "/team", category: "Experts" },
  ]; */

  const products: BaseCard[] = [
    { id: 1, title: "Client Portal", subtitle: "Documents, queries, and secure communication.", image: "/assets/images/Pyramid 2.png", hoverImage: "/assets/images/portal.png", link: "/portal/client-portal", category: "Platform", badge: "Featured" },
    { id: 2, title: "Audit Portal", subtitle: "Structured workflows and audit delivery.", image: "/assets/images/Thorus Knot.png", hoverImage: "/assets/images/Audit 1.png", link: "/portal/audit-portal", category: "Platform" },
    { id: 3, title: "Accounting Portal", subtitle: "Real-time financial dashboard and reporting.", image: "/assets/images/Cube 1.png", hoverImage: "/assets/images/Accounting 1.png", link: "/portal/accounting-portal", category: "Platform", badge: "New" },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      /* case "experts": return experts; */
      case "products": return products;
      case "services": default: return services;
    }
  };

  const activeData = getActiveData();

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % activeData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + activeData.length) % activeData.length);

  // Auto-advance carousel for a smooth, marquee-like effect
  useEffect(() => {
    if (activeData.length <= visibleItems) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab, activeData.length, visibleItems]);

  const displayItems = [];
  if (activeData.length <= visibleItems) {
    displayItems.push(...activeData);
  } else {
    for (let i = 0; i < visibleItems; i++) {
        displayItems.push(activeData[(currentIndex + i) % activeData.length]);
    }
  }

  return (
    <section id="services" className="w-full scroll-mt-20">
        <GradientContainer
            backgroundColor="bg-primary" 
            showRadials={true} 
            className="py-16 sm:py-20 md:py-24 lg:py-28 overflow-x-clip"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Area */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <DirectionalDiv 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold tracking-widest text-[#989fea] uppercase"
                        >
                            Our Ecosystem
                        </DirectionalDiv>
                        <DirectionalDiv 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            as="h2"
                            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-2"
                        >
                            Everything You Need <br />
                            <span className="text-white/40">In One Place.</span>
                        </DirectionalDiv>
          </div>

                    {/* Glass Tabs */}
                    <DirectionalDiv 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                          "flex p-1.5 border border-white/10 rounded-full",
                          isSafari ? "bg-white/20" : "bg-white/5 backdrop-blur-xl"
                        )}
                    >

              {(["services", /* "experts", */ "products"] as const).map((tab) => (
                <button
                  key={tab}
                                onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                                    activeTab === tab ? "text-white" : "text-white/50 hover:text-white"
                                }`}
                            >
                                {activeTab === tab && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-[#3b49e6] rounded-full shadow-lg shadow-blue-900/40"
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                )}
                                <span className="relative z-10 capitalize">{tab}</span>
                </button>
              ))}
                        </DirectionalDiv>
                    </div>

                {/* Carousel Area - padding prevents first/last card cutoff */}
                <div className="relative min-h-[500px] overflow-visible">
                    <div className="flex gap-4 sm:gap-8 justify-center px-12 sm:px-14 md:px-16">
                        <AnimatePresence mode="popLayout">
                            {displayItems.map((item, idx) => (
                  <motion.div 
                                    key={`${item.id}-${activeTab}-${idx}`}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px] min-w-0 shrink-0"
                                >
                                    <div className={cn(
                                        "group relative h-[480px] w-full border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hardware-accelerated",
                                        isSafari ? "bg-white/20 hover:bg-white/25" : "bg-white/5 backdrop-blur-2xl hover:bg-white/10 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)]"
                                    )}>


                                        
                                        {/* Animated Glassy Header (replaces image) - like HowItWorks cards */}
                                        <div className="h-[55%] relative w-full p-6 flex flex-col items-center justify-center gap-6 overflow-hidden">
                                            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute inset-0 bg-primary-blue/10 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 opacity-40" />

                                            {activeTab === "services" && item.featureTitles && item.featureTitles.length > 0 ? (
                                                /* Services: glassy pills with feature titles */
                                                <div className="relative z-10 flex flex-wrap items-center justify-center gap-2">
                                                    {item.featureTitles.map((label, i) => (
                                                        <motion.div
                                                            key={label}
                                                            initial={{ opacity: 0, y: 12 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 + i * 0.08, duration: 0.4 }}
                                                            className={cn(
                                                              "px-4 py-2.5 rounded-xl border border-white/10 text-white/90 text-xs font-medium group-hover:border-white/20 transition-all duration-300",
                                                              isSafari ? "bg-white/20 group-hover:bg-white/30" : "bg-white/10 backdrop-blur-md group-hover:bg-white/15"
                                                            )}

                                                        >
                                                            {label}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            ) : activeTab === "products" && item.image ? (
                                                /* Products: Cube, Pyramid, Thorus Knot images */
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                                    className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center"
                                                >
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={176}
                                                        height={176}
                                                        className="w-full h-full object-contain drop-shadow-lg"
                                                    />
                                                </motion.div>
                                            ) : null}
                                        </div>

                                        {/* Content Container (Bottom Half) */}
                                        <div className="h-[45%] p-5 sm:p-6 md:p-8 flex flex-col justify-between relative bg-linear-to-t from-[#111235] via-[#111235]/80 to-transparent">
                      <div>
                                                {item.badge && (
                                                    <span className="inline-block px-2 py-0.5 mb-2 rounded text-[10px] font-bold uppercase bg-primary-blue/20 border border-primary-blue/30 text-blue-200">
                                                        {item.badge}
                                                    </span>
                                                )}
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#989fea] transition-colors">
                          {item.title}
                        </h3>
                                                <p className="text-white/60 text-sm leading-relaxed line-clamp-3 break-words">
                                                    {item.subtitle}
                                                </p>
                                            </div>

                                            <Link 
                                                href={item.link}
                                                className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all mt-4"
                                            >
                                                Explore
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-blue transition-colors">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7m7-7H3" /></svg>
                                                </div>
                                            </Link>
                      </div>

                                        {/* Hover Reveal for Products */}
                                        {activeTab === "products" && item.hoverImage && (
                                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto flex flex-col">
                                                <div className="relative w-full h-full">
                                                    <Image src={item.hoverImage} alt={item.title} fill className="object-contain opacity-60" />
                                                    <div className="absolute inset-0 bg-linear-to-t from-[#111235] via-transparent to-transparent" />
                                                    
                                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                        <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.title}</h3>
                                                        <p className="text-white/70 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{item.subtitle}</p>
                                                        <Link 
                                                            href={item.link}
                                                            className="w-full py-3.5 rounded-xl bg-primary-blue text-white font-bold text-center hover:bg-blue-600 transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200"
                                                        >
                                                            Launch Portal
                                                        </Link>
                      </div>
                    </div>
                  </div>
              )}
                                    </div>
            </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Buttons - Floating */}
                <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-8 z-20">
                    <button onClick={prevSlide} className={cn(
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all shadow-lg",
                      isSafari ? "bg-white/20" : "bg-white/10 hover:bg-white/20 backdrop-blur-xl hover:scale-110 active:scale-95"
                    )} aria-label="Previous">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-8 z-20">
                    <button onClick={nextSlide} className={cn(
                       "w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white transition-all shadow-lg",
                       isSafari ? "bg-white/20" : "bg-white/10 hover:bg-white/20 backdrop-blur-xl hover:scale-110 active:scale-95"
                    )} aria-label="Next">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>


          </div>
        </GradientContainer>
    </section>
  );
};

export default ServicesSection;
