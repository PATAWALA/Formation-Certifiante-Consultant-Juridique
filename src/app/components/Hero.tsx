

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DzaYb6Z5T0XLcct2UeeqDC";

  return (
    <section className="relative pt-12 pb-8 px-4 max-w-5xl mx-auto text-center space-y-6">
      
      {/* 1. BADGE D'URGENCE & DATES DÉCALÉES */}
      <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full backdrop-blur-md">
        <span className="h-2.5 w-2.5 bg-amber-400 rounded-full animate-ping shrink-0"></span>
        <span className="text-amber-400 text-xs sm:text-sm font-black uppercase tracking-wider">
          Prochaine Session : 03 au 07 Août 2026 • Cours du Soir (19h - 22h)
        </span>
      </div>

      {/* 2. TITRE ACCROCHEUR (PRACTITIONER HOOK) */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
        Maîtrisez la Rédaction d'Actes & la Pratique Juridique en <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">5 Soirs Intensifs</span>
      </h1>

      {/* 3. SOUS-TITRE DE VALEUR */}
      <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
        Passez de la théorie académique à la maîtrise concrète. Repartez avec votre <strong className="text-white">Clé USB (+100 modèles d'actes)</strong> et votre <strong className="text-white">Certificat Officiel</strong>.
      </p>

      {/* 4. LOCALISATION & FORMAT */}
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

      {/* 5. BLOC CTA & ANCRAGE TARIF (5.000 + 45.000) */}
      <div className="pt-4 max-w-md mx-auto space-y-4">
        <a 
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl text-base sm:text-lg transition shadow-2xl shadow-amber-500/20 active:scale-95 w-full"
        >
          <span>💬 Rejoindre le Groupe WhatsApp</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Détail du tarif sous le bouton principal */}
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
          <span>Pré-inscription sans engagement immédiat</span>
        </div>
      </div>

      {/* 6. TROIS ARGUMENTS FLASH */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 max-w-3xl mx-auto text-left">
        <div className="flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-snug">
            <strong className="text-white block">Cas Réels & Pratiques</strong> Exemples concrets du marché béninois.
          </p>
        </div>

        <div className="flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-snug">
            <strong className="text-white block">Kit Praticien Inclus</strong> Clé USB avec +100 contrats & actes prêt à l'emploi.
          </p>
        </div>

        <div className="flex items-start gap-2.5 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-snug">
            <strong className="text-white block">Réseau & Attestation</strong> Attestation officielle délivrée à la fin.
          </p>
        </div>
      </div>

    </section>
  );
}