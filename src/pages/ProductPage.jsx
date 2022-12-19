import React from 'react'
 import pink from '../assets/Ellipse 9.svg'
 import green from '../assets/Ellipse 10.svg'
import blue from '../assets/Ellipse 11.svg'
 import yellow from '../assets/Ellipse 12.svg'
import logo from '../assets/bear 1.svg'
import banner from '../assets/background (1).png'
import panda from '../assets/Panda1 1.svg'
import { Footer } from '../components'
import star from '../assets/Vector (7).svg'



const ProductPage = () => {
  return (
    <div className='w-full mx-auto bg-white '>
      <div className="absolute top-0 z-0 left-[50%]"><img src={yellow} alt="" /></div>
      <div className="absolute top-[800px] z-0 left-0"><img src={pink} alt="" /></div>
      <div className='absolute right-0 z-0 bottom-[-1000px]'><img src={green} alt="" /></div>
      <div className='absolute right-[0px] z-0 bottom-[-1400px]'><img src={blue} alt="" /></div>
      
      <div className="flex items-center justify-center navbar-gradient">
      <h1 className="text-4xl leading-snug text-white lg:pr-96 md:mr-24"><a className="text-4xl leading-snug text-white logo" href="/">Bazaar</a></h1>
        <ul className='items-center hidden w-full text-white lg:pl-44 md:flex md:max-w-screen-md gap-y-16 lg:mr-0 md:gap-x-8 lg:gap-x-16'>
        <a className='cursor' href="/"><li className=' hover:text-[#5D4AB4] text-xl leading-6 tracking-wider md:border-none py-8 border-b-2 border-white'>Explore</li></a>
          <li className='text-xl py-8 leading-6 tracking-wider border-b-2 border-white hover:text-[#5D4AB4] md:border-none '><a className='cursor' href="/">Stats</a></li>
          <li className='text-xl py-8 leading-6 tracking-wider border-b-2 border-white hover:text-[#5D4AB4] md:border-none '><a className="cursor" href="/">Resources</a></li>
          <li className='py-8 text-xl leading-6 tracking-wider'><a className='cursor' href="/"><button className='py-2 text-lg leading-5 text-white border border-white md:-py-4 btn-gradient px-9'>Sign In</button></a></li>
        </ul>
      </div>
      <div className='relative'><img src={banner} className="z-20 w-full" alt="" /></div>
      <div className='relative z-10 mx-auto'>
        <div className='relative z-10 flex w-full'>
        <div className='flex w-[225px] ml-16 bg-white h-[225px] justify-center items-center rounded-2xl drop-shadow-xl mt-[-8rem]'>
          <img className='w-[120px]  h-[120px] ' src={logo} alt="bear claw" />
        </div>
        <h3 className='text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF23A7] via-[#48EFE5] z-10 to-[#00A3FF] uppercase mt-8 ml-8'>#2 Trending Creator</h3>
        <button className='relative z-10 flex items-center justify-center h-12 px-3 ml-auto mr-8 text-center rounded-lg btn-shadow mt-9'><img src={star} alt="star" className='mr-2' />Add to Watchlist</button>
        </div>
        <h2 className='mt-8 font-bold text-4xl mb-10  text-left ml-[4.75rem]'>Furry Bear Club</h2>
        <div className='flex mx-auto gap-x-16'>
          <div className='relative flex items-center justify-center left-16'>
          <h5 className="text-xl tracking-wide">NFTs Available:</h5>
          <p className='ml-3 text-lg font-bold'>3,743</p>
          </div>
          <div className='relative flex items-center justify-center left-16'>
          <h5 className="text-xl tracking-wide">NFTs Available:</h5>
          <p className='ml-3 text-lg font-bold'>3,743</p>
          </div>
          <div className='relative flex items-center justify-center left-16'>
          <h5 className="text-xl tracking-wide">NFTs Available:</h5>
          <p className='ml-3 text-lg font-bold'>3,743</p>
          </div>
        </div>
      </div>
      <form className="flex mx-auto mt-6 ml-16">
        <input className=' border-2 border-[#E2E2E2] lg:w-[370px] lg:h-[50px]  rounded-md mr-5' placeholder='Search' />
        <button  id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-black lg:w-[250px] bg-[#E2E2E2 border-2 rounded-lg border-[#c9c9c9]">Filter</button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y-2 divide-gray-100 rounded shadow w-44">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price: Highest to Lowest</a>
      </li>
      <li>
        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Price: Lowest to Highest</a>
      </li>
      <li>
        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Volume: Highest to Lowest</a>
      </li>
      <li>
        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Volume: Lowest to Highest</a>
      </li>
    </ul>
        </div>
        <button className='bg-[#00A3FF] text-white ml-auto mr-8 btn-2-shadow rounded-lg lg:w-[265px]'>Make Collection Offer</button>
      </form>
      <div className='w-[90%] mt-20 grid lg:grid-cols-4 lg:grid-rows-2 gap-y-6 items-center justify-center mx-auto gap-x-11 mb-11 z-20 relative'>
        <div className='w-[100%] text-left flex flex-col shadow-xl relative z-10'>
          
          <img className='relative' src={panda} alt="" />
          <div className='relative z-10 px-4 bg-white opacity-80'>
          <h5 className='relative mt-3 text-xl font-bold'>Furry Bear #569</h5>
          <h6 className='relative z-10 mt-2 font-semibold'>1.05 ETH</h6>
          <p className=' font-medium text-[#B7B4B6] mt-10'>Last Sale: 0.95 ETH</p>
          </div>
        </div>
        <div className='w-[100%] text-left flex flex-col shadow-xl'>
          <img src={panda} alt="" />
          <div className='relative z-10 px-4 bg-white opacity-80'>
          <h5 className='mt-3 text-xl font-bold'>Furry Bear #569</h5>
          <h6 className='mt-2 font-semibold'>1.05 ETH</h6>
          <p className=' font-medium text-[#B7B4B6] mt-10'>Last Sale: 0.95 ETH</p>
          </div>
        </div>
        <div className='w-[100%] text-left flex flex-col shadow-xl'>
          <img src={panda} alt="" />
          <div className='relative z-10 px-4 bg-white opacity-80'>
          <h5 className='mt-3 text-xl font-bold'>Furry Bear #569</h5>
          <h6 className='mt-2 font-semibold'>1.05 ETH</h6>
          <p className=' font-medium text-[#B7B4B6] mt-10'>Last Sale: 0.95 ETH</p>
          </div>
        </div>
        <div className='w-[100%] text-left flex flex-col shadow-xl'>
          <img src={panda} alt="" />
          <div className='relative z-10 px-4 bg-white opacity-80'>
          <h5 className='mt-3 text-xl font-bold'>Furry Bear #569</h5>
          <h6 className='mt-2 font-semibold'>1.05 ETH</h6>
          <p className=' font-medium text-[#B7B4B6] mt-10'>Last Sale: 0.95 ETH</p>
          </div>
        </div>
        <div className='w-[100%] text-left flex flex-col shadow-xl'>
          <img src={panda} alt="" />
          <div className='relative z-10 px-4 bg-white opacity-80'>
          <h5 className='mt-3 text-xl font-bold'>Furry Bear #569</h5>
          <h6 className='mt-2 font-semibold'>1.05 ETH</h6>
          <p className=' font-medium text-[#B7B4B6] mt-10'>Last Sale: 0.95 ETH</p>
          </div>
        </div>
        <div className='w-[100%] text-left flex flex-col shadow-xl'>
          <img src={panda} alt="" />
          <div className='relative z-10 px-4 bg-white opacity-80'>
          <h5 className='mt-3 text-xl font-bold'>Furry Bear #569</h5>
          <h6 className='mt-2 font-semibold'>1.05 ETH</h6>
          <p className=' font-medium text-[#B7B4B6] mt-10'>Last Sale: 0.95 ETH</p>
          </div>
        </div>
      </div>
      <Footer />
      <script src="../path/to/flowbite/dist/flowbite.js"></script>
    </div>
    
  )
}

export default ProductPage