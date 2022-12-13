import React from 'react'
import Clock from './Clock'
import Card from './Card'
import bolt from '../assets/Vector (5).svg'


const Auction = ({timerHours, timerMinutes, timerSeconds}) => {

  return (
    <section className='overflow-x-hidden mt-28 '>
      <div className='flex flex-col text-white md:flex-row'>
      <h1 className="ml-6 text-2xl font-black text-left lg:ml-16 lg:mr-16 lg:text-4xl">Live Auction</h1>
      <div className='flex ml-6 lg:ml-16'>
<img src={bolt} className="w-6 h-6 mt-6" alt="bolt" />
      <Clock
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds} />
        </div>
      </div>
      <div>
        <Card />
      </div>
    </section>
  )
}

export default Auction