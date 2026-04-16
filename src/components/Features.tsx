"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Cog, Users } from "lucide-react";

const features = [
  {
    title: "Alta Resistência",
    description: "Peças desenvolvidas para suportar abrasão extrema e condições severas de uso industrial.",
    icon: ShieldCheck,
  },
  {
    title: "Projetos Sob Medida",
    description: "Desenvolvimento técnico personalizado atendendo às especificações exatas de cada aplicação.",
    icon: Cog,
  },
  {
    title: "Tecnologia Avançada",
    description: "Processos produtivos modernos que garantem precisão milimétrica e constância de qualidade.",
    icon: Zap,
  },
  {
    title: "Suporte Especialista",
    description: "Equipe técnica dedicada para auxiliar na escolha da melhor composição de poliuretano.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5 rounded-[2.5rem] overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 border-r border-b lg:border-b-0 border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="w-12 h-12 bg-aurum-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 text-aurum-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
