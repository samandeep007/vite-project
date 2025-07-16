import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, Draggable } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, Draggable);

const ProjectGallery = () => {
  const galleryRef = useRef(null);
  const shapesRef = useRef([]);
  const panelsRef = useRef([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 0,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164154.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164154.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164214.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164315.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164328.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164340.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164908.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164922.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164937.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20164948.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20165021.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20165034.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bowquest/Screenshot%202025-07-15%20165045.png?raw=true',
      ],
    },
    {
      id: 1,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011303.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011716.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011748.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011811.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011833.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011917.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011939.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012001.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012030.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012058.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012125.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012148.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012212.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012234.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012338.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20012418.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011303.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011323.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011346.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011404.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011439.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011453.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011511.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/Hermes/Screenshot%202024-11-03%20011523.png?raw=true',
        
      ],
    },
    {
      id: 2,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002526.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002526.png?raw=true',
       'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002937.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002556.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002621.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002644.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002706.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002726.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002744.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lawner/Screenshot%202024-11-03%20002800.png?raw=true',
      ],
    },
    {
      id: 3,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20165935.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20165935.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170002.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170019.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170032.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170100.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170117.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170129.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170139.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170202.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170233.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/og/Screenshot%202025-07-15%20170252.png?raw=true'
      ],
    },
     {
      id: 4,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171143.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171143.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171208.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171221.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171533.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171546.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171600.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/eleve/Screenshot%202025-07-15%20171614.png?raw=true'
      ],
    },
     {
      id: 5,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170827.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170827.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170848.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170903.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170918.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170927.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170939.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/courseArena/Screenshot%202025-07-15%20170951.png?raw=true'
      ],
    },
     {
      id: 6,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20022947.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20022947.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20023041.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20023107.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/game/Screenshot%202023-03-09%20023139.png?raw=true'
      ],
    },
     {
      id: 7,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(1).jpg?raw=true',
      media: [
          'https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(1).jpg?raw=true',
          'https://github.com/samandeep007/Project-images/blob/main/lif/image_original.jpg?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(6).jpg?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(7).jpg?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(8).jpg?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/lif/image_original%20(9).jpg?raw=true',
      ],
    },
     {
      id: 8,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174417.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174417.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174433.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174449.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174501.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174516.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174531.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174540.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/music/Screenshot%202025-07-15%20174809.png?raw=true'
      ],
    },
     {
      id: 9,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172105.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172105.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172152.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172203.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172216.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172228.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172239.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/kartar/Screenshot%202025-07-15%20172302.png?raw=true'
      ],
    },
     {
      id: 10,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154142.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154142.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154224.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154323.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154416.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154706.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154718.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20154822.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/bookhub/Screenshot%202024-12-07%20155137.png?raw=true'
      ],
    },
     {
      id: 11,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20175001.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20175001.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180630.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180642.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180652.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180707.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180719.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180734.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180745.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180753.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/snow/Screenshot%202025-07-15%20180803.png?raw=true'
      ],
    },
     {
      id: 12,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/ask/Screenshot%202025-07-15%20181654.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/ask/Screenshot%202025-07-15%20181654.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/ask/Screenshot%202025-07-15%20181540.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/ask/Screenshot%202025-07-15%20181556.png?raw=true',
      ],
    },
    {
     id: 13,
     thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/store/Screenshot%202023-03-13%20135705.png?raw=true',
     media: [
       'https://github.com/samandeep007/Project-images/blob/main/store/Screenshot%202023-03-14%20120709.png?raw=true',
       'https://github.com/samandeep007/Project-images/blob/main/store/Screenshot%202023-03-13%20135705.png?raw=true',
     ],
   },
     {
      id: 14,
      thumbnail: 'https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165449.png?raw=true',
      media: [
        'https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165449.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165630.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165643.png?raw=true',
        'https://github.com/samandeep007/Project-images/blob/main/workbuddy/Screenshot%202025-07-15%20165659.png?raw=true'
      ],
    },
  ];

  useGSAP(() => {
    const panels = panelsRef.current.filter(Boolean);
    if (panels.length === 0) return;

    // Parallax and rotation for background shapes
    shapesRef.current.filter(Boolean).forEach((shape, i) => {
      gsap.to(shape, {
        y: (i + 1) * 100,
        rotation: i * 90,
        opacity: 0.8,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // Scroll animations for panels
    panels.forEach((panel, i) => {
      gsap.from(panel, {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: i % 2 === 0 ? -5 : 5,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // Parallax effect on scroll
      gsap.to(panel, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Hover effects variety
      const hoverEffect = i % 4 === 0 ? 'scale' : i % 4 === 1 ? 'tilt' : i % 4 === 2 ? 'glow' : 'lift';

      panel.addEventListener('mouseenter', () => {
        if (hoverEffect === 'scale') {
          gsap.to(panel, { scale: 1.1, duration: 0.6, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.6)' });
        } else if (hoverEffect === 'tilt') {
          gsap.to(panel, { rotationY: 8, rotationX: 8, duration: 0.6 });
        } else if (hoverEffect === 'glow') {
          gsap.to(panel, { filter: 'brightness(1.3) drop-shadow(0 0 20px rgba(79, 70, 229, 0.8))', duration: 0.6 });
        } else {
          gsap.to(panel, { y: -10, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)', duration: 0.6 });
        }
      });

      panel.addEventListener('mouseleave', () => {
        gsap.to(panel, { scale: 1, rotationY: 0, rotationX: 0, y: 0, filter: 'none', boxShadow: 'none', duration: 0.6 });
      });

      // Mouse move parallax
      panel.addEventListener('mousemove', (e) => {
        const rect = panel.getBoundingClientRect();
        const mx = (e.clientX - rect.left - rect.width / 2) / 15;
        const my = (e.clientY - rect.top - rect.height / 2) / 15;
        gsap.to(panel, { x: mx, y: my, duration: 0.3 });
      });

      panel.addEventListener('mouseleave', () => {
        gsap.to(panel, { x: 0, y: 0, duration: 0.6 });
      });
    });
  }, { scope: galleryRef });

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section ref={galleryRef} className="relative py-32 bg-black min-h-screen overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={(el) => (shapesRef.current[0] = el)}
          className="absolute w-96 h-96 bg-indigo-500/50 rounded-full blur-3xl -top-20 -left-20"
        ></div>
        <div
          ref={(el) => (shapesRef.current[1] = el)}
          className="absolute w-[32rem] h-[32rem] bg-purple-500/40 rounded-full blur-4xl -bottom-40 right-0"
        ></div>
        <div
          ref={(el) => (shapesRef.current[2] = el)}
          className="absolute w-64 h-64 border-4 border-indigo-300/50 rounded-3xl top-1/3 left-1/4"
        ></div>
        <div
          ref={(el) => (shapesRef.current[3] = el)}
          className="absolute w-full h-1 bg-gradient-to-r from-indigo-500/60 to-purple-500/60 top-1/2"
        ></div>
        <div
          ref={(el) => (shapesRef.current[4] = el)}
          className="absolute w-80 h-80 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-[20%] bottom-1/4 right-1/4"
        ></div>
      </div>

      {/* Gallery Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (panelsRef.current[idx] = el)}
            onClick={() => openModal(project)}
            className="relative overflow-hidden rounded-3xl cursor-pointer shadow-2xl transform perspective-1000"
          >
            <img
              src={project.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

const Modal = ({ project, onClose }) => {
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideWidth = wrapperRef.current?.clientWidth;
    if (slideWidth && carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -activeIndex * slideWidth,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="relative w-4/5 h-4/5 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 text-white/80 hover:text-white p-2 rounded-full bg-gray-900/50"
        >
          ×
        </button>
        {/* Carousel */}
        <div ref={wrapperRef} className="relative h-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex flex-row"
            style={{ width: `${project.media.length * 100}%` }}
          >
            {project.media.map((media, idx) => (
              <div
                key={idx}
                className="flex-none w-full h-full"
                style={{ width: `${100 / project.media.length}%` }}
              >
                {media.endsWith('.mp4') ? (
                  <video
                    src={media}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img src={media} alt="" className="w-full h-full object-contain" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Left Arrow */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            className="text-white text-4xl bg-gray-900/50 px-4 py-2 rounded-full hover:bg-gray-900/70"
          >
            ←
          </button>
        </div>
        {/* Right Arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={() => setActiveIndex(Math.min(project.media.length - 1, activeIndex + 1))}
            className="text-white text-4xl bg-gray-900/50 px-4 py-2 rounded-full hover:bg-gray-900/70"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;