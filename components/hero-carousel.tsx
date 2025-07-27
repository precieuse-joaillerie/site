"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroCarousel(props: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { currentLanguage } = useLanguage();
  const images = props?.images;

  const slides = [
    {
      image: images.image1,
      title:
        currentLanguage === "FR"
          ? "Votre bijou. Votre histoire."
          : currentLanguage === "EN"
          ? "Your jewel. Your story."
          : "Seu joia. Sua hist ria.",
      subtitle:
        currentLanguage === "FR"
          ? "Un savoir faire joaillier, une cr ation qui vous ressemble"
          : currentLanguage === "EN"
          ? "A jeweler s expertise, a creation that resembles you"
          : "Um saber fazer joalheiro, uma cria o que o faz lembrar",
    },
    {
      image: images.image2,
      title:
        currentLanguage === "FR"
          ? "Votre bijou. Votre histoire."
          : currentLanguage === "EN"
          ? "Your jewel. Your story."
          : "Seu joia. Sua hist ria.",
      subtitle:
        currentLanguage === "FR"
          ? "Un savoir faire joaillier, une cr ation qui vous ressemble"
          : currentLanguage === "EN"
          ? "A jeweler s expertise, a creation that resembles you"
          : "Um saber fazer joalheiro, uma cria o que o faz lembrar",
    },
    {
      image: images.image3,
      title:
        currentLanguage === "FR"
          ? "Votre bijou. Votre histoire."
          : currentLanguage === "EN"
          ? "Your jewel. Your story."
          : "Seu joia. Sua hist ria.",
      subtitle:
        currentLanguage === "FR"
          ? "Un savoir faire joaillier, une cr ation qui vous ressemble"
          : currentLanguage === "EN"
          ? "A jeweler s expertise, a creation that resembles you"
          : "Um saber fazer joalheiro, uma cria o que o faz lembrar",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn("hero-slide", currentSlide === index && "active")}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-playfair text-white max-w-2xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>
              <Link href="/sur-mesure">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal transition-all hover:scale-105 transform duration-300 hover:shadow-lg text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
                >
                  {currentLanguage === "FR"
                    ? "Créez votre bijou"
                    : currentLanguage === "EN"
                    ? "Create your jewel"
                    : "Criez seu bijou"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
