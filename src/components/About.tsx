"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Handshake, Scale, Lightbulb, Zap } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Qualidade e Precisão",
    description: "Buscamos excelência em cada detalhe, garantindo produtos com alto nível de acabamento e desempenho."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Compromisso com o Cliente",
    description: "Entendemos as necessidades de cada projeto e trabalhamos para entregar soluções eficientes e confiáveis."
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Transparência e Ética",
    description: "Construímos relações sólidas baseadas em confiança, clareza e responsabilidade."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Inovação e Evolução Contínua",
    description: "Estamos sempre em busca de melhorias em processos, materiais e soluções técnicas."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Agilidade e Eficiência",
    description: "Valorizamos o tempo do cliente, com respostas rápidas e processos produtivos otimizados."
  }
];

export function About() {
  return (
    <section className="py-24 bg-aurum-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2.5rem] border border-white/10"
          >
            <div className="w-14 h-14 bg-aurum-gold/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-aurum-gold" />
            </div>
            <h3 className="text-3xl font-bold mb-6">MISSÃO</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Fornecer soluções técnicas em poliuretano, polietileno e EVA com alto padrão de qualidade, atendendo às necessidades específicas de cada cliente com precisão, confiabilidade e excelência operacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-10 rounded-[2.5rem] border border-white/10"
          >
            <div className="w-14 h-14 bg-aurum-gold/10 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-aurum-gold" />
            </div>
            <h3 className="text-3xl font-bold mb-6">VISÃO</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ser reconhecida como referência no fornecimento de peças técnicas em materiais poliméricos, destacando-se pela qualidade dos produtos, agilidade nos processos e compromisso com a satisfação dos clientes.
            </p>
          </motion.div>
        </div>

        {/* Values Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossos VALORES</h2>
          <p className="text-aurum-gold font-medium uppercase tracking-widest text-sm mb-4">Qualidade que garante desempenho</p>
          <div className="w-20 h-1 bg-aurum-gold mx-auto rounded-full" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-aurum-gold/50 transition-colors group"
            >
              <div className="text-aurum-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
