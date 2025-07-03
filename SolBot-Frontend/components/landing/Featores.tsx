import React from "react";

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
        <div className="flex flex-col">
          <div>
            <div>
              <h3>Wallet-Linked Accounts</h3>
              <p>Manage portfolios directly on Discord</p>
            </div>
          </div>
          <div>
            <div>
              <h3>Real-Time Swaps & Prices</h3>
              <p>
                Simulate or execute trades instantly with accurate, on-chain
                data.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>Instant Commands</h3>
              <p>
                Use Discord-native commands to take action fast—no tab switching
                needed.
              </p>
            </div>
          </div>
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

function Card() {
  return (
    <div>
      <div>
        <h3>Wallet-Linked Accounts</h3>
        <p>Manage portfolios directly on Discord</p>
      </div>
    </div>
  );
}

export default Features;
