'use client';

import React, { useState } from 'react';

export default function FormSection() {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  // Remplacer par le vrai lien de groupe WhatsApp communiqué par le CIAJ
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/ExempleLienGroupeCIAJ";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullname || !phone) return;
    window.location.href = WHATSAPP_GROUP_URL;
  };

  return (
    <section id="inscription" className="py-16 px-6 bg-slate-900 text-white relative">
      <div className="max-w-lg mx-auto bg-slate-950 p-8 rounded-3xl border-2 border-amber-500/50 shadow-2xl shadow-amber-500/10">
        
        <div className="text-center mb-6">
          <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30 inline-block mb-3">
            ⚠️ Session du 27 au 29 Juillet • Vodjè, Cotonou
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white">Réservation Express</h2>
          <p className="text-slate-300 text-xs md:text-sm mt-2">
            Entrez vos coordonnées ci-dessous pour intégrer directement le <strong>Groupe WhatsApp des Inscrits</strong> et recevoir les détails d'accès.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Nom & Prénoms *
            </label>
            <input
              type="text"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Ex: Marc Dossou"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Numéro WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex: 01 97 00 00 00"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black py-4 rounded-xl text-base transition transform active:scale-95 shadow-xl shadow-amber-500/20 mt-2 flex items-center justify-center gap-2"
          >
            <span>💬 Rejoindre le Groupe WhatsApp Officiel</span>
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
          📍 Siège du CIAJ Juris-Consulting, Vodjè (Cotonou) <br />
          📞 Contacts : 01 47 52 98 10 / juris.benin@gmail.com
        </div>
      </div>
    </section>
  );
}