// import React from 'react'
// import image1 from '../assets/cartoons/image1.jpg'
// import image2 from '../assets/cartoons/image2.jpg'
// import image3 from '../assets/cartoons/image3.jpg'
// import image4 from '../assets/cartoons/image4.jpg'
// import image5 from '../assets/cartoons/image5.jpg'

// const CharacterScroller = () => {
//   return (
//     <div className='w-full min-h-[500vh] bg-[#15161F]'>
//       {/* Make this sticky with a top value */}
//       <div className='sticky top-0'>

//         <div className='flex items-center w-[80vw] m-auto '>
//           <div style={{ opacity: '1' }}>
//             <img src={image1} alt="character" />
//           </div>
//           <div style={{ opacity: '1' }}>
//             <img src={image2} alt="character" />
//           </div>
//           <div style={{ opacity: '1' }}>
//             <img src={image3} alt="character" />
//           </div>
//           <div style={{ opacity: '1' }}>
//             <img src={image4} alt="character" />
//           </div>
//           <div style={{ opacity: '1' }}>
//             <img src={image5} alt="character" />
//           </div>
//         </div>

//         <div className='text-white flex w-full justify-center pb-[200px]'>
//           <div style={{ opacity: "1" }} className='absolute'>Image1</div>
//           <div style={{ opacity: "1" }} className='absolute'>Image2</div>
//           <div style={{ opacity: "1" }} className='absolute'>Image3</div>
//           <div style={{ opacity: "1" }} className='absolute'>Image3</div>
//           <div style={{ opacity: "1" }} className='absolute'>Image4</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CharacterScroller












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

  useEffect(() => {
    const container = containerRef.current
    const images = [image1Ref.current, image2Ref.current, image3Ref.current, image4Ref.current, image5Ref.current]

    // Initially hide all images except the first one
    gsap.set(images.slice(1), { opacity: 0 })
    gsap.set(image1Ref.current, { opacity: 1 })

    // Create animations for each image (starting from image 2)
    images.slice(1).forEach((image, index) => {
      gsap.to(image, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: `${(index + 1) * 20}% top`, // Stagger the trigger points
          end: `${(index + 2) * 20}% top`,
          scrub: 1, // Smooth animation tied to scroll
          toggleActions: "play none none reverse"
        }
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[500vh] bg-[#15161F] pb-[200px]"
    >
      {/* Sticky image layout */}
      <div className="sticky top-30">
        <div className="flex items-end justify-center w-[70vw] m-auto gap-4">
          <div ref={image1Ref}>
            <img 
              src={image1} 
              alt="character 1" 
              className="  object-contain"
            />
          </div>
          <div ref={image2Ref}>
            <img 
              src={image2} 
              alt="character 2" 
              className="  object-contain"
            />
          </div>
          <div ref={image3Ref}>
            <img 
              src={image3} 
              alt="character 3" 
              className="  object-contain"
            />
          </div>
          <div ref={image4Ref}>
            <img 
              src={image4} 
              alt="character 4" 
              className="  object-contain"
            />
          </div>
          <div ref={image5Ref}>
            <img 
              src={image5} 
              alt="character 5" 
              className="  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterScroller