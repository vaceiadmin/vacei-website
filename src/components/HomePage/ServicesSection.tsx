"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientContainer from "../common/GradientContainer";
import GetInstantQuoteButton from "../common/GetInstantQuoteButton";
import GlassyEffect from "../common/GlassyEffect";

interface BaseCard {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  hoverImage?: string;
  link: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<
    "services" | "experts" | "products"
  >("services");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1280) {
        setVisibleItems(2);
      } else {
        setVisibleItems(4);
      }
    };

    // Initial call
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  const services: BaseCard[] = [
    {
      id: 1,
      title: "Corporate & CSP Services",
      image: "/assets/images/placeholder.png",
      link: "/services/corporate-csp-services",
    },
    {
      id: 2,
      title: "Accounting & Finance",
      image: "/assets/images/placeholder.png",
      link: "/services/accounting-finance",
    },
    {
      id: 3,
      title: "Tax & Compliance",
      image: "/assets/images/placeholder.png",
      link: "/services/tax-compliance",
    },
    {
      id: 4,
      title: "Audit & Assurance",
      image: "/assets/images/placeholder.png",
      link: "/services/audit-assurance",
    },
  ];

  const experts: BaseCard[] = [
    {
      id: 1,
      title: "Accountants",
      image: "/assets/images/pngegg (2) 1.png",
      link: "/services/accounting-finance",
    },
    {
      id: 2,
      title: "Bookkeepers",
      image: "/assets/images/pngegg (3) 1.png",
      link: "/services/accounting-finance",
    },
    {
      id: 3,
      title: "Tax specialists",
      image: "/assets/images/pngegg (1) 1.png",
      link: "/services/tax-compliance",
    },
    {
      id: 4,
      title: "Audit team",
      image: "/assets/images/pngegg (4) 1.png",
      link: "/services/audit-assurance",
    },
  ];

  const products: BaseCard[] = [
    {
      id: 1,
      title: "VACEI Accounting Portal",
      subtitle: "Your entire business, in one place.",
      image: "/assets/images/Cube 1.png",
      hoverImage: "/assets/images/Accounting.jpg",
      link: "/portal/accounting-portal",
    },
    {
      id: 2,
      title: "VACEI Client Portal",
      subtitle: "Your entire business, in one place.",
      image: "/assets/images/Pyramid 2.png",
      hoverImage: "/assets/images/Frame 1618872451.png",
      link: "/portal/client-portal",
    },
    {
      id: 3,
      title: "VACEI Audit Portal",
      subtitle: "Your entire business, in one place.",
      image: "/assets/images/Thorus Knot.png",
      hoverImage: "/assets/images/Audit.jpg",
      link: "/portal/audit-portal",
    },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "experts":
        return experts;
      case "products":
        return products;
      case "services":
      default:
        return services;
    }
  };

  const activeData = getActiveData();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activeData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + activeData.length) % activeData.length,
    );
  };

  const displayServices = [];
  if (activeData.length <= visibleItems) {
    displayServices.push(...activeData);
  } else {
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % activeData.length;
      displayServices.push(activeData[index]);
    }
  }

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <GradientContainer
          className="py-8 sm:py-12 lg:py-16 relative"
          backgroundColor="bg-gradient-container"
        >
          {/* Navigation Tabs */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex justify-center mb-8 sm:mb-12 relative z-20"
          >
            <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1.5 gap-2">
              {(["services", "experts", "products"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-tab-active text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Cards Carousel */}
          <div className="relative">
            <motion.div
              key={activeTab} // Remount animation on tab change
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className={`flex justify-center gap-6 lg:gap-8 mb-8 relative z-10 min-h-[500px]`}
            >
              {displayServices.map((item) =>
                activeTab === "products" ? (
                  // Product Card Design
                  <motion.div 
                    key={item.id} 
                    variants={fadeInUp} 
                    className="shrink-0 w-full max-w-[320px] lg:max-w-[400px]"
                  >
                    <div
                      className="group relative w-full h-[500px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-primary-blue hover:shadow-[0_0_30px_rgba(59,73,230,0.4)] cursor-pointer"
                    >
                      {/* Top Content (Always Visible) */}
                      <div className="absolute top-0 left-0 right-0 p-8 text-center z-30">
                        <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/70 font-medium mb-6">
                          {item.subtitle}
                        </p>
                        <div className="flex justify-center">
                          <GetInstantQuoteButton
                            variant="custom"
                            text="Get Instant Quote"
                            href={item.link}
                            bgColor="var(--button-indigo)"
                            textColor="white"
                            className="shadow-lg shadow-indigo-500/30 text-xs px-6 py-2 group-hover:bg-primary-blue transition-colors duration-300"
                          />
                        </div>
                      </div>

                      {/* Default View (3D Logo in Center) */}
                      <div className="absolute inset-x-0 bottom-0 top-[40%] flex items-center justify-center p-8 transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90 z-10">
                        <div className="relative w-48 h-48">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                          />
                        </div>
                      </div>

                      {/* Hover View (Portal Image at Bottom) */}
                      <div className="absolute inset-x-2 bottom-2 top-[35%] opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-20">
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white/10 border border-white/20">
                          {item.hoverImage && (
                            <Image
                              src={item.hoverImage}
                              alt={`${item.title} Portal`}
                              fill
                              className="object-cover object-top"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Expert & Service Card Design
                  <motion.div 
                    key={item.id} 
                    variants={fadeInUp} 
                    className="shrink-0 w-full max-w-[300px]"
                  >
                  <div
                    className="group relative w-full h-[500px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image Area */}
                    <div
                      className={`relative w-full h-[60%] overflow-hidden ${activeTab === "experts" ? "bg-card-hover-overlay" : "bg-gray-100"}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={`object-contain p-4 transition-transform duration-500 group-hover:scale-105 ${activeTab === "experts" ? "object-bottom pb-0" : "object-center"}`}
                      />
                    </div>

                    {/* Content Area */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white h-[40%] p-6 flex flex-col justify-between border-t border-gray-100">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                          {item.title}
                        </h3>
                        <div className="w-12 h-1 bg-tab-active rounded mb-3"></div>
                      </div>

                      <div className="flex items-center gap-2 text-tab-active font-semibold text-sm group-hover:text-tab-active-hover cursor-pointer transition-colors">
                        <span>Request Service</span>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                ),
              )}
            </motion.div>

            {/* Pagination Controls */}
            {activeData.length > visibleItems && (
              <div className="flex justify-center items-center gap-3 mt-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg border border-white/10 backdrop-blur-sm"
                  aria-label="Previous"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg border border-white/10 backdrop-blur-sm"
                  aria-label="Next"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </GradientContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
