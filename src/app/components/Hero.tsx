import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Badge d'urgence */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/40 px-4 py-2 rounded-full mb-6">
          <span className="h-2.5 w-2.5 bg-amber-400 rounded-full animate-ping"></span>
          <span className="text-amber-400 text-xs md:text-sm font-bold uppercase tracking-wider">
            Formation Immersion • 27 au 29 Juillet 2026 à Cotonou (Vodjè)
          </span>
        </div>

        {/* Titre choc émotionnel */}
        <h1 className="text-3xl md:text-6xl font-black text-white leading-tight mb-6">
          Ne laissez plus votre diplôme de Droit <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
            dormir dans un tiroir.
          </span>
        </h1>

        <p className="text-slate-300 text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Le marché du travail n'attend pas la théorie. En 3 jours intensifs, apprenez à <strong className="text-white">rédiger des avis juridiques professionnels</strong>, conseiller avec assurance et bâtir votre propre réseau de clients.
        </p>

        {/* Bonus irrésistibles */}
        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-semibold text-slate-300 mb-10">
          <span className="bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700 text-amber-400">📜 Certificat de Fin de Formation</span>
          <span className="bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700 text-amber-400">🔑 Clé USB offertes : +100 Modèles d'actes prêt à l'emploi</span>
          <span className="bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700 text-amber-400">🤝 Réseau exclusif de juristes</span>
        </div>

        {/* CTA Ultime */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#inscription"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4.5 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-xl shadow-amber-500/25"
          >
            👉 Je réserve ma place avant la fermeture des inscriptions
          </a>
        </div>
        <p className="text-slate-500 text-xs mt-3">⚡ Inscription rapide en 30 secondes sans engagement préalable.</p>
      </div>
    </section>
  );
}