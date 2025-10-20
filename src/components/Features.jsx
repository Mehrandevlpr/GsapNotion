import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const BentoTilt = ({ children, className = '' })=>{
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handelMouseMove = (e)=>{
       if(!itemRef.current) return;

       const { left, top, width, height } = itemRef.current.getBoundingClientRect();
       const relativeX = (e.clientX - left) / width;
       const relativeY = (e.clientY - top) / height;

       const tiltX = (relativeY - 0.5) * 30;
       const tiltY = (relativeX - 0.5) * -30;

       const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
       setTransformStyle(newTransform);
      
    }
    const handelMouseLeave = (e)=>{
        setTransformStyle('');
    }
   return (
    <div 
    className={className} 
    ref={itemRef} 
    onMouseMove={handelMouseMove} 
    onMouseLeave={handelMouseLeave} 
    style={{transform:transformStyle}}>

        {children}
        
    </div>
   )
}


const BentoCard = ({ src, title, description})=>{
    return (
        <div className="relative size-full">
            <video 
            src={src}
            loop
            muted
            autoPlay
            loading="lazy"
            className='absolute left-0 top-0 size-full object-cover object-center'
            />
           <div className="relative z-10 flex flex-col size-full p-5 text-blue-50">
                <h1 className="bento-title special-font">{title}</h1>
                {
                description && (<p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>)
                }
          </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-32' id='features'>
      <div className="container mx-auto px-3 md:px-10">
          <div className="px-5 py-32">

              <p className="font-zentry text-lg text-blue-50">
                  Into to the past !!!
              </p>
          
              <p className='max-w-md font-canel tracking-3 text-lg text-blue-50 opacity-70'>
                  Inmmerse yourself in a rich and cultural heritage of the past.
              </p>

          </div>
          <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
              <BentoCard 
              src="videos/feature1.mp4"
              title={<>Ma<b>n</b>agement</>}
              description="A popular event and occasion are happening throughout the world" 
              />
          </BentoTilt>
         <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-7">
                  <BentoTilt className="bento-tilt_1  md:row-span-2">
                      <BentoCard
                      src="videos/feature2.mp4"
                      title={<>Virtual <b>m</b>odel</>}
                      description="An Amazing opportunities to knows who are around us ..."
                      />
                  </BentoTilt>
                   <BentoTilt className="bento-tilt_1 md:row-span-1 aspect-[4/2]">
                      <BentoCard
                      src="videos/feature3.mp4"
                      title={<>L<b>e</b>arning</>}
                      description="An Amazing opportunities to knows who are around us ..."
                      />
                  </BentoTilt>
                  <BentoTilt className="bento-tilt_1 mt-0 md:row-span-1 aspect-[4/2]">
                      <BentoCard
                      src="videos/feature4.mp4"
                      title={<>mon<b>u</b>ment</>}
                      description="An Amazing opportunities to knows who are around us ..."
                      />
                  </BentoTilt>
                  <div className="bento-tilt_2 aspect-[4/2]">
                    <div className="flex size-full flex-col justify-between bg-yellow-300 p-5">
                      <h2 className='bento-title special-font max-w-64 text-black'>M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h2>
                      <TiLocationArrow className='m-5 scale-[5] self-end'/>
                    </div>
                 </div>
                  <BentoTilt className="bento-tilt_2 aspect-[4/2]">
                      <video
                      src="videos/feature6.mp4"
                      loop
                      muted
                      autoPlay
                      loading="lazy"
                      className='size-full object-cover object-center'
                      />
                  </BentoTilt>
             </div>
       </div>
    </section>
  )
}

export default Features
