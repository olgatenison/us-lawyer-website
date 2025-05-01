import Image from "next/image";
import Header from "./components/Header";

import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Bento from "./components/Bento";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bento />
        <Services />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
