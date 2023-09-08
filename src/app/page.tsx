"use client";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Intro from "./sections/Intro";
import Footer from "./sections/Footer";

export default function Page() {
  //redirect to new url
  if (window.location.href === "https://lq85i.github.io/portfolio/") {
    window.location.href = "https://portfolio-lq85i.vercel.app/";
  }
  return (
    <main className="flex h-max overflow-x-hidden overflow-y-visible flex-col items-center xs:pt-24 pt-10">
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
