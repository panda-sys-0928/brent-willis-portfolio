import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkflowLoop from "./components/WorkflowLoop";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Principles from "./components/Principles";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <WorkflowLoop />
        <Work />
        <Projects />
        <Experience />
        <Principles />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
