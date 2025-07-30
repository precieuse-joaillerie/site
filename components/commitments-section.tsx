"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Heart, Gem } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CommitmentsSection() {
  const { currentLanguage } = useLanguage();
  const commitments = [
    {
      icon: Shield,
      title: currentLanguage === 'EN' ? "Ethics" : currentLanguage === 'FR' ? "Éthique" : "Ética",
      description: currentLanguage === 'EN' ? "19K certified gold with guaranteed traceability" : currentLanguage === 'FR' ? "Or 19 carats certifié avec traçabilité garantie" : "Ouro 19 quilates certificado com rastreabilidade garantida"
    },
    {
      icon: Heart,
      title: currentLanguage === 'EN' ? "Craftsmanship" : currentLanguage === 'FR' ? "Artisanat" : "Artesanato",
      description: currentLanguage === 'EN' ? "Handmade in my workshop in Portugal" : currentLanguage === 'FR' ? "Fabrication artisanale dans mon atelier au Portugal" : "Fabricação artesanal em meu ateliê em Portugal"
    },
    {
      icon: Gem,
      title: currentLanguage === 'EN' ? "Excellence" : currentLanguage === 'FR' ? "Excellence" : "Excelência",
      description: currentLanguage === 'EN' ? "High quality finishes" : currentLanguage === 'FR' ? "Finitions de haute qualité" : "Acabamentos de alta qualidade"
    }
  ];

  return (
    <section className="py-20 bg-powder/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">{currentLanguage === 'EN' ? "My Commitments" : currentLanguage === 'FR' ? "Mes Engagements" : "Meus Compromissos"}</h2>
          <p className="text-teal max-w-2xl mx-auto">
            {currentLanguage === 'EN' ? "Creating jewelry that embodies the rare balance between creativity and jewelry expertise, offering each client an intimate and bespoke experience." : currentLanguage === 'FR' ? "Créer des bijoux qui incarnent l'équilibre rare entre créativité et exigence joaillière, en offrant à chaque client une expérience intime et sur-mesure." : "Criar jóias que incorporam o equilíbrio raro entre criatividade e expertise em joalheria, oferecendo a cada cliente uma experiência íntima e personalizada."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-white/20 backdrop-blur-sm"
            >
              <commitment.icon className="w-12 h-12 text-rust mx-auto mb-4" />
              <h3 className="text-xl font-light mb-2 text-teal">{commitment.title}</h3>
              <p className="text-teal" dangerouslySetInnerHTML={{ __html: commitment.description }} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/histoire?tab=valeurs">
            <Button
              variant="outline"
              size="lg"
              className="border-rust text-rust hover:bg-rust hover:text-white"
            >
              {currentLanguage === 'EN' ? "Explore my values" : currentLanguage === 'FR' ? "Découvrir Mes Valeurs" : "Descobrir Meus Valores"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}