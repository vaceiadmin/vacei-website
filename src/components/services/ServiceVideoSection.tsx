"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ServiceVideoSectionProps {
  title: string;
  videoUrl?: string;
}

const FALLBACK_URL = "/assets/videos/Main Render.gif";

const ServiceVideoSection: React.FC<ServiceVideoSectionProps> = ({
  title,
  videoUrl,
}) => {
  const [sourceFailed, setSourceFailed] = useState(false);

  useEffect(() => {
    setSourceFailed(false);
  }, [videoUrl]);

  const effectiveVideoUrl =
    videoUrl && !sourceFailed ? videoUrl : FALLBACK_URL;
  const isGif = effectiveVideoUrl.toLowerCase().endsWith(".gif");

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
                  unoptimized
                  onError={() => setSourceFailed(true)}
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  src={effectiveVideoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={() => setSourceFailed(true)}
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

