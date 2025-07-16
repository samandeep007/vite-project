import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

const Certifications = () => {
  const containerRef = useRef();
  const titleRef = useRef();
  const cardRefs = useRef([]);
  const pdfModalRef = useRef();
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const certificates = [
    {
      name: 'Learn JavaScript Course',
      issuer: 'Codecademy',
      date: 'May 2024',
      link: 'https://www.codecademy.com/profiles/java6073984474/certificates/705dcb15de0da4dd9d9fc4f3274b430e', // Placeholder; replace with actual if available
    },
    {
      name: 'Learn C# Course',
      issuer: 'Codecademy',
      date: 'Nov 2023',
      link: 'https://www.codecademy.com/profiles/java6073984474/certificates/65f0ff88f4fc58e0536b3b51648dff24',
    },
    {
      name: 'Learn Python 3 Course',
      issuer: 'Codecademy',
      date: 'Nov 2023',
      link: 'https://www.codecademy.com/profiles/java6073984474/certificates/6c152bd262967f8c941c9707ed636bda',
    },
    {
      name: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      date: 'Nov 2023',
      link: 'https://www.hackerrank.com/certificates/90fec59f3397', // Placeholder badge link
    },
    {
      name: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: 'Nov 2023',
      link: 'https://www.hackerrank.com/certificates/1a9344f89df3',
    },
    {
      name: 'Learn Node.js Course',
      issuer: 'Codecademy',
      date: 'Nov 2023',
      link: 'https://www.codecademy.com/profiles/java6073984474/certificates/240305d50b925c17868f1ac7a21a3261',
    },
    {
      name: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: 'Nov 2023',
      link: 'https://www.hackerrank.com/certificates/181cc2f5af84',
    },
    {
      name: 'Learn Python 2 Course',
      issuer: 'Codecademy',
      date: 'Nov 2023',
      link: 'https://www.codecademy.com/profiles/java6073984474/certificates/b97fd4d87a816c761a674af1b5391ef1',
    },
  ];

  useGSAP(() => {
    // Title animation: Elegant 3D flip entrance
    gsap.from(titleRef.current, {
      opacity: 0,
      rotationX: -90,
      duration: 1.2,
      transformOrigin: 'center',
      scrollTrigger: { trigger: titleRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
    });

    // Cards: Sophisticated 3D tilt on hover, flip on scroll
    cardRefs.current.forEach((card, idx) => {
 
      gsap.from(card, {
        opacity: 0,
        rotationY: 180,
        duration: 1.5,
        delay: idx * 0.2,
        scrollTrigger: { trigger: card, start: 'top 85%' },

      });

      // 3D tilt on mouse move
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotationY: x * 20, rotationX: -y * 20, duration: 0.3, transformPerspective: 1000 });
        gsap.to(card, { boxShadow: '0 0 40px rgba(99,102,241,0.6)', duration: 0.3 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', duration: 0.3 });
      });
    });

    // PDF Modal: 3D scale and rotate entrance
    if (isPdfOpen) {
      gsap.from(pdfModalRef.current, { opacity: 0, scale: 0.8, rotationY: 90, duration: 0.8, transformOrigin: 'center' });
    }
  }, { scope: containerRef, dependencies: [isPdfOpen] });

  const openPdf = () => setIsPdfOpen(true);
  const closePdf = () => setIsPdfOpen(false);

  return (
    <section ref={containerRef} className="relative py-20 bg-black min-h-screen overflow-hidden text-white">
      <h2 ref={titleRef} className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">Certifications</h2>
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 perspective-2000">
        {certificates.map((cert, idx) => (
          <div
            key={cert.name}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="p-8 bg-black/50 backdrop-blur-md rounded-2xl border border-indigo-500/30 shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform-style-preserve-3d"
          >
            <h3 className="text-2xl font-bold mb-3 text-indigo-300">{cert.name}</h3>
            <p className="text-gray-400 mb-6">{cert.issuer} - {cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-700 py-2 px-5 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors duration-300">
              Verify Certificate
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <button onClick={openPdf} className="bg-indigo-700 py-3 px-8 rounded-md text-lg font-medium hover:bg-indigo-600 transition-colors duration-300 shadow-md hover:shadow-lg">
          View Resume PDF
        </button>
      </div>

      {/* PDF Modal with 3D Effect */}
      {isPdfOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closePdf}>
          <div ref={pdfModalRef} className="w-11/12 h-4/5 max-w-4xl bg-gray-900 rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl transform-style-preserve-3d" onClick={(e) => e.stopPropagation()}>
            <iframe src="src/assets/resume.pdf" width="100%" height="100%" title="Resume PDF" className="border-none"></iframe> {/* Adjust PDF path */}
            <button onClick={closePdf} className="absolute top-4 right-4 text-white text-3xl hover:text-indigo-300 transition-colors">×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;