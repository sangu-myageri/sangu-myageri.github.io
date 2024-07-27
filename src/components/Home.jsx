import React from 'react';
import HeroBanner from './HeroBanner';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <HeroBanner />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
};

export default Home;
