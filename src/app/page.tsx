import StickyCTA from "./components/StickyCTA";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Program from "./components/Program";
import FormSection from "./components/FormSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pb-20 md:pb-0">
      {/* Widget fixe de conversion (Haut Desktop / Bas Mobile) */}
      <StickyCTA />

      {/* Section Accroche Émotionnelle */}
      <Hero />

      {/* Section Douleurs / Risques sans la formation */}
      <Problem />

      {/* Section Programme & Avantages (Certificat + Clé USB) */}
      <Program />

      {/* Formulaire de Conversion rapide vers le groupe WhatsApp */}
      <FormSection />

      {/* Footer minimaliste et légal */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-500 px-6">
        <p>© {new Date().getFullYear()} CIAJ Juris-Consulting. Tous droits réservés.</p>
        <p className="mt-1">Siège social : Vodjè, Cotonou - Bénin</p>
      </footer>
    </main>
  );
}