import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);

const Education = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const edu1Ref = useRef();
  const edu2Ref = useRef();
  const gridRef = useRef();

  useEffect(() => {
    // Generate new background design: Diagonal matrix lines for a modern sci-fi feel
    const svg = gridRef.current;
    for (let i = 0; i < 15; i++) {
      // Diagonal lines from top-left to bottom-right
      const dLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      dLine1.setAttribute('d', `M${i * 80},0 Q${i * 80 + gsap.utils.random(-30, 30)},600 ${i * 80 + 600},800`);
      dLine1.setAttribute('stroke', 'rgba(17,24,39,0.8)');
      dLine1.setAttribute('stroke-width', 1);
      svg.appendChild(dLine1);

      // Diagonal lines from top-right to bottom-left
      const dLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      dLine2.setAttribute('d', `M${1200 - i * 80},0 Q${1200 - i * 80 + gsap.utils.random(-30, 30)},600 ${1200 - i * 80 - 600},800`);
      dLine2.setAttribute('stroke', 'rgba(17,24,39,0.8)');
      dLine2.setAttribute('stroke-width', 1);
      svg.appendChild(dLine2);
    }
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Background gradient shift (matching Hero/About darker tones)
 

    // Grid lines draw-in with professional fade and depth pulse
    gsap.from(gridRef.current.children, {
      drawSVG: '0%',
      duration: 2,
      stagger: 0.05,
      ease: 'power2.inOut',
    });
    gsap.to(gridRef.current.children, {
      strokeOpacity: 0.4,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      ease: 'sine.inOut',
    });

    // Title: Professional holographic reveal with depth
    const titleSplit = new SplitText(titleRef.current, { type: 'chars' });
    tl.from(titleSplit.chars, {
      opacity: 0,
      z: -200,
      rotationX: 90,
      duration: 1.5,
      stagger: 0.03,
      scrollTrigger: { trigger: titleRef.current, start: 'top 90%' },
    });
    gsap.to(titleRef.current, {
      textShadow: '0 0 8px rgba(165,180,252,0.2)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Education Card 1: 3D fold-in with shadow depth
    gsap.from(edu1Ref.current, {
      opacity: 0,
      rotationY: 90,
      z: -100,
      duration: 1.2,
      ease: 'back.out(1.5)',
      scrollTrigger: { trigger: edu1Ref.current, start: 'top 85%' },
    });
    gsap.to(edu1Ref.current, {
      boxShadow: '0 0 20px rgba(0,0,0,0.8)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Education Card 2: Similar with offset for sequence
    gsap.from(edu2Ref.current, {
      opacity: 0,
      rotationY: -90,
      z: -100,
      duration: 1.2,
      delay: 0.3,
      ease: 'back.out(1.5)',
      scrollTrigger: { trigger: edu2Ref.current, start: 'top 85%' },
    });
    gsap.to(edu2Ref.current, {
      boxShadow: '0 0 20px rgba(0,0,0,0.8)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5,
    });

    // Hover 3D tilt for cards
    [edu1Ref.current, edu2Ref.current].forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotationY: x * 20, rotationX: -y * 20, duration: 0.3, transformPerspective: 800 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.3 });
      });
    });

    // Parallax for content on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(edu1Ref.current, { y: self.progress * 30 });
        gsap.to(edu2Ref.current, { y: self.progress * -30 });
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-black min-h-screen overflow-hidden text-white">
      {/* Background SVG for Vector Grid */}
      <svg ref={gridRef} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {/* Dynamic lines added in useEffect */}
      </svg>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl font-bold mb-12 text-center">Education</h2>
        
        {/* Education Card 1 */}
        <div ref={edu1Ref} className="relative p-8 bg-black/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-8 transform-style-preserve-3d">
          <h3 className="text-2xl font-semibold mb-2">Diploma in Software Development</h3>
          <p className="text-gray-400">Bow Valley College, Jan 2022 - May 2023</p>
          <p className="text-gray-400">GPA: 3.83</p>
        </div>

        {/* Education Card 2 */}
        <div ref={edu2Ref} className="relative p-8 bg-black/40 backdrop-blur-lg rounded-2xl border border-gray-800/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform-style-preserve-3d">
          <h3 className="text-2xl font-semibold mb-2">Vocational Certificate in Information Technology</h3>
          <p className="text-gray-400">Skill India Initiative by Government of India, Apr 2018 - May 2019</p>
        </div>
      </div>
    </section>
  );
};

export default Education;