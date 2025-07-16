import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const refreshScroll = () => {
        const textContainer = textContainerRef.current;
        if (!textContainer) return;

        const textWidth = textContainer.scrollWidth; // Use scrollWidth for full content width
        const scrollDistance = textWidth - window.innerWidth + 100; // Add padding for smoothness

        if (scrollDistance <= 0) return; // No scroll if text fits

        // Horizontal scroll animation pinned to vertical scroll
        const horizontalTween = gsap.to(textContainer, {
          x: -scrollDistance,
          ease: 'none',
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: horizontalTween,
        });
      };

      // Delay measurement to ensure DOM is ready
      gsap.delayedCall(0.1, refreshScroll);

      // Refresh on resize
      window.addEventListener('resize', refreshScroll);
      return () => window.removeEventListener('resize', refreshScroll);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hidden md:block relative h-screen bg-gradient-to-br from-black via-stone-950 to-black overflow-hidden">
      <div ref={textContainerRef} className="relative flex h-full items-center whitespace-nowrap text-[150px] font-bold text-white">
        I craft <span className='px-4 text-indigo-400'>bold</span>, <span className='italic px-12 text-gray-400'>interactive</span> web experiences that actually <span className='italic pr-8 text-cyan-200'>do</span> something
      </div>
    </section>
  );
};

export default HorizontalScrollSection;