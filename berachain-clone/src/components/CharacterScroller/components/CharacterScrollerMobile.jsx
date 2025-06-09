import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../../../assets/cartoons/image1.jpg';
import image2 from '../../../assets/cartoons/image2.jpg';
import image3 from '../../../assets/cartoons/image3.jpg';
import image4 from '../../../assets/cartoons/image4.jpg';
import image5 from '../../../assets/cartoons/image5.jpg';


gsap.registerPlugin(ScrollTrigger);

const CharacterScrollerMobile = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const textRef = useRef(null);

  const images = [image1, image2, image3, image4, image5].reverse();
  const texts = [
    "Started as an NFT project for fun <br> in the <span class='text-[#F0D8A7]'>DeFi</span> ecosystem",
    "Made the <span class='text-[#F0D8A7]'>NFTs</span> rebase and grew a massive cult community",
    "Identified major gaps in protocol level alignment between <span class='text-[#F0D8A7]'>liquidity and security</span>",
    "Raised VC from some of the <span class='text-[#F0D8A7]'>best firms</span> in the game",
    "<span class='text-[#F0D8A7]'>Launched</span> a chain 🚀 🚀 🚀"
  ].reverse();

  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Initialize all images as hidden except the first one
    imageRefs.current.forEach((img, i) => {
      gsap.set(img, { opacity: i === 0 ? 1 : 0 });
    });

    // Set initial text
    if (textRef.current) {
      textRef.current.innerHTML = texts[0];
    }

    // Create scroll triggers for each transition
    images.forEach((_, i) => {
      if (i === images.length - 1) return; // Skip last image as it doesn't transition to anything

      const currentIndex = i;
      const nextIndex = i + 1;
      
      // Calculate scroll positions - more spacing between transitions
      const startPosition = (currentIndex + 1) * 20; // Start transition at 20%, 40%, 60%, 80%
      const endPosition = startPosition + 10; // End transition 10% later

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${startPosition}% top`,
        end: `${endPosition}% top`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Fade out current image and fade in next image
          gsap.set(imageRefs.current[currentIndex], { opacity: 1 - progress });
          gsap.set(imageRefs.current[nextIndex], { opacity: progress });
          
          // Update text at midpoint of transition
          if (progress >= 0.5 && textRef.current) {
            textRef.current.innerHTML = texts[nextIndex];
          }
        },
        onLeaveBack: () => {
          // When scrolling back up, restore current image and text
          gsap.set(imageRefs.current[currentIndex], { opacity: 1 });
          gsap.set(imageRefs.current[nextIndex], { opacity: 0 });
          if (textRef.current) {
            textRef.current.innerHTML = texts[currentIndex];
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#15161F] min-h-[600vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white">
        {images.map((src, i) => (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={src}
            alt={`character ${i + 1}`}
            className="absolute w-[20vw] max-w-sm object-contain"

          />
        ))}
        <div 
          className="absolute bottom-10 text-center text-xl px-4" 
          ref={textRef}
        ></div>
      </div>
    </div>
  );
};

export default CharacterScrollerMobile;