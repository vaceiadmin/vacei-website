"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextAnimation from "../common/TextAnimation";
import { FadeInUp } from "../common/Animations";

interface ServiceOverviewProps {
  title: string;
  description: ReactNode;
  image: string;
}

const ServiceOverview = ({
  title,
  description,
  image,
}: ServiceOverviewProps) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
      {/* Wave Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.07,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative">
          
          {/* Left Column: Scrollable Content in Glass Card */}
          <FadeInUp delay={0.2} className="relative z-10 order-2 lg:order-1">
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl shadow-gray-100/50">
                <TextAnimation
                text={title}
                as="h1"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-8 leading-tight tracking-tight"
                />
                
                <div className="prose prose-lg text-text-gray leading-relaxed max-w-none">
                    <div className="space-y-6 text-lg">
                        {description}
                    </div>
                </div>

                 {/* Decorative Accent */}
                 <div className="mt-12 w-20 h-1.5 bg-gradient-brand rounded-full opacity-80" />
            </div>
          </FadeInUp>

          {/* Right Column: Sticky Image */}
          <div className="hidden lg:block lg:sticky lg:top-32 h-fit order-1 lg:order-2">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary-blue/10"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10" />
                <Image
                src={image}
                alt={`${title} Overview`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                />
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-blue/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>

          {/* Mobile Image (Visible only on mobile/tablet) */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block lg:hidden relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8 order-1"
          >
             <Image
                src={image}
                alt={`${title} Overview`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
