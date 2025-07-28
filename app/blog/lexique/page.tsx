"use client";

import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';



export default function LexiquePage() {
  const { currentLanguage } = useLanguage();

  const terms = [
    {
      term: {
        FR: "Carat",
        EN: "Carat", 
        PT: "Carat"
      },
      definition: {
        FR: "En joaillerie, le carat a deux significations :\n\n• Pour les pierres précieuses : unités de poids.\n1 carat = 0,20 grammes.\nPlus une pierre est lourde, plus elle contient de carats.\n\n• Pour l'or : unité de pureté du métal.\n24 carats = or pur.\nL'or 9 carats contient 37,5 % d'or pur, l'or 18 carats contient 75% d'or pur, et l'or 19,2 carats (utilisé par Précieuse) en contient 80%.", 
        EN: "In jewelry, the carat has two meanings:\n\n• For gemstones: units of weight.\n1 carat = 0.20 grams.\nThe heavier a stone is, the more carats it contains.\n\n• For gold: unit of purity of the metal.\n24 carats = pure gold.\n9 carat gold contains 37.5% pure gold, 18 carat gold contains 75% pure gold, and 19.2 carat gold (used by Précieuse) contains 80%.", 
        PT: "Na joalharia, o quilate tem dois significados:\n\n• Para pedras preciosas: unidades de peso.\n1 quilate = 0,20 gramas.\nQuanto mais pesada for uma pedra, mais quilates ela contém.\n\n• Para o ouro: unidade de pureza do metal.\n24 quilates = ouro puro.\nO ouro de 9 quilates contém 37,5% de ouro puro, o ouro de 18 quilates contém 75% de ouro puro, e o ouro de 19,2 quilates (utilizado pela Précieuse) contém 80%.",
      },
    },
    {
      term: {
        FR: "GVS",
        EN: "GVS", 
        PT: "GVS"
      },
      definition: {
        FR: "Classification des diamants : G pour la couleur (blanc extra +), VS pour la pureté (très petites inclusions).", 
        EN: "Diamond classification: G for color (extra white +), VS for clarity (very small inclusions).", 
        PT: "Classificação dos diamantes: G para a cor (branco extra +), VS para a pureza (muito pequenas inclusões).",
      },
    },
    {
      term: {
        FR: "Serti",
        EN: "Crimped", 
        PT: "Frisado"
      },
      definition: {
        FR: "Technique for securing the stone to the metal. There are several types: closed, claw, rail, grain…", 
        EN: "Technique for securing the stone to the metal. There are several types: closed, claw, rail, grain…", 
        PT: "Técnica de fixação da pedra ao metal. Existem vários tipos: fechado, garras, trilho, grão…",
      },
    },
    {
      term: {
        FR: "Pavage",
        EN: "Paving", 
        PT: "Pavimentação"
      },
      definition: {
        FR: "Setting technique where the stones are placed side by side, completely covering the surface.", 
        EN: "Setting technique where the stones are placed side by side, completely covering the surface.", 
        PT: "Técnica de cravação onde as pedras são colocadas lado a lado, cobrindo completamente a superfície.",
      },
    },
    {
      term: {
        FR: "Alliage",
        EN: "Alloy", 
        PT: "Liga"
      },
      definition: {
        FR: "Mélange de métaux que l'on ajoute à l'or pour lui donner de la solidité et changer sa couleur. Souvent un alliage de cuivre et d'argent qui fait varier la couleur du métal en fonction des proportions qu'on y met.", 
        EN: "Mixture of metals added to gold to give it strength and change its color. Often an alloy of copper and silver that varies the color of the metal depending on the proportions used.", 
        PT: "Mistura de metais que se adiciona ao ouro para lhe dar solidez e mudar a sua cor. Frequentemente uma liga de cobre e prata que varia a cor do metal em função das proporções que se utilizam.",
      },
    },
    {
      term: {
        FR: "Brilliant",
        EN: "Brilliant", 
        PT: "Brilhante"
      },
      definition: {
        FR: "Nom donné à une taille de diamant (et non à la pierre elle-même). Le brillant est une taille ronde composée de 57 facettes qui optimise l'éclat de la pierre.", 
        EN: "Name given to a diamond cut (and not to the stone itself). The brilliant is a round cut composed of 57 facets that optimizes the stone's brilliance.", 
        PT: "Nome dado a um corte de diamante (e não à própria pedra). O brilhante é um corte redondo composto por 57 facetas que otimiza o brilho da pedra.",
      },
    },
    {
      term: {
        FR: "Cabochon",
        EN: "Cabochons", 
        PT: "Cabochões"
      },
      definition: {
        FR: "Pierre polie, sans facettes, avec une surface bombée. Donne un aspect doux et soyeux.", 
        EN: "Polished stone, without facets, with a rounded surface. Gives a soft and silky appearance.", 
        PT: "Pedra polida, sem facetas, com uma superfície arredondada. Dá um aspeto suave e sedoso.",
      },
    },
    {
      term: {
        FR: "Chaton",
        EN: "Chaton", 
        PT: "Chaton"
      },
      definition: {
        FR: "Partie du bijou qui accueille la pierre. Il peut être à griffes, clos, semi clos…", 
        EN: "Part of the jewelry that holds the stone. It can be clawed, closed, semi-closed…", 
        PT: "Parte da joia que acolhe a pedra. Pode ser com garras, fechado, semi-fechado…",
      },
    },
    {
      term: {
        FR: "Poli miroir",
        EN: "Polished mirror", 
        PT: "Espelho polido"
      },
      definition: {
        FR: "Finition lisse et brillante du métal. Le poli miroir reflète comme une surface en verre.", 
        EN: "Smooth and shiny finish of the metal. The mirror polish reflects like a glass surface.", 
        PT: "Acabamento liso e brilhante do metal. O polido espelho reflete como uma superfície de vidro.",
      },
    },
    {
      term: {
        FR: "Poinçon",
        EN: "Punch", 
        PT: "Soco"
      },
      definition: {
        FR: "Marque officielle apposée sur un bijou attestant du métal utilisé et de sa pureté. Obligation légale en France et au Portugal sur n'importe quel bijou en or de plus de 3 grammes.", 
        EN: "Official mark stamped on a piece of jewelry certifying the metal used and its purity. Legal obligation in France and Portugal on any gold jewelry over 3 grams.", 
        PT: "Marca oficial estampada em uma joia atestando o metal utilizado e sua pureza. Obrigação legal na França e em Portugal em qualquer joia de ouro com mais de 3 gramas.",
      },
    },
    {
      term: {
        FR: "Zirconium",
        EN: "Zirconium", 
        PT: "Zirconium"
      },
      definition: {
        FR: "Aussi appelé oxyde, ou oxyde de zirconium ou zirconia. C'est une pierre synthétique imitant le diamant, utilisé pour les prototypes ou les bijoux fantaisie.", 
        EN: "Also called oxide, or zirconium oxide or zirconia. It is a synthetic stone imitating diamond, used for prototypes or costume jewelry.", 
        PT: "Também chamado de óxido, ou óxido de zircônio ou zircônia. É uma pedra sintética que imita o diamante, utilizada para protótipos ou joias de fantasia.",
      },
    }
  ];
  
  
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {currentLanguage === 'FR' ? 'Retour au blog' : currentLanguage === 'EN' ? 'Back to blog' : 'Voltar ao blog'}
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-light mb-8">{currentLanguage === 'FR' ? 'Lexique de la Joaillerie' : currentLanguage === 'EN' ? 'Jewelry Lexicon' : 'Lexicon de Joalheria'}</h1>
          
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
                <h2 className="text-2xl font-light mb-2">{item.term[currentLanguage]}</h2>
                <div className="text-gray-600 whitespace-pre-line">{item.definition[currentLanguage]}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}