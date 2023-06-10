"use client";

import { Footer, Navbar } from "@/components";
import {
  Clients,
  Customers,
  Demo,
  Feature,
  Hero,
  Legacy,
  Readmore,
  Stats,
  Use,
} from "@/sections";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
  
    return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <section className="container mt-5 d-flex flex-column column-gap-5">
        <Hero />
        <Clients />
        <Feature />
        <Legacy />
        <Stats />
        <Use />
        <Customers />
        <Readmore />
      </section>
      <footer className="d-flex flex-column justify-content-center align-items-center w-100">
        <Demo />
        <Footer />
      </footer>
    </main>
  );
}
