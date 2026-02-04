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
    <section className="py-20 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-gray-100"
          >
            {/* If image is a placeholder path that might not exist, we should handle it, 
                 but for now assuming the prop is a valid path or we use a fallback */}
            <Image
              src={image}
              alt={`${title} Overview`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col pt-2"
          >
            <TextAnimation
              text={title}
              as="h2"
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-heading mb-4 leading-tight"
            />
            <div className="text-sm md:text-base text-gray leading-[1.8]">
              {description}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
