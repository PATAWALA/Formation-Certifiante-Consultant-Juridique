import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, MapPin, Gift, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DzaYb6Z5T0XLcct2UeeqDC";

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Badge Flottant */}
        <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-[10px] sm:text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
          Places Limitées en Salle
        </div>

        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
            Investissement & Logistique
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Une formation conçue pour s'adapter à votre emploi du temps
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Horaires aménagés après le bureau pour professionnels et étudiants.
          </p>
        </div>

        {/* GRILLE DES DÉTAILS D'ORGANISATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* Horaires */}
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <Clock className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-sm text-white">Dates & Horaires</h4>
            <p className="text-xs text-amber-400 font-extrabold">27 au 31 Juillet 2026</p>
            <p className="text-[11px] text-slate-400">5 Soirs d'Immersion • 19h00 - 22h00</p>
          </div>

          {/* Lieu & Format */}
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <MapPin className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-sm text-white">Format & Lieu</h4>
            <p className="text-xs text-slate-200 font-bold">Présentiel à Cotonou (Vodjè)</p>
            <p className="text-[11px] text-slate-400">Option En Ligne disponible</p>
          </div>

          {/* Kit Offert */}
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <Gift className="w-6 h-6 text-amber-400 mx-auto" />
            <h4 className="font-bold text-sm text-white">Bonus Inclus</h4>
            <p className="text-xs text-amber-400 font-bold">Clé USB +100 Actes</p>
            <p className="text-[11px] text-slate-400">+ Certificat de Fin de Formation</p>
          </div>

        </div>

        {/* L'ANCRAGE DE VALEUR DU PRIX */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 mb-8 space-y-4">
          <div className="text-center">
            <p className="text-xs text-slate-400 uppercase tracking-widest">Valeur totale du Pack Praticien : <span className="line-through text-slate-500">150 000 FCFA</span></p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-black text-white">35 000 FCFA</span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                Paiement le 1er jour
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Pré-inscription gratuite en ligne. Vous ne réglez vos frais d'accès que sur place le 27 Juillet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-900">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Accès aux 15h d'atelier pratique</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Clé USB contenant les modèles d'actes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Certificat Officiel du CIAJ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Accès au Réseau Privé des Participants</span>
            </div>
          </div>
        </div>

        {/* BOUTON D'ACTION PRINCIPAL */}
        <div className="text-center space-y-3">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-base transition shadow-xl shadow-amber-500/20 active:scale-95 w-full sm:w-auto"
          >
            <span>💬 Réserver Ma Place Via Le Groupe WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Intégration du groupe WhatsApp 100% gratuite et sans engagement immédiat</span>
          </div>
        </div>

      </div>
    </section>
  );
}