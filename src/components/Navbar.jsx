import React, {useState} from 'react'

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="absolute top-0 left-0 mt-[20px] pl-16 flex items-center w-full z-20">
      <h1 className="text-4xl leading-snug text-white lg:pr-96 md:mr-24"><a className="text-4xl leading-snug text-white logo" href="/">Bazaar</a></h1>
      <button className="block pr-4 ml-auto md:hidden" onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
<svg width="25" height="25" viewBox="0 0 136 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 99H127.125M9 54H127.125M9 9H127.125" stroke="white" stroke-width="16.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
      <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
    <ul className='items-center hidden w-full text-white lg:pl-44 md:flex md:max-w-screen-md gap-y-16 lg:mr-0 md:gap-x-8 lg:gap-x-16'>
        <a className='cursor' href="/"><li className=' hover:text-[#5D4AB4] text-xl leading-6 tracking-wider md:border-none py-8 border-b-2 border-white'>Explore</li></a>
          <li className='text-xl py-8 leading-6 tracking-wider border-b-2 border-white hover:text-[#5D4AB4] md:border-none '><a className='cursor' href="/">Stats</a></li>
          <li className='text-xl py-8 leading-6 tracking-wider border-b-2 border-white hover:text-[#5D4AB4] md:border-none '><a className="cursor" href="/">Resources</a></li>
          <li className='py-8 text-xl leading-6 tracking-wider'><a className='cursor' href="/"><button className='py-2 text-lg leading-5 text-white border border-white md:-py-4 btn-gradient px-9'>Sign In</button></a></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar