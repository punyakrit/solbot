import { Plus, User, Wallet } from "lucide-react";
import React, { Children } from "react";

const features = [
  "Encrypted Key Storage",
  "Price Alerts via DMs",
  "Auto Wallet Generation",
  "Trade Simulation Mode",
  "Multi-token Portfolio View",
  "Secure Confirmations",
  "Solana Mainnet Support",
];

function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" inline-flex  py-1 px-3 border border-lime-400 text-lime-400  rounded-full mx-auto">
            Features
          </div>
        </div>
        <h2 className="text-5xl font-medium text-center py-8">
          Where trading meets <span className="text-lime-400"> simplicity</span>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8">
          <Card
            title="Wallet-Linked Accounts"
            description="Manage portfolios directly on Discord"
          >
            <div className="aspect-video">
              <div className="flex justify-center items-center h-full space-x-3">
                <Wallet className="w-20 h-20 text-lime-400 border border-white p-4 rounded-full" />
                <Plus className="" />
                <User className="w-20 h-20 text-lime-400 border border-white p-4 rounded-full" />
              </div>
            </div>
          </Card>
          <Card
            title="Real-Time Swaps & Prices"
            description="Simulate or execute trades instantly with accurate, on-chain
                data."
          >
            <div className="aspect-video flex justify-center items-center">
              <p className="text-4xl font-extrabold text-white/20 text-center">
                Instant{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                  Token Swaps
                </span>{" "}
                with On-Chain Data
              </p>
            </div>
          </Card>
          <Card
            title="Instant Commands"
            description="Use Discord-native commands to take action fast—no tab switching
                needed."
          >
            <div className="aspect-video ">
              <div className="relative">
                <div className="bg-neutral-900 border border-white/20 p-4 font-bold text-2xl rounded-4xl absolute top-0 left-0">
                  <span>/buy</span>
                  <span> Sol</span>
                  <span> 10</span>{" "}
                </div>
                <div className="bg-neutral-900 border border-white/20 p-4 font-bold text-2xl rounded-4xl absolute top-30 right-0">
                  <span>/price</span>
                  <span> Solana</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
  {features.map((feature) => (
    <div key={feature}>
      <span className="border border-white/30 bg-neutral-900 inline-flex text-nowrap px-3 py-2 rounded-2xl text-sm">
        {feature}
      </span>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-lg text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Features;
