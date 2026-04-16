"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-aurum-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Vamos desenvolver seu <span className="text-aurum-gold">Próximo Projeto</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Nossa equipe técnica está pronta para analisar sua demanda e propor a melhor solução em poliuretano.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-aurum-gold transition-colors">
                  <Phone className="w-5 h-5 text-aurum-gold" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Telefone</span>
                  <span className="text-white font-medium">+55 (00) 0000-0000</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-aurum-gold transition-colors">
                  <Mail className="w-5 h-5 text-aurum-gold" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">E-mail</span>
                  <span className="text-white font-medium">contato@aurumespumas.com.br</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-aurum-gold transition-colors">
                  <MapPin className="w-5 h-5 text-aurum-gold" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Endereço</span>
                  <span className="text-white font-medium">Distrito Industrial, São Paulo - SP</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">Empresa</label>
                  <input
                    type="text"
                    placeholder="Nome da sua empresa"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="exemplo@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">Mensagem</label>
                <textarea
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors resize-none"
                />
              </div>

              <button className="btn-primary w-full py-5 text-lg">
                Enviar Solicitação
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
