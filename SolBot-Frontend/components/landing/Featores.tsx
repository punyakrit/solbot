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
          />
          <Card
            title="Instant Commands"
            description="Use Discord-native commands to take action fast—no tab switching
                needed."
          />
        </div>

        <div className="">
          {features.map((feature) => (
            <div key={feature} className="px-2">
              <span className="flex border-white/30 border w-min text-nowrap px-3 py-2 rounded-full">
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
