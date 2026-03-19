import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { useIsSafari } from "@/hooks/use-safari";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

interface BaseCard {
  id: string | number;
  title: string;
  subtitle: string;
  link: string;
  category: string;
  badge?: string;
  featureTitles?: string[];
  image?: string;
  hoverImage?: string;
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"services" | "products">("services");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const isSafari = useIsSafari();
  const { isIPhone, isLowPerformance } = usePerformance();

  const serviceTitleMap: Record<string, string> = {
    "accounting-finance": "Accounting & Tax",
    "audit-assurance": "Audit & Assurance",
    "corporate-csp-services": "Corporate Services",
    "advisory-growth": "Legal & Advisory",
    "tax-compliance": "Payroll & Compliance",
  };

  const serviceSubtitleMap: Record<string, string> = {
    "accounting-finance": "Bookkeeping, financial reporting, and tax compliance.",
    "tax-compliance": "Employee payroll management and compliance filings.",
    "audit-assurance": "Statutory audits and assurance engagements with clear milestones.",
    "corporate-csp-services": "Company secretarial services, governance, and statutory maintenance.",
    "regulated-licensing": "Support for licence applications, renewals and key regulatory submissions.",
    "advisory-growth": "Legal services and specialist advisory from partner firms.",
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

  const services: BaseCard[] = servicesData.map((service) => ({
    id: service.id,
    title: serviceTitleMap[service.id] || service.title,
    subtitle: serviceSubtitleMap[service.id] || "Structured support delivered through one digital platform.",
    link: `/services/${service.slug}`,
    category: "Service",
    featureTitles: service.featuresSection?.features.slice(0, 3).map((f) => f.title) ?? [],
  }));

  const products: BaseCard[] = [
    { id: 1, title: "Client Portal", subtitle: "Documents, queries, and secure communication.", image: "/assets/images/Pyramid 2.png", hoverImage: "/assets/images/portal.png", link: "/portal/client-portal", category: "Platform", badge: "Featured" },
    { id: 2, title: "Audit Portal", subtitle: "Structured workflows and audit delivery.", image: "/assets/images/Thorus Knot.png", hoverImage: "/assets/images/Audit 1.png", link: "/portal/audit-portal", category: "Platform" },
    { id: 3, title: "Accounting Portal", subtitle: "Real-time financial dashboard and reporting.", image: "/assets/images/Cube 1.png", hoverImage: "/assets/images/Accounting 1.png", link: "/portal/accounting-portal", category: "Platform", badge: "New" },
  ];

  const activeData = activeTab === "products" ? products : services;
  
  const nextSlide = () => {
    if (activeData.length <= visibleItems) return;
    setCurrentIndex((prev) => (prev + 1) % activeData.length);
  };
  
  const prevSlide = () => {
    if (activeData.length <= visibleItems) return;
    setCurrentIndex((prev) => (prev - 1 + activeData.length) % activeData.length);
  };

  useEffect(() => {
    if (activeData.length <= visibleItems) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeData.length);
    }, 4500);
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
    <section id="services" className="w-full bg-[#020410] py-24 sm:py-32 relative overflow-hidden">
        {/* Cinematic Background Glows - NON-Parallax */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
            {/* Soft grid pattern for texture */}
            <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-20 gap-10">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black tracking-widest text-blue-400 uppercase mb-6">
                        Professional Ecosystem
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
                        Every Expert Solution <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Under One Roof</span>
                    </h2>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed">
                        Redefining how professional services are delivered. Connect your business <br className="hidden md:block" /> with a curated network of experts through our unified platform.
                    </p>
                </div>

                {/* Modern Tabs */}
                <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl">
                    {(["services", "products"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}
                            className={cn(
                                "relative px-8 py-3 rounded-xl text-sm font-black tracking-wider transition-all duration-300",
                                activeTab === tab ? "text-white bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]" : "text-slate-500 hover:text-slate-300"
                            )}
                        >
                            <span className="relative z-10 uppercase">{tab}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Carousel Content */}
            <div className="relative">
                <div className="flex gap-6 lg:gap-8 justify-center min-h-[500px]">
                        {displayItems.map((item, idx) => {
                            return (
                                <div 
                                    key={`${item.id}-${activeTab}-${idx}`}
                                    className="w-full max-w-[380px] group"
                                >
                                    <div className="relative h-[520px] rounded-[2.5rem] bg-slate-900/50 border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.15)] group-hover:-translate-y-2">
                                        {/* Glassy Header */}
                                        <div className="h-[55%] relative flex items-center justify-center p-8">
                                            <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            
                                            {activeTab === "services" ? (
                                                <div className="flex flex-wrap justify-center gap-3 relative z-10">
                                                    {item.featureTitles?.map((f, i) => (
                                                        <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] font-bold text-slate-300 backdrop-blur-sm">
                                                            {f}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="relative w-44 h-44">
                                                    {item.image && (
                                                        <Image src={item.image} alt={item.title} fill className="object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.2)]" />
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-linear-to-t from-slate-950 via-slate-950/90 to-transparent">
                                            {item.badge && (
                                                <span className="inline-block px-2 py-1 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-500/30">
                                                    {item.badge}
                                                </span>
                                            )}
                                            <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                                                {item.subtitle}
                                            </p>
                                            
                                            <Link 
                                                href={item.link}
                                                className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors"
                                            >
                                                Explore Phase
                                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7m7-7H3" /></svg>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Hover Product Preview */}
                                        {activeTab === "products" && item.hoverImage && (
                                            <div className="absolute inset-0 bg-slate-950 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                                                <div className="absolute inset-x-0 top-8 bottom-[35%] opacity-60">
                                                    <Image src={item.hoverImage} alt={item.title} fill className="object-contain object-top px-6" />
                                                </div>
                                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                    <h3 className="text-3xl font-black text-white mb-2">{item.title}</h3>
                                                    <p className="text-slate-300 font-medium mb-8">{item.subtitle}</p>
                                                    <Link 
                                                        href={item.link}
                                                        className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs text-center hover:bg-blue-500 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
                                                    >
                                                        Launch Dashboard
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] lg:left-[-60px] z-20">
                    <button 
                        onClick={prevSlide}
                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all shadow-2xl backdrop-blur-md"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-[-20px] lg:right-[-60px] z-20">
                    <button 
                        onClick={nextSlide}
                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all shadow-2xl backdrop-blur-md"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ServicesSection;
