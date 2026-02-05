"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface PartnerCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

const PartnerCard = ({ title, description, image, link, delay = 0 }: PartnerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-heading mb-3 group-hover:text-primary-blue transition-colors">
          {title}
        </h3>
        <p className="text-text-gray text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <Link
            href={link}
            className="inline-flex items-center text-primary-blue font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 transition-all"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;
