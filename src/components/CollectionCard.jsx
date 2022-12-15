import React from 'react'
import fuzzy1 from '../assets/FuzzyTails2 1.svg'
import fuzzy2 from '../assets/FuzzyTails3 1.svg'
import fuzzy3 from '../assets/FuzzyTails4 1.svg'
import fuzzy4 from '../assets/FuzzyTails6 1.svg'
import fuzzy5 from '../assets/FuzzyTails7 1.svg'
import fuzzy6 from '../assets/FuzzyTails8 1.svg'
import bear1 from '../assets/Panda1 1.svg'
import bear2 from '../assets/Panda2 1.svg'
import bear3 from '../assets/Panda3 1.svg'
import bear4 from '../assets/Panda6 1.svg'
import bear5 from '../assets/Panda7 1.svg'
import bear6 from '../assets/Panda8 1.svg'
import dino1 from '../assets/PunkDino 1.svg'
import dino2 from '../assets/GenieDino 1.svg'
import dino3 from '../assets/HippyDino1 1.svg'
import dino4 from '../assets/ZombieDino 1.svg'
import dino5 from '../assets/SoliderDino 1.svg'
import dino6 from '../assets/TeacherDino 1.svg'

const CollectionCard = () => {
  return (
    <div className="flex ml-12 overflow-x-hidden lg:ml-0 card-group ">
    <div className='bg-[#08012A] collection-gradient-border  z-10 rounded-lg p-4 w-[470px] ml-4 lg:ml-16'>
      <div className='w-full'>
      <div className='grid w-[100%] justify-center items-center  pt-4 grid-cols-3 gap-2 mx-auto'>
        <img src={fuzzy1} alt="NFT Product" loading='lazy' />
        <img src={fuzzy2} alt="NFT Product" loading='lazy' />
        <img src={fuzzy3} alt="NFT Product" loading='lazy' />
        <img src={fuzzy4} alt="NFT Product" loading='lazy' />
        <img src={fuzzy5} alt="NFT Product" loading='lazy' />
        <img src={fuzzy6} alt="NFT Product" loading='lazy' />
      </div>
      <div className='mt-6 text-left text-white lg:ml-4'>
        <h2 className='text-3xl font-black tracking-wider uppercase'>fuzzy tails crib</h2>
        <h4 className='font-light leading-6 text-md '>2,349 AVAILABLE NFTS</h4>
        <button className='bg-[#573BD9] text-center w-[300px] lg:w-[380px]  mt-20 lg:mt-8 h-[50px] rounded-md mb-4 lg:hover:bg-[#3b2793]'>View Collection</button>
      </div>
      </div>
    </div>
    <div className='bg-[#08012A] collection-gradient-border  z-10 rounded-lg p-4 w-[470px] ml-4 '>
      <div className='w-full'>
      <div className='grid w-[100%] pt-4 grid-cols-3 gap-2'>
        <img src={bear1} alt="NFT Product" loading='lazy' />
        <img src={bear2} alt="NFT Product" loading='lazy' />
        <img src={bear3} alt="NFT Product" loading='lazy' />
        <img src={bear4} alt="NFT Product" loading='lazy' />
        <img src={bear5} alt="NFT Product" loading='lazy' />
        <img src={bear6} alt="NFT Product" loading='lazy' />
      </div>
      <div className='mt-6 ml-4 text-left text-white '>
        <h2 className='text-3xl font-black tracking-wider uppercase'>FURRY BEAR CLUB</h2>
        <h4 className='font-light leading-6 text-md '>2,870 AVAILABLE NFTS</h4>
        <button className='bg-[#573BD9] text-center w-[300px] lg:w-[370px]  mt-20 lg:mt-8 h-[50px] rounded-md mb-4  lg:hover:bg-[#3b2793]'>View Collection</button>
      </div>
      </div>
    </div>
    <div className='bg-[#08012A] collection-gradient-border  z-10 rounded-lg p-4 w-[470px] ml-4 '>
      <div className='w-full'>
      <div className='grid w-[100%] justify-center items-center  pt-4 grid-cols-3 gap-2 mx-auto'>
        <img src={dino1} alt="NFT Product" loading='lazy' />
        <img src={dino2} alt="NFT Product" loading='lazy' />
        <img src={dino3} alt="NFT Product" loading='lazy' />
        <img src={dino4} alt="NFT Product" loading='lazy' />
        <img src={dino5} alt="NFT Product" loading='lazy' />
        <img src={dino6} alt="NFT Product" loading='lazy' />
      </div>
      <div className='mt-6 ml-4 text-left text-white'>
        <h2 className='text-3xl font-black tracking-wider uppercase'>DINO LAND</h2>
        <h4 className='font-light leading-6 text-md '>4,101 AVAILABLE NFTS</h4>
        <button className='bg-[#573BD9] text-center w-[300px] lg:w-[380px]  mt-20 lg:mt-8 h-[50px] rounded-md mb-4 lg:hover:bg-[#3b2793]'>View Collection</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default CollectionCard