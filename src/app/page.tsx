import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main>
      <Background />
      <Header />
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <About />
      <Awards />
      <Contact />
    </main>
  );
}
