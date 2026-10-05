import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import CaseStudies from "./components/CaseStudies";
import ProductTeardowns from "./components/ProductTeardowns";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <CaseStudies />
        <ProductTeardowns />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
