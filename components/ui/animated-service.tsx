"use client";

import { motion } from 'framer-motion';
import { LucideCrop as LucideProps } from "lucide-react";
import { ComponentType } from "react";
import { Button } from '@/components/ui/button';

interface ServiceProps {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
  details: string[];
  index: number;
}

export function AnimatedService({
  icon: Icon,
  title,
  description,
  details,
  index
}: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-12 items-center mb-20 last:mb-0`}
    >
      <div className="w-full md:w-1/2">
        <div className="bg-[#faf6f0] p-8 rounded-lg">
          <Icon className="w-12 h-12 text-bronze mb-6" />
          <h3 className="text-2xl font-light mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3">
            {details.map((detail, i) => (
              <li key={i} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-bronze rounded-full mr-3"></span>
                {detail}
              </li>
            ))}
          </ul>
          <Button
            className="mt-8 bg-bronze text-white hover:bg-bronze/90"
          >
            En savoir plus
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[400px]">
        <div className="h-full rounded-lg overflow-hidden">
          <div className="w-full h-full bg-[#faf6f0]"></div>
        </div>
      </div>
    </motion.div>
  );
}