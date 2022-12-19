import React from 'react'
import linkedin from  '../assets/Component 2.svg'
import twitter from '../assets/Component 3.svg'
import facebook from '../assets/Component 4.svg'
import reddit from '../assets/Component 5.svg'

const Footer = () => {
  return (
    <section className=' relative z-10 bg-[#08012A] w-full mt-40'>
      <div className='flex justify-between'>
        <div className='flex flex-col ml-16 text-left text-white'>
          <h1 className='text-4xl leading-relaxed tracking-wide mt-9'>Bazaar</h1>
          <p className='mt-8 text-xl leading-6 '>8638 Rice St. <br /> Suite 579 <br />Austin, Texas 75096</p>
          <ul className='flex mt-7 '>
          <a href="/"><img src={linkedin} alt="linkedin link" /></a>
          <a href="/"><img src={twitter} alt="twitter link" /></a>
          <a href="/"><img src={facebook} alt="facebook link" /></a>
          <a href="/"><img src={reddit} alt="reddit link" /></a>
          </ul>
        </div>
        <div className='flex flex-col items-end justify-end mt-12 text-right text-white mr-9 mb-9'>
          <ul> 
            <a href="/"><li className='mb-6'>Home</li></a>
            <a href="/"><li className='mb-6'>Stats</li></a>
            <a href="/"><li className='mb-6'>Resources</li></a>
            <a href="/"><li className='mb-6'>Contact</li></a>
            <a href="/"><li className='mb-6'>Careers</li></a>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer