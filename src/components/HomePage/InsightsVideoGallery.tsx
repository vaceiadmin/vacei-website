"use client";

import React, {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  INSIGHTS_RESOURCES_YOUTUBE_IDS,
  youtubeEmbedUrl,
  youtubeThumbUrl,
} from "@/data/video";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/images/Logo.png";

/** Load iframe when block is near viewport (~1.5 screens ahead). */
const IO_ROOT_MARGIN = "150px 0px 200px 0px";

type PlaylistItem = { title: string };

function InsightsVideoGalleryInner() {
  const { t } = useTranslation("home");
  const headingId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSelectedVideo, setHasSelectedVideo] = useState(false);
  const [inView, setInView] = useState(false);
  const [userActivatedEmbed, setUserActivatedEmbed] = useState(false);

  const playlist = useMemo(() => {
    const raw = t("insightsResources.videoPlaylist", {
      returnObjects: true,
    }) as PlaylistItem[] | string;
    return Array.isArray(raw) ? raw : [];
  }, [t]);

  const ids = INSIGHTS_RESOURCES_YOUTUBE_IDS;
  const activeId = ids[activeIndex] ?? ids[0];

  const embedMounted = inView || userActivatedEmbed;

  const embedSrc = useMemo(
    () => youtubeEmbedUrl(activeId, hasSelectedVideo),
    [activeId, hasSelectedVideo]
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: IO_ROOT_MARGIN, threshold: 0 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const selectVideo = useCallback((index: number) => {
    setUserActivatedEmbed(true);
    setHasSelectedVideo(true);
    setActiveIndex(index);
  }, []);

  const onPosterActivate = useCallback(() => {
    setUserActivatedEmbed(true);
    setHasSelectedVideo(true);
  }, []);

  const currentTitle =
    playlist[activeIndex]?.title ?? t("insightsResources.videoModalEyebrow");

  const posterSrc = youtubeThumbUrl(activeId);

  return (
    <div
      id="insights-video-gallery"
      className="mt-20 scroll-mt-28"
      aria-labelledby={headingId}
    >
      <div
        ref={rootRef}
        className={cn(
          "relative overflow-hidden rounded-[2rem]",
          "border border-white/[0.07]",
          "bg-gradient-to-b from-[#11131c] via-[#0c0d12] to-[#08090c]",
          "shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.04)_inset]",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[2rem]",
          "before:bg-[radial-gradient(ellipse_90%_55%_at_50%_-30%,rgba(59,130,246,0.14),transparent_55%)]"
        )}
      >
        {/* Header */}
        <div className="relative border-b border-white/[0.06] px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4 sm:gap-5">
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                  "bg-gradient-to-br from-blue-500/25 to-blue-600/10",
                  "ring-1 ring-blue-400/25 shadow-lg shadow-blue-950/50"
                )}
                aria-hidden
              >
                <Play className="h-5 w-5 text-blue-400 pl-0.5" strokeWidth={2} />
              </div>
              <div className="min-w-0 pt-0.5">
                <h2
                  id={headingId}
                  className="m-0 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/95"
                >
                  {t("insightsResources.videoModalEyebrow")}
                </h2>
                <p className="mt-2 max-w-xl text-base font-medium leading-snug text-slate-200 sm:text-lg">
                  {t("insightsResources.videoModalHint")}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3 pl-[4.25rem] sm:pl-0">
              <img
                src={LOGO_SRC}
                alt=""
                width={120}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain object-left opacity-90 sm:h-9"
              />
            </div>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-col lg:flex-row">
          {/* Player */}
          <div className="order-1 flex min-h-0 flex-1 flex-col lg:order-2">
            <div className="border-b border-white/[0.06] bg-black/35 px-4 py-3.5 sm:px-6">
              <div className="flex min-w-0 items-baseline justify-between gap-3">
                <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                  {currentTitle}
                </h3>
                <span
                  className="shrink-0 tabular-nums text-[11px] font-medium uppercase tracking-wider text-slate-500"
                  aria-live="polite"
                >
                  {activeIndex + 1} / {ids.length}
                </span>
              </div>
            </div>

            <div className="relative flex-1 bg-[#020203] p-3 sm:p-4 lg:p-5">
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl",
                  "ring-1 ring-white/[0.08]",
                  "shadow-[0_32px_64px_-32px_rgba(0,0,0,0.9)]",
                  "before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-2xl",
                  "before:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                )}
              >
                <div className="relative aspect-video w-full min-h-[200px] bg-black sm:min-h-[260px]">
                  {embedMounted ? (
                    <iframe
                      key={`${activeIndex}-${hasSelectedVideo}`}
                      title={currentTitle}
                      src={embedSrc}
                      className="absolute inset-0 z-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={onPosterActivate}
                      className="group/poster absolute inset-0 z-0 flex h-full w-full flex-col items-center justify-center overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      aria-label={t("insightsResources.watchVideo")}
                    >
                      <img
                        src={posterSrc}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black/50 text-white shadow-xl ring-2 ring-white/30 backdrop-blur-sm transition group-hover/poster:scale-105 group-hover/poster:ring-white/50">
                        <Play
                          className="h-8 w-8 pl-1 text-white"
                          strokeWidth={1.75}
                        />
                      </span>
                      <span className="relative mt-4 max-w-[90%] truncate text-center text-sm font-semibold text-white/95">
                        {currentTitle}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <aside
            className={cn(
              "order-2 border-t border-white/[0.06] bg-black/40 lg:order-1 lg:w-[min(100%,280px)] lg:shrink-0 lg:border-t-0 lg:border-r",
              "flex flex-row gap-3 overflow-x-auto p-4 sm:p-5",
              "lg:flex-col lg:overflow-y-auto lg:overflow-x-visible",
              "[scrollbar-width:thin] [scrollbar-color:rgba(100,116,139,0.35)_transparent]",
              "max-h-[min(42vh,24rem)] lg:max-h-[min(70vh,520px)]",
              "snap-x snap-mandatory lg:snap-none"
            )}
            aria-label={t("insightsResources.videoModalHint")}
          >
            {ids.map((id, i) => {
              const label = playlist[i]?.title ?? `Video ${i + 1}`;
              const selected = i === activeIndex;
              const thumbPriority = i === 0 ? "high" : "low";
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => selectVideo(i)}
                  aria-pressed={selected}
                  aria-label={label}
                  aria-current={selected ? "true" : undefined}
                  className={cn(
                    "group/thumb flex shrink-0 snap-start flex-col gap-2.5 rounded-2xl p-2 text-left transition-all duration-300",
                    "w-[min(260px,78vw)] lg:w-full",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d12]",
                    selected
                      ? "bg-gradient-to-b from-blue-500/15 to-blue-600/5 shadow-[0_0_0_1px_rgba(59,130,246,0.45),0_12px_40px_-12px_rgba(59,130,246,0.35)]"
                      : "bg-white/[0.03] hover:bg-white/[0.06] hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
                  )}
                >
                  <div
                    className={cn(
                      "relative aspect-video w-full overflow-hidden rounded-xl",
                      "ring-1 ring-white/10",
                      selected ? "ring-2 ring-blue-500/50" : "group-hover/thumb:ring-white/20"
                    )}
                  >
                    <img
                      src={youtubeThumbUrl(id)}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover/thumb:scale-[1.03]"
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={thumbPriority}
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent",
                        "opacity-90 transition-opacity duration-300",
                        selected ? "opacity-100" : "opacity-70 group-hover/thumb:opacity-90"
                      )}
                    />
                    {!selected && (
                      <span
                        className={cn(
                          "absolute inset-0 flex items-center justify-center",
                          "opacity-0 transition duration-300 group-hover/thumb:opacity-100"
                        )}
                        aria-hidden
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white shadow-lg ring-2 ring-white/25 backdrop-blur-sm">
                          <Play className="h-5 w-5 fill-white pl-0.5" />
                        </span>
                      </span>
                    )}
                    {selected && (
                      <span className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 rounded-md bg-blue-600/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-sm">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-white opacity-60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                        </span>
                        {t("insightsResources.videoNowPlaying")}
                      </span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "px-0.5 text-[13px] font-semibold leading-snug tracking-tight line-clamp-2",
                      selected ? "text-white" : "text-slate-300 group-hover/thumb:text-slate-100"
                    )}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </aside>
        </div>
      </div>
    </div>
  );
}

const InsightsVideoGallery = memo(InsightsVideoGalleryInner);
export default InsightsVideoGallery;
