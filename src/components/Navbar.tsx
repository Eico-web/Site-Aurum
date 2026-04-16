"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#top" },
  { name: "Sobre", href: "#sobre" },
  { name: "Produtos", href: "#produtos" },
  { name: "Aplicações", href: "#aplicacoes" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 bg-black/90 backdrop-blur-md shadow-2xl transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="p-2 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-aurum-gold/30">
            <Image
              src="/logo-vertical.png"
              alt="Aurum Espumas Logo"
              width={180}
              height={220}
              className="object-contain filter invert hue-rotate-180 mix-blend-screen rounded-xl"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-aurum-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contato"
            className="btn-primary text-sm py-2 px-6"
          >
            Orçamento
          </Link>
        </div>

        {/* Mobile Toggle Placeholder */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
