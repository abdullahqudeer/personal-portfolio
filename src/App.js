import { React, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  // Create refs for each menu item
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function that scrolls to a specific ref
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="App">
      <Navbar
        onLinkClick={scrollToSection}
        refs={{
          home: homeRef,
          about: aboutRef,
          services: servicesRef,
          skills: skillsRef,
          experience: experienceRef,
          contact: contactRef,
        }}
      />

      <section ref={homeRef} id="home">
        <Home />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={servicesRef} id="services">
        <Services />
      </section>
    </div>
  );
}

export default App;
