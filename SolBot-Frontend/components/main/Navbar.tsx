import React from "react";
import Button from "../button/Button";

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
  return (
    <section className="py-4 lg:py-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 items-center px-4 md:pr-2">
          <div className="text-2xl font-bold ">SolBot</div>
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex gap-8 font-medium">
              {navLinks.map((link) => (
                  <a href={link.link} key={link.link}> {link.name}</a>
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
              className="md:hidden"
            >
              <path
                d="M20 7L4 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 12L4 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 17L4 17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="space-x-4 hidden md:block">
              <Button variant="secondary">Log In</Button>
              <Button variant="primary">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
