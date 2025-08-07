import React from "react";

export const faqs = [
  {
    question: "How is SolBot different from other trading tools?",
    answer:
      "Unlike traditional dashboards, SolBot runs natively inside Discord. It's fast, intuitive, and doesn’t require switching tabs. Manage your portfolio, execute trades, and monitor prices—all from chat.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "SolBot is built for simplicity. Whether you're new to trading or a seasoned user, you’ll feel at home using commands like /balance or /buy SOL.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "All actions are logged and traceable. You can view historical commands and trade logs directly within the Discord server.",
  },
  {
    question: "Can I work offline?",
    answer:
      "SolBot requires an active internet connection via Discord, but you can queue trades or view cached data when connection resumes.",
  },
  {
    question: "How does SolBot handle collaboration?",
    answer:
      "SolBot supports multi-user teams. Wallet-linked roles ensure secure access and allow teammates to monitor and execute tasks collaboratively.",
  },
];

function Faq() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" inline-flex  py-1 px-3 border border-lime-400 text-lime-400  rounded-full mx-auto">
            FAQs
          </div>
        </div>
        <h2 className="text-5xl font-medium text-center mt-6">
          Questions? We've got <span className="text-lime-400"> answers</span>
        </h2>
        <div className="flex flex-col gap-6 mt-12">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium">{faq.question}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-lime-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="mt-6">
                <div className="text-white/50">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
