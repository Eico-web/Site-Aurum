"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroAnimation } from "./HeroAnimation";

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
              Especialista em Soluções Técnicas Poliméricas
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight leading-[1.1] mb-8">
            Peças em PU, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurum-gold to-aurum-amber">
              EVA e Polietileno
            </span> <br />
            sob Medida
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            A AURUM ESPUMAS desenvolve soluções técnicas sob medida para as exigências da indústria moderna, transformando projetos em produtos funcionais, duráveis e de alto desempenho.
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

        {/* Visual Asset (Slow Motion Animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <HeroAnimation />
        </motion.div>
      </div>
    </section>
  );
}
