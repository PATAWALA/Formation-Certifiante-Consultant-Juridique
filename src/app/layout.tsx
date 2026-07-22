import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formation Certifiante Consultant Juridique | CIAJ Juris-Consulting",
  description: "Formation pratique et intensive du 27 au 29 Juillet 2026 à Cotonou (Vodjè). Devenez Consultant Juridique. Certificat et Clé USB de modèles d'actes offerts.",
  openGraph: {
    title: "Formation Certifiante : Devenez Consultant Juridique Pro",
    description: "Immersion de 3 jours à Vodjè (Cotonou). Réservez votre place dès maintenant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}