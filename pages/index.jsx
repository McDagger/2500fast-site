import React from "react";

const daysSinceLaunch = () => {
  const launchDate = new Date("2025-05-25T00:00:00-07:00");
  const today = new Date();
  const diffTime = today - launchDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.min(diffDays, 6);
};

const getPrice = (day) => {
  return day >= 6 ? 9 : 49 - day * 5;
};

const getPayPalLink = (price) => {
  return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=spmack7@gmail.com&item_name=2500Fast+Blueprint&amount=${price}&currency_code=USD`;
};

export default function Home() {
  const day = daysSinceLaunch();
  const price = getPrice(day);
  const link = getPayPalLink(price);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center space-y-8">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          They laughed at me, but I made $2,500 in 7 days
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          This is a real-time challenge. I’m documenting every step — and giving you the blueprint to follow.
        </p>

        <div className="bg-white text-black px-6 py-4 rounded-2xl shadow-xl mb-4">
          <p className="text-lg font-bold">Day {day + 1} Price: ${price}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Buy Now for ${price}
        </a>

        <p className="mt-4 text-gray-400">Price drops $5 each day until Day 7.</p>

        <div className="text-left mt-12 space-y-6">
          <h2 className="text-2xl font-bold">What You’ll Get:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
            <li>The real $2,500-in-7-days blueprint I’m using right now</li>
            <li>Step-by-step breakdown of each move I make</li>
            <li>Daily updates by email</li>
            <li>PDF downloads to follow along</li>
            <li>Zero fluff. Zero fake screenshots. 100% reality.</li>
          </ul>

          <div className="mt-10 bg-gray-800 p-6 rounded-xl shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-2">Want the Blueprint but Can't Pay?</h2>
            <p className="text-gray-300 mb-4">Enter your email and I’ll send you the 7-Day Blueprint anyway. No pressure, no spam.</p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold transition"
              >
                Send Me the Blueprint
              </button>
            </form>
          </div>

          <h2 className="text-2xl font-bold mt-10">What People Are Saying:</h2>
          <blockquote className="italic text-gray-400 border-l-4 border-yellow-500 pl-4">
            “Finally, something that’s real. No guru vibes — just truth.”
          </blockquote>
          <blockquote className="italic text-gray-400 border-l-4 border-yellow-500 pl-4">
            “This helped me believe I could start something without money.”
          </blockquote>

          <h2 className="text-2xl font-bold mt-10">FAQ</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
            <li><strong>Do I need money to start?</strong> — No. I started with nothing.</li>
            <li><strong>Is this a course?</strong> — Nope. It’s a real journey, shared as it happens.</li>
            <li><strong>What happens after Day 7?</strong> — You’ll know exactly what worked. And you can copy it all.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
