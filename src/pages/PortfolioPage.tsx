import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Career } from '../components/Career';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollTopButton } from '../components/ScrollTopButton';

export function PortfolioPage(): React.ReactElement {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Career />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
