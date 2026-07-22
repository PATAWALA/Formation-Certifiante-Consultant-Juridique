import React from 'react';

export default function Program() {
  const steps = [
    { num: "01", title: "Conseil & Assistance Pratique", desc: "Maîtrisez la posture du consultant, la conduite d'un entretien juridique et le diagnostic d'un dossier complexe." },
    { num: "02", title: "Rédaction d'Avis & Consultations Pro", desc: "Apprenez à rédiger des actes clairs, percutants et irréprochables avec des cas pratiques réels de la sous-région." },
    { num: "03", title: "Déontologie & Ethique du Métier", desc: "Protégez votre activité, respectez le cadre réglementaire et crédibilisez votre pratique auprès de vos interlocuteurs." },
    { num: "04", title: "Gestion & Business de Cabinet", desc: "Découvrez la méthode étape par étape pour organiser, gérer et rentabiliser votre propre cabinet de consultation." },
  ];

  return (
    <section id="programme" className="py-16 px-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Un programme 100% opérationnel</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Votre plan de transformation en 3 jours</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition">
              <div className="text-amber-400 font-black text-2xl mb-2">{s.num}.</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Le Cadeau Clé USB */}
        <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 p-8 rounded-3xl border border-amber-500/50 text-center mb-8 shadow-xl">
          <span className="text-2xl">🎁</span>
          <h3 className="text-xl font-bold text-amber-300 mt-2 mb-2">Le Kit de Démarrage Inclus</h3>
          <p className="text-slate-200 text-sm max-w-xl mx-auto leading-relaxed">
            Chaque participant reçoit le <strong>Certificat de Formation Certifiante</strong> et une <strong>Clé USB exclusive</strong> contenant tous les modèles de contrats, avis juridiques et modèles d'actes pour lancer sa pratique dès le lendemain.
          </p>
        </div>

        <div className="text-center">
          <a
            href="#inscription"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-xl text-base transition shadow-lg shadow-amber-500/20"
          >
            Je veux mon kit et ma place en formation →
          </a>
        </div>
      </div>
    </section>
  );
}