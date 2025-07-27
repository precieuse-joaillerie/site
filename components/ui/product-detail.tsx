"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './button';

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  features: string[];
  image: string;
}

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
        style={{ marginTop: '1cm' }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
                 referrerPolicy="no-referrer"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-light mb-2">{product.name}</h2>
              <p className="text-xl text-bronze mb-4">{product.price} €</p>
              <p className="text-gray-600 mb-6">{product.longDescription}</p>
              
              <div className="space-y-2">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-bronze" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}