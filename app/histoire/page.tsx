"use client";

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Navigation } from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Star, Lightbulb, Feather, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFetch } from '@/hooks/useFetch';
import Loader from '@/components/Loader';

export default function HistoirePage() {
  const { currentLanguage } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('histoire');
  const query = `
    *[_type == "brandPageImages"]
  `;
  const { data, isLoading, error } = useFetch(query);


  useEffect(() => {
    const tab = searchParams.get('tab') || 'histoire';
    setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    if (activeTab === 'histoire') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL without page reload
    const newUrl = `/histoire?tab=${value}`;
    router.push(newUrl, { scroll: false });
  };

  
  if (isLoading) return <Loader />;

  if (error) return <div>Error</div>;

  const images = !data ? [] : data[0];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-[70vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${images?.image1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-white text-center z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-4 text-white">{currentLanguage === 'FR' ? 'La Marque' : currentLanguage === 'PT' ? 'A Marca' : 'The Brand'}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            {currentLanguage === 'FR' ? "Un héritage d'excellence et de savoir-faire artisanal" : currentLanguage === 'PT' ? 'Uma herança de excelência e artesanato' : 'A heritage of excellence and craftsmanship'}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-4 mb-12">
              <TabsTrigger value="histoire">{currentLanguage === 'FR' ? 'Mon Histoire' : currentLanguage === 'PT' ? 'Minha História' : 'My History'}</TabsTrigger>
              <TabsTrigger value="savoir-faire">{currentLanguage === 'FR' ? 'Mon Savoir-faire' : currentLanguage === 'PT' ? 'Minha Sabedoria' : 'My Craftsmanship'}</TabsTrigger>
              <TabsTrigger value="valeurs">{currentLanguage === 'FR' ? 'Mes Valeurs et Engagements' : currentLanguage === 'PT' ? 'Minhas Valores e Engajamentos' : 'My Values and Commitments'}</TabsTrigger>
              <TabsTrigger value="manifeste">{currentLanguage === 'FR' ? 'Mon Manifeste' : currentLanguage === 'PT' ? 'Meu manifesto' : 'My Manifesto'}</TabsTrigger>
            </TabsList>

            <TabsContent value="histoire">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">{currentLanguage === 'FR' ? 'Qui suis-je ?' : currentLanguage === 'PT' ? 'Quem sou eu?' : 'Who am I?'}</h2>
                {currentLanguage === 'FR' ? <>
                  <p className="text-teal mb-6 text-justify">
                    Depuis l'enfance, j'ai été bercée par l'amour des beaux objets. Ma mère m'a transmis sa passion pour les pierres précieuses et les bijoux, tandis que mon père, qui a travaillé longtemps dans l'univers du vêtement de luxe, m'a initiée aux codes de ce milieu d'excellence. Ces influences m'ont guidée naturellement vers un métier où l'art, l'artisanat et la beauté se rencontrent.
                  </p>
                  <p className="text-teal mb-6 text-justify">
                    Je suis profondément attachée au fait main, au sur-mesure, à tout ce qui a de la rareté et de l'âme. Créer un bijou, pour moi, c'est bien plus qu'un simple geste technique : c'est raconter une histoire, révéler une intention, transmettre une émotion.
                  </p>
                  <p className="text-teal mb-8 text-justify">
                    Installée à Lisbonne depuis l'année dernière, j'ai fondé ce projet avec l'envie d'offrir une approche différente de la joaillerie. Ici, chaque pièce est façonnée à la main dans mon atelier portugais, en collaboration étroite avec mes clients. Ensemble, nous imaginons un bijou unique, plein de sens et de beauté : une création qui leur ressemble, et qui durera.
                  </p>
                 </> : currentLanguage === 'PT' ? <>
                 <p className="text-teal mb-6 text-justify">
  Desde a infância, fui envolvida pelo amor por objetos bonitos. A minha mãe transmitiu-me a sua paixão por pedras preciosas e joias, enquanto o meu pai, que trabalhou durante muitos anos no mundo da moda de luxo, apresentou-me os códigos deste universo de excelência. Estas influências levaram-me naturalmente a uma profissão onde a arte, o artesanato e a beleza se encontram.
</p>
<p className="text-teal mb-6 text-justify">
  Tenho um profundo apreço pelo trabalho manual, pelas peças feitas por medida, por tudo o que é raro e tem alma. Criar uma joia, para mim, é muito mais do que um simples ato técnico: é contar uma história, revelar uma intenção, transmitir uma emoção.
</p>
<p className="text-teal mb-8 text-justify">
  A viver em Lisboa desde o ano passado, fundei este projeto com o desejo de oferecer uma abordagem diferente à joalharia. Aqui, cada peça é feita à mão no meu atelier português, em estreita colaboração com os meus clientes. Juntos, imaginamos uma joia única, cheia de significado e beleza: uma criação que reflete quem são e que perdurará no tempo.
</p>
                 </> : <>
                 <p className="text-teal mb-6 text-justify">
  Since childhood, I have been surrounded by a love for beautiful objects. My mother passed on her passion for gemstones and jewelry, while my father, who worked for many years in the world of luxury fashion, introduced me to the codes of this world of excellence. These influences naturally led me to a profession where art, craftsmanship, and beauty come together.
</p>
<p className="text-teal mb-6 text-justify">
  I am deeply attached to handmade work, bespoke creations, and everything that holds rarity and soul. Creating a piece of jewelry, for me, is much more than a technical act: it’s about telling a story, expressing an intention, conveying an emotion.
</p>
<p className="text-teal mb-8 text-justify">
  Living in Lisbon since last year, I started this project with the desire to offer a different approach to jewelry. Here, each piece is handcrafted in my Portuguese workshop, in close collaboration with my clients. Together, we imagine a unique jewel, full of meaning and beauty: a creation that reflects who they are and that will last.
</p>
                 </>}
                  <Link href="/sur-mesure">
                    <Button 
                      className="bg-rust text-white hover:bg-rust/90 hover:scale-105 transform transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
                      size="lg"
                    >
                      <Sparkles className="w-5 h-5" />
                      {currentLanguage === 'FR' ? 'Créez votre bijou' : currentLanguage === 'PT' ? 'Crie a sua joia' : 'Design your jewel'}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[600px]"
                >
                  <img
                    src={images?.image2}
                    alt="Emeline, fondatrice de Précieuse"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="savoir-faire">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                {currentLanguage === 'FR' ? <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">
                    Une main experte, un cœur d'artisane.
                  </h2> : currentLanguage === 'PT' ? <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">
                    Uma mão experta, um coração de artesã.
                  </h2> : <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">
                    A hand expert, a heart of artisan.
                  </h2>}

                  {currentLanguage === 'FR' ? <div className="space-y-6 text-teal">
                    <p className="text-justify">
                      Dessiner a toujours été mon point de départ. Ma formation en design m'a appris à chercher l'intention derrière chaque ligne, à comprendre l'équilibre d'une forme, à penser le beau avec sens. C'est là que mon regard s'est affûté, que mon geste s'est précisé. Et c'est ce regard-là que j'ai emporté avec moi en joaillerie.
                    </p>
                    <p className="text-justify">
                      Pendant cinq ans, je me suis formée dans un atelier en France. On m'y a transmis la rigueur, la patience, le respect du savoir-faire. Le feu, le métal, la pierre : tout y était exigeant, et tout m'a passionnée. C'est là que j'ai compris que créer un bijou, ce n'était pas seulement orner — c'était raconter, traduire une émotion en matière.
                    </p>
                    <p className="text-justify">
                      Puis est venue l'aventure de l'entrepreneuriat, une bijouterie cofondée avec une associée. Cinq ans d'engagement, de création, de rencontres. J'ai fini par céder mes parts, le cœur plein, prête à revenir à l'essentiel : la création sur mesure, le geste juste, le lien avec celles et ceux qui portent mes bijoux.
                    </p>
                    <p className="text-justify">
                      Aujourd'hui, dans mon atelier au Portugal, je conçois des pièces uniques, faites à la main, dans la pure tradition joaillière. Chaque bijou est une histoire intime. Un objet à vivre, à aimer, à transmettre.
                    </p>
                  </div> : currentLanguage === 'PT' ? <div className="space-y-6 text-teal"> 
                    <p className="text-justify">
                      Desenhar sempre foi o meu ponto de partida. Minha formação em design me ensinou a procurar a intenção por trás de cada linha, a entender o equilíbrio de uma forma, a pensar o belo com sentido. É lá que meu olhar se afiou, que meu gesto se aperfeiçoou. E é esse olhar que trouxe consigo para a joalheria.
                    </p>
                    <p className="text-justify">
                      Durante cinco anos, fui formada em um atelier na França. Lá me foram ensinados a rigor, paciência, respeito pelo savoir-fazer. O fogo, o metal, a pedra: tudo era exigente, e tudo me apaixonou. É lá que compreendi que criar uma joia, não era apenas adornar — era contar, traduzir uma emoção em matéria.
                    </p>
                    <p className="text-justify">
                      Depois veio a aventura do empreendedorismo, uma joalheria cofundada com uma associada. Cinco anos de compromisso, de criação, de encontros. Fiz finalmente ceder minhas partes, o coração cheio, pronta a voltar ao essencial: a criação à medida, o gesto certo, o vínculo com as mulheres e homens que portam minhas joias.
                    </p>
                    <p className="text-justify">
                      Hoje, no meu atelier em Portugal, crio peças únicas, feitas à mão, na pura tradição joalheira. Cada joia é uma história íntima. Um objeto para viver, para amar, para transmitir.
                    </p>
                  </div> : <div className="space-y-6 text-teal">
                    <p className="text-justify">Drawing has always been my starting point. My design training taught me to look for the intention behind each line, to understand the balance of a shape, to think beauty with sense. It was there that my vision sharpened, my gesture refined. And it was this vision that I brought with me to jewelry.</p>
                    <p className="text-justify">During five years, I was trained in a workshop in France. There I was taught rigor, patience, respect for the savoir-faire. The fire, the metal, the stone: everything was demanding, and everything fascinated me. It was there that I understood that creating a jewel was not just adorning — it was telling, translating an emotion into matter.</p>
                    <p className="text-justify">Then came the adventure of entrepreneurship, a jewelry cofounded with an associate. Five years of commitment, creation, encounters. I finally gave up my shares, my heart full, ready to return to the essential: the creation to measure, the right gesture, the link with the women and men who wear my jewelry.</p>
                    <p className="text-justify">Today, in my workshop in Portugal, I create unique pieces, made by hand, in the pure tradition of jewelry. Each jewel is an intimate story. An object to live, to love, to transmit.</p>
                    </div>}
                  
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[640px]"
                >
                  <img
                    src={images?.image3}
                    alt="Atelier de joaillerie"
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="valeurs">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
                >
                  {currentLanguage === 'FR' ? <h2 className="text-3xl md:text-4xl font-light mb-4 text-teal">
                    Mes Valeurs et Engagements
                  </h2> : currentLanguage === 'PT' ? <h2 className="text-3xl md:text-4xl font-light mb-4 text-teal">
                    Minhas Valores e Engajamentos
                  </h2> : <h2 className="text-3xl md:text-4xl font-light mb-4 text-teal">
                    My Values and Commitments
                  </h2>}
                  {currentLanguage === 'FR' ? <p className="text-teal max-w-2xl mx-auto">
                    L'excellence artisanale au service de créations uniques et durables
                  </p> : currentLanguage === 'PT' ? <p className="text-teal max-w-2xl mx-auto">
                    A excelência artesanal ao serviço de criações únicas e duráveis
                  </p> : <p className="text-teal max-w-2xl mx-auto">
                    The excellence of craftsmanship for unique and durable creations
                  </p>}
                </motion.div>

                <div className="grid gap-8">
                  {/* First Value */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-powder rounded-lg overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 items-center">
                      <div className="p-8">
                        {currentLanguage === 'FR' ? <h3 className="text-2xl font-light mb-4 text-teal">Artisanat & Durabilité</h3> : currentLanguage === 'PT' ? <h3 className="text-2xl font-light mb-4 text-teal">Artisanato & Durabilidade</h3> : <h3 className="text-2xl font-light mb-4 text-teal">Craftsmanship & Durability</h3>}
                        <div className="space-y-1 text-teal">
                          {currentLanguage === 'FR' ? <p>Chaque bijou est fabriqué artisanalement au Portugal, à la main, dans mon atelier. Je travaille sans stock, uniquement sur commande, pour respecter un rythme de production raisonné et éviter toute surconsommation. Ce choix permet de créer des pièces uniques, pensées pour durer, et réalisées dans des conditions de travail irréprochables. Ici, chaque bijou est un objet pour la vie.</p> : currentLanguage === 'PT' ? <p>Cada joia é fabricada artesanalmente no Portugal, à mão, no meu atelier. Trabalho sem estoque, apenas por pedido, para respeitar um ritmo de produção razoável e evitar qualquer superconsumo. Este escolha permite criar peças únicas, pensadas para durar, e realizadas em condições de trabalho irrepreensíveis. Aqui, cada joia é um objeto para viver.</p> : <p>Each jewel is made by hand in Portugal, in my workshop. I work without stock, only on order, to respect a balanced production rhythm and avoid any overconsumption. This choice allows to create unique pieces, designed to last, and made in working conditions that are impeccable. Here, each jewel is an object for life.</p>}
                        </div>
                      </div>
                      <div className="h-[400px]">
                        <img
                          src={images?.image4}
                          alt="Atelier artisanal"
                          className="w-full h-full object-cover rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Second Value */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-powder rounded-lg overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 items-center">
                      <div className="order-2 md:order-1 h-[400px]">
                        <img
                          src={images?.image5}
                          alt="Matériaux précieux"
                          className="w-full h-full object-cover rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="order-1 md:order-2 p-8">
                        {currentLanguage === 'FR' ? <h3 className="text-2xl font-light mb-4 text-teal">Éthique & Traçabilité</h3> : currentLanguage === 'PT' ? <h3 className="text-2xl font-light mb-4 text-teal">Ética & Traçabilidade</h3> : <h3 className="text-2xl font-light mb-4 text-teal">Ethics & Traceability</h3>}
                        <div className="space-y-1 text-teal">
                          {currentLanguage === 'FR' ? <p>Je choisis avec soin chaque matériau utilisé : les pierres sont certifiées, tracées, sélectionnées pour leur qualité autant que pour leur provenance. Je travaille avec un atelier respectant le processus de Kimberly, garant d'une chaîne d'approvisionnement éthique et responsable. Derrière chaque bijou, il y a des choix conscients — pour créer du beau, mais jamais à n'importe quel prix.</p> : currentLanguage === 'PT' ? <p>Escolho com cuidado cada material utilizado: as pedras são certificadas, traçadas, selecionadas por sua qualidade tanto quanto por sua origem. Trabalho com um atelier respeitando o processo Kimberly, garantindo uma cadeia de abastecimento ética e responsável. Por trás de cada joia, há escolhas conscientes — para criar belo, mas nunca por qualquer preço.</p> : <p>I carefully choose each material used: the stones are certified, traced, selected for their quality as much as for their origin. I work with a workshop respecting the Kimberly process, guaranteeing an ethical and responsible supply chain. Behind each jewel, there are conscious choices — to create beauty, but never at any price.</p>}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Third Value */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-powder rounded-lg overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 items-center">
                      <div className="p-8">
                        {currentLanguage === 'FR' ? <h3 className="text-2xl font-light mb-4 text-teal">Excellence & Qualité</h3> : currentLanguage === 'PT' ? <h3 className="text-2xl font-light mb-4 text-teal">Excellência & Qualidade</h3> : <h3 className="text-2xl font-light mb-4 text-teal">Excellence & Quality</h3>}
                        <div className="space-y-1 text-teal">
                          {currentLanguage === 'FR' ? <p>Chaque bijou passe par un contrôle qualité rigoureux, à chaque étape de sa fabrication. Je travaille exclusivement avec de l'or 19 carats tracé et certifié, pour sa durabilité et sa noblesse. Les finitions sont faites à la loupe, dans le respect des règles de l'art joaillier. Rien n'est laissé au hasard : l'excellence est une exigence, pas une option.</p> : currentLanguage === 'PT' ? <p>Cada joia passa por um controle de qualidade rigoroso, em cada etapa de sua fabricação. Trabalho exclusivamente com ouro 19 quilates traçado e certificado, para sua durabilidade e nobreza. As finalizações são feitas à loupe, respeitando as regras da arte joalhiera. Nada é deixado ao acaso: a excelência é uma exigência, não uma opção.</p> : <p>Each jewel goes through a rigorous quality control, at every step of its production. I work exclusively with 19-carat gold, traced and certified, for its durability and nobility. The finishes are made with a magnifying glass, respecting the rules of jewelry art. Nothing is left to chance: excellence is a requirement, not an option.</p>}
                        </div>
                      </div>
                      <div className="h-[400px]">
                        <img
                          src={images?.image6}
                          alt="Contrôle qualité"
                          className="w-full h-full object-cover rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manifeste">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Feather className="w-8 h-8 text-rust" />
                    {currentLanguage === 'FR' ? <h2 className="text-3xl md:text-4xl font-light text-teal">Mon Manifeste</h2> : currentLanguage === 'PT' ? <h2 className="text-3xl md:text-4xl font-light text-teal">Meu Manifesto</h2> : <h2 className="text-3xl md:text-4xl font-light text-teal">My Manifesto</h2>}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-powder p-12 rounded-lg"
                >
                  <div className="space-y-6 text-teal text-lg leading-relaxed">
                    {currentLanguage === 'FR' ? <p className="text-center font-light">Parce que chaque histoire mérite d'être célébrée.</p> : currentLanguage === 'PT' ? <p className="text-center font-light">Porque cada história merece ser celebrada.</p> : <p className="text-center font-light">Because every story deserves to be celebrated.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">La vraie beauté réside dans ce qui a du sens.</p> : currentLanguage === 'PT' ? <p className="text-center">A verdadeira beleza reside em naquilo que tem sentido.</p> : <p className="text-center">The true beauty resides in what has meaning.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Dans ce qui est façonné avec patience, respect, et intention.</p> : currentLanguage === 'PT' ? <p className="text-center">Naquilo que é formado com paciência, respeito e intenção.</p> : <p className="text-center">In what is shaped with patience, respect, and intention.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center font-medium">Nous sommes nés d'une conviction simple :</p> : currentLanguage === 'PT' ? <p className="text-center font-medium">Nascemos de uma convicção simples :</p> : <p className="text-center font-medium">We were born from a simple conviction :</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Un bijou n'est pas un accessoire.</p> : currentLanguage === 'PT' ? <p className="text-center">Um joia não é um acessório.</p> : <p className="text-center">A jewel is not an accessory.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center font-medium">C'est une trace précieuse.</p> : currentLanguage === 'PT' ? <p className="text-center font-medium">É uma marca preciosíssima.</p> : <p className="text-center font-medium">It is a precious trace.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Le témoin éclatant d'une émotion, d'une rencontre, d'un moment de vie que l'on choisit de rendre éternel.</p> : currentLanguage === 'PT' ? <p className="text-center">O brilhante testemunho de uma emoção, de uma encontro, de um momento de vida que escolhemos tornar eterno.</p> : <p className="text-center">The brilliant witness of an emotion, a meeting, a moment of life that we choose to make eternal.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center font-medium">Notre engagement est clair :</p> : currentLanguage === 'PT' ? <p className="text-center font-medium">Nosso compromisso é claro :</p> : <p className="text-center font-medium">Our commitment is clear :</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Créer des bijoux qui incarnent à la fois l'exigence du savoir-faire joaillier et la liberté sensible de la création.</p> : currentLanguage === 'PT' ? <p className="text-center">Criar joias que incorporam à la vez a exigência do saber-fazer joalheiro e a liberdade sensível da criação.</p> : <p className="text-center">Create jewels that embody both the requirement of jewelry savoir-faire and the sensible freedom of creation.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Offrir à chacun un bijou juste, sincère, pensé comme une prolongation de soi.</p> : currentLanguage === 'PT' ? <p className="text-center">Oferecer a cada um um joia justa, sincera, pensada como uma prolongação de si.</p> : <p className="text-center">Offer each a jewel just, sincere, thought as an extension of oneself.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Nous travaillons l'or 19 carats et les pierres naturelles avec rigueur et humilité.</p> : currentLanguage === 'PT' ? <p className="text-center">Trabalhamos com ouro 19 quilates e pedras naturais com rigor e humildade.</p> : <p className="text-center">We work with 19-carat gold and natural stones with rigor and humility.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Chaque pièce est façonnée à la main, selon des gestes ancestraux, dans notre atelier au Portugal.</p> : currentLanguage === 'PT' ? <p className="text-center">Cada peça é formada à mão, seguindo gestos ancestrais, em nosso ateliê em Portugal.</p> : <p className="text-center">Each piece is shaped by hand, according to ancestral gestures, in our workshop in Portugal.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Pas pour suivre une mode éphémère.</p> : currentLanguage === 'PT' ? <p className="text-center">Não para seguir uma moda efêmera.</p> : <p className="text-center">Not for following a fleeting trend.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Mais pour créer des pièces intemporelles, porteuses d'histoire, nées d'un échange intime entre la créatrice et celui ou celle qui les portera.</p> : currentLanguage === 'PT' ? <p className="text-center">Mas para criar peças intemporais, portadoras de história, nascidas de um trocadilho íntimo entre a criadora e quem as portará.</p> : <p className="text-center">But to create timeless pieces, bearers of history, born from an intimate exchange between the creator and who will wear them.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center font-medium">Précieuse, c'est la promesse d'un lien.</p> : currentLanguage === 'PT' ? <p className="text-center font-medium">Preciosa, é a promessa de um vínculo.</p> : <p className="text-center font-medium">Précieuse, it is the promise of a bond.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Entre hier et demain.</p> : currentLanguage === 'PT' ? <p className="text-center">Entre ontem e amanhã.</p> : <p className="text-center">Between yesterday and tomorrow.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Entre la matière et l'émotion.</p> : currentLanguage === 'PT' ? <p className="text-center">Entre a matéria e a emoção.</p> : <p className="text-center">Between matter and emotion.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Entre votre histoire et notre savoir-faire.</p> : currentLanguage === 'PT' ? <p className="text-center">Entre sua história e nosso saber-fazer.</p> : <p className="text-center">Between your story and our savoir-faire.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Nous refusons l'artifice et l'ostentation.</p> : currentLanguage === 'PT' ? <p className="text-center">Não nos submetemos ao artifício e à ostentação.</p> : <p className="text-center">We refuse artifice and ostentation.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Nous choisissons la justesse, la sensibilité, l'authenticité.</p> : currentLanguage === 'PT' ? <p className="text-center">Escolhemos a justiça, a sensibilidade, a autenticidade.</p> : <p className="text-center">We choose justice, sensitivity, authenticity.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Nous croyons aux bijoux qui traversent le temps,</p> : currentLanguage === 'PT' ? <p className="text-center">Cremos nos joias que atravessam o tempo,</p> : <p className="text-center">We believe in jewels that cross time,</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">pas aux objets qui s'oublient.</p> : currentLanguage === 'PT' ? <p className="text-center">não em objetos que se esquecem.</p> : <p className="text-center">not to objects that are forgotten.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center">Aux bijoux qui marquent, qui protègent, qui célèbrent.</p> : currentLanguage === 'PT' ? <p className="text-center">Nos bijutos que marcam, que protegem, que celebram.</p> : <p className="text-center">Jewels that mark, protect, celebrate.</p>}
                    
                    {currentLanguage === 'FR' ? <p className="text-center font-medium text-xl">Nous ne créons pas simplement des bijoux. Nous créons des liens.</p> : currentLanguage === 'PT' ? <p className="text-center font-medium text-xl">Não criamos apenas joias. Criamos ligações.</p> : <p className="text-center font-medium text-xl">We do not create simple jewels. We create bonds.</p>}
                    </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-powder/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-teal">
            {currentLanguage === 'FR' ? " Créons ensemble votre bijou d'exception" : currentLanguage === 'PT' ? "Criemos juntos a sua joia excepcional" : "Let us create your exceptional jewel together"}
          </h2>
          <p className="text-teal mb-8 max-w-3xl mx-auto">
            {currentLanguage === 'FR' ? "Une expérience unique pour donner vie à vos plus belles envies. Prenons rendez-vous pour en parler." : currentLanguage === 'PT' ? "Uma experiência única para dar vida às suas belas aspirações. Agende um encontro para conversar." : "A unique experience to bring your most beautiful aspirations to life. Book an appointment to discuss it."}
          </p>
          <Link href="/sur-mesure">
            <Button
              variant="outline"
              size="lg"
              className="border-rust text-rust hover:bg-rust hover:text-white hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
            >
              {currentLanguage === 'FR' ? "Prendre Rendez-vous" : currentLanguage === 'PT' ? "Agende um encontro" : "Book an appointment"}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}