"use client";

import { Navigation } from "@/components/ui/navigation";
import { HeroCarousel } from "@/components/hero-carousel";
import { ServiceCards } from "@/components/service-cards";
import { ImageGallery } from "@/components/image-gallery";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FounderSection } from "@/components/founder-section";
import { CommitmentsSection } from "@/components/commitments-section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFetch } from "@/hooks/useFetch";
import Loader from "@/components/Loader";

export default function Home() {
  const { currentLanguage } = useLanguage();
  const query = `
    *[_type == "homePageImages"]
  `;
  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  const images = !data ? [] : data[0];

  return (
    <main className="min-h-screen bg-powder">
      <Navigation />
      <HeroCarousel images={images} />
      <ImageGallery images={images} />
      <FounderSection images={images}/>
      <CommitmentsSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="h-[387px] bg-powder/50">
        <div className="flex h-full">
          {/* Photos */}
          <div className="w-3/5 flex h-full">
            <div className="w-1/4 h-full">
              <img
                src={images?.image10}
                alt="Alliance en or"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-1/4 h-full">
              <img
                src={images?.image11}
                alt="Création sur mesure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-1/4 h-full">
              <img
                src={images?.image12}
                alt="Atelier joaillerie"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-1/4 h-full">
              <img
                src={images?.image13}
                alt="Bijou sur mesure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-2/5 flex flex-col justify-center px-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-teal">
              {currentLanguage === "EN"
                ? "Create your unique jewel"
                : currentLanguage === "PT"
                ? "Crie seu joia único"
                : "Créons ensemble votre bijou"}
            </h2>
            <p className="text-teal mb-8">
              {currentLanguage === "EN"
                ? "A jewel that looks like you, carries meaning, beauty and transmission – handcrafted in 19k gold and natural certified stones. A soulful supplement you won't find anywhere else."
                : currentLanguage === "PT"
                ? "Um joia que se parece com você, carrega significado, beleza e transmissão – feito à mão em ouro de 19 quilates e pedras naturais certificadas. Um suplemento de alma que você não encontrará em nenhum lugar."
                : "Un bijou qui vous ressemble, porteur de sens, de beauté et de transmission – façonné à la main en or 19 carats et pierres naturelles certifiées. Un supplément d'âme que vous ne trouverez nulle part ailleurs."}
            </p>
            <Link href="/sur-mesure">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-rust text-rust hover:bg-rust hover:text-white transition-all hover:scale-105 transform duration-300 hover:shadow-lg"
              >
                {currentLanguage === "EN"
                  ? "Create your jewel"
                  : currentLanguage === "PT"
                  ? "Crie seu joia"
                  : "Créez votre bijou"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ServiceCards />
    </main>
  );
}
