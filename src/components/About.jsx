import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import image from '../assets/profile.jpg';

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const containerRef = useRef();
  const bioRef = useRef();
  const imageRef = useRef();
  const titleRef = useRef();
  const linkedinRef = useRef();
  const xRef = useRef();
  const particleRefs = useRef([]);

  useGSAP(() => {
    // Set initial darker background
    gsap.set(containerRef.current, {
      background: `radial-gradient(circle at 50% 50%, #000000, #050505, #0a0a0a)`,
    });

    // Background gradient shift with mouse interaction
    const updateGradient = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      gsap.to(containerRef.current, {
        background: `radial-gradient(circle at ${x}% ${y}%, #000000, #010101, #020202)`,
        duration: 0.5,
        ease: 'power2.out',
      });
    };
    containerRef.current.addEventListener('mousemove', updateGradient);

    // Create abstract particles with constrained positioning
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-blue-400/70 shadow-[0_0_8px_rgba(59,130,246,0.7)]';
      particle.style.width = `${gsap.utils.random(3, 6)}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${gsap.utils.random(5, 95)}%`;
      particle.style.top = `${gsap.utils.random(5, 95)}%`;
      containerRef.current.appendChild(particle);
      particleRefs.current.push(particle);
    }

    // Particle animations - constrained floating with scroll and mouse hover reactivity
    particleRefs.current.forEach((particle, idx) => {
      gsap.to(particle, {
        x: gsap.utils.random(-15, 15),
        y: gsap.utils.random(-15, 15),
        scale: gsap.utils.random(0.8, 1.8),
        opacity: gsap.utils.random(0.4, 0.9),
        duration: gsap.utils.random(2, 5),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: idx * 0.15,
      });
      gsap.to(particle, {
        y: '+=120',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      containerRef.current.addEventListener('mousemove', (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const particleRect = particle.getBoundingClientRect();
        const particleX = particleRect.left + particleRect.width / 2 - rect.left;
        const particleY = particleRect.top + particleRect.height / 2 - rect.top;
        const distance = Math.hypot(mouseX - particleX, mouseY - particleY);
        if (distance < 150) {
          const angle = Math.atan2(mouseY - particleY, mouseX - particleX);
          const newX = Math.max(5, Math.min(95, particleX - Math.cos(angle) * 50));
          const newY = Math.max(5, Math.min(95, particleY - Math.sin(angle) * 50));
          gsap.to(particle, {
            x: newX,
            y: newY,
            scale: 2,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        } else {
          gsap.to(particle, {
            scale: gsap.utils.random(0.8, 1.8),
            opacity: gsap.utils.random(0.4, 0.9),
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      });
    });

    // Title entrance - fade and slide up
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 90%',
      },
    });

    // Bio text typing animation - single animation for all text
    const split = new SplitText(bioRef.current, { type: 'chars' });
    gsap.fromTo(
      split.chars,
      {
        opacity: 0,
        x: 10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.05,
        stagger: 0.03,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: bioRef.current,
          start: 'top 85%',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    // Image entrance - scale up and fade
    gsap.from(imageRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 95%',
      },
    });

    // Image hover - lift and enhanced glow
    imageRef.current.addEventListener('mouseenter', () => {
      gsap.to(imageRef.current, {
        y: -15,
        boxShadow: '0 15px 40px rgba(59, 130, 246, 0.5)',
        duration: 0.4,
        ease: 'power2.out',
      });
    });
    imageRef.current.addEventListener('mouseleave', () => {
      gsap.to(imageRef.current, {
        y: 0,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    // LinkedIn and X buttons with energy pulse effect
    [linkedinRef.current, xRef.current].forEach((button, index) => {
      gsap.from(button, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: button,
          start: 'top 95%',
        },
        onStart: () => {
          gsap.to(button, {
            boxShadow: index === 0 ? '0 0 20px rgba(10, 102, 194, 0.8)' : '0 0 20px rgba(0, 0, 0, 0.8)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        },
      });
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          boxShadow: index === 0 ? '0 0 30px rgba(10, 102, 194, 1)' : '0 0 30px rgba(0, 0, 0, 1)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: index === 0 ? '0 0 20px rgba(10, 102, 194, 0.8)' : '0 0 20px rgba(0, 0, 0, 0.8)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    // Parallax effect for background grid
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to('.grid-overlay', { y: self.progress * 120, ease: 'none' });
      },
    });

    // Cleanup event listeners
    return () => {
      containerRef.current.removeEventListener('mousemove', updateGradient);
    };
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen py-8 md:p-0 text-slate-200 flex items-center justify-center snap-start overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 grid-overlay opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[80%] mx-auto px-8 flex flex-col items-center gap-12">
        {/* Section Title */}
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center text-gray-100">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div ref={imageRef} className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img src={image} alt="Samandeep Singh" className="w-full h-full object-cover" />
          </div>

          {/* Bio Text and Buttons */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-blue-500/20 max-w-prose">
              <div ref={bioRef} className="text-lg leading-relaxed font-mono break-words">
                I'm a passionate Full-Stack Developer with a strong focus on creating scalable, real-time applications using React, Node.js, GraphQL, and modern web technologies. 

I blend clean architecture with thoughtful UI to turn complex ideas into seamless user experiences. When I'm not coding, I tutor peers at Bow Valley College and dive into AI tools like OpenAI. Fluent in English, Hindi, and Punjabi, I'm always ready to collaborate on your next big idea!
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <a
                ref={linkedinRef}
                href="https://www.linkedin.com/in/your-profile"
                className="inline-flex items-center bg-[#0A66C2] text-white py-3 px-8 rounded-md text-xl font-medium hover:bg-[#004182] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.352V9.141h3.414v1.561h.048c.475-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.145zM5.337 7.433c-1.144 0-2.063-.93-2.063-2.078 0-1.147.919-2.078 2.063-2.078 1.144 0 2.063.931 2.063 2.078 0 1.147-.919 2.078-2.063 2.078zm1.778 13.019H3.56V9.141h3.555v11.311zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                Visit LinkedIn
              </a>
              <a
                ref={xRef}
                href="https://x.com/your-handle"
                className="inline-flex items-center bg-black text-white py-3 px-8 rounded-md text-xl font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;