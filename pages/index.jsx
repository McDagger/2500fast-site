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
  return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=2500Fast+Blueprint&amount=${price}&currency_code=USD`;
};

export default function Home() {
  const day = daysSinceLaunch();
  const price = getPrice(day);
  const link = getPayPalLink(price);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Make $2,500 in 7 Days</h1>
      <p className="text-xl md:text-2xl max-w-xl mb-8">
        The Real Blueprint that helped me survive when I had nothing. It starts at $49, drops $5 a day, and stops at $9. No matter what, it's yours.
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
      <p className="mt-6 text-sm text-gray-400">
        This price updates every 24 hours. Come back tomorrow if you're not ready today.
      </p>
    </div>
  );
}