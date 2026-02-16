"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GradientContainer from "../common/GradientContainer";
import { servicesData } from "@/data/servicesData";
import { getServiceImage } from "@/data/serviceImages";

interface BaseCard {
  id: string | number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  category: string;
  badge?: string;
  hoverImage?: string;
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"services" | "experts" | "products">("services");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

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
    image: getServiceImage(service.id, service.image),
    link: `/services/${service.slug}`,
    category: "Service",
  }));

  const experts: BaseCard[] = [
    { id: 1, title: "Senior CPAs", subtitle: "Chartered accountants.", image: "/assets/images/pngegg (2) 1.png", link: "/team", category: "Experts", badge: "Elite" },
    { id: 2, title: "Bookkeepers", subtitle: "Day-to-day accuracy.", image: "/assets/images/pngegg (3) 1.png", link: "/team", category: "Experts" },
    { id: 3, title: "Tax Advisors", subtitle: "Strategic tax planning.", image: "/assets/images/pngegg (1) 1.png", link: "/team", category: "Experts" },
    { id: 4, title: "Audit Leads", subtitle: "Compliance assurance.", image: "/assets/images/pngegg (4) 1.png", link: "/team", category: "Experts" },
  ];

  const products: BaseCard[] = [
    { id: 1, title: "Bookkeeping Portal", subtitle: "Real-time financial dashboard.", image: "/assets/images/Cube 1.png", hoverImage: "/assets/images/Accounting.jpg", link: "/portal/accounting-portal", category: "Platform", badge: "New" },
    { id: 2, title: "Client Portal", subtitle: "Documents & communication.", image: "/assets/images/Pyramid 2.png", hoverImage: "/assets/images/Frame 1618872451.png", link: "/portal/client-portal", category: "Platform", badge: "Featured" },
    { id: 3, title: "Audit Portal", subtitle: "Streamlined audit workflows.", image: "/assets/images/Thorus Knot.png", hoverImage: "/assets/images/Audit.jpg", link: "/portal/audit-portal", category: "Platform" },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "experts": return experts;
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
            className="py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Area */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
            <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold tracking-widest text-[#989fea] uppercase"
                        >
                            Our Ecosystem
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-white leading-tight"
                        >
                            Everything You Need <br />
                            <span className="text-white/40">In One Place.</span>
                        </motion.h2>
          </div>

                    {/* Glass Tabs */}
          <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
                    >
              {(["services", "experts", "products"] as const).map((tab) => (
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
                        </motion.div>
                      </div>

                {/* Carousel Area */}
                <div className="relative min-h-[500px]">
                    <div className="flex gap-8 justify-center">
                        <AnimatePresence mode="popLayout">
                            {displayItems.map((item, idx) => (
                  <motion.div 
                                    key={`${item.id}-${activeTab}-${idx}`}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full max-w-[380px] flex-shrink-0"
                                >
                                    <div className="group relative h-[480px] w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] transition-all duration-500">
                                        
                                        {/* Image Container (Top Half) */}
                                        <div className="h-[55%] relative w-full p-8 flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            {/* Background Glow */}
                                            <div className="absolute inset-0 bg-primary-blue/20 blur-[60px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 opacity-50" />

                                            {/* Main Image */}
                                            <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                                                    className={`object-contain ${activeTab === "products" ? "drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" : "opacity-90 grayscale-[20%] group-hover:grayscale-0"}`}
                      />
                                            </div>
                    </div>

                                        {/* Content Container (Bottom Half) */}
                                        <div className="h-[45%] p-8 flex flex-col justify-between relative bg-gradient-to-t from-[#111235] via-[#111235]/80 to-transparent">
                      <div>
                                                {item.badge && (
                                                    <span className="inline-block px-2 py-0.5 mb-2 rounded text-[10px] font-bold uppercase bg-primary-blue/20 border border-primary-blue/30 text-blue-200">
                                                        {item.badge}
                                                    </span>
                                                )}
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#989fea] transition-colors">
                          {item.title}
                        </h3>
                                                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
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
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111235] via-transparent to-transparent" />
                                                    
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
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20">
                    <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20">
                    <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

          </div>
        </GradientContainer>
    </section>
  );
};

export default ServicesSection;
