"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

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
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Telefone / WhatsApp</span>
                  <a 
                    href="https://wa.me/5511993671102" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-aurum-gold transition-colors"
                  >
                    +55 (11) 99367-1102
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-aurum-gold transition-colors">
                  <Mail className="w-5 h-5 text-aurum-gold" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">E-mail</span>
                  <a 
                    href="mailto:contato@aurumespumas.com.br" 
                    className="text-white font-medium hover:text-aurum-gold transition-colors"
                  >
                    contato@aurumespumas.com.br
                  </a>
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
            className="glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Solicitação Enviada!</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">
                    Obrigado! Recebemos seu pedido de orçamento e entraremos em contato o mais breve possível.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-aurum-gold font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="ec473582-8e4f-4f52-b21d-0ff2f4a64a53" />
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">Nome Completo</label>
                    <input
                      required
                      name="nome"
                      type="text"
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">Empresa</label>
                      <input
                        required
                        name="empresa"
                        type="text"
                        placeholder="Nome da sua empresa"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">E-mail</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="exemplo@empresa.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 uppercase tracking-widest ml-1">Mensagem</label>
                    <textarea
                      required
                      name="mensagem"
                      placeholder="Como podemos ajudar?"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurum-gold transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">Ops! Algo deu errado. Tente novamente mais tarde.</p>
                    </div>
                  )}

                  <button 
                    disabled={status === "loading"}
                    className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Solicitação"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
