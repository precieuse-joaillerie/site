"use client";

import { motion } from 'framer-motion';
import { LucideCrop as LucideProps } from "lucide-react";
import { ComponentType } from "react";

interface AdditionalServiceProps {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
}

export function AnimatedAdditionalService({
  icon: Icon,
  title,
  description
}: AdditionalServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#faf6f0] p-8 rounded-lg text-center"
    >
      <Icon className="w-12 h-12 text-bronze mx-auto mb-4" />
      <h3 className="text-xl font-light mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}