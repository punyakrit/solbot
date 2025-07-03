import React from "react";
const text = `Most trading bots are built for power users and developers — packed with commands, clutter, and complexity.
We built SolBot for everyone. Whether you're just starting or swapping daily, it's clean, fast, and ridiculously easy to use.
No clutter. No learning curve.
`;
function Introduction() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" inline-flex  py-1 px-3 border border-lime-400 text-lime-400  rounded-full mx-auto">
            Introducing SolBot
          </div>
        </div>
        <div className="mt-10 text-4xl md:text-5xl lg:text-6xl text-center font-medium mx-auto">
          <span>New to crypto? We’ve got you. </span>
          <span className="text-white/20">{text}</span>
          <span className="text-lime-400 block"> Just seamless trading inside Discord.</span>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
