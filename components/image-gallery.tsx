"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';


export function ImageGallery(props:any) {
  const { images } = props;

  
const products = [
  {
    id: 1,
    name: "Eugénie",
    image: images?.image4
  },
  {
    id: 2,
    name: "Aurore",
    image: images?.image5
  },
  {
    id: 3,
    name: "Joséphine",
    image: images?.image6
  },
  {
    id: 4,
    name: "Thelma",
    image: images?.image7
  },
  {
    id: 5,
    name: "Louise",
    image: images?.image8
  }
];
  return (
    <section className="w-full">
      {/* Desktop Gallery */}
      <div className="hidden md:flex">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-1/5 h-[600px] relative group overflow-hidden"
          >
            <Link
              href={`/joaillerie#product-${product.id}`}
              className="w-full h-full block"
            >
              <div className="relative h-full">
                <img
                 referrerPolicy="no-referrer"
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    index > 0 ? 'scale-80' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-light">{product.name}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Gallery - Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex gap-4 p-4" style={{ width: 'max-content' }}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-64 h-80 relative group overflow-hidden rounded-lg flex-shrink-0"
            >
              <Link
                href={`/joaillerie#product-${product.id}`}
                className="w-full h-full block"
              >
                <div className="relative h-full">
                  <img
                   referrerPolicy="no-referrer"
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-light text-center px-4">{product.name}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}