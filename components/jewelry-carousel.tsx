"use client";

import { motion } from 'framer-motion';

export function JewelryCarousel() {
  return (
    <section className="h-[70vh] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/pw/AP1GczNgh1wz9A1draOMsThe0athPaZyITZIl-F2KF5clWzAxEI8z17xByvdx1n7L7OOPkj7rAYeEL62HJ9HK-wgv02gMck-8xB82b6jeoI1NjcSzLbnTWoDySm99BOTCdnahjxnMmMOcu79PhhRppW7eJI=w2665-h1789-s-no-gm?authuser=0")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-4 text-white">
              Alliance Diamants
            </h1>
            <p className="text-lg md:text-xl text-white">
              Des créations d'exception serties main
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}