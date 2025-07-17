import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const ctaRef = useRef();
  const githubRef = useRef();
  const shapesRef = useRef([]);

  useEffect(() => {
    // Mouse interaction for shapes
    const handleMouseMove = (e) => {
      shapesRef.current.forEach((shape, index) => {
        const rect = shape.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth * 50;
        const dy = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight * 50;
        gsap.to(shape, {
          x: -dx * (index + 1) * 0.5,
          y: -dy * (index + 1) * 0.5,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate abstract shapes with "neural network" connection effect
    shapesRef.current.forEach((shape, index) => {
      tl.from(shape, {
        opacity: 0,
        scale: 0,
        rotation: gsap.utils.random(-180, 180),
        duration: 1.5,
        delay: index * 0.3,
      }, 0);
      gsap.to(shape, {
        scale: () => gsap.utils.random(0.8, 1.2),
        rotation: '+=30',
        duration: 2 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Title animation: chars assemble like code compiling
    const titleSplit = new SplitText(titleRef.current, { type: 'chars, words' });
    tl.from(titleSplit.chars, {
      opacity: 0,
      y: gsap.utils.random(-50, 50),
      rotationX: 90,
      skewX: 20,
      duration: 0.8,
      stagger: 0.02,
    }, '-=1');

    // Subtitle with typing effect
    const subtitleSplit = new SplitText(subtitleRef.current, { type: 'chars' });
    tl.from(subtitleSplit.chars, {
      opacity: 0,
      duration: 0.05,
      stagger: 0.03,
    }, '-=0.5');

    // CTA and GitHub buttons with energy pulse effect
    [ctaRef.current, githubRef.current].forEach((button) => {
      tl.from(button, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        onStart: () => {
          gsap.to(button, {
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        },
      }, '-=0.5');
      // Hover effect for both buttons
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          boxShadow: '0 0 30px rgba(99, 102, 241, 1)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    // Background gradient shift
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #000000, #010101, #020202)',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center snap-start overflow-hidden"
    >
      {/* Abstract Shapes */}
      <svg ref={(el) => (shapesRef.current[0] = el)} className="absolute top-20 left-10 w-32 h-32 opacity-50 max-md:top-10 max-md:left-5 max-md:w-16 max-md:h-16" viewBox="0 0 200 200" style={{ transform: 'translateZ(0)' }}>
        <path fill="#6366f1" d="M48.2,-62.8C62.7,-52.3,74.8,-36.3,82.2,-18.6C89.6,-0.9,92.3,18.5,85.3,34.3C78.3,50.1,61.6,62.3,45.6,69.9C29.6,77.5,14.8,80.5,-1.3,82.2C-17.4,83.9,-34.8,84.3,-49.1,77C-63.4,69.7,-74.6,54.7,-81.4,37.7C-88.2,20.7,-90.6,1.7,-85.9,-15.3C-81.2,-32.3,-69.4,-47.3,-55,-58.3C-40.6,-69.3,-23.3,-76.3,-4.8,-72.9C13.7,-69.5,27.5,-55.7,48.2,-62.8Z" transform="translate(100 100)" />
      </svg>
      <svg ref={(el) => (shapesRef.current[1] = el)} className="absolute bottom-40 right-20 w-40 h-40 opacity-40 max-md:bottom-20 max-md:right-5 max-md:w-20 max-md:h-20" viewBox="0 0 200 200" style={{ transform: 'translateZ(0)' }}>
        <path fill="#8b5cf6" d="M44.7,-58.3C58.9,-50.8,71.9,-38.9,79.2,-23.2C86.5,-7.5,88.1,11.9,82.3,28.3C76.5,44.7,63.3,58.1,48.1,67.3C32.9,76.5,15.9,81.5,-1.7,83.7C-19.3,85.9,-38.6,85.3,-54.8,77.3C-71,69.3,-84.1,53.9,-90.3,36.1C-96.5,18.3,-95.8,-1.9,-90.5,-20.3C-85.2,-38.7,-75.3,-55.3,-61.3,-64.3C-47.3,-73.3,-29.2,-74.7,-11.8,-73.2C5.6,-71.7,22.5,-67.3,37.7,-58.3" transform="translate(100 100)" />
      </svg>
      <svg ref={(el) => (shapesRef.current[2] = el)} className="absolute top-1/3 left-1/2 w-24 h-24 opacity-60 max-md:w-12 max-md:h-12" viewBox="0 0 200 200" style={{ transform: 'translateZ(0)' }}>
        <path fill="#a855f7" d="M37.5,-48.3C48.9,-40.8,58.7,-29.9,66.3,-15.2C73.9,-0.5,79.3,17.9,76.3,34.3C73.3,50.7,61.9,65.1,46.9,72.3C31.9,79.5,13.9,79.5,-3.7,83.7C-21.3,87.9,-42.6,96.3,-59.8,90.3C-77,84.3,-90.1,63.9,-96.3,42.1C-102.5,20.3,-101.8,-2.9,-96.5,-21.3C-91.2,-39.7,-81.3,-53.3,-66.3,-62.3C-51.3,-71.3,-31.2,-75.7,-12.8,-72.2C5.6,-68.7,25.1,-57.3,37.5,-48.3" transform="translate(100 100)" />
      </svg>
      <svg ref={(el) => (shapesRef.current[3] = el)} className="absolute bottom-20 left-40 w-28 h-28 opacity-50 max-md:bottom-10 max-md:left-10 max-md:w-16 max-md:h-16" viewBox="0 0 200 200" style={{ transform: 'translateZ(0)' }}>
        <path fill="#c084fc" d="M42.3,-54.3C55.9,-46.8,68.7,-36.9,76.2,-22.2C83.7,-7.5,85.9,11.9,80.3,28.3C74.5,44.7,60.9,58.1,45.1,67.3C29.3,76.5,11.5,81.5,-6.7,88.7C-24.9,95.9,-49.8,105.3,-67.8,97.3C-85.8,89.3,-96.9,63.9,-101.3,38.1C-105.7,12.3,-103.4,-13.9,-96.5,-32.3C-89.6,-50.7,-78.1,-61.3,-62.3,-66.3C-46.5,-71.3,-26.3,-70.7,-7.8,-66.2C10.7,-61.7,30.7,-53.3,42.3,-54.3" transform="translate(100 100)" />
      </svg>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-full mx-auto px-4">
        <h1
          id="name"
          ref={titleRef}
          className="text-5xl md:text-[100px] font-extrabold tracking-tight text-white leading-tight"
        >
          <span className="text-[140px] max-md:text-[90px]">Hey!</span> <br /> I'm Samandeep Singh
        </h1>
        <p
          id="heading"
          ref={subtitleRef}
          className="text-xl md:text-2xl mt-4 text-gray-200 font-light max-w-3xl"
        >
          A Full-Stack Software Developer | Pioneering interactive experiences with React, Node.js, and advanced GSAP animations.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            ref={ctaRef}
            href="#projects"
            className="inline-flex items-center bg-indigo-600 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg max-md:py-2 max-md:px-4 max-md:text-base"
          >
            Discover My Innovations
          </a>
          <a
            ref={githubRef}
            href="https://github.com/samandeep007"
            className="inline-flex items-center bg-gray-950 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg max-md:py-2 max-md:px-4 max-md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Visit GitHub
          </a>
        </div>
      </div>

      {/* Down arrow with pulse animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#features" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8 animate-bounce max-md:w-6 max-md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;