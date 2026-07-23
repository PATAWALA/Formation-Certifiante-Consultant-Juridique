import React from 'react';

export default function StickyCTA() {
  const whatsappGroupLink = "https://chat.whatsapp.com/DzaYb6Z5T0XLcct2UeeqDC";

  return (
    <>
      {/* Haut d'écran Desktop */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/30 px-6 py-3 shadow-2xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="animate-pulse h-3 w-3 bg-amber-400 rounded-full"></span>
            <p className="text-sm font-bold text-white">
              Formation Consultant Juridique • <span className="text-amber-400">27-29 Juillet à Vodjè</span>
            </p>
          </div>
          <a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-5 py-2 rounded-lg text-sm transition shadow-lg shadow-amber-500/20"
          >
            Rejoindre le Groupe WhatsApp Gratuitement →
          </a>
        </div>
      </div>

      {/* Bas d'écran Smartphone */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 border-t border-amber-500/40 p-3.5 backdrop-blur-lg shadow-2xl">
        <a
          href={whatsappGroupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-4 rounded-xl text-center block text-sm shadow-lg shadow-amber-500/30 transition active:scale-95"
        >
          ⚡ Intégrer le Groupe WhatsApp Gratuitement
        </a>
      </div>
    </>
  );
}