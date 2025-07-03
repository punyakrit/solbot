import React from "react";
import Button from "../button/Button";

function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="py-1 px-3 inline-flex bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ⚡ Tap. Trade. Done.
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 mx-auto max-w-5xl">
          Crypto trading, simplified for everyone
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 mx-auto max-w-3xl">
          SolBot makes token trading effortless. From wallet creation to
          real-time swaps, everything happens fast — right from Discord.
        </p>
        <div className="mx-auto flex justify-center mt-10">
          <Button variant="primary">
            <a href="https://discord.gg/FB5g83uBzb">
              Join Discord Server to Check out Bot !!
            </a>
          </Button>
        </div>

        <form className=" flex border border-white/15 rounded-full p-2 mt-8  justify-between max-w-lg mx-auto">
          <input
            className="bg-transparent px-4 md:flex-1"
            type="email"
            placeholder="Enter your email"
          ></input>
          <Button variant="primary" type="submit" className="whitespace-normal">
            Join the Beta
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
