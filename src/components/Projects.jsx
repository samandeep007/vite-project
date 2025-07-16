import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video1 from '../assets/projects/project_1/video.mp4';

gsap.registerPlugin(ScrollTrigger, Draggable);

const Projects = () => {
  const containerRef = useRef();
  const carouselRef = useRef();
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      name: 'Talkify - Real-Time Chat App',
      description: 'A mobile app for seamless communication with React Native, Firebase authentication, and WebSocket for real-time messaging.',
      techStack: ['React Native', 'Firebase', 'WebSocket'],
      date: '2023',
      live: '#',
      github: '#',
      media: [
        { type: 'image', url: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/16ec5fcf1ee39d841ff2bf256b210ea4?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAZv%2FZGVwrKtXvrt9Hs72XzDz6ZMn6rXutT4W6f3SrWvAiBygQ3DtfXJR76JWfRa7PVMyIW29VZvSL3UbZPpYSqDCCqQBQhMEAAaDDczOTkzOTE3MzgxOSIMZGzhCSJ1NPRpMctmKu0EQbVDFd6mwqW5pmQp3tiAQ%2FG5TslSHQ0KSVkSIcypEzKRagu1CGDT1QZ4wOKW0qLyPwNvMvuwrPqT6ZXpSGwrqi%2B6K9fw5EDgFz%2FgAdop92Ga%2FPJqbKj3pjeNDjkt%2FhMcUKGG%2BJYB29VU7gXmH6NEYmSqOERJro6Ih64E4d4Lqm5QmWUoqwYivRt7%2BcBZJzXYqNPa47dRTsW5LA2G4F%2Be%2BBFgeKMUMaaOhqqPUYIeHJrZ3iyVzY2L4XcCQmjxop96H%2BJsUqqOa4zLaKhXbyffp2SpsKuAKMx3pCvr7MNaizl%2Fhg3LQPaQzDXpmT82I8Ywvbblvj4U4AKSJMQSqbwxZiD%2B95xNZJ%2F2Uu7Jh8L08uJ2VHjP1JErEJ%2F2%2BQVwYbb2SzkGYbpiv2NCtv0yzbdxhpa4fpNll9yRbP7nAVhpyWtFXsAT9UzXB0ix0RF9tcPYPJ9xtukiPtI%2BM2EHw0VwEFdFEKH7cixfL4V%2BZsfY3P4G4HnlFhrr0HVhHCH1yfR%2FYxV0AVd2Lq6QVCrNP4ChPto8qlSZd7qeCoI2BgSlbI8wVF36ujpIvey%2BznJxFxOY3YKoB8nF4EJGJU34iV6uDGgFyObAS0F3bE4Ed9GyEH5GDay36ADEHi3TRtthpsc5wXZwefOEQSLInjRHaOJl38E8AJGoQpUoI0HVgPYO3fY4eGNoTvhorzU4f5Rjp3z7KC8%2FUkdlgmZnBcyQK9dBRis2uaeztD9KzH0OEFUAs70j9iz6fr2h7tcAMBdXCgIr7y02vOv5aOsASNupeQcTy%2FEPAHHM7gaZpQXU0fvfK96GBw6znIox%2BeYDrBQ%2FMOC52sMGOpwBMb4heY%2BPvYE1cxpfQnNAm7ufYujeeO4FkHkPh1hKZz2hdBrvt%2F9BM%2ByGgiv%2BoJLLRDepltq1OM%2Brt4al%2FUPRR4DfYhAICihx8R7dZUk9qisNnntuqqqLOYOyubrZMJAa1fVamui7mcNGAYX0ZBCzEbwxo7AOD5YIbnsCP5RwibiUePJkge33Sx5jgIF8xj%2FoGxAw5w5wVXicRq4b&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250715T184157Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5XFBJPYDQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=02da3511992a6d79fb7dae1e3cfd7543cd50b27e829f82bfc36364dfa341b27b' },
        { type: 'video', url: video1 },
      ],
    },
    {
      name: 'NFT Marketplace on Blockchain',
      description: 'Decentralized platform for minting and trading NFTs using Solidity smart contracts and Web3 integration.',
      techStack: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      date: '2023',
      live: '#',
      github: '#',
      media: [
        { type: 'image', url: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/b18afcc77f3c206a6c6554dbc82901ce?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQD7mai5l%2BNNWiN4Q96QvEMckon7%2FI%2F%2FZ3C4a6id%2BzZ8MwIhALrOO01TkC8TvYg5G3TT%2FlGWQ1ZaQv1Ur%2F%2FO7gzS3fEGKpAFCEsQABoMNzM5OTM5MTczODE5Igw5uBw1fWt%2BO3w1R4Mq7QQyQ3J14vfbW8goetimBSezkSiq%2F1k0kfdPWkm5G3NHyVDskn%2B4ZDFhpsyHnYHV1fxVMFPfZRsZau1Endqf6EUKMBjUUzaMDYpb55bBvOVPvnfU4x99ZzWbHav5WI5xizErm9XREjrdvk2WxfjXaNWKUxsIRfQmaE6%2BldD5biOKYSDW84e%2FU8ILFCeNr40nLt2eB15PtMOzjsJ9S4L7L%2Fmlz%2FX5jAeOUe%2FeiTKeDk5%2BG6K9ijKH3g42uNAhMmIcK36pmAnX2Jml9F9847zjIPQ7hT5Wccu%2BtI4fcD6TwFyqLIMVpbt%2FZiw6lnyHyFLT7VaRoNXVoGQdeVkvRzeWdXO7czNtu7NaOm6mEhiOygHSDHeHzHhvfFg9s9YIXZXfsxDJ6%2BmpjFv9MAZtirCjQrRApt9nhukUytq0D3%2Fd%2F7%2Fhv4ZkQWiTvt%2Bv7%2F9UtePUvYKVNUkAndwudU0TDaDu4LBIWUH%2Fuqv%2FkB1cYIsZdEvtaifgMleNiCKX8pusTDW%2BAgTr%2BMRAyX5RASTPInrsvnaw1KcJGZUoaINxeZWu9DFiENBsCiENDONKOVYJBWabe3ohXBjCVyV2HCmRMNIDiLnNy5RYCFNWPqEaBnN9vMlNFlc2Yb1rbN2fHoZZo%2B4zhf9bu1PMYogYNW56TnXWet2l8UQfrpL2zUbynUnF3vpXjyPipyXMyVNmXRLe9bPWGpBQjqyVuFxl%2BgMMFC77ptkkXKr%2BTl43MV8%2BmiTHM7ws%2FnIBIAwaKLvwynt9XYY8NgIDnh0VTnwkDe8u%2BwcajGmow4R8RIxw0S7jUw5E%2F48%2F1Rc%2FskeyKaE6ZjUpFTsw%2B7bawwY6mgGHgZ1Ww54q94X13qt3x9vZQOi9yBxQWLDVmNUaXFJmXoKsCnA7m1UCK%2BCODZ4K6GBXkr6faMGLyx3S0SEp5ifOlh%2BdiPlA3qEvk%2B%2FLMMvUDPo8cQa5rwyJcW5XaqGMmbBrBHXRKXquChmcH2Cn1r%2FmVIKYe%2BLVovyxiiU8K6F4IICHCx62IdatDLvo7meE0vx3%2BDM5h59n6uSV&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250715T185311Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5T2IRCU33%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=bcfddb77f2f0f6225c6b631f3d408f7acf6ab0e0103d2ed8fd100c9113b193b7' },
        { type: 'video', url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
      ],
    },
    {
      name: 'AI-Driven Platform',
      description: 'Integrated OpenAI for intelligent features in a full-stack app with React and Node.js.',
      techStack: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      date: '2024',
      live: '#',
      github: '#',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/800x400?text=AI+1' },
        { type: 'video', url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
        { type: 'image', url: 'https://via.placeholder.com/800x400?text=AI+2' },
      ],
    },
  ];

  useGSAP(() => {
    const cards = cardsRef.current;
    const totalWidth = cards.length * (cards[0]?.offsetWidth + 32);

    Draggable.create(carouselRef.current, {
      type: 'x',
      bounds: { minX: -totalWidth + window.innerWidth, maxX: 0 },
      edgeResistance: 0.75,
      inertia: true,
      onDragEnd: () => snapCarousel(),
    });

    const snapCarousel = () => {
      const cardWidth = cards[0]?.offsetWidth + 32;
      gsap.to(carouselRef.current, {
        x: Math.round(gsap.getProperty(carouselRef.current, 'x') / cardWidth) * cardWidth,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    cards.forEach((card) => {
      const media = card.querySelectorAll('.project-media');
      const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 3, ease: 'power2.inOut' } });
      media.forEach((item, i) => {
        if (i < media.length - 1) {
          timeline.to(media[i], { opacity: 0 }, i * 3);
        }
      });
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(carouselRef.current, { x: -self.progress * 200 });
      },
    });

    gsap.from(cards, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
    });
  }, { scope: containerRef });

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section ref={containerRef} id="projects" className="relative py-32 bg-gradient-to-br from-black via-black to-indigo-950 min-h-screen overflow-hidden text-white">
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
              className="min-w-[80vw] md:min-w-[60vw] lg:min-w-[40vw] p-8 bg-black/40 backdrop-blur-lg rounded-2xl border border-indigo-500/20 shadow-[0_0_40px_rgba(79,70,229,0.15)] cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                {project.media.filter(item => item.type === 'image').map((item, i) => (
                  <div
                    key={i}
                    className="project-media absolute inset-0 w-full h-full transition-opacity duration-1000"
                    style={{ zIndex: project.media.filter(m => m.type === 'image').length - i }}
                  >
                    <img
                      src={item.url}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {project.media.some(item => item.type === 'video') && (
                  <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                    Video Demo
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-2">Tech Stack: {project.techStack.join(', ')}</p>
              <p className="text-sm text-gray-500 mb-4">Date: {project.date}</p>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  className="inline-block bg-indigo-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="inline-block bg-gray-800 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-5xl w-full mx-4 p-6 bg-black/90 rounded-2xl border border-indigo-500/30" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <Slider {...carouselSettings}>
                  {selectedProject.media.map((item, i) => (
                    <div key={i} className="px-2">
                      {item.type === 'image' ? (
                        <img
                          src={item.url}
                          alt={`${selectedProject.name} media ${i + 1}`}
                          className="w-full h-auto rounded-lg max-h-[60vh] object-contain"
                        />
                      ) : (
                        <video
                          src={item.url}
                          className="w-full h-auto rounded-lg max-h-[60vh] object-contain"
                          controls
                          autoPlay
                          playsInline
                        />
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="md:w-1/3 text-white">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <p className="text-sm text-gray-400 mb-2">Tech Stack: {selectedProject.techStack.join(', ')}</p>
                <p className="text-sm text-gray-400 mb-4">Date: {selectedProject.date}</p>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.live}
                    className="inline-block bg-indigo-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    className="inline-block bg-gray-800 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;