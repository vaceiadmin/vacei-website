import React from "react";
import Image from "next/image";
import GradientContainer from "../common/GradientContainer";
import GetInstantQuoteButton from "../common/GetInstantQuoteButton";
import TextAnimation from "../common/TextAnimation";
import { FadeInUp } from "../common/Animations";

interface ServiceFeatureProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  features: {
    title: React.ReactNode;
    items: string[];
  }[];
  bulletIconSrc?: string;
  bulletIconAlt?: string;
}

const ServiceFeatures = ({
  title,
  subtitle,
  features,
  bulletIconSrc,
  bulletIconAlt = "Item",
}: ServiceFeatureProps) => {
  return (
    <GradientContainer className="py-20 bg-footer-hero">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Title and CTA */}
          <FadeInUp className="flex flex-col justify-start pt-0">
            <TextAnimation
              text={typeof title === "string" ? title : ""}
              as="h2"
              className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight max-w-lg"
            />
            <p className="text-white/70 text-lg mb-10 max-w-md">{subtitle}</p>
            <div>
              <GetInstantQuoteButton hasShadow={true} />
            </div>
          </FadeInUp>

          {/* Right Column: Feature Cards */}
          <div className="space-y-4 w-full">
            {features.map((feature, index) => (
              <FadeInUp
                key={index}
                delay={index * 0.1}
                className="bg-hero border border-white/10 p-6 md:p-8 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <h3 className="text-white font-medium text-lg min-w-[140px] pt-1">
                    {feature.title}
                  </h3>
                  <ul className="space-y-5 flex-1">
                    {feature.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-[15px] text-light-gray leading-relaxed"
                      >
                        <div className="mt-1 shrink-0">
                          {bulletIconSrc ? (
                            <Image
                              src={bulletIconSrc}
                              alt={bulletIconAlt}
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                          ) : (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                opacity="0.2"
                                cx="10"
                                cy="10"
                                r="9"
                                stroke="white"
                              />
                              <path d="M10 6L14 10L10 14L6 10Z" fill="white" />
                            </svg>
                          )}
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </GradientContainer>
  );
};

export default ServiceFeatures;
