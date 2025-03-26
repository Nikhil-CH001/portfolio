import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import HeroSection from './HeroSection';

function About() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ['', 'FullStack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile Apps Developer', 'Web Pentester'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="about" className="w-full min-h-screen bg-gradient-to-b from-[#003347] to-gray-900 text-white">
        <HeroSection typingRef={typingRef} />
      </div>
    </>
  );
}

export default About;