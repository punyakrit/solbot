"use client";
import { useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef } from "react";
import { start } from "repl";
const text = `Most trading bots are built for power users and developers — packed with commands, clutter, and complexity.
We built SolBot for everyone. Whether you're just starting or swapping daily, it's clean, fast, and ridiculously easy to use.
No clutter. No learning curve.
`;

const words = text.split(" ");

function Introduction() {
  const scrollTraget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTraget,
    offset: ["start end", "end end"],
  });
  const [curentWord, setCurrentWord] = React.useState(0);

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
  }, [wordIndex]);
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <div className="sticky top-20 md:top-24 lg:top-32">
          <div className="flex justify-center">
            <div className=" inline-flex  py-1 px-3 border border-lime-400 text-lime-400  rounded-full mx-auto">
              Introducing SolBot
            </div>
          </div>
          <div className="mt-10 text-4xl md:text-5xl lg:text-6xl text-center font-medium mx-auto">
            <span>New to crypto? We’ve got you. </span>
            <span className="text-white/20">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`transition duration-500  ${
                    i < curentWord ? "text-white" : ""
                  }`}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-lime-400 block">
              {" "}
              Just seamless trading inside Discord.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTraget}></div>
      </div>
    </section>
  );
}

export default Introduction;
