// src/App.jsx
import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
// import Showcases from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SkillsShowcase from './components/SkillsShowcase.jsx';
import About from './components/About.jsx';
import Certifications from './components/Certifications.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import HorizontalScrollSection from './components/HorizontalScrollSection.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import ProjectGallery from './components/ProjectGallery.jsx';


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About/>
<HorizontalScrollSection/>
      <SkillsShowcase/>
           <ProjectGallery/>
       <Education/>
      <Certifications/>
  <WorkExperience/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;