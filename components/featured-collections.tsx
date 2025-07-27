"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    name: "Alliances Diamants",
    description: "Alliances en or serties de diamants",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Solitaires",
    description: "Bagues de fiançailles en or et diamants",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Créations Uniques",
    description: "Bagues en or serties sur mesure",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80"
  }
];

export function FeaturedCollections() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center font-light mb-4">
          Nos Collections
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Découvrez nos bagues en or serties de diamants, où chaque création incarne 
          l'excellence de la haute joaillerie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              className="relative group cursor-pointer"
              onHoverStart={() => setHoveredId(collection.id)}
              onHoverEnd={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                 referrerPolicy="no-referrer"
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-light mb-2">{collection.name}</h3>
                  <p className="text-sm mb-4">{collection.description}</p>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    Découvrir
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}