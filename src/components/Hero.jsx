import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const upcomingMiniVideoIndex = (currentIndex % totalVideos) + 1;

  const handelMiniVideoClick = () => {
     setHasClicked(true);
     setCurrentIndex(upcomingMiniVideoIndex);
  }

  useEffect(()=>{
    if(loadedVideos === (totalVideos - 1) ){
      setIsLoading(false)
    }
  },[loadedVideos])

  const handelVideoLoad = ()=>{
    setLoadedVideos( (prev) => prev + 1 );
  }

  const getVideoSrc = (index)=>`videos/video${index}.mp4`;


  useGSAP(() => {
    if(hasClicked){
      gsap.set('#next-video',{visibility:'visible'});

      gsap.to('#next-video',{
        transformOrigin:'center center',
        scale:1,
        width:'100%',
        height:'100%',
        duration:1,
        ease:'power1.inOut',
        onStart: ()=> nextVideoRef.current.play(),
      })

      gsap.from('#current-video',{
        transformOrigin:'center center',
        scale:0,
        duration:1.5,
        ease:'power1.inOut'
      })
    }
  },{dependencies:[currentIndex],revertOnUpdate:true})

  useGSAP(()=>{
    gsap.set('#video-frame',{
      clipPath:"polygon(20% 0%,90% 0%, 70% 80%, 0% 90%)",
      borderRadius:'0 0 40% 10%'
    }),
    gsap.from('#video-frame',{
        clipPath:"polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
        borderRadius:'0 0 0 0',
        ease:'power1.inOut',
        scrollTrigger:{
           trigger:'#video-frame',
           start:'center center',
           end:'bottom center',
           scrub: true,
        }
    })
  })
 



  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

      {isLoading  && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
            <div className="three-body">
              <div className="three-body__dot" />
              <div className="three-body__dot" />
              <div className="three-body__dot" />
            </div>
        </div>
      )}

       <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden bg-blue-100'>
          <div>
             <div className='mask-clip-path left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-50 size-64 cursor-pointer rounded-lg'>
                <div onClick={handelMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all
                  duration-500 ease-in hover:scale-100 hover:opacity-100 hover:rounded-lg overflow-visible z-50'>
                      <video 
                      ref={nextVideoRef} 
                      src={getVideoSrc(upcomingMiniVideoIndex)}
                      loop
                      muted
                      id='current-video'
                      className='size-64 origin-center scale-150 object-cover mask-image object-center rounded-lg'
                      onLoadedData={handelVideoLoad}
                    />
                </div>
              </div>
               <video 
                      ref={nextVideoRef} 
                      src={getVideoSrc(currentIndex)}
                      loop
                      muted
                      id='next-video'
                      className='left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute invisible z-20 object-cover object-center'
                      onLoadedData={handelVideoLoad}
               />

                <video 
                      src={getVideoSrc( currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                      loop
                      autoPlay
                      muted
                      className='absolute left-0 top-0 size-full object-cover object-center'
                      onLoadedData={handelVideoLoad}
                   />
          </div>
          <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100'>
            <b>A</b>rchive
          </h1>
          <div className='absolute left-0 top-0 z-40 size-full'>
            <div className='mt-24 px-5 sm:px-10'>
              <h1 className='special-font hero-heading text-stone-500'>Galleri<b>A</b></h1>
              <p className='mb-5 max-w-64 font-robert-regular text-stone-400'> Serach through the History !!!
                <br /> Choose your style
              </p>
              <Button 
               id="watch-trailer"
               title="Watch Trailer" 
               leftIcon={<TiLocationArrow />}
               containerClass="bg-stone-700 text-stone-200 flex gap-1"
               />
            </div>
          </div>
       </div>
       <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black'>
            <b>A</b>rchive
        </h1>
    </div>
  )
}

export default Hero
