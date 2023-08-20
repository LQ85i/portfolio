"use client";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Intro from "./sections/Intro";

export default function Page() {
  return (
    <main className="flex min-h-[3800px] overflow-x-hidden flex-col items-center xs:py-24 py-10">
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
