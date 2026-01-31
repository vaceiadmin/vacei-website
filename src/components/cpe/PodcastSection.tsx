"use client";
import React, { useState } from "react";
import Image from "next/image";
import GradientContainer from "@/components/common/GradientContainer";
import GetInstantQuoteButton from "@/components/common/GetInstantQuoteButton";
import SectionBadge from "@/components/common/SectionBadge";

const podcastRows = [
  {
    id: "episodes",
    label: "Episodes",
    description:
      "Discussions covering accounting, audit, compliance, governance and growth topics.",
    image: "/assets/images/Rectangle 34624232.png",
  },
  {
    id: "guest",
    label: "Guest",
    description:
      "Episodes may include professionals, operators and subject matter experts sharing experience and perspectives.",
    image: "/assets/images/Rectangle 34624231.png",
  },
  {
    id: "be-guest",
    label: "Be a Guest",
    description:
      "Professionals interested in contributing to the podcast may submit a guest request.",
    image: "/assets/images/RectangleV.png",
  },
];

const PodcastSection = () => {
  const [activeRowId, setActiveRowId] = useState<string>("episodes");

  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <GradientContainer
        showRadials={true}
        backgroundColor="bg-gradient-container"
        className="py-10 md:py-12 lg:py-14"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-12">
            <SectionBadge
              text="Our Podcast"
              className="border-white text-white/80"
            />
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white leading-tight">
              Podcast
            </h2>
            <p className="mt-3 text-sm md:text-base text-light-gray max-w-2xl mx-auto leading-relaxed">
              The VACEI podcast features conversations on professional practice,
              regulation and business operations.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            {podcastRows.map((row, index) => {
              const isActive = row.id === activeRowId;
              const isFirst = index === 0;

              return (
                <div
                  key={row.id}
                  onMouseEnter={() => setActiveRowId(row.id)}
                  className={`flex flex-col md:flex-row border-t border-white/10 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-purple-bg/80"
                      : "bg-gradient-to-r from-hero to-hero"
                  } ${isFirst ? "border-t-0" : ""}`}
                >
                  {/* Left label */}
                  <div className="md:w-1/4 px-5 py-4 flex items-start md:items-center md:border-r border-white/10">
                    <p className="text-white text-xl font-medium">
                      {row.label}
                    </p>
                  </div>

                  {isActive ? (
                    <>
                      {/* Center image */}
                      <div className="md:w-2/5 px-5 py-4 md:border-r border-white/10 flex items-center justify-center ">
                        <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden">
                          <Image
                            src={row.image}
                            alt={row.label}
                            fill
                            className="object-cover"
                            priority={isFirst}
                          />
                        </div>
                      </div>

                      {/* Right description */}
                      <div className="md:flex-1 px-5 py-4 flex items-center">
                        <p className="text-sm text-white leading-relaxed">
                          {row.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="md:flex-1 px-5 py-4">
                      <p className="text-sm text-light-gray leading-relaxed">
                        {row.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 lg:mt-12 text-center">
            <p className="text-sm md:text-base text-light-gray max-w-xl mx-auto mb-5 leading-relaxed">
              Learn more about VACEI supports business with accounting, audit
              and compliance service.
            </p>
            <GetInstantQuoteButton />
          </div>
        </div>
      </GradientContainer>
    </section>
  );
};

export default PodcastSection;
