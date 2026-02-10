"use client";

import React, { useEffect, useState } from "react";
import IntroAnimation from "./IntroAnimation";

// Wrapper to only show the intro animation once per browser session
const IntroAnimationGate = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenIntro = window.sessionStorage.getItem("vacei_intro_seen");
    if (!hasSeenIntro) {
      setShow(true);
      window.sessionStorage.setItem("vacei_intro_seen", "1");
    }
  }, []);

  if (!show) return null;

  return <IntroAnimation />;
};

export default IntroAnimationGate;

