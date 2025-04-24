import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Logo from "./components/Logo";
import WhatIDo from "./components/WhatIDo";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Logo />
        <WhatIDo />
        <Services />
      </main>
      <Footer />
    </>
  );
}
