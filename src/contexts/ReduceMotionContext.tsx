"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ReduceMotionContext = createContext({
  reduceMotion: false,
  isIPhone: false,
  isLowPerformance: false,
});

function detectIPhone(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return /iPhone/i.test(ua);
}

function detectLowPerformance(): boolean {
  if (typeof window === "undefined") return true;
  const ua = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS/.test(ua);
  const isMobile = window.innerWidth < 768;
  return isIOS || isSafari || isMobile;
}


export function ReduceMotionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({
    reduceMotion: true, // conservative default
    isIPhone: false,
    isLowPerformance: true,
  });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const iPhone = detectIPhone();
    const lowPerf = detectLowPerformance();
    
    setState({
      reduceMotion: isMobile || prefersReduced || lowPerf,
      isIPhone: iPhone,
      isLowPerformance: lowPerf,
    });

    const onResize = () => {
      const mobile = window.innerWidth < 768;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const low = detectLowPerformance();
      setState({
        reduceMotion: mobile || reduced || low,
        isIPhone: detectIPhone(),
        isLowPerformance: low,
      });
    };
    
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    mql.addEventListener("change", onResize);
    window.addEventListener("resize", onResize);
    return () => {
      mql.removeEventListener("change", onResize);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <ReduceMotionContext.Provider value={state}>
      {children}
    </ReduceMotionContext.Provider>
  );
}

export function useReduceMotion() {
  return useContext(ReduceMotionContext).reduceMotion;
}

export function usePerformance() {
  return useContext(ReduceMotionContext);
}
