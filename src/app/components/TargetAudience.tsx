import React from 'react';
import { CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';

export default function TargetAudience() {
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DzaYb6Z5T0XLcct2UeeqDC";

  const targets = [
    {
      title: "Étudiants en Droit & Jeunes Diplômés",
      desc: "Passez de la théorie universitaire aux cas pratiques réels exigés sur le marché du travail."
    },
    {
      title: "Juristes & Assistants Juridiques",
      desc: "Montez en compétences, gagnez en autonomie et valorisez votre position auprès de votre hiérarchie."
    },
    {
      title: "Juristes d'Entreprise",
      desc: "Perfectionnez votre maîtrise de la rédaction d'actes et du conseil stratégique pour sécuriser votre organisation."
    },
    {
      title: "Promoteurs d'Entreprise & Immobiliers",
      desc: "Maîtrisez les rouages juridiques et contractuels pour protéger vos investissements et vos transactions."
    },
    {
      title: "Toute personne intéressée par le Droit",
      desc: "Acquérez une expertise juridique pratique et directement exploitable, sans jargon inutile."
    }
  ];

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 my-10 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          <UserCheck className="w-3.5 h-3.5" /> Session du 03 au 05 Août 2026
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Cette immersion est <span className="text-amber-400">faite pour vous</span> si vous êtes :
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Disponible en <strong className="text-slate-200">Présentiel à Cotonou (Vodjè)</strong> et <strong className="text-slate-200">En Ligne</strong> pour les participants à distance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {targets.map((item, index) => (
          <div 
            key={index} 
            className="bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 p-4 rounded-xl transition duration-200 flex items-start gap-3.5"
          >
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BOUTON DE REDIRECTION GROUPE WHATSAPP */}
      <div className="text-center pt-2">
        <a 
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-4 rounded-xl text-sm sm:text-base transition shadow-lg shadow-amber-500/20 active:scale-95 w-full sm:w-auto"
        >
          <span>Rejoindre le Groupe WhatsApp Gratuitement</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-[11px] text-slate-500 mt-2">
          ⚡ Clé USB (Modèles d'actes) & Certificat offerts à tous les participants.
        </p>
      </div>
    </section>
  );
}