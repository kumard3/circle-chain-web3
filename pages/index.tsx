/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Header from "../components/Header";
import InfoSection from "../components/infoSection";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen py-10">
      <Nav />
      <Header />
      <InfoSection />
    </div>
  );
}
