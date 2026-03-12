"use client";

import React from "react";
import Link from "next/link";
import { DirectionalDiv } from "../common/Animations";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { cn } from "@/lib/utils";

const WorkspaceEntrySection = () => {
  const { isIPhone, isLowPerformance } = usePerformance();

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#ecf0f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Existing company */}
          <DirectionalDiv
            id="existing-company"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative h-full rounded-3xl bg-white border border-gray-200/70 p-8 sm:p-10 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.25)] flex flex-col justify-between",
              !isIPhone && !isLowPerformance && "hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)] transition-all duration-300"
            )}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-blue mb-3">
                Already Have a Company?
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3">
                Create a workspace for your existing business.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Manage all your advisors in one place. Upload documents, track compliance, and coordinate your
                professional services from a single dashboard.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/quote#process-steps"
                className="inline-flex items-center justify-center rounded-xl bg-[#3b49e6] text-white text-sm sm:text-base font-semibold px-7 py-3.5 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
              >
                Create Workspace
              </Link>
            </div>
          </DirectionalDiv>

          {/* New company */}
          <DirectionalDiv
            id="start-company"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative h-full rounded-3xl bg-[#111235] text-white p-8 sm:p-10 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.7)] flex flex-col justify-between overflow-hidden",
              !isIPhone && !isLowPerformance && "hover:-translate-y-1 transition-all duration-300"
            )}
          >
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-12 right-[-40px] w-56 h-56 rounded-full bg-primary-blue/50 blur-[80px]" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-200 mb-3">
                Starting a New Company?
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Incorporate and manage everything through VACEI from day one.
              </h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Start your company and centralise documents, approvals, and compliance in the same workspace
                you will use to run the business.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <Link
                href="/company-setup"
                className="inline-flex items-center justify-center rounded-xl bg-white text-[#111235] text-sm sm:text-base font-semibold px-7 py-3.5 shadow-lg hover:bg-slate-50 transition-colors"
              >
                Start Incorporation
              </Link>
            </div>
          </DirectionalDiv>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceEntrySection;

