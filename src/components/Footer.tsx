import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-8">
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
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Especialistas em engenharia de poliuretano. Transformando desafios industriais em soluções duráveis e eficientes através de polímeros de alta tecnologia.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Site</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link href="#top" className="hover:text-aurum-gold transition-colors">Início</Link></li>
              <li><Link href="#sobre" className="hover:text-aurum-gold transition-colors">Sobre Nós</Link></li>
              <li><Link href="#produtos" className="hover:text-aurum-gold transition-colors">Produtos</Link></li>
              <li><Link href="#aplicacoes" className="hover:text-aurum-gold transition-colors">Aplicações</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link href="#" className="hover:text-aurum-gold transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-aurum-gold transition-colors">Privacidade</Link></li>
              <li><Link href="#" className="hover:text-aurum-gold transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">
            © 2026 AURUM ESPUMAS. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.3em]">Built with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
