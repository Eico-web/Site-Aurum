"use client";

import { useRef, useEffect } from "react";

export function HeroAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  return (
    <div className="relative z-10 glass-gold rounded-[2.5rem] p-0 aspect-square flex items-center justify-center overflow-hidden border border-white/20 shadow-2xl">
      {/* Background overlay for texture */}
      <div className="absolute inset-0 bg-aurum-dark/10 mix-blend-overlay z-20 pointer-events-none" />
      
      {/* Video Container */}
      <div className="w-full h-full relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/animacao site.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    </div>
  );
}
