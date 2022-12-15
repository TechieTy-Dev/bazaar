import React from 'react'
import block from '../assets/blockchain 1.svg'
import wallet from '../assets/digital_wallet 1.svg'
import trade from '../assets/Group 2.svg'
import lock from '../assets/Group 3.svg'

import text from '../assets/Title.png'

const Resources = () => {
  return (
    <section className="mt-24">


      <hr className='w-[300px] ml-44 lg:w-[700px] lg:ml-[680px] mb-5' />
      <img className='p-4 md:p-4 lg:p-8 xl:ml-16 ' src={text} alt="" loading=' lazy' />
      <hr className=' ml-4 w-[300px] lg:w-[700px] mt-8 md:ml-16'  />
      <div className='z-10 grid grid-cols-1 mt-0 text-white lg:mt-8 lx:mt-24 md:grid-cols-2 md:grid-rows-2'>
        <div className=' w-[350px]  xl:w-[520px] mt-16 lg:mt-24 flex flex-col lg:flex-row ml-16 lg:ml-0'>
          <img src={block} loading='lazy'  className="w-48 h-48 
          lg:w-64 mx-auto md:mx-0 lg:h-64 xl:w-[290px] xl:h-[250px]  xl:mr-4" alt="block graphic" />
          <div className='flex flex-col items-start justify-center mt-4 text-left'>
          <h1 className='text-4xl font-normal leading-10 tracking-wide '>Learn</h1>
          <p className='mt-6 leading-5 tracking-wide w-[300px] lg:w-[240px] xl:w-[380px] h-[90px] '>Vero repellat molestiae fugit sunt enim eos. Qui ipsa officiis optio non ducimus sed sunt architecto ut. Hic explicabo ratione quaerat eaque similique commodi excepturi.</p>
          <button className="bg-[#00A3FF] w-[220px] h-[50px] rounded-lg text-white mt-8 lg:mt-20 xl:mt-4 lg:hover:bg-[#036fad]">Learn More</button>
        </div>
        </div>
        <div className=' w-[350px] xl:w-[520px] mt-16 lg:mt-24 flex flex-col lg:flex-row ml-16 lg:ml-0 '>
          <img src={wallet} className="w-48 h-48 
          lg:w-64 mx-auto md:mx-0 lg:h-64 xl:w-[290px] xl:h-[250px]  xl:mr-4" alt="wallet graphic" />
          <div className='flex flex-col items-start justify-center mt-4 text-left'>
          <h1 className='text-4xl font-normal leading-10 tracking-wide '>Taxes</h1>
          <p className='mt-6 leading-5 tracking-wide w-[300px] lg:w-[240px] xl:w-[380px] h-[90px] '>Vero repellat molestiae fugit sunt enim eos. Qui ipsa officiis optio non ducimus sed sunt architecto ut. Hic explicabo ratione quaerat eaque similique commodi excepturi.</p>
          <button className="bg-[#00A3FF] w-[220px] h-[50px] rounded-lg text-white mt-8 lg:mt-20 xl:mt-4 ; lg:hover:bg-[#036fad]">Learn More</button>
        </div>
        </div>
        <div className=' w-[350px] lg:w-[520px]  mt-16 lg:mt-24 flex flex-col lg:flex-row ml-16 lg:ml-0'>
          <img src={trade} loading='lazy'  className="w-48 h-48 mx-auto md:mx-0
          lg:w-64 lg:h-64 xl:w-[290px] xl:h-[250px]  " alt="exchange graphic" />
          <div className='flex flex-col items-start justify-center mt-4 text-left'>
          <h1 className='text-4xl font-normal leading-10 tracking-wide '>Docs</h1>
          <p className='mt-6 leading-5 tracking-wide w-[300px] lg:w-[240px] xl:w-[380px] h-[90px] '>Vero repellat molestiae fugit sunt enim eos. Qui ipsa officiis optio non ducimus sed sunt architecto ut. Hic explicabo ratione quaerat eaque similique commodi excepturi.</p>
          <button className="bg-[#00A3FF] w-[220px] h-[50px] rounded-lg text-white mt-8 lg:mt-20 xl:mt-4 lg:hover:bg-[#036fad]">View Docs</button>
        </div>
        </div>
        <div className=' w-[350px] lg:w-[500px] mt-16 lg:mt-24 flex flex-col lg:flex-row ml-16 lg:ml-0'>
          <img src={lock} className="w-48 h-48 
          lg:w-60 mx-auto lg:h-60 xl:w-[290px] xl:h-[250px] md:mx-0 " loading='lazy'  alt="lock graphic" />
          <div className='flex flex-col items-start justify-center mt-4 text-left'>
          <h1 className='text-4xl font-normal leading-10 tracking-wide '>Investors</h1>
          <p className='mt-6 leading-5 tracking-wide w-[300px] lg:w-[240px] xl:w-[380px] h-[90px] '>Vero repellat molestiae fugit sunt enim eos. Qui ipsa officiis optio non ducimus sed sunt architecto ut. Hic explicabo ratione quaerat eaque similique commodi excepturi.</p>
          <button className="bg-[#00A3FF] w-[220px] h-[50px] rounded-lg text-white mt-8 lg:mt-20 xl:mt-4 lg:hover:bg-[#036fad]">View Report</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Resources