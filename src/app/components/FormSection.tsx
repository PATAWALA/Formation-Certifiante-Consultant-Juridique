'use client';

import React from 'react';

export default function FormSection() {
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DzaYb6Z5T0XLcct2UeeqDC";

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(WHATSAPP_GROUP_URL, '_blank');
  };

  return (
    <section id="inscription" className="py-16 px-6 bg-slate-900 text-white relative">
      <div className="max-w-lg mx-auto bg-slate-950 p-8 rounded-3xl border-2 border-amber-500/50 shadow-2xl shadow-amber-500/10">
        
        <div className="text-center mb-6">
          <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 inline-block mb-3">
            ⚠️ Rentrée du 03 au 05 Août • En Ligne & Présentiel (Vodjè)
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white">Intégrer la Promo</h2>
          <p className="text-slate-300 text-xs md:text-sm mt-2">
            Rejoignez directement le <strong>Groupe WhatsApp Officiel</strong> pour poser vos questions et sécuriser votre accès (Clé USB + Certificat inclus).
          </p>
        </div>

        <form onSubmit={handleRedirect} className="space-y-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black py-4 rounded-xl text-base transition transform active:scale-95 shadow-xl shadow-amber-500/20 mt-2 flex items-center justify-center gap-2"
          >
            <span>💬 Rejoindre le Groupe WhatsApp Gratuitement</span>
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-400 leading-relaxed">
          📍 Présentiel : Vodjè (Cotonou) | 🌐 Format En Ligne Disponible <br />
          📞 Contacts : 01 47 52 98 10 / juris.benin@gmail.com
        </div>
      </div>
    </section>
  );
}