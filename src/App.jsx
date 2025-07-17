import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
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
  const cursorCoreRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorHaloRef = useRef(null);

  useEffect(() => {
    if (!cursorCoreRef.current || !cursorRingRef.current || !cursorHaloRef.current) return;

    const cursorCore = cursorCoreRef.current;
    const cursorRing = cursorRingRef.current;
    const cursorHalo = cursorHaloRef.current;

    gsap.set([cursorCore, cursorRing, cursorHalo], { xPercent: -50, yPercent: -50, transformOrigin: 'center' });

    const quickX = gsap.quickTo([cursorCore, cursorRing, cursorHalo], "x", {duration: 0.1, ease: "power3.out"});
    const quickY = gsap.quickTo([cursorCore, cursorRing, cursorHalo], "y", {duration: 0.1, ease: "power3.out"});

    const moveCursor = (e) => {
      quickX(e.clientX);
      quickY(e.clientY);
    };

    // Hover effects - expand ring and halo, pulse core
    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer, input, textarea, select');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursorCore, { scale: 1.2, duration: 0.3, backgroundColor: 'rgba(99, 102, 241, 1)' });
        gsap.to(cursorRing, { scale: 1.8, opacity: 0.8, duration: 0.3 });
        gsap.to(cursorHalo, { scale: 2.5, opacity: 0.3, duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursorCore, { scale: 1, duration: 0.3, backgroundColor: 'rgba(99, 102, 241, 0.7)' });
        gsap.to(cursorRing, { scale: 1, opacity: 0.5, duration: 0.3 });
        gsap.to(cursorHalo, { scale: 1, opacity: 0.15, duration: 0.3 });
      });
    });

    // Click animation - contract core, expand ring and halo briefly
    document.addEventListener('click', () => {
      gsap.to(cursorCore, { scale: 0.8, duration: 0.15, yoyo: true, repeat: 1 });
      gsap.to(cursorRing, { scale: 2.2, opacity: 1, duration: 0.4, yoyo: true, repeat: 1 });
      gsap.to(cursorHalo, { scale: 3, opacity: 0.4, duration: 0.4, yoyo: true, repeat: 1 });
    });

    // Continuous animations for innovation
    // Pulsing core
    gsap.to(cursorCore, { scale: 1.05, duration: 0.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    // Rotating ring
    gsap.to(cursorRing, { rotation: 360, duration: 15, repeat: -1, ease: "none" });
    // Gentle halo breathe
    gsap.to(cursorHalo, { scale: 1.1, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });

    // Follow mouse
    window.addEventListener('mousemove', moveCursor);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* Custom Cursor */}
      <div ref={cursorCoreRef} className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] bg-gradient-to-br from-indigo-600 to-purple-600 border border-white/30 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
      <div ref={cursorRingRef} className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] opacity-0.5 border-2 border-indigo-400/70 shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
      <div ref={cursorHaloRef} className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-[9997] opacity-0.15 bg-radial-gradient from-purple-500/20 to-transparent filter blur" />
      <style>{`
        body, body * {
          cursor: none !important;
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <HorizontalScrollSection />
      <SkillsShowcase />
      <ProjectGallery />
      <Education />
      <Certifications />
      <WorkExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;