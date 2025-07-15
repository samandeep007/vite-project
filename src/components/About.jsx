import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);

const About = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const bioRef = useRef();
  const imageRef = useRef();
  const scanLineRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    // Generate sci-fi grid background with dynamic lines
    const svg = gridRef.current;
    for (let i = 0; i < 20; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      if (i % 2 === 0) {
        // Horizontal lines
        line.setAttribute('x1', 0);
        line.setAttribute('y1', i * 40);
        line.setAttribute('x2', '100%');
        line.setAttribute('y2', i * 40);
      } else {
        // Vertical lines
        line.setAttribute('x1', i * 60);
        line.setAttribute('y1', 0);
        line.setAttribute('x2', i * 60);
        line.setAttribute('y2', '100%');
      }
      line.setAttribute('stroke', 'rgba(79,70,229,0.1)');
      line.setAttribute('stroke-width', 1);
      svg.appendChild(line);
    }
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Background gradient shift (dark, sci-fi tones)


    // Grid lines draw-in with pulse
    gsap.from(gridRef.current.children, {
      drawSVG: '0%',
      duration: 2,
      stagger: 0.05,
      ease: 'power2.inOut',
    });
    gsap.to(gridRef.current.children, {
      strokeOpacity: 0.3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      ease: 'sine.inOut',
    });

    // Title: Holographic assembly with scan effect
    const titleSplit = new SplitText(titleRef.current, { type: 'chars' });
    tl.from(titleSplit.chars, {
      opacity: 0,
      y: gsap.utils.random(-50, 50),
      rotationX: 90,
      duration: 1,
      stagger: 0.02,
      onStart: () => gsap.to(titleRef.current, { textShadow: '0 0 15px rgba(79,70,229,0.5)', duration: 1.5, repeat: -1, yoyo: true }),
    });

    // Bio: Line reveal with digital glitch and typing
    const bioSplit = new SplitText(bioRef.current, { type: 'lines, words' });
    tl.from(bioSplit.words, {
      opacity: 0,
      x: -20,
      duration: 0.8,
      stagger: 0.05,
      onComplete: () => gsap.to(bioRef.current, { textShadow: '1px 1px 2px rgba(255,0,0,0.2), -1px -1px 2px rgba(0,255,255,0.2)', duration: 0.1, repeat: 3, yoyo: true, onComplete: () => gsap.set(bioRef.current, { textShadow: 'none' }) }),
    }, '-=0.5');

    // Image: Sci-fi materialization with laser scan and hover warp
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.5,
      rotation: 360,
      duration: 1.5,
      ease: 'back.out(1.7)',
    });
    gsap.fromTo(scanLineRef.current, { y: '-100%' }, { y: '100%', duration: 1, delay: 0.5, ease: 'linear' });
    // Hover warp effect
    imageRef.current.addEventListener('mousemove', (e) => {
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(imageRef.current, { rotationY: x * 10, rotationX: -y * 10, duration: 0.3 });
    });
    imageRef.current.addEventListener('mouseleave', () => {
      gsap.to(imageRef.current, { rotationY: 0, rotationX: 0, duration: 0.3 });
    });

    // Parallax for content on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(bioRef.current, { y: self.progress * 50 });
        gsap.to(imageRef.current, { y: self.progress * -50 });
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-black py-32 min-h-screen overflow-hidden text-white">
      {/* Background SVG Grid for Sci-Fi Structure */}
      <svg ref={gridRef} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" />

      {/* Main Content Layout (Aceternity/Magic UI inspired: Asymmetric, glass cards) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image Card with Laser Scan */}
        <div ref={imageRef} className="relative w-80 h-80 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-[0_0_40px_rgba(79,70,229,0.2)]">
          <img
            src="https://via.placeholder.com/320?text=Samandeep" // Replace with your image URL
            alt="Samandeep Singh"
            className="w-full h-full object-cover"
          />
          <div ref={scanLineRef} className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-1" />
        </div>

        {/* Bio Card with Glassmorphism */}
        <div className="flex-1 p-8 bg-black/20 backdrop-blur-lg rounded-2xl border border-indigo-500/10 shadow-[0_0_40px_rgba(79,70,229,0.2)]">
          <h2 ref={titleRef} className="text-4xl font-bold mb-6">About Me</h2>
          <p ref={bioRef} className="text-lg leading-relaxed">
            Hey there! I'm Samandeep Singh, a passionate Full-Stack Developer with a diploma in Software Development from Bow Valley College (GPA: 3.83). I specialize in crafting scalable, user-centric applications using modern technologies like React, Node.js, and GSAP for stunning animations. From building real-time chat apps like Talkify to AI-driven platforms, my journey includes innovative projects that push boundaries. When not coding, I'm tutoring peers or exploring new tools like OpenAI. Let's connect and create something extraordinary!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;