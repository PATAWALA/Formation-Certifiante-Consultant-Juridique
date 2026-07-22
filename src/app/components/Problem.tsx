import React from 'react';

export default function Problem() {
  return (
    <section className="py-16 px-6 bg-slate-900 border-y border-slate-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-red-400 text-xs font-bold uppercase tracking-wider">La réalité du terrain</span>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-2 mb-4">
            Pourquoi tant de juristes talentueux peinent à s'imposer ?
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            La faculté donne les textes, mais elle n'enseigne pas comment gagner la confiance d'un client ni comment structurer une consultation payante.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/30">
            <div className="w-10 h-10 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">1</div>
            <h3 className="font-bold text-lg mb-2 text-white">Le blocage de la feuille blanche</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Devoir rédiger un avis juridique complexe sans modèle éprouvé crée du stress et fait perdre de la crédibilité face aux recrutements et clients.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/30">
            <div className="w-10 h-10 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">2</div>
            <h3 className="font-bold text-lg mb-2 text-white">L'absence de stratégie tarifaire</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Ne pas savoir combien facturer ses prestations de conseil ou comment vendre son expertise légale sans complexe.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-red-500/30">
            <div className="w-10 h-10 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">3</div>
            <h3 className="font-bold text-lg mb-2 text-white">L'isolement sur le marché</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Avancer seul sans mentor ni guide déontologique freine le passage à un statut de Consultant reconnu à Cotonou.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#programme"
            className="inline-block bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold px-6 py-3.5 rounded-xl text-sm transition"
          >
            Découvrir la solution pratique du CIAJ Juris-Consulting ↓
          </a>
        </div>
      </div>
    </section>
  );
}