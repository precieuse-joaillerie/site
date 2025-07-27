"use client";

import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Diamond, BellRing as Ring, Crown, Gem, Sparkles, Clock } from 'lucide-react';
import { AnimatedService } from '@/components/ui/animated-service';
import { AnimatedAdditionalService } from '@/components/ui/animated-additional-service';

const services = [
  {
    icon: Diamond,
    title: "Création Sur Mesure",
    description: "Des bijoux uniques créés selon vos désirs",
    details: [
      "Consultation personnalisée",
      "Croquis et design 3D",
      "Sélection des pierres",
      "Fabrication artisanale"
    ],
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80"
  },
  {
    icon: Ring,
    title: "Bagues de Fiançailles",
    description: "L'alliance parfaite entre tradition et modernité",
    details: [
      "Large choix de styles",
      "Diamants certifiés",
      "Personnalisation complète",
      "Service d'expertise"
    ],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80"
  },
  {
    icon: Crown,
    title: "Collections Exclusives",
    description: "Des pièces d'exception pour chaque occasion",
    details: [
      "Éditions limitées",
      "Pierres rares",
      "Design unique",
      "Certificat d'authenticité"
    ],
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80"
  }
];

const additionalServices = [
  {
    icon: Gem,
    title: "Expertise et Évaluation",
    description: "Service professionnel d'estimation de vos bijoux"
  },
  {
    icon: Sparkles,
    title: "Nettoyage et Entretien",
    description: "Maintenance régulière pour préserver l'éclat de vos bijoux"
  },
  {
    icon: Clock,
    title: "Restauration",
    description: "Réparation et restauration de bijoux anciens"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-[70vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-white text-center z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-4 text-white">Nos Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Excellence et savoir-faire au service de vos désirs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <AnimatedService
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-powder/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-light mb-16 text-teal">
            Services Complémentaires
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <AnimatedAdditionalService
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">
            Une Question ? Un Projet ?
          </h2>
          <p className="text-teal mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner
            dans tous vos projets de joaillerie.
          </p>
          <Button
            size="lg"
            className="bg-rust text-white hover:bg-rust/90"
          >
            Prendre Rendez-vous
          </Button>
        </div>
      </section>
    </main>
  );
}