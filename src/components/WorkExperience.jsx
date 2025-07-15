import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(SplitText, ScrollTrigger, MorphSVGPlugin);

const WorkExperience = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const cardRefs = useRef([]);
  const shapeRefs = useRef([]);

  const experiences = [
    {
      title: 'Freelance Full Stack Developer',
      date: 'May 2023 - Present',
      description: 'Integrated Firebase for real-time user authentication and session management, accommodating up to 100 simultaneous connections. Optimized front-end with React, achieving a 25% reduction in load time through code splitting and lazy loading.',
    },
    {
      title: 'Peer Tutor (Volunteer)',
      date: 'Feb 2024 - Present',
      institution: 'Bow Valley College',
      description: 'Guided students in software development concepts, project debugging, and best practices.',
    },
  ];

  useEffect(() => {
    // Generate modern abstract shapes (blob-like, non-circular)
    const svg = containerRef.current.querySelector('svg');
    const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'];
    for (let i = 0; i < 4; i++) {
      const shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('fill', colors[i]);
      shape.setAttribute('d', getRandomBlobPath());
      shape.setAttribute('class', 'absolute opacity-50');
      shape.style.top = `${gsap.utils.random(10, 80)}%`;
      shape.style.left = `${gsap.utils.random(10, 80)}%`;
      shape.style.width = `${gsap.utils.random(100, 300)}px`;
      svg.appendChild(shape);
      shapeRefs.current.push(shape);
    }
  }, []);

  const getRandomBlobPath = () => {
    const paths = [
      "M48.2,-62.8C62.7,-52.3,74.8,-36.3,82.2,-18.6C89.6,-0.9,92.3,18.5,85.3,34.3C78.3,50.1,61.6,62.3,45.6,69.9C29.6,77.5,14.8,80.5,-1.3,82.2C-17.4,83.9,-34.8,84.3,-49.1,77C-63.4,69.7,-74.6,54.7,-81.4,37.7C-88.2,20.7,-90.6,1.7,-85.9,-15.3C-81.2,-32.3,-69.4,-47.3,-55,-58.3C-40.6,-69.3,-23.3,-76.3,-4.8,-72.9C13.7,-69.5,27.5,-55.7,48.2,-62.8Z",
      "M44.7,-58.3C58.9,-50.8,71.9,-38.9,79.2,-23.2C86.5,-7.5,88.1,11.9,82.3,28.3C76.5,44.7,63.3,58.1,48.1,67.3C32.9,76.5,15.9,81.5,-1.7,83.7C-19.3,85.9,-38.6,85.3,-54.8,77.3C-71,69.3,-84.1,53.9,-90.3,36.1C-96.5,18.3,-95.8,-1.9,-90.5,-20.3C-85.2,-38.7,-75.3,-55.3,-61.3,-64.3C-47.3,-73.3,-29.2,-74.7,-11.8,-73.2C5.6,-71.7,22.5,-67.3,37.7,-58.3",
      "M37.5,-48.3C48.9,-40.8,58.7,-29.9,66.3,-15.2C73.9,-0.5,79.3,17.9,76.3,34.3C73.3,50.7,61.9,65.1,46.9,72.3C31.9,79.5,13.9,79.5,-3.7,83.7C-21.3,87.9,-42.6,96.3,-59.8,90.3C-77,84.3,-90.1,63.9,-96.3,42.1C-102.5,20.3,-101.8,-2.9,-96.5,-21.3C-91.2,-39.7,-81.3,-53.3,-66.3,-62.3C-51.3,-71.3,-31.2,-75.7,-12.8,-72.2C5.6,-68.7,25.1,-57.3,37.5,-48.3",
      "M42.3,-54.3C55.9,-46.8,68.7,-36.9,76.2,-22.2C83.7,-7.5,85.9,11.9,80.3,28.3C74.5,44.7,60.9,58.1,45.1,67.3C29.3,76.5,11.5,81.5,-6.7,88.7C-24.9,95.9,-49.8,105.3,-67.8,97.3C-85.8,89.3,-96.9,63.9,-101.3,38.1C-105.7,12.3,-103.4,-13.9,-96.5,-32.3C-89.6,-50.7,-78.1,-61.3,-62.3,-66.3C-46.5,-71.3,-26.3,-70.7,-7.8,-66.2C10.7,-61.7,30.7,-53.3,42.3,-54.3",
    ];
    return gsap.utils.random(paths);
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Title animation: GSAP-style char reveal with professional glow
    const titleSplit = new SplitText(titleRef.current, { type: 'chars' });
    tl.from(titleSplit.chars, {
      opacity: 0,
      y: gsap.utils.random(-50, 50),
      rotationX: 90,
      skewX: 20,
      duration: 0.8,
      stagger: 0.02,
    }, '-=1');

    gsap.to(titleRef.current, {
      textShadow: '0 0 15px rgba(99,102,241,0.5)',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Cards: Extreme GSAP - 3D entrance, morph background on hover, parallax scroll
    cardRefs.current.forEach((card, idx) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0,
        rotationY: gsap.utils.random(-180, 180),
        duration: 1.5,
        delay: idx * 0.5,
        scrollTrigger: { trigger: card, start: 'top 85%' },
      });

      // Hover: Card tilt, morph background shape, enhance shadow
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotationY: x * 20, rotationX: -y * 20, duration: 0.3, transformPerspective: 1000 });
        gsap.to(card.querySelector('svg path'), { morphSVG: getRandomBlobPath(), duration: 0.5 });
        gsap.to(card, { boxShadow: '0 0 40px rgba(99,102,241,0.6)', duration: 0.3 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, boxShadow: '0 0 10px rgba(0,0,0,0.5)', duration: 0.3 });
        gsap.to(card.querySelector('svg path'), { morphSVG: card.querySelector('svg path').getAttribute('data-original-d'), duration: 0.5 });
      });
    });

    // Parallax for cards on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        cardRefs.current.forEach((card, idx) => {
          gsap.to(card, { y: self.progress * (idx % 2 === 0 ? 50 : -50) });
        });
      },
    });

    // Abstract shapes animation: Morph, rotate, scale with GSAP
    shapeRefs.current.forEach((shape, idx) => {
      gsap.from(shape, {
        opacity: 0,
        scale: 0,
        duration: 1.5,
        delay: idx * 0.3,
      });
      gsap.to(shape, {
        morphSVG: getRandomBlobPath(),
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(shape, {
        rotation: '+=360',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 min-h-screen bg-black overflow-hidden text-white">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      {/* Modern Abstract Shapes Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(4)].map((_, idx) => (
          <path
            key={idx}
            ref={(el) => (shapeRefs.current[idx] = el)}
            fill={gsap.utils.random(['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'])}
            d={getRandomBlobPath()}
            data-original-d={getRandomBlobPath()}
            style={{ transform: `translate(${gsap.utils.random(10, 80)}%, ${gsap.utils.random(10, 80)}%) scale(0.5)` }}
          />
        ))}
      </svg>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 ref={titleRef} className="text-5xl font-extrabold mb-16 text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="relative p-8 bg-black/70 backdrop-blur-md rounded-2xl border border-indigo-900/60 shadow-lg cursor-pointer transform-style-preserve-3d overflow-hidden"
            >
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <path fill="currentColor" d={getRandomBlobPath()} data-original-d={getRandomBlobPath()} />
              </svg>
              <h3 className="text-3xl font-bold mb-4 text-white relative z-10">{exp.title}</h3>
              <p className="text-gray-400 mb-2 relative z-10">{exp.date}</p>
              {exp.institution && <p className="text-gray-400 mb-4 relative z-10">{exp.institution}</p>}
              <p className="text-gray-300 relative z-10">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;