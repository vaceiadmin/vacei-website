"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ReduceMotionContext = createContext(false);

function isSafariOrIOS(): boolean {
  if (typeof window === "undefined") return true;
  const ua = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|CriOS/.test(ua);
  const isIPhone = /iPhone/i.test(ua);
  return isIOS || isSafari || isIPhone;
}


export function ReduceMotionProvider({ children }: { children: React.ReactNode }) {
  const [reduce, setReduce] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const safariOrIOS = isSafariOrIOS();
    setReduce(isMobile || prefersReduced || safariOrIOS);

    const onResize = () => {
      setReduce(
        window.innerWidth < 768 ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          isSafariOrIOS()
      );
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
    <ReduceMotionContext.Provider value={reduce}>
      {children}
    </ReduceMotionContext.Provider>
  );
}

export function useReduceMotion() {
  return useContext(ReduceMotionContext);
}
