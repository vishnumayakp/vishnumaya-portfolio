import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
    <div className="container mx-auto px-4 flex items-center justify-between h-16">
      <div className='flex justify-between items-center gap-4'>
      <div className="w-8 h-8 bg-[#f2a428] rounded-full"></div>
      <p className="text-2xl font-acme font-medium ">
        Vishnumaya  
      </p> 
      <p className="text-sm font-Roboto">
          Software Developer
      </p>
      </div> 
    
      <ul className="hidden md:flex items-center divide-x divide-black text-black font-roboto text-sm">
        <li className="px-4 text-md ">
          <a href="#home" className="hover:text-[#926402]">Home</a>
        </li>
        <li className="px-4 text-md ">
          <a href="#about" className="hover:text-[#926402]">About</a>
        </li>
        <li className="px-4 text-md ">
          <a href="#projects" className="hover:text-[#926402]">Projects</a>
        </li>
        <li className="px-4 text-md ">
          <a href="#contact" className="hover:text-[#926402]">Contact</a>
        </li>
      </ul>
    </div>
</nav>

  )
}

export default Navbar