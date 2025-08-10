"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Feature",
    link: "/feature",
  },
  {
    name: "Faq",
    link: "/faq",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
    <section className="py-4 lg:py-8 top-0 fixed w-full z-50">
      <div className="container mx-auto max-w-5xl">
        <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
          <div className="grid grid-cols-2 lg:grid-cols-3   p-2 items-center px-4 md:pr-2 ">
            <div className="text-2xl font-bold ">SolBot</div>
            <div className="hidden lg:flex justify-center items-center">
              <nav className="flex gap-8 font-medium">
                {navLinks.map((link) => (
                  <a href={link.link} key={link.link}>
                    {" "}
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex justify-end">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`md:hidden `}
                onClick={() => setIsOpen(!isOpen)}
              >
                <path
                  d="M20 7L4 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`origin-left transition ${
                    isOpen ? "rotate-45 -translate-y-1" : ""
                  }`}
                />
                <path
                  d="M20 12L4 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`transition ${isOpen ? "opacity-0" : ""}`}
                />
                <path
                  d="M20 17L4 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`origin-left transition ${
                    isOpen ? "-rotate-45 translate-y-1" : ""
                  }`}
                />
              </svg>
              <div className="space-x-4 hidden md:block">
                <Button variant="secondary">Log In</Button>
                <Button variant="primary">Sign Up</Button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className=" overflow-hidden"
              >
                <div className="flex flex-col items-center gap-4 py-4">
                  {navLinks.map((link) => (
                    <a href={link.link} key={link.link} className="">
                      {link.name}
                    </a>
                  ))}
                  <Button variant="secondary">Login</Button>
                  <Button variant="primary">Sign Up</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
    <div className="pb-20 md:pb-24 lg:pb-32 xl:pb-40"></div>

    </>
  );
}

export default Navbar;
