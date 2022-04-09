import React from "react";

export default function Nav() {
  return (
    <div className="bg-black w-full text-white flex items-center justify-around ">
      <div className="flex items-center ">
        <img src="circlechain-logo.png" alt="alt" />
        <h1 className="text-4xl">Circlechain</h1>
      </div>
      <div className="flex w-1/5 items-center justify-between ">
        <h1>How it works</h1>
        <h1>Blog</h1>
        <h1>Support</h1>
      </div>
      <div className="flex w-1/5 justify-between">
        <img src="logo1.png" alt="alt" width="30" height="30" />
        <img src="logo2.png" alt="alt" width="30" height="30" />
        <img src="logo3.png" alt="alt" width="30" height="30" />
        <img src="logo4.png" alt="alt" width="30" height="30" />
      </div>
    </div>
  );
}
