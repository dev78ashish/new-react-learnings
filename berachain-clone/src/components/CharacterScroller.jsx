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

  useEffect(() => {
    const containers = gsap.utils.toArray('.container')

    containers.forEach((container) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          pinSpacing: false,
          scrub: true,
          markers: true,
        },
      })

      tl.to(container, {
        autoAlpha: 1,
      }).to(
        container,
        {
          autoAlpha: 0,
        },
        0.5
      )
    })
  }, [])
  

  return (
    <div className="w-full min-h-[500vh] bg-[#15161F]" >
      {/* Sticky image layout (no changes) */}
      <div className="sticky top-0">
        <div className="flex items-center w-[80vw] m-auto">
          <div>
            <img src={image1} alt="character" />
          </div>
          <div>
            <img src={image2} alt="character" />
          </div>
          <div>
            <img src={image3} alt="character" />
          </div>
          <div>
            <img src={image4} alt="character" />
          </div>
          <div>
            <img src={image5} alt="character" />
          </div>
        </div>

        <div className='text-white flex w-full justify-center pb-[200px]'>
           <div style={{ opacity: "0" }} className='container absolute'>Image1</div>
           <div style={{ opacity: "0" }} className='container absolute'>Image2</div>
           <div style={{ opacity: "0" }} className='container absolute'>Image3</div>
           <div style={{ opacity: "0" }} className='container absolute'>Image3</div>
           <div style={{ opacity: "0" }} className='container absolute'>Image4</div>
         </div>
      </div>
    </div>
  )
}

export default CharacterScroller
