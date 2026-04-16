"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  // Monitor scroll for the entire section (or just the container)
  const { scrollYProgress } = useScroll({
    target: typeof window !== "undefined" ? undefined : undefined, // Usually default to viewport for Hero
    offset: ["start start", "end start"]
  });

  // Smoothing the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      video.pause(); // Ensure it starts paused
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    // If metadata is already loaded
    if (video.readyState >= 2) handleLoadedMetadata();

    return () => video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  useEffect(() => {
    // Sync smoothProgress (0 to 1) with video.currentTime
    return smoothProgress.onChange((v) => {
      if (videoRef.current && duration) {
        // Calculate target time
        const targetTime = v * duration;
        // Optimization: Only update if the difference is meaningful to prevent jitter
        if (Math.abs(videoRef.current.currentTime - targetTime) > 0.01) {
          videoRef.current.currentTime = targetTime;
        }
      }
    });
  }, [smoothProgress, duration]);

  return (
    <div 
      ref={containerRef}
      className="relative z-10 glass-gold rounded-[2.5rem] p-0 aspect-square flex items-center justify-center overflow-hidden border border-white/20 shadow-2xl"
    >
      {/* Background overlay for texture */}
      <div className="absolute inset-0 bg-aurum-dark/10 mix-blend-overlay z-20 pointer-events-none" />
      
      {/* Video Container */}
      <div className="w-full h-full relative">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain rounded-2xl"
        >
          <source src="/animacao site.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    </div>
  );
}
