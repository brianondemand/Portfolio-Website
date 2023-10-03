import Intro from "../components/Intro";
import About from "../components/About";
import Header from "../components/Header";
import Skills from "../components/Skill";
import { useEffect } from "react";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector("div.skills-container"));
    document.querySelectorAll("section").forEach((elem) => {
      observer.observe(elem);
    });
  }, []);
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
