import Navbar from "./components/layouts/Navbar";

// import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Experience />

        <Technologies />

        <Projects />

        <Contact />

      </main>
    </>
  );
}

export default App;