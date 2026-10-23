import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import LifeOutsideWork from "./components/LifeOutsideWork";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0b0c10]">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <LifeOutsideWork />
        <Contact />
      </main>
    </div>
  );
}
