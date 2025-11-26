import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { DataBackground } from "./components/DataBackground";

export default function App() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen relative">
      <DataBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
