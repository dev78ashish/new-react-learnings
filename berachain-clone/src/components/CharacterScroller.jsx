import React, { useEffect, useRef } from 'react'
import image1 from '../assets/cartoons/image1.jpg'
import image2 from '../assets/cartoons/image2.jpg'
import image3 from '../assets/cartoons/image3.jpg'
import image4 from '../assets/cartoons/image4.jpg'
import image5 from '../assets/cartoons/image5.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CharacterScroller = () => {
  const containerRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const image4Ref = useRef(null)
  const image5Ref = useRef(null)
  const textRef = useRef(null)


  useEffect(() => {
    const container = containerRef.current
    const images = [image1Ref.current, image2Ref.current, image3Ref.current, image4Ref.current, image5Ref.current]

    const texts = [
  "Started as an NFT project for fun <br> in the DeFi ecosystem",
  "Made the rebase and grew a massive cult community",
  "Identified major gaps in protocol level alignment between liquidity and security",
  "Raised VC from some of the best firms in the game",
  "Launched a chain 🚀 🚀 🚀"
]


    // Ensure all images start visible
    gsap.set(images, { opacity: 1 })

    textRef.current.innerHTML = texts[0]


    // Reverse order fade out: image5, image4, ..., image2 (image1 stays)
    const total = images.length
    images.slice(1).reverse().forEach((image, i) => {
      const reverseIndex = total - 2 - i; // Matches the image being faded out
      gsap.to(image, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: `${i * 20}% top`,
          end: `${(i + 1) * 20}% top`,
          scrub: 1,
          toggleActions: "play none none reverse",
          onEnter: () => {
            textRef.current.innerHTML = texts[reverseIndex];
          },
          onLeaveBack: () => {
            textRef.current.innerHTML = texts[reverseIndex + 1];
          },
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[500vh] bg-[#15161F] pb-[200px] relative"
    >
      <div className="sticky top-30">
        <div className="flex items-end justify-center w-[70vw] m-auto gap-4">
          <div ref={image1Ref}>
            <img src={image1} alt="character 1" className="object-contain" />
          </div>
          <div ref={image2Ref}>
            <img src={image2} alt="character 2" className="object-contain" />
          </div>
          <div ref={image3Ref}>
            <img src={image3} alt="character 3" className="object-contain" />
          </div>
          <div ref={image4Ref}>
            <img src={image4} alt="character 4" className="object-contain" />
          </div>
          <div ref={image5Ref}>
            <img src={image5} alt="character 5" className="object-contain" />
          </div>
        </div>
        <div className="mt-8 text-center text-white text-2xl font-semibold">
          <div ref={textRef}>Text 1</div>
        </div>
      </div>
    </div>
  )
}

export default CharacterScroller
