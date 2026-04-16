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
    <div className="relative z-10 p-1 rounded-[2rem] bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm group hover:border-aurum-gold/20 transition-colors duration-500">
      {/* Video Container with Minimalist Frame */}
      <div className="relative rounded-[1.8rem] overflow-hidden">
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
