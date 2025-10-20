import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'

const links = [
    { id:1, href : 'https://discord.com', icon:<FaDiscord />},
    { id:2, href : 'https://twitter.com', icon:<FaTwitter />},
    { id:3, href : 'https://github.com', icon:<FaGithub />},
    { id:4, href : 'https://twitch.com', icon:<FaTwitch />},
]
const Footer = () => {
  return (
    <footer className='w-screen bg-neutral-700 py-4 text-black'>
      <div className="container flex flex-col mx-auto items-center justify-between gap-4 px-4 md:flex-row">
         <p className="text-center text-sm md:text-left font-robert-regular">
            &copy; Nobe developer 2025. All rights reserved
         </p>
         <div className="flex justify-center gap-4 md:justify-start">
             {links.map((link)=>(
                <a 
                key={link.id} 
                href={link.href} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-black transition-colors duration-500 ease-in-out'
                >
                    {link.icon}
                </a>
             ))}
         </div>
         <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right font-robert-regular'>
            Privacy Policy
         </a>
      </div>
    </footer>
  )
}

export default Footer
