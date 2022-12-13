import React from 'react'
import CollectionCard from './CollectionCard'
import circle from '../assets/Circle.png'

const Collections = () => {
  return (
    <section className='w-full mt-32 '>
        <div className='hidden lg:absolute lg:top-[1725px] lg:right-0' ><img src={circle} alt="" /></div>
      <h1 className='mb-8 ml-16 text-2xl font-black leading-10 text-left text-white lg:mb-16 lg:text-4xl'>DISCOVER COLLECTIONS</h1>
      <CollectionCard />
    </section>
  )
}

export default Collections