import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);


  useEffect(()=>{
      const context = gsap.context(()=>{},containerRef)
      const titleAimation = gsap.timeline({
        scrollTrigger : {
            trigger:containerRef.current,
            start:'100 bottom',
            end:'center bottom',
            invalidateOnRefresh: true,
            //              onEnter,onLeave,onEnterBack,onLeaveBack 
            toggleActions: 'play none none reverse'
        }
      });

      titleAimation.to('.animated-word',{
        opacity:1,
        transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease:'power2.inOut',
        stagger:0.02,
      },containerRef)


      return ()=>context.revert()

  },[])

  return (
    <div 
    ref={containerRef}
    className={`animated-title ${containerClass}`}>
       <div className="text-center text-stone-800 text-4xl uppercase leading-[0.8] md:text-[6rem]">
                   {title.split('<br/>').map((line, index)=>(
                    <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3' >
                        {line.split(' ').map((word, i)=>(
                            <span
                             key={i} 
                             className='animated-word'
                             dangerouslySetInnerHTML={{ __html:word }}
                             />
                        ))}
                    </div>
                   ))}
        </div>
    </div>
  )
}

export default AnimatedTitle
