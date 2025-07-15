import React, { useRef} from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const Projects = () => {
  const containerRef = useRef();
  const carouselRef = useRef();
  const cardsRef = useRef([]);

  const projectsData = [
    {
      name: 'Talkify - Real-Time Chat App',
      description: 'A mobile app for seamless communication with React Native, Firebase authentication, and WebSocket for real-time messaging.',
      techStack: ['React Native', 'Firebase', 'WebSocket'],
      date: '2023',
      live: '#',
      github: '#',
      images: ['https://via.placeholder.com/800x400?text=Talkify+1', 'https://via.placeholder.com/800x400?text=Talkify+2', 'https://via.placeholder.com/800x400?text=Talkify+3'],
    },
    {
      name: 'NFT Marketplace on Blockchain',
      description: 'Decentralized platform for minting and trading NFTs using Solidity smart contracts and Web3 integration.',
      techStack: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      date: '2023',
      live: '#',
      github: '#',
      images: ['https://via.placeholder.com/800x400?text=NFT+1', 'https://via.placeholder.com/800x400?text=NFT+2', 'https://via.placeholder.com/800x400?text=NFT+3'],
    },
    {
      name: 'AI-Driven Platform',
      description: 'Integrated OpenAI for intelligent features in a full-stack app with React and Node.js.',
      techStack: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      date: '2024',
      live: '#',
      github: '#',
      images: ['https://via.placeholder.com/800x400?text=AI+1', 'https://via.placeholder.com/800x400?text=AI+2', 'https://via.placeholder.com/800x400?text=AI+3'],
    },
  ];

  useGSAP(() => {
    const cards = cardsRef.current;
    const totalWidth = cards.length * (cards[0].offsetWidth + 32); // Width + gap

    // Horizontal carousel with Draggable for swipe
    Draggable.create(carouselRef.current, {
      type: 'x',
      bounds: { minX: -totalWidth + window.innerWidth, maxX: 0 },
      edgeResistance: 0.75,
      inertia: true,
      onDragEnd: () => snapCarousel(),
    });

    // Snap to nearest card
    const snapCarousel = () => {
      const cardWidth = cards[0].offsetWidth + 32;
      gsap.to(carouselRef.current, {
        x: Math.round(gsap.getProperty(carouselRef.current, 'x') / cardWidth) * cardWidth,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    // Auto-play image carousels in each card
    cards.forEach((card) => {
      const images = card.querySelectorAll('.project-image');
      const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 3, ease: 'power2.inOut' } });
      images.forEach((img, i) => {
        if (i < images.length - 1) {
          timeline.to(images[i], { opacity: 0 }, i * 3);
        }
      });
    });

    // ScrollTrigger for parallax and reveal
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(carouselRef.current, { x: -self.progress * 200 });
      },
    });

    // Card entrance animation
    gsap.from(cards, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-br from-black via-black to-indigo-950 min-h-screen overflow-hidden text-white">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>

      <div className="relative z-10 max-w-full mx-auto px-4 overflow-hidden">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-12 text-center">
          Projects
        </h2>
        <div ref={carouselRef} className="flex gap-8 cursor-grab active:cursor-grabbing">
          {projectsData.map((project, idx) => (
            <div
              key={project.name}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="min-w-[80vw] md:min-w-[60vw] lg:min-w-[40vw] p-8 bg-black/40 backdrop-blur-lg rounded-2xl border border-indigo-500/20 shadow-[0_0_40px_rgba(79,70,229,0.15)]"
            >
              {/* Image Carousel */}
              <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="project-image absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ zIndex: project.images.length - i }}
                  />
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-2">Tech Stack: {project.techStack.join(', ')}</p>
              <p className="text-sm text-gray-500 mb-4">Date: {project.date}</p>
              <div className="flex gap-4">
                <a href={project.live} className="inline-block bg-indigo-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300">
                  Live Demo
                </a>
                <a href={project.github} className="inline-block bg-gray-800 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;