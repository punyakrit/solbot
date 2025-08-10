"use client"
import React from "react";
import alchemy from "@/public/alc.jpeg";
import helius from "@/public/hel.jpeg";
import discord from "@/public/dis.png";
import jupiter from "@/public/jup.png";
import solana from "@/public/sol.png";
import superTeam from "@/public/super.jpg";
import Image from "next/image";
import {motion } from "motion/react";
const Logos = [
  {
    name: "Solana",
    image: solana,
  },
  {
    name: "Super Team",
    image: superTeam,
  },
  {
    name: "Jupiter",
    image: jupiter,
  },
  {
    name: "Discord",
    image: discord,
  },
  {
    name: "Helius",
    image: helius,
  },
  {
    name: "Alchemy",
    image: alchemy,
  },
];

function LogoTicker() {
  return (
    <section className="py-20 overflow-x-clip">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl  text-white/80 font-medium">
          Powered by the Solana ecosystem
        </h2>
        <p className="text-center text-lg font-medium text-white/50 mt-8">
          Built using the best of Solana — fast, composable, and battle-tested
          tools.
        </p>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration:30,
              repeat: Infinity,
              ease: "linear",
            }}
          className="flex flex-none gap-24">
            {Array.from({ length: 3 }).map((_, index) => (
              <React.Fragment key={index}>
                {Logos.map((logo) => (
                  <div className="flex items-center gap-2 pr-24">
                    <Image
                      src={logo.image}
                      key={logo.name}
                      alt={logo.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    ></Image>
                    <h3 className="text-white text-lg font-medium whitespace-nowrap">
                      {logo.name}
                    </h3>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LogoTicker;
