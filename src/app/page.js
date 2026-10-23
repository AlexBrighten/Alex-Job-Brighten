import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0a0a0a]">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
