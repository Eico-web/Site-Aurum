import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "AURUM ESPUMAS | Peças Técnicas em Poliuretano",
  description: "Soluções técnicas em poliuretano com alta performance, precisão industrial e inovação para diversos segmentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
