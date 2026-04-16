"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Peças Técnicas Sob Medida",
    category: "Engenharia",
    description: "Desenvolvimento de moldes e peças específicas para sistemas mecânicos complexos.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Revestimentos Industriais",
    category: "Proteção",
    description: "Aplicações em cilindros, rodas e polias para máxima tração e resistência.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Componentes para Mineração",
    category: "Extração",
    description: "Gaxetas, raspadores e vedações de alto impacto.",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Amortecedores e Coxins",
    category: "Vibração",
    description: "Soluções para absorção de impacto em maquinário pesado.",
    className: "md:col-span-1 md:row-span-1",
  },
];

export function Products() {
  return (
    <section className="py-24 bg-aurum-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfólio de <span className="text-aurum-gold">Soluções</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-medium">
              Do projeto à peça final, com excelência. <span className="font-normal block mt-2">Explore nossa gama de produtos desenvolvidos com polímeros de última geração, garantindo o melhor custo-benefício e performance do mercado.</span>
            </p>
          </div>
          <button className="text-aurum-gold font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Ver catálogo completo
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-[2rem] overflow-hidden p-8 flex flex-col justify-end bg-zinc-900 border border-white/5 shadow-2xl transition-all hover:border-aurum-gold/30 hover:shadow-aurum-gold/10",
                item.className
              )}
            >
              <div className="absolute top-0 right-0 p-8 flex flex-col items-end">
                <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-aurum-gold bg-aurum-gold/5 px-3 py-1 rounded-full border border-aurum-gold/20 mb-2">
                  {item.category}
                </span>
              </div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-aurum-gold/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
