"use client";

import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  INSIGHTS_RESOURCES_YOUTUBE_IDS,
  youtubeEmbedUrl,
  youtubeThumbUrl,
} from "@/data/video";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/images/Logo.png";

type PlaylistItem = { title: string };

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const InsightsVideoCarouselModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation("home");
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const playlist = useMemo(() => {
    const raw = t("insightsResources.videoPlaylist", {
      returnObjects: true,
    }) as PlaylistItem[] | string;
    return Array.isArray(raw) ? raw : [];
  }, [t]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [isOpen]);

  if (!mounted) return null;

  const ids = [...INSIGHTS_RESOURCES_YOUTUBE_IDS];
  const embedSrc = youtubeEmbedUrl(ids[activeIndex] ?? ids[0], true);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-10050 flex items-center justify-center p-3 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            className="relative z-10051 w-full max-w-5xl max-h-[min(92vh,900px)] flex flex-col rounded-3xl border border-white/10 bg-[#0A0B10] shadow-2xl shadow-blue-950/40 overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={LOGO_SRC}
                  alt=""
                  width={100}
                  height={32}
                  className="h-7 w-auto sm:h-8 object-contain object-left shrink-0 opacity-95"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-400/90 truncate">
                    {t("insightsResources.videoModalEyebrow")}
                  </p>
                  <p className="text-xs text-slate-500 font-medium truncate hidden sm:block">
                    {t("insightsResources.videoModalHint")}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={t("insightsResources.videoModalCloseAria")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col lg:flex-row min-h-0 overflow-hidden">
              <div className="order-2 lg:order-1 flex lg:flex-col gap-2 p-3 sm:p-4 lg:w-[200px] lg:shrink-0 border-t lg:border-t-0 lg:border-r border-white/10 bg-black/25 overflow-x-auto max-h-[min(40vh,22rem)] lg:max-h-none lg:overflow-y-auto">
                {ids.map((id, i) => {
                  const label = playlist[i]?.title ?? `Video ${i + 1}`;
                  const selected = i === activeIndex;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        "flex lg:flex-col gap-2 p-2 rounded-2xl text-left transition-all shrink-0 w-[min(240px,72vw)] lg:w-full border",
                        selected
                          ? "border-blue-500/60 bg-blue-500/10 ring-2 ring-blue-500/30"
                          : "border-transparent bg-white/5 hover:bg-white/10 hover:border-white/10"
                      )}
                    >
                      <div className="relative w-24 sm:w-28 lg:w-full aspect-video rounded-xl overflow-hidden bg-black shrink-0 ring-1 ring-white/10">
                        <img
                          src={youtubeThumbUrl(id)}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                        />
                        {selected && (
                          <span className="absolute inset-x-0 bottom-0 h-1 bg-primary-blue" />
                        )}
                      </div>
                      <span
                        className={cn(
                          "text-[11px] sm:text-xs font-semibold leading-snug line-clamp-2 lg:line-clamp-3",
                          selected ? "text-white" : "text-slate-400"
                        )}
                      >
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="order-1 lg:order-2 flex-1 min-h-0 flex flex-col bg-black">
                <div className="relative w-full flex-1 min-h-[180px] sm:min-h-[280px] lg:min-h-0">
                  <iframe
                    key={activeIndex}
                    title={playlist[activeIndex]?.title ?? "YouTube"}
                    src={embedSrc}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default InsightsVideoCarouselModal;
