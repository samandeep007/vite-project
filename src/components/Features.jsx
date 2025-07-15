// src/components/Features.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    title: 'ScrollTrigger',
    desc: 'Create stunning scroll-based animations with ease.',
    icon: '📜',
  },
  {
    title: 'Flip',
    desc: 'Seamlessly animate state changes like layout shifts.',
    icon: '🔄',
  },
  {
    title: 'SplitText',
    desc: 'Animate text by characters, words, or lines.',
    icon: '✂️',
  },
  {
    title: 'Draggable',
    desc: 'Make any element draggable with physics.',
    icon: '🖐️',
  },
  {
    title: 'MotionPath',
    desc: 'Animate along custom paths or SVGs.',
    icon: '🛤️',
  },
  {
    title: 'GSDevTools',
    desc: 'Debug and fine-tune animations interactively.',
    icon: '🛠️',
  },
];

const Features = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from('.feature-card', {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.feature-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="features" ref={containerRef} className="py-16 px-8">
      <h2 className="text-4xl text-center mb-12 font-bold">Powerful Tools for Animators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuresData.map((feat, idx) => (
          <div key={idx} className="feature-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">{feat.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-gray-300">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;