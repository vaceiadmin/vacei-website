"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "@/components/common/SectionBadge";
import TextAnimation from "@/components/common/TextAnimation";
import { FadeInUp } from "@/components/common/Animations";

// Define categories for tabs
type Category = "Essentials" | "Strategic" | "Corporate";

const categories: Category[] = ["Essentials", "Strategic", "Corporate"];

const pricingData = {
  Essentials: [
    {
      title: "Accounting & Finance",
      intro: "Core financial management.",
      scope: "Monthly fee based on volume",
      features: [
        "Monthly bookkeeping",
        "VAT & Tax compliance",
        "Management reporting",
        "Xero / QuickBooks setup",
      ],
      highlight: true,
    },
    {
      title: "Tax & Compliance",
      intro: "Stay fully compliant.",
      scope: "Fixed annual or monthly",
      features: [
        "Corporate tax returns",
        "VAT return filing",
        "Payroll processing",
        "Regulatory liaison",
      ],
    },
  ],
  Strategic: [
    {
      title: "Audit & Assurance",
      intro: "Rigorous statutory audits.",
      scope: "Quoted per engagement",
      features: [
        "Statutory financial audit",
        "Internal control review",
        "Risk assessment",
        "Compliance assurance",
      ],
    },
    {
      title: "Advisory & Growth",
      intro: "Scale your business.",
      scope: "Project or retainer",
      features: [
        "Financial modeling",
        "M&A support",
        "Cash flow optimization",
        "Strategic planning",
      ],
      highlight: true,
    },
  ],
  Corporate: [
    {
      title: "Corporate Services",
      intro: "Company administration.",
      scope: "Annual & project fees",
      features: [
        "Company formation",
        "Registered office",
        "Company secretary",
        "Share transfers",
      ],
    },
    {
      title: "Licensing & Regulated",
      intro: "Complex authorizations.",
      scope: "Project based",
      features: [
        "License applications",
        "Regulatory reporting",
        "Compliance monitoring",
        "Authority correspondence",
      ],
      highlight: true,
    },
  ],
};

const PricingOverviewSection = () => {
  const [activeTab, setActiveTab] = useState<Category>("Essentials");

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#f8fafc]">
      {/* Background Decor - Light Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInUp>
            <SectionBadge text="Transparent Pricing" className="bg-white/80 backdrop-blur-md border border-gray-200 text-heading shadow-sm" />
            <TextAnimation
              text="Simple, Transparent Models."
              as="h2"
              className="mt-6 text-3xl md:text-5xl font-medium text-heading tracking-tight"
            />
            <p className="mt-4 text-gray text-lg max-w-2xl mx-auto">
              Pricing designed to scale with you. Choose the services that match your current stage.
            </p>
          </FadeInUp>
        </div>

        {/* Custom Glass Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/40 p-1.5 rounded-full border border-white/60 shadow-sm backdrop-blur-xl flex gap-1 relative">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${
                  activeTab === tab ? "text-white" : "text-gray hover:text-heading"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="glassTab"
                    className="absolute inset-0 bg-primary-blue rounded-full shadow-lg shadow-blue-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center"
            >
              {pricingData[activeTab].map((card, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl border transition-all duration-500 backdrop-blur-md flex flex-col ${
                    card.highlight
                      ? "bg-white/80 border-white shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:shadow-blue-200/50"
                      : "bg-white/40 border-white/50 hover:bg-white/60 hover:border-white shadow-sm hover:shadow-lg"
                  }`}
                >
                  {/* Highlight Glow for showcased cards */}
                  {card.highlight && (
                    <div className="absolute inset-0 rounded-3xl border-2 border-primary-blue/5 pointer-events-none" />
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-heading mb-2">{card.title}</h3>
                    <p className="text-gray text-sm">{card.intro}</p>
                  </div>

                  <div className="grow space-y-4 mb-8">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-heading opacity-80">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${card.highlight ? "bg-blue-50 text-primary-blue" : "bg-gray-100 text-gray"}`}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray/60 mb-1">Pricing Model</p>
                    <p className="text-base font-semibold text-primary-blue">{card.scope}</p>
                  </div>
                </div>
              ))}

              {/* General "Contact Us" Card acting as the 3rd column often */}
              <div className="group relative p-8 rounded-3xl border border-white/60 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">Need a custom quote?</h3>
                <p className="text-sm text-gray mb-6">
                  Get a tailored proposal based on your exact requirements.
                </p>
                <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-blue transition-colors shadow-lg">
                  Get a Quote
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PricingOverviewSection;


