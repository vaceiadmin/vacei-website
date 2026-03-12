"use client";

import React from "react";
import { DirectionalDiv } from "../common/Animations";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

const ComplianceDashboardSection = () => {
  const { isIPhone, isLowPerformance } = usePerformance();

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <DirectionalDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Compliance Dashboard
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Every company workspace includes a clear compliance overview so you always know where you stand.
              See upcoming filings, status, and confidence in a single view.
            </p>
          </DirectionalDiv>

          <DirectionalDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative rounded-3xl border border-gray-200/80 bg-[#f9fafb] p-6 sm:p-8 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.25)]",
              !isIPhone && !isLowPerformance && "hover:-translate-y-1 transition-all duration-300"
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500 mb-1">
                  Compliance Score
                </p>
                <p className="text-3xl font-bold text-[#111827]">92%</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-emerald-600">
                  On track
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                Upcoming Deadlines
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-gray-100">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      VAT Filing
                    </p>
                    <p className="text-xs text-gray-500">Due in 7 days</p>
                  </div>
                  <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                    Pending
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-gray-100">
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Annual Return
                    </p>
                    <p className="text-xs text-gray-500">Due in 20 days</p>
                  </div>
                  <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Scheduled
                  </span>
                </div>
              </div>

              <p className="mt-5 text-xs sm:text-sm text-gray-500">
                Everything visible in one place—no spreadsheets, no manual trackers, no guessing.
              </p>
            </div>
          </DirectionalDiv>
        </div>
      </div>
    </section>
  );
};

export default ComplianceDashboardSection;

