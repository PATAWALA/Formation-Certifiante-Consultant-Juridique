import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DzaYb6Z5T0XLcct2UeeqDC";

  return (
    <section className="relative pt-20 md:pt-28 pb-10 px-4 max-w-5xl mx-auto text-center space-y-6">
      
      {/* 1. BADGE DE DATE - DÉGAGÉ DE LA NAVBAR */}
      <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full backdrop-blur-md">
        <span className="h-2.5 w-2.5 bg-amber-400 rounded-full animate-ping shrink-0"></span>
        <span className="text-amber-400 text-xs sm:text-sm font-black uppercase tracking-wider">
          Prochaine Session : 03 au 07 Août 2026 • Cours du Soir (19h - 22h)
        </span>
      </div>

      {/* 2. TITRE ORIENTÉ RÉSULTAT ET CONVERSION */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
        Ne Soyez Plus Bloqué par la Pratique : Secourez Vos Clients avec des <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Actes Juridiques Irréprochables</span>
      </h1>

      {/* 3. SOUS-TITRE PERCUTANT */}
      <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
        En 5 soirs d'immersion, maîtrisez l'ingénierie contractuelle et repartez avec la <strong className="text-white">Clé USB d'expert (+100 modèles d'actes)</strong> pour sécuriser chaque dossier d'entreprise.
      </p>

      {/* 4. MODALITÉS D'ACCÈS */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400 pt-1">
        <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-200">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Présentiel à Cotonou (Vodjè)</span>
        </span>
        <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-200">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Option En Ligne disponible</span>
        </span>
      </div>

      {/* 5. BLOC CTA & TRANSPARENCE DU TARIF */}
      <div className="pt-4 max-w-md mx-auto space-y-4">
        <a 
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl text-base sm:text-lg transition shadow-2xl shadow-amber-500/20 active:scale-95 w-full"
        >
          <span>💬 Réserver Ma Place Via WhatsApp</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Cadre explicatif des prix actualisés */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between text-xs">
          <span className="text-slate-400">Investissement :</span>
          <div className="font-bold text-slate-200">
            <span>Inscription : <strong className="text-white">5.000 F</strong></span>
            <span className="mx-1.5 text-slate-600">|</span>
            <span>Participation : <strong className="text-amber-400">45.000 F</strong></span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Intégration du groupe 100% gratuite et sans engagement</span>
        </div>
      </div>

      {/* 6. GARANTIES / ARGUMENTS CLÉS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 max-w-3xl mx-auto text-left">
        <div className="flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-snug">
            <strong className="text-white block">Cas Réels du Bénin</strong> Analyse et rédaction en direct.
          </p>
        </div>

        <div className="flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-snug">
            <strong className="text-white block">Boîte à Outils Fournie</strong> Clé USB avec +100 contrats éditables.
          </p>
        </div>

        <div className="flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-snug">
            <strong className="text-white block">Attestation Officielle</strong> Validez vos compétences juridiques.
          </p>
        </div>
      </div>

    </section>
  );
}