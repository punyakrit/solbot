"use client";
import React from "react";
import Button from "../button/Button";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="py-1 px-3 inline-flex bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ⚡ Tap. Trade. Done.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 mx-auto max-w-5xl"
        >
          Crypto trading, simplified for everyone
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center text-xl text-white/50 mt-8 mx-auto max-w-3xl"
        >
          SolBot makes token trading effortless. From wallet creation to
          real-time swaps, everything happens fast — right from Discord.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <form className=" flex border border-white/15 rounded-full p-2 mt-8  justify-between max-w-lg mx-auto">
            <input
              className="bg-transparent px-4 md:flex-1"
              type="email"
              placeholder="Enter your email"
            ></input>
            <Button
              variant="primary"
              type="submit"
              className="whitespace-normal"
            >
              Join the Beta
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
