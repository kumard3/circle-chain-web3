import React from "react";

export default function Header() {
  return (
    <div className="flex items-center relative container mx-auto py-10 justify-around">
      <div className="absolute inset-0 bg-[#73FDAA] w-32 h-32 rounded-full blur-2xl "></div>
      <div className="max-w-xl relative">
        <h1 className="text-6xl font-bold ">
          Save, Buy and Sell Your blockchain asset
        </h1>
        <p className="text-3xl py-10">
          The easy to manage and trade your cryptocurency asset
        </p>

        <div>
          <button className="bg-[#BBFFFF] font-bold mr-3 text-black px-10 py-3 rounded-lg">
            Connect Wallet
          </button>
          <button className="text-black mx-3 px-10 py-3 rounded-lg font-bold bg-white">
            Start Trading
          </button>
        </div>
      </div>

      <div className="relative">
        <img src="trading.png" alt="alt" />
        <div className="absolute inset-x-1/2 bg-[#73FDAA] -bottom-5 w-32 h-32 rounded-full blur-2xl "></div>
      </div>
    </div>
  );
}
