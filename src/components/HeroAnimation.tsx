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
    <div className="relative z-10 p-2 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm group hover:border-aurum-gold/30 transition-colors duration-500">
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-aurum-gold/5 to-transparent pointer-events-none" />
      
      {/* Video Container with Simple Frame */}
      <div className="relative rounded-2xl overflow-hidden border border-white/5">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-[600px] object-contain block"
        >
          <source src="/animacao site.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      </div>
    </div>
  );
}
