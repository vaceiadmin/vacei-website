"use client";

import React from "react";
import { DirectionalDiv } from "../common/Animations";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
];

const ActiveEUSection = () => {
  const { isIPhone, isLowPerformance } = usePerformance();

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#ecf0f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <DirectionalDiv
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Active Across the European Union
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              VACEI connects businesses with professional advisors across the European Union through its
              growing partner network. Companies operating across multiple jurisdictions can coordinate
              engagements, filings, and advisors from one platform.
            </p>
          </DirectionalDiv>

          <DirectionalDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.25)]",
              !isIPhone && !isLowPerformance && "hover:-translate-y-1 transition-all duration-300"
            )}
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500 mb-4">
              Countries Where VACEI Is Active
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-700">
              {COUNTRIES.map((country) => (
                <span key={country} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-blue/70" />
                  {country}
                </span>
              ))}
            </div>
          </DirectionalDiv>
        </div>
      </div>
    </section>
  );
};

export default ActiveEUSection;

