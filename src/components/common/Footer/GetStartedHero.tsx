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
    <section className="relative z-50 w-full overflow-hidden py-6 sm:py-8 lg:py-12">
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <GradientContainer
            className="min-h-80 sm:min-h-[24rem] lg:h-[22.5rem] lg:max-h-[22.5rem] rounded-lg shadow-[inset_4px_4px_24px_var(--primary-blue-shadow),inset_-4px_-4px_24px_var(--primary-blue-shadow)] bg-footer-hero"
            showRadials={false}
          >
            <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0">
              <div className="grid lg:grid-cols-2 gap-20 sm:gap-8 lg:gap-12 items-center w-full">
                {/* Left Content */}
                <div className="text-white space-y-4 sm:space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <TextAnimation
                    text="Get Started"
                    as="h1"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  />

                  <FadeInUp delay={0.2}>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 max-w-xl">
                      Modernise how your business handles accounting, audit and
                      compliance. One firm. One platform. Full visibility.
                    </p>
                  </FadeInUp>

                  {/* Action Buttons */}
                  <FadeInUp delay={0.4} className="w-full">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full justify-center lg:justify-start">
                      <GetInstantQuoteButton
                        variant="default"
                        className="text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3"
                      />
                      <GetInstantQuoteButton
                        variant="book-demo"
                        className="text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3"
                      />
                    </div>
                  </FadeInUp>
                </div>

                {/* Right Content - Cards Overlay */}
                <div className="relative min-h-[16rem] sm:min-h-[18rem] lg:min-h-[20rem] h-full hidden md:block">
                  {/* Financial Overview Card - Top Right */}
                  <FadeInUp
                    delay={0.6}
                    className="absolute -top-4 sm:-top-6 right-0 lg:right-6 w-48 sm:w-56 lg:w-64 h-28 sm:h-32 lg:h-36 z-20"
                  >
                    <div className="relative w-full h-auto">
                      <Image
                        src={FinancialOverviewImage}
                        alt="Financial Overview"
                        width={320}
                        height={200}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </FadeInUp>

                  {/* Cashflow Summary Card - Middle Left */}
                  <FadeInUp
                    delay={0.8}
                    className="absolute top-4 sm:top-2 -left-4 sm:-left-6 w-64 sm:w-80 lg:w-[22rem] xl:w-[26rem] h-48 sm:h-56 lg:h-60 z-10 mt-4 sm:mt-6"
                  >
                    <div className="relative w-full h-auto">
                      <Image
                        src={CashflowImage}
                        alt="Cashflow Summary"
                        width={400}
                        height={250}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </FadeInUp>

                  {/* Compliance Snapshot Card - Bottom Left */}
                  <FadeInUp
                    delay={1.0}
                    className="absolute top-[10rem] sm:top-[12rem] lg:top-[14rem] -left-8 sm:-left-12 lg:-left-16 w-48 sm:w-56 lg:w-64 h-36 sm:h-40 lg:h-48 z-30 transform -rotate-1"
                  >
                    <div className="relative w-full h-auto">
                      <Image
                        src={ComplianceSnapshotImage}
                        alt="Compliance Snapshot"
                        width={300}
                        height={180}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </FadeInUp>
                </div>
              </div>
            </div>
          </GradientContainer>
        </div>
      </div>
    </section>
  );
};

export default GetStartedHero;
