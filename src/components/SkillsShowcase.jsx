import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const SkillsShowcase = () => {
  const containerRef = useRef();
  const categoryRefs = useRef([]);
  const skillRefs = useRef([]);
  const pathRefs = useRef([]);
  const lineRefs = useRef([]);

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Solidity'],
      color: 'text-blue-400',
    },
    {
      category: 'Front-end',
      skills: ['React', 'React Native', 'Next.js', 'Redux', 'Zustand', 'Bootstrap', 'Tailwind CSS', 'Material UI'],
      color: 'text-green-400',
    },
    {
      category: 'Back-end',
      skills: ['Node', 'Express', 'Django', 'Firebase', 'WebSocket', 'GraphQL', 'Socket.io', 'WebRTC'],
      color: 'text-purple-400',
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'NoSQL'],
      color: 'text-indigo-400',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Kubernetes', 'Cloudinary', 'Linux', 'AWS'],
      color: 'text-teal-400',
    },
    {
      category: 'Testing',
      skills: ['Jest', 'Chai', 'Mocha', 'Unit Testing'],
      color: 'text-cyan-400',
    },
    {
      category: 'Methodologies',
      skills: ['Agile', 'Scrum', 'SDLC'],
      color: 'text-violet-400',
    },
    {
      category: 'Other',
      skills: ['JSON', 'XML', 'WordPress', 'OpenAI', 'Gemini'],
      color: 'text-pink-400',
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Leadership', 'Teamwork', 'Communication'],
      color: 'text-rose-400',
    },
  ];

  useEffect(() => {
    // Generate dynamic line grid for background
    const svg = containerRef.current.querySelector('svg.background-lines');
    for (let i = 0; i < 20; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.classList.add('bg-line');
      line.setAttribute('x1', gsap.utils.random(0, 100) + '%');
      line.setAttribute('y1', gsap.utils.random(0, 100) + '%');
      line.setAttribute('x2', gsap.utils.random(0, 100) + '%');
      line.setAttribute('y2', gsap.utils.random(0, 100) + '%');
      line.setAttribute('stroke', 'rgba(107, 114, 128, 0.2)');
      line.setAttribute('stroke-width', gsap.utils.random(1, 3));
      svg.appendChild(line);
      lineRefs.current.push(line);
    }
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });


    // Animate background lines: Subtle draw and pulse for digital grid effect
    lineRefs.current.forEach((line, idx) => {
      gsap.from(line, {
        drawSVG: 0,
        duration: 2,
        delay: idx * 0.1,
        ease: 'power2.inOut',
      });

      gsap.to(line, {
        strokeOpacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Category entrance: Smooth reveal with depth
    categoryRefs.current.forEach((cat) => {
      gsap.from(cat, {
        opacity: 0,
        z: -100,
        duration: 1.2,
        scrollTrigger: { trigger: cat, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    });

    // Skills: Cascade with parallax shift
    skillRefs.current.forEach((skill, idx) => {
      gsap.from(skill, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: idx * 0.05,
        ease: 'back.out(1.2)',
        scrollTrigger: { trigger: skill.parentNode, start: 'top 80%' },
      });
    });

    // Paths: Elegant draw for connectors
    pathRefs.current.forEach((path) => {
      gsap.from(path, {
        drawSVG: 0,
        duration: 1.5,
        scrollTrigger: { trigger: path, start: 'top 90%' },
      });
    });

    tl.from(containerRef.current, { opacity: 0, duration: 1 });
  }, { scope: containerRef });

  return (
    <section 
      id="skills"
      ref={containerRef}
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <svg className="absolute  w-full h-full background-lines pointer-events-none" preserveAspectRatio="none">
        {/* Lines will be dynamically added */}
      </svg>
      <div className="absolute inset-0 bg-black/50 "></div>
      <h2 className="text-5xl relative inset-1 font-extrabold text-center mb-16 text-white">Skills Nexus</h2>
            
      <div className="max-w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {skillCategories.map((cat, catIdx) => (
          <div key={cat.category} className="relative p-8 bg-black/20 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl">
            <h3 ref={(el) => (categoryRefs.current[catIdx] = el)} className={`${cat.color} text-3xl font-bold mb-6 text-center`}>
              {cat.category}
            </h3>
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
              {/* Dynamic synapse paths */}
              <path ref={(el) => pathRefs.current.push(el)} d="M10,10 Q50,150 190,90 Q100,20 10,10" stroke="#6b7280" fill="none" strokeWidth="2" />
              <path ref={(el) => pathRefs.current.push(el)} d="M190,190 Q50,50 10,190 Q100,180 190,190" stroke="#6b7280" fill="none" strokeWidth="2" />
            </svg>
            <ul className="space-y-4 text-center">
              {cat.skills.map((skill, skillIdx) => (
                <li
                  key={skill}
                  ref={(el) => (skillRefs.current[catIdx * 10 + skillIdx] = el)} // Approximate indexing
                  className="text-lg font-medium px-4 py-2 bg-gray-800/30 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default SkillsShowcase;