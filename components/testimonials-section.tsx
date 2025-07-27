"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export function TestimonialsSection() {
  const { currentLanguage } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: currentLanguage === "EN" ? "L. Nicola" : currentLanguage === "FR" ? "L. Nicola" : "L. Nicola",
      text: currentLanguage === "EN" ? "Thank you for your originality and kindness. You are a true pro! I highly recommend..." : currentLanguage === "FR" ? "Merci à vous pour l'originalité de vos bijoux, mais surtout pour votre gentillesse, votre patience et votre compréhension ! Une vraie pro ! Je recommande fortement…" : "Obrigado por sua originalidade e bondade. Você é um verdadeiro profissional! Eu recomendo fortemente…"
    },
    {
      name: currentLanguage === "EN" ? "M. Benoit" : currentLanguage === "FR" ? "M. Benoit" : "M. Benoit",
      text: currentLanguage === "EN" ? "Emeline is simply an artist! The jewelry she created for me is magnificent, the result is beyond what I imagined... I'm thrilled and delighted! In one word: Sublime! Thank you from the bottom of my heart." : currentLanguage === "FR" ? "Emeline est tout simplement une artiste ! Les bijoux qu'elle a créés pour moi se sont révélés être magnifiques, le résultat est au-delà de ce que j'avais imaginé… Je suis émue et enthousiasmée ! En un mot : Sublime ! Merci de tout coeur." : "Emeline é simplesmente uma artista! A joalharia que ela criou para mim é magnífica, o resultado é além do que eu imaginei... Estou emocionada e encantada! Em uma palavra: Sublime! Muito obrigado de coração."
    },
    {
      name: currentLanguage === "EN" ? "I. Echinops" : currentLanguage === "FR" ? "I. Echinops" : "I. Echinops",
      text: currentLanguage === "EN" ? "Always available, good advice, and fair prices. Thank you very much, you are a true professional." : currentLanguage === "FR" ? "Toujours disponible, de bons conseils, et des prix justes. Merci beaucoup, vous êtes une vraie professionnelle." : "Sempre disponível, bons conselhos e preços justos. Muito obrigado, você é um verdadeiro profissional."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-powder">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center font-light mb-6 text-teal">
          {currentLanguage === "EN" ? "They trusted me" : currentLanguage === "FR" ? "Ils me font confiance" : "Eles confiam em mim"}
        </h2>
        
        {/* Logo centré */}
        <div className="flex justify-center mb-8">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPNA8pMbPEl33W1RMC1hl_PpBbO7yNJmAgYgRaDhA0qCD5RXi6DaIEnmFtWUynU6PoKDSiaVt16craMWlNsxFfSFqai5OvcXKZS091tlormhLdI0ATAhsGZW4C49_hqGV9Z27I8U8raRMfoOVDtKgH0=w134-h99-s-no-gm?authuser=0"
            alt="Logo Précieuse"
            className="w-16 h-12 object-contain"
             referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-powder/20 transition-colors"
              aria-label={currentLanguage === "EN" ? "Previous testimonial" : currentLanguage === "FR" ? "Témoignage précédent" : "Testemunho anterior"}
            >
              <ChevronLeft className="h-6 w-6 text-teal" />
            </button>

            <div className="flex-1 px-8">
              <div className="relative">
                <div className="text-center">
                  <p className="text-lg md:text-xl italic mb-8 text-teal">
                    {testimonials[currentIndex].text}
                  </p>
                  
                  <div className="text-center">
                    <p className="font-semibold text-rust">{testimonials[currentIndex].name}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-powder/20 transition-colors"
              aria-label={currentLanguage === "EN" ? "Next testimonial" : currentLanguage === "FR" ? "Témoignage suivant" : "Próximo testemunho"}
            >
              <ChevronRight className="h-6 w-6 text-teal" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentIndex === index ? "bg-rust" : "bg-teal/30"
                )}
                aria-label={currentLanguage === "EN" ? `Testimonial ${index + 1}` : currentLanguage === "FR" ? `Témoignage ${index + 1}` : `Testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}