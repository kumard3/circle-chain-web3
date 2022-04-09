import React from "react";

export default function InfoSection() {
  return (
    <div className="relative py-10 min-h-screen">
      <div className="absolute inset-x-1/4 top-0 bg-[#73FDAA] w-32 h-32 rounded-full blur-2xl "></div>

      <section className="container max-w-2xl mx-auto text-center relative top-10">
        <h1 className="text-4xl font-bold">
          Global Decentralize currency based on blockchain technology
        </h1>
        <p className="text-[#73FDAA]">
          Web3 is the latest efficient technology
        </p>
      </section>
      <div className="absolute inset-y-1/3 inset-x-20 bg-[#73FDAA] w-32 h-32 rounded-full blur-2xl "></div>

      <section className="flex py-20 container mx-auto relative">
        <div>
          <img src="Illustration1.png" alt="Illustration" className="" />
        </div>
        <div>
          <div className="my-10 text-right bg-gradient-to-r from-[#c4c4c40d] to-[#73fdaae7] min-w-80 min-h-24 py-5 px-20 rounded-xl flex justify-end items-end flex-col">
            <h1 className="text-2xl font-bold">Access Token Market</h1>
            <p className="text-md max-w-xs text-black">
              Buy and sell token anytime and anywhere
            </p>
          </div>{" "}
          <div className="my-10 text-right bg-gradient-to-r from-[#c4c4c40d] to-[#73fdaae7] min-w-80 min-h-24 py-5 px-20 rounded-xl flex justify-end items-end flex-col">
            <h1 className="text-2xl font-bold">Access Token Market</h1>
            <p className="text-md max-w-xs text-black">
              Buy and sell token anytime and anywhere
            </p>
          </div>{" "}
          <div className="my-10 text-right bg-gradient-to-r from-[#c4c4c40d] to-[#73fdaae7] min-w-80 min-h-24 py-5 px-20 rounded-xl flex justify-end items-end flex-col">
            <h1 className="text-2xl font-bold">Access Token Market</h1>
            <p className="text-md max-w-xs text-black">
              Buy and sell token anytime and anywhere
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
