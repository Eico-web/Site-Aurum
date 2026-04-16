"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-24 flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aurum-gold/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-aurum-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-[1px] bg-aurum-gold" />
            <span className="text-aurum-gold text-sm font-bold tracking-[0.2em] uppercase">
              Líder em Poliuretano Técnico
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight leading-[1.1] mb-8">
            Soluções Técnicas em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurum-gold to-aurum-amber">
              Poliuretano
            </span> <br />
            de Alta Performance
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            Precisão industrial, durabilidade extrema e inovação para os desafios mais exigentes da indústria automotiva, mineração e construção.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2 group">
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-white/10 hover:bg-white/5 rounded-lg transition-all text-white font-medium">
              Ver Soluções
            </button>
          </div>
        </motion.div>

        {/* Visual Asset (Simulating high-end industrial visual) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-gold rounded-[2.5rem] p-4 aspect-square flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-40" />
            <div className="w-3/4 h-3/4 flex items-center justify-center relative overflow-hidden group p-8">
               <Image
                 src="/logo.png"
                 alt="Aurum Espumas Logo"
                 width={300}
                 height={300}
                 className="object-contain group-hover:scale-110 transition-transform duration-700 filter invert hue-rotate-180 mix-blend-screen opacity-90"
               />
               
               {/* Decorative lines */}
               <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 translate-y-10" />
               <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 translate-y-20" />
               <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 translate-y-40" />
               <div className="absolute top-0 left-10 w-[1px] h-full bg-white/5" />
               <div className="absolute top-0 left-20 w-[1px] h-full bg-white/5" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl border border-white/10"
            >
               <span className="block text-2xl font-bold text-aurum-gold">100%</span>
               <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Qualidade Técnica</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
