"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`relative overflow-hidden bg-gray-200 dark:bg-gray-800 ${className}`}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 dark:via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      />
    </div>
  );
};

interface SkeletonImageProps extends ImageProps {
  containerClassName?: string;
  imageClassName?: string;
}

export const SkeletonImage = ({
  src,
  alt,
  containerClassName = "",
  imageClassName = "",
  ...props
}: SkeletonImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${containerClassName}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10"
          >
            <Skeleton className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={src}
        alt={alt}
        className={`${imageClassName} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};
