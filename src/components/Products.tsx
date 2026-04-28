"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: "Peças em EVA",
    image: "/portfolio/EVA.jpeg",
  },
  {
    title: "Espuma Filtral (15 a 35 PPI)",
    image: "/portfolio/Espuma Filtral 15PPI - 25PPI - 35PPI.jpeg",
  },
  {
    title: "Espuma de Poliuretano",
    image: "/portfolio/Espuma de Poliuretano .jpeg",
  },
  {
    title: "Peças em Poliuretano",
    image: "/portfolio/Espuma de Poliuretano.jpeg",
  },
  {
    title: "Espumas para Bijuterias",
    image: "/portfolio/Espumas para bijuterias.jpeg",
  },
  {
    title: "Peças em Polietileno",
    image: "/portfolio/PEcas em Polietileno.jpeg",
  },
  {
    title: "Peças Especiais em Espuma",
    image: "/portfolio/Pecas Espuma Poliuretano.jpeg",
  },
  {
    title: "Polietileno",
    image: "/portfolio/Polietileno.jpeg",
  },
  {
    title: "Berço em Espuma",
    image: "/portfolio/Berco Espuma.jpeg",
  },
];

export function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-aurum-dark" id="produtos">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Portfólio de <span className="text-aurum-gold">Soluções</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-medium">
              Conheça nossas soluções sob medida. <span className="font-normal block mt-2">Fabricamos peças técnicas para os mais diversos segmentos industriais com alta precisão e qualidade.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedImage(item.image)}
              className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-all hover:border-aurum-gold/30 hover:shadow-aurum-gold/10 flex flex-col cursor-pointer"
            >
              <div className="relative w-full h-[280px] bg-white overflow-hidden p-6 flex items-center justify-center">
                <div className="relative w-full h-full pointer-events-none">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              
              <div className="p-6 relative z-10 flex-1 flex flex-col justify-center border-t border-white/5 bg-zinc-900/80 backdrop-blur-md pointer-events-none">
                <h3 className="text-xl font-bold text-white text-center">
                  {item.title}
                </h3>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-aurum-gold/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal de ampliação */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12 cursor-pointer"
          >
            <div className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 z-[110]">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="bg-aurum-gold text-aurum-dark px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(202,152,73,0.3)]"
              >
                ← Voltar
              </button>
            </div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[80vh] md:h-full max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center cursor-default p-2 md:p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
