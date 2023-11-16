"use client";
import Header from "@/components/Header/Header";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import HomeSection from "@/components/Sections/Home";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";

export default function Home() {
  return (
    <main className="font-mono">
      <Head>
        <title>asdsa</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap"
        />
      </Head>
      <Header />
      <div className="relative">
        <div className="home-wrapper"></div>
        <HomeSection />
        <About />
        <Skills />
      </div>
    </main>
  );
}
