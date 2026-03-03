"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ReduceMotionContext = createContext(false);

type PerformanceState = {
  isIPhone: boolean;
  isLowPerformance: boolean;
};

const PerformanceContext = createContext<PerformanceState>({
  isIPhone: false,
  isLowPerformance: false,
});

function isSafariOrIOS(): boolean {
  if (typeof window === "undefined") return true;
  const ua = window.navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS/.test(ua);
  return isIOS || isSafari;
}

function detectPerformance(): PerformanceState {
  if (typeof window === "undefined") {
    return { isIPhone: false, isLowPerformance: true };
  }

  const ua = window.navigator.userAgent || "";
  const isIPhone =
    /iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const smallScreen = window.innerWidth < 768;
  const maybeLowMemory =
    // Not supported in all browsers; fall back gracefully
    // @ts-ignore
    typeof navigator.deviceMemory === "number" &&
    // @ts-ignore
    navigator.deviceMemory <= 4;

  const isLowPerformance = isIPhone || smallScreen || !!maybeLowMemory;

  return { isIPhone, isLowPerformance };
}

export function ReduceMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reduce, setReduce] = useState(true);
  const [performance, setPerformance] = useState<PerformanceState>(() =>
    detectPerformance()
  );

  useEffect(() => {
    const updateFromEnvironment = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const safariOrIOS = isSafariOrIOS();

      setReduce(isMobile || prefersReduced || safariOrIOS);
      setPerformance(detectPerformance());
    };

    updateFromEnvironment();

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => updateFromEnvironment();

    mql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return (
    <ReduceMotionContext.Provider value={reduce}>
      <PerformanceContext.Provider value={performance}>
        {children}
      </PerformanceContext.Provider>
    </ReduceMotionContext.Provider>
  );
}

export function useReduceMotion() {
  return useContext(ReduceMotionContext);
}

export function usePerformance() {
  return useContext(PerformanceContext);
}
