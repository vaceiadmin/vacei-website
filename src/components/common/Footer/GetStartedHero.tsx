"use client";

import React from "react";
import Image from "next/image";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import GradientContainer from "@/components/common/GradientContainer";
import TextAnimation from "@/components/common/TextAnimation";
import { FadeInUp } from "@/components/common/Animations";

const FinancialOverviewImage = "/assets/images/financial-overview.png";
const CashflowImage = "/assets/images/cashflow.png";
const ComplianceSnapshotImage = "/assets/images/compliance-snapshot.png";

const GetStartedHero = () => {
  return (
    <section className="relative z-50 w-full overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative overflow-hidden rounded-3xl bg-[#030712] border border-white/5 shadow-2xl">
          {/* Dynamic Background Elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[100px] -z-10" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20 lg:py-24 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
              Join the Future
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8">
              Ready to simplify your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-blue-500">
                business services?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
              Join the businesses and founders managing their European operations through VACEI's structured digital workspace.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <GetInstantQuoteButton
                variant="default"
                className="w-full sm:w-auto h-14 px-8 text-base font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all"
              />
              <button className="w-full sm:w-auto h-14 px-8 text-base font-bold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                Book a Demo
              </button>
            </div>

            {/* Social Proof / Stats */}
            {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5 w-full">
                            {[
                                { label: "EU Countries", value: "27+" },
                                { label: "Advisors", value: "500+" },
                                { label: "Compliance Rate", value: "99.9%" },
                                { label: "Support", value: "24/7" }
                            ].map((stat) => (
                                <div key={stat.label} className="flex flex-col gap-1">
                                    <span className="text-2xl font-black text-white">{stat.value}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{stat.label}</span>
                                </div>
                            ))}
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedHero;
