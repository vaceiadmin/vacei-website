"use client";

import React, { useState, useRef } from "react";
import { CheckCircle2, Play, Pause } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function VideoSection() {
  const { t } = useTranslation("services");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Playback failed or was interrupted:", error);
              setIsPlaying(false);
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

        <div className={`video-frame ${isPlaying ? "is-playing" : ""}`} onClick={togglePlay} >
          <video
            ref={videoRef}
            loop
            muted={false}
            playsInline
            className="video-embed"
            preload="none"
            poster="/assets/images/placeholder.png"
          >
            <source src="/assets/videos/talking-head.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-overlay">
            <button
              className={`video-ctrl-btn ${!isPlaying ? "visible" : ""}`}
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
            >
              {isPlaying ? (
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
