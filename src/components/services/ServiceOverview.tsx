"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextAnimation from "../common/TextAnimation";

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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-gray-50/30">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Wave Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Background pattern.svg')",
          opacity: 0.04,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Glassmorphism Card */}
          <div className="relative bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/5">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-primary-blue/5 pointer-events-none" />
            
            {/* Content Container */}
            <div className="relative z-10">
              {/* Image Section */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 z-10" />
                <Image
                  src={image}
                  alt={`${title} Overview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
                
                {/* Floating Accent Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-8 left-8 w-16 h-16 bg-primary-blue/20 backdrop-blur-md rounded-full border border-white/40 shadow-lg"
                />
              </div>

              {/* Text Content Section */}
              <div className="px-8 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16">
                <TextAnimation
                  text={title}
                  as="h1"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-6 leading-tight tracking-tight"
                />
                
                {/* Decorative Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "5rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-gradient-to-r from-primary-blue to-primary rounded-full mb-8"
                />
                
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-5 text-base md:text-lg text-text-gray/90 leading-relaxed">
                    {description}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />
          </div>

          {/* Floating Shadow Elements */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-primary-blue/10 blur-2xl rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;
