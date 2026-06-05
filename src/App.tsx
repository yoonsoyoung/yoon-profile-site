import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollTopButton } from './components/ScrollTopButton';
import './index.css';

import React from 'react';

function App(): React.ReactElement {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
