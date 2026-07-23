import StickyCTA from "./components/StickyCTA";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import TargetAudience from "./components/TargetAudience";
import Program from "./components/Program";
import FormSection from "./components/FormSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pb-20 md:pb-0">
      {/* Bar flottante */}
      <StickyCTA />

      {/* Hero / Accroche */}
      <Hero />

      {/* Section Cible (Placée juste après l'accroche pour la qualification rapide) */}
      <div className="max-w-4xl mx-auto px-6">
        <TargetAudience />
      </div>

      {/* Problèmes & Bloqueurs */}
      <Problem />

      {/* Programme & Kit Offert */}
      <Program />

      {/* Formulaire / CTA Final */}
      <FormSection />

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-500 px-6">
        <p>© {new Date().getFullYear()} CIAJ Juris-Consulting. Tous droits réservés.</p>
        <p className="mt-1">Siège social : Vodjè, Cotonou - Bénin | Formation Présentielle & En Ligne</p>
      </footer>
    </main>
  );
}