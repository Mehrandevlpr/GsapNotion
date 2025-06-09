import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start:'center center',
                end :'+=800 center',
                scrub:0.5,
                pin:true,
                pinSpacing:true,
                invalidateOnRefresh: true,
            }
        })
        clipAnimation.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius:0,
        })
    })

    return (
        <div id='about' className='min-h-screen w-screen bg-stone-700'>
          <div className="relative py-5 flex flex-col items-center gap-5">
             <h2 className="font-canel text-sm tracking-3 text-stone-400 uppercase md:text-[30px]">Welcome to Our gallery</h2>
                <AnimatedTitle 
                title="Disc<b>o</b>ver the world's <br/>  l<b>a</b>rgest shared advanture"
                containerClass="!text-black text-center"
                />
                <div className="about-subtext">
                   <p className='text-stone-900'>Ignite Your spirit with phenonmenal ideas</p>
                   <p className='text-stone-900'>Be creative</p>
                </div>
            </div>
            <div className="h-dvh w-screen" id='clip'>
                <div className="mask-clip-path about-image">
                        <img
                        src="img/pic3.webp" 
                        alt="Background" 
                        className='absolute left-0 top-0 size-full object-cover'
                        />
                </div>
           </div>
        </div>
    )
}

export default About
