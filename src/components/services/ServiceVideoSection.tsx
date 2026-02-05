"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceVideoSectionProps {
  title: string;
  videoUrl?: string;
}

const ServiceVideoSection: React.FC<ServiceVideoSectionProps> = ({
  title,
  videoUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Shared placeholder visual for all services until individual videos are provided.
  // Uses the Main Render GIF currently stored under public/assets/videos.
  const effectiveVideoUrl = videoUrl || "/assets/videos/Main Render.gif";
  const isGif = effectiveVideoUrl.toLowerCase().endsWith(".gif");

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="mt-6 mb-2">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#020617]">
          {effectiveVideoUrl ? (
            <>
              {isGif ? (
                <Image
                  src={effectiveVideoUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={effectiveVideoUrl}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              )}

              {/* Gradient overlay for readability */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-black/0" />

              {/* Title text */}
              <div className="absolute left-5 bottom-5 z-10 max-w-[70%]">
                <p className="text-xs uppercase tracking-[0.16em] text-white/70 mb-1">
                  Service overview video
                </p>
                <h2 className="text-white text-lg md:text-xl font-medium leading-snug line-clamp-2">
                  {title}
                </h2>
              </div>

              {/* Glassmorphism Play/Pause button */}
              <button
                type="button"
                onClick={isGif ? undefined : togglePlayback}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/30 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.75)] flex items-center justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 border border-white/40 flex items-center justify-center">
                      <AnimatePresence mode="wait" initial={false}>
                        {!isGif && isPlaying ? (
                          <motion.span
                            key="pause"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center justify-center gap-1 text-white"
                          >
                            <span className="w-[3px] h-5 bg-white rounded-full" />
                            <span className="w-[3px] h-5 bg-white rounded-full" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="play"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.15 }}
                            className="text-white"
                          >
                            <svg
                              width="22"
                              height="26"
                              viewBox="0 0 22 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 2L19 13L3 24V2Z"
                                fill="currentColor"
                              />
                            </svg>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </button>
            </>
          ) : (
            <div className="relative w-full h-full border border-dashed border-white/20 bg-slate-900 flex items-center justify-center">
              <p className="text-xs md:text-sm text-slate-200/70 text-center px-6">
                Reserved space for a small, silent looping video for this
                service. The page layout remains fully balanced even if no video
                is added yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceVideoSection;

