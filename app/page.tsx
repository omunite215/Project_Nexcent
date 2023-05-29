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

export default function Home() {
  return (
    <main>
      <nav className="py-3">
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
      <footer className="d-flex flex-column justify-content-center">
        <Demo />
        <Footer />
      </footer>
    </main>
  );
}
