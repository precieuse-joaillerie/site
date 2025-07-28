"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function FounderSection(props:any) {
  const { images } = props;
  const { currentLanguage } = useLanguage();

  return (
    <section className="py-20 bg-powder/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
          {/* Text Content - Now spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left space-y-6 md:col-span-3"
          >
            <div className="space-y-6 font-playfair border border-white p-12 relative">
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 w-16 h-12">
                <img
                 referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/pw/AP1GczPNA8pMbPEl33W1RMC1hl_PpBbO7yNJmAgYgRaDhA0qCD5RXi6DaIEnmFtWUynU6PoKDSiaVt16craMWlNsxFfSFqai5OvcXKZS091tlormhLdI0ATAhsGZW4C49_hqGV9Z27I8U8raRMfoOVDtKgH0=w134-h99-s-no-gm?authuser=0"
                  alt="Logo Précieuse"
                  className="w-full h-full object-contain opacity-100"
                />
              </div>
              <div className="relative z-10 pt-8">
                <p className="text-lg text-justify text-teal">
                  {currentLanguage === 'EN' ? 'Precious, it is the encounter between artisanal excellence and intimate listening, for creations that celebrate what you have unique to transmit.' :
                  currentLanguage === 'FR' ? "Précieuse, c'est la rencontre entre l'excellence artisanale et l'écoute intime, pour des créations qui célèbrent ce que vous avez d'unique à transmettre." :
                  'Precioso,   a reuni o entre a excelência artesanal e a escuta ntima, para cria es que celebram o que voc  tem nico a transmitir.'}
                </p>
                
                <div className="italic space-y-4 mt-6">
                  <p className="text-justify text-teal">
                    {currentLanguage === 'EN' ? '"I founded this brand to practice a rare and deeply personal profession."' :
                    currentLanguage === 'FR' ? "« J'ai fond  cette marque pour exercer un m tier rare, profond ment mien." :
                    '« Eu fundei essa marca para exercer um of cio raro e profundamente pessoal.»'}
                  </p>
                  <p className="text-justify text-teal">
                    {currentLanguage === 'EN' ? 'Through jewelry, I weave a link between artisanal mastery, sensitive creativity, and sincere listening.' :
                    currentLanguage === 'FR' ? '   travers la joaillerie, je tisse un lien entre ma trise artisanale, créativité sensible et coute sincère.' :
                    'Através da joalheria, eu teco um elo entre a maestria artesanal, criatividade sensível e escuta sincera.'}
                  </p>
                  <p className="text-justify text-teal">
                    {currentLanguage === 'EN' ? "I don't just conceive of jewelry, but of pieces that tell a story - a moment, an emotion, a story to transmit." :
                    currentLanguage === 'FR' ? "Je ne con ois pas simplement des bijoux, mais des pi ces qui racontent quelque chose - un moment, une motion, une histoire   transmettre." :
                    'Eu n o concebo apenas bijuterias, mas peças que contam uma história - um momento, uma emoção, uma história a transmitir.'}
                  </p>
                  <p className="text-justify text-teal">
                    {currentLanguage === 'EN' ? 'My ambition: create jewelry that transcends time, both timeless and deeply personal.' :
                    currentLanguage === 'FR' ? "Mon ambition : créer des bijoux qui traversent le temps,   la fois intemporels et profond ment personnels." :
                    'Minha ambição : criar bijuterias que transcendem o tempo, tanto intemporais quanto profundamente pessoais.'}
                  </p>
                  <p className="text-justify text-teal">
                    {currentLanguage === 'EN' ? 'Whether they come from a collection or are designed to measure, each piece celebrates what you have unique to express.' :
                    currentLanguage === 'FR' ? "Qu'ils soient issus d une collection ou pens s sur mesure, chaque bijou c l bre ce que vous avez d unique   exprimer." :
                    'Sejam eles provenientes de uma coleção ou projetados sob medida, cada peça celebra o que você tem único a expressar.'}
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-right text-teal">{currentLanguage === 'EN' ? 'Emeline' : currentLanguage === 'FR' ? 'Emeline' : 'Emeline'}</p>
                  <p className="text-sm text-right text-teal">{currentLanguage === 'EN' ? 'Jeweler-Founder' : currentLanguage === 'FR' ? 'Joaillière - Fondatrice' : 'Joalheiro - Fundadora'}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/histoire?tab=histoire">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-rust text-rust hover:bg-rust hover:text-white transition-all hover:scale-105 transform duration-300 hover:shadow-lg opacity-80"
                >
                  {currentLanguage === 'EN' ? 'My History' : currentLanguage === 'FR' ? 'Mon Histoire' : currentLanguage === 'PT' ? 'Minha Histria' : ''}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image - Now spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[612px] md:col-span-2"
          >
            <img
             referrerPolicy="no-referrer"
              src={images?.image9}
              alt="Fondatrice de Précieuse"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}