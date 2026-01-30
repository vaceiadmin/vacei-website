"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Logo = "/assets/images/Logo.png";

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-hero-dark"
        >
          <div className="flex flex-col items-center">
            {/* Animated Logo SVG */}
            {/* Animated Logo Image */}
            {/* Animated Logo Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
              className="relative mb-8 p-4"
            >
              <div className="relative overflow-hidden flex">
                {["V", "A", "C", "E", "I"].map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        y: 40,
                        filter: "blur(10px)"
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 1.0,
                          ease: [0.22, 1, 0.36, 1], // Custom premium ease
                        }
                      }
                    }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest text-white font-mona-sans leading-none inline-block origin-bottom"
                  >
                    {char}
                  </motion.span>
                ))}
                
                {/* Shine Effect Overlay */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 0.5, 0] }}
                  transition={{ 
                    delay: 1.2, 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: 0
                  }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 z-20 pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Subtitle / Loading indicator */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-white/60 text-sm tracking-[0.2em] uppercase font-medium">
                Professional Excellence
              </p>
              <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="w-full h-full bg-primary-blue shadow-[0_0_10px_#3b49e6]"
                />
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
