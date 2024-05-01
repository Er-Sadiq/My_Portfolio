import React, { useRef } from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App flex flex-col">
      <header>
        <NavBar
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToProjects={() => scrollToRef(projectRef)}
          scrollToServices={() => scrollToRef(servicesRef)}
          scrollToContact={() => scrollToRef(contactRef)}
        />
        <Hero />
      </header>
      <main>
        <About ref={aboutRef} />
        <Projects ref={projectRef} />
        <Services ref={servicesRef} />
      </main>
      <footer ref={contactRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
