"use client";

import React, { useState, useEffect } from "react";
import IntroAnimation from "./IntroAnimation";

// Shows the intro loader on every page load/refresh (no session persistence).
const IntroAnimationGate = () => {
  const [show, setShow] = useState(true);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to ensure playback starts if autoPlay attribute missed it
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch((error) => {
        // Autoplay was blocked. 
        // We cannot force it without interaction, but we can log it.
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const handleComplete = () => setShow(false);

  if (!show) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src="/sounds/lucadialessandro-effect-for-logo-intro-186595.mp3"
        autoPlay
        preload="auto"
        style={{ display: "none" }}
      />
      <IntroAnimation onComplete={handleComplete} />
    </>
  );
};

export default IntroAnimationGate;

