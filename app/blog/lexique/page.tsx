"use client";

import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const terms = [
  {
    term: "Carat",
    definition: "En joaillerie, le carat a deux significations :\n\n• Pour les pierres précieuses : unités de poids.\n1 carat = 0,20 grammes.\nPlus une pierre est lourde, plus elle contient de carats.\n\n• Pour l'or : unité de pureté du métal.\n24 carats = or pur.\nL'or 9 carats contient 37,5 % d'or pur, l'or 18 carats contient 75% d'or pur, et l'or 19,2 carats (utilisé par Précieuse) en contient 80%."
  },
  {
    term: "GVS",
    definition: "Classification des diamants : G pour la couleur (blanc extra +), VS pour la pureté (très petites inclusions)."
  },
  {
    term: "Serti",
    definition: "Technique de fixation de la pierre sur le métal. Il en existe plusieurs : clos, griffe, rail, grain…"
  },
  {
    term: "Pavage",
    definition: "Technique de sertissage où les pierres sont placées côte à côte, couvrant entièrement la surface."
  },
  {
    term: "Alliage",
    definition: "Mélange de métaux que l'on ajoute à l'or pour lui donner de la solidité et changer sa couleur. Souvent un alliage de cuivre et d'argent qui fait varier la couleur du métal en fonction des proportions qu'on y met."
  },
  {
    term: "Brillant",
    definition: "Nom donné à une taille de diamant (et non à la pierre elle-même). Le brillant est une taille ronde composée de 57 facettes qui optimise l'éclat de la pierre."
  },
  {
    term: "Cabochon",
    definition: "Pierre polie, sans facettes, avec une surface bombée. Donne un aspect doux et soyeux."
  },
  {
    term: "Chaton",
    definition: "Partie du bijou qui accueille la pierre. Il peut être à griffes, clos, semi clos…"
  },
  {
    term: "Poli miroir",
    definition: "Finition lisse et brillante du métal. Le poli miroir reflète comme une surface en verre."
  },
  {
    term: "Poinçon",
    definition: "Marque officielle apposée sur un bijou attestant du métal utilisé et de sa pureté. Obligation légale en France et au Portugal sur n'importe quel bijou en or de plus de 3 grammes."
  },
  {
    term: "Zirconium",
    definition: "Aussi appelé oxyde, ou oxyde de zirconium ou zirconia. C'est une pierre synthétique imitant le diamant, utilisé pour les prototypes ou les bijoux fantaisie."
  }
];

export default function LexiquePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-light mb-8">Lexique de la Joaillerie</h1>
          
          <div className="grid gap-6 max-w-4xl">
            {terms.map((item, index) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#faf6f0] p-6 rounded-lg"
              >
                <h2 className="text-2xl font-light mb-2">{item.term}</h2>
                <div className="text-gray-600 whitespace-pre-line">{item.definition}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}