import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import image1 from '../assets/cartoons/image1.jpg';
import image2 from '../assets/cartoons/image2.jpg';
import image3 from '../assets/cartoons/image3.jpg';
import image4 from '../assets/cartoons/image4.jpg';
import image5 from '../assets/cartoons/image5.jpg';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const sectionRefs = useRef([]);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const sections = sectionRefs.current;
    const images = imageRefs.current;
    const imageContainer = imageContainerRef.current;

    // Image container opacity animation
    gsap.to(imageContainer, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'bottom center',
        end: 'bottom top',
        scrub: true,
      },
    });

    sections.forEach((section, index) => {
      if (images[index]) {
        gsap.to(images[index], {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            scrub: true,
          },
        });
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      })
        .to(section, { autoAlpha: 1 })
        .to(section, { autoAlpha: 0 }, 0.5);
    });
  }, []);

  const labels = ['Image1', 'Image2', 'Image3', 'Image4', 'Image5'];
  const images = [image1, image2, image3, image4, image5];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '600vh' }}
    >
      {/* Sticky image strip - centered in middle of screen */}
      <div
        ref={imageContainerRef}
        className="fixed inset-0 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 flex gap-5 justify-center items-center"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            ref={(el) => (imageRefs.current[index] = el)}
            className="opacity-0 transition-opacity duration-300 ease-in-out"
            alt={`img${index + 1}`}
            style={{ maxHeight: 'none', maxWidth: 'none' }} // Use natural image dimensions
          />
        ))}
      </div>

      {/* Scroll-triggered sections */}
      {labels.map((label, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="w-full h-screen relative flex items-center justify-center opacity-0"
        >
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl sm:text-6xl">
            {label}
          </div>
        </div>
      ))}

      {/* Spacer */}
      <div className="w-full h-screen visible" />
    </div>
  );
};

export default ScrollAnimation