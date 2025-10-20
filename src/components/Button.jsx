
const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button 
      id={id} 
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full p-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className='relative inline-flex overflow-hidden text-xs uppercase'>
        <div className='font-robert-regular'>
            {title}
        </div>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button
