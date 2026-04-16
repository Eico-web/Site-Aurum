"use client";

import { motion } from "framer-motion";
import { Car, Pickaxe, Drill, Truck } from "lucide-react";

const apps = [
  {
    title: "Indústria Automotiva",
    icon: Car,
    description: "Componentes de suspensão, vedações e peças estruturais de longa vida útil.",
  },
  {
    title: "Mineração e Saneamento",
    icon: Pickaxe,
    description: "Revestimentos resistentes à corrosão e abrasão constante de minérios.",
  },
  {
    title: "Construção Civil",
    icon: Drill,
    description: "Sistemas de amortecimento e componentes para maquinário de grande porte.",
  },
  {
    title: "Logística e Carga",
    icon: Truck,
    description: "Rodas, roletes e batentes de impacto para centros de distribuição.",
  },
];

export function Applications() {
  return (
    <section className="py-24 bg-black relative">
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aurum-gold/20 to-transparent" />
       
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Aplicações <span className="text-aurum-gold">Multissetoriais</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                O poliuretano é um dos materiais mais versatéis da indústria. Nossas peças atendem rigorosos padrões de qualidade em diversos cenários operacionais.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8 relative w-20 h-20">
                <div className="absolute inset-0 bg-aurum-gold/10 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-zinc-900 border border-white/5 rounded-3xl flex items-center justify-center -rotate-6 group-hover:-rotate-0 transition-transform duration-500">
                    <app.icon className="w-8 h-8 text-aurum-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-aurum-gold transition-colors">{app.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
