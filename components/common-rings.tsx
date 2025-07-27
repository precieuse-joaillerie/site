"use client";

import { motion } from 'framer-motion';

const commonRings = [
  {
    name: "Alliance Classique",
    description: "Alliance en or jaune 18 carats, un intemporel qui se transmet de génération en génération.",
    details: [
      "Or jaune 18 carats",
      "Finition polie miroir",
      "Confort optimal"
    ],
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
  },
  {
    name: "Alliance Contemporaine",
    description: "Une alliance moderne en or jaune 18 carats, au design épuré et élégant.",
    details: [
      "Or jaune 18 carats",
      "Design contemporain",
      "Finition satinée"
    ],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80"
  },
  {
    name: "Alliance Prestige",
    description: "L'excellence de l'or jaune 18 carats dans une création sophistiquée.",
    details: [
      "Or jaune 18 carats",
      "Finition haute joaillerie",
      "Éclat durable"
    ],
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80"
  }
];

export function CommonRings() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-light mb-16">
          Nos Créations Les Plus Demandées
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {commonRings.map((ring, index) => (
            <motion.div
              key={ring.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#faf6f0] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-square relative">
                <img
                  src={ring.image}
                  alt={ring.name}
                  className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light mb-3">{ring.name}</h3>
                <p className="text-gray-600 mb-4">{ring.description}</p>
                <ul className="space-y-2">
                  {ring.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-bronze rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}