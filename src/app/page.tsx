"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-aurum-dark text-white overflow-x-hidden">
      {/* Background Watermark (Espelho d'água) */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0">
        <Image 
          src="/logo-watermark.png" 
          alt="Watermark" 
          width={800} 
          height={800}
          className="object-contain filter invert hue-rotate-180" 
        />
      </div>

      <Navbar />
      <Hero />
      <About />
      <div id="produtos">
        <Products />
      </div>
      <div id="contato">
        <Contact />
      </div>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5511993671102"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 shadow-2xl rounded-full overflow-hidden w-16 h-16 border-2 border-white/20 hover:shadow-aurum-gold/30 transition-shadow"
      >
        <Image 
          src="/whatsapp-icon.jpg" 
          alt="Ícone do WhatsApp" 
          fill
          className="object-cover" 
        />
      </motion.a>
    </main>
  );
}
