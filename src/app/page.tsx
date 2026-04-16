"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Applications } from "@/components/Applications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-aurum-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <div id="produtos">
        <Products />
      </div>
      <div id="aplicacoes">
        <Applications />
      </div>
      <div id="contato">
        <Contact />
      </div>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.322-5.607zm-3.536 9.166c-.183-.015-.454-.108-.828-.287-.375-.179-2.217-1.093-2.559-1.217-.341-.125-.59-.187-.838.187-.248.374-.961 1.217-1.178 1.465-.218.248-.435.279-.81.099-.374-.18-1.583-.584-3.013-1.862-1.112-.993-1.863-2.22-2.081-2.596-.217-.375-.023-.578.163-.762.167-.166.374-.435.56-.653.188-.218.25-.374.375-.624.125-.25.062-.468-.031-.652-.094-.185-.838-2.022-1.148-2.772-.303-.73-.615-.63-.837-.641a2.822 2.822 0 0 0-.61-.008c-.201 0-.528.076-.805.378C.62 4.195 0 4.88 0 6.273c0 1.393.993 2.736 1.133 2.924.14.188 1.954 2.986 4.735 4.187.662.286 1.179.456 1.581.584.665.211 1.27.181 1.748.11.532-.08 1.635-.668 1.866-1.314.23-.647.23-1.201.161-1.314-.069-.113-.254-.18-.537-.324z" />
        </svg>
      </motion.a>
    </main>
  );
}
