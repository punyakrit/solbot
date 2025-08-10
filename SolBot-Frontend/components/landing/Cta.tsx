
"use client"
import { motion } from "motion/react";
import React from "react";

function Cta() {
  return (
    <section className="py-24  text-center">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          initial={{ x: "-50%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex flex-none gap-16 text-7xl md:text-8xl font-medium">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Cta;
