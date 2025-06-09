import { useRef } from 'react'
import gsap from 'gsap';
import AnimatedTitle from './AnimatedTitle.jsx';
import Button from './Button.jsx';
import RoundedCorners from './RoundedCorners.jsx';

const Story = () => {
    const frameRef = useRef('null');

    const handelMouseLeave = ()=>{
        const element = frameRef.current;

        gsap.to(element,{
            duration : 0.3,
            rotateX:0, rotateY:0,
            ease:'power1.inOut'
        })
    };

    const handelMouseUp = ()=>{
    
    };
    const handelMouseEnter = ()=>{
    
    };

    const handelMouseMove = (e)=>{      
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ( (y - centerY) / centerY) * -20;
        const rotateY = ( (x - centerX) / centerX) * 20;
        gsap.to(element,{
            duration : 0.3,
            rotateX, rotateY,
            transformPerspective : 500,
            ease:'power1.inOut'
        })

    };


  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className="flex flex-col size-full items-center py-10 pb-24">
            <p className='font-canel text-sm uppercase tracking-3 md:text-[30px]'>The Popular Events</p>
            <div className="relative size-full font-zentry">
                <AnimatedTitle 
                title="Art festivals<br/> j<b>o</b>urney b<b>e</b>gins"
                sectionId="#story"
                containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                />
                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img 
                            ref={frameRef}
                            onMouseLeave={handelMouseLeave}
                            onMouseUp={handelMouseUp}
                            onMouseEnter={handelMouseEnter}
                            onMouseMove={handelMouseMove}
                            src="/img/pic6.jpg" 
                            alt="entrance" 
                            loading='lazy'
                            className='object-contain'/>
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>
            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className='mt-70 max-w-sm text-center text-violet-50 md:mt-3 md:text-start'>Where realms converge, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum dignissimos impedit soluta adipisci repudiandae dolor!
                          Quo,  necessitatibus ipsa incidunt explicabo.
                    </p>
                    <Button 
                    id="realm-button"
                    title="discover more"
                    containerClass="mt-5 bg-yellow-300"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
