import Button from './Button.jsx'

const ImageClipBox =({ src, clipClass })=>(
     <div className={clipClass}>
         <img src={src} alt="Contact-page" loading="lazy"/>
    </div>
)

const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">

          <div className="absolute -left-20 top-0 hidden h-full w-72  overflow-hidden sm:block lg:left-20 lg:w-96">
            
            <ImageClipBox  src="/img/pic5.webp" clipClass="contact-clip-path-1"/>
            <ImageClipBox src="/img/pic7.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"/>
        </div>
        <div className="absolute -top-25 right-20 w-60 sm:top-1/3 md:left-auto md:right-10 lg:top-20 lg:w-80 z-20">
            <ImageClipBox src="/img/pic5.webp" clipClass="absolute md:scale-125 mt-20"/>
            <ImageClipBox src="/img/pic8.webp" clipClass="sword-man-clip-path md:scale-125"/>
        </div>
          <div className="flex flex-col items-center text-center">
            <p className="font-canel text-[10px] uppercase">Join our Blog</p>
            <p className="special-font mt-50 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
                Let go thro<b>u</b>ght<br/> the history t<b>o</b>gether !!
            </p>
            <Button 
            title="contact us"
            containerClass="mt-10 cursor-pointer bg-yellow-300"
            />
          </div>
          </div>

    </div>
  )
}

export default Contact
