import React from "react";

const footerLinks = [
  { name: "Contact", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

function Footer() {
  return (
    <section className="py-16 md:px-10">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-6">
          <div>
            <h1 className="text-3xl font-semibold">SolBot</h1>
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/50 text-sm mx-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
