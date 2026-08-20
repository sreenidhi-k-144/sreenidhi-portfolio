import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Learning } from "./sections/Learning";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Learning />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
