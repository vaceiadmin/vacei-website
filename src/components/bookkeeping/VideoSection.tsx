"use client";

import React, { useState, useRef } from "react";
import { CheckCircle2, Play, Pause, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function VideoSection() {
  const { t } = useTranslation("services");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
              setIsError(false);
            })
            .catch((error) => {
              console.error("Playback failed:", error);
              setIsPlaying(false);
              setIsLoading(false);
              // Only set error if it's not a standard interruption
              if (error.name !== "AbortError") {
                setIsError(true);
              }
            });
        }
      }
    }
  };

  return (
    <div className="video-wrap">
      <div className="section-inner" style={{ width: "100%" }}>
        <span className="eyebrow-dark">{t("bookkeeping.video.eyebrow")}</span>
        <h2 className="section-h">{t("bookkeeping.video.title")}</h2>
        <p className="section-p mb-6">{t("bookkeeping.video.desc")}</p>

        <div className={`video-frame ${isPlaying ? "is-playing" : ""} ${isLoading ? "is-loading" : ""}`} onClick={togglePlay} >
          {isError ? (
            <div className="flex flex-col items-center justify-center text-center p-8 text-white/50">
              <AlertCircle size={48} className="mb-4 opacity-20" />
              <p className="text-sm">Video unavailable. Please check your connection or Git LFS status.</p>
            </div>
          ) : (
            <video
              ref={videoRef}
              loop
              muted={false}
              playsInline
              className="video-embed"
              preload="metadata"
              poster="/assets/images/placeholder.png"
              onError={() => setIsError(true)}
              onLoadStart={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
            >
              <source src="/assets/videos/Talking Head_LFV1.1.mp4#t=0.001" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <div className="video-overlay">
            <button
              className="video-ctrl-btn"
              aria-label={isPlaying ? "Pause" : "Play"}
              disabled={isError}
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
            >
              {isLoading ? (
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause size={32} fill="currentColor" />
              ) : (
                <Play size={32} fill="currentColor" className="play-icon" />
              )}
            </button>
          </div>
        </div>

        <ul className="video-points mt-6">
          <li>
            <CheckCircle2 size={16} className="text-blue-500" /> {t("bookkeeping.video.point1")}
          </li>
          <li>
            <CheckCircle2 size={16} className="text-blue-500" /> {t("bookkeeping.video.point2")}
          </li>
          <li>
            <CheckCircle2 size={16} className="text-blue-500" /> {t("bookkeeping.video.point3")}
          </li>
          <li>
            <CheckCircle2 size={16} className="text-blue-500" /> {t("bookkeeping.video.point4")}
          </li>
        </ul>
        <p className="video-note">{t("bookkeeping.video.note")}</p>
      </div>
    </div>
  );
}
