import React from 'react'
import bear from '../assets/furryBear.png'
import score from '../assets/RarityScore.svg'
import score1 from '../assets/RarityScore (1).svg'
import score2 from '../assets/RarityScore (2).svg'
import score3 from '../assets/RarityScore (3).svg'
import eth from '../assets/ETH Icon.svg'
import circle from '../assets/Ellipse 3.png'
import tails from '../assets/FuzzyTails1 1.png'
import fairy from '../assets/Fairy 1.png'
import bull from '../assets/image 2 (2).png'
const Card = () => {
  return (
    <div className="flex w-full cards-container">
        <div className='absolute z-0 top-[500px] left-[200px]' ><img src={circle} alt="background highlight" /></div>
      <div className="flex ml-6 lg:ml-16 flex-col text-white w-[300px]  mt-6 lg:mt-16 card">
      <div className="max-w-[300px]">
      <img src={bear} alt="bear" loading='lazy' />
      </div>
      <div className='flex flex-col mt-5 container-content'>
        <div className='flex'>
          <div className='flex flex-col text-left'>
        <h3 className='text-2xl font-bold leading-8 tracking-wide'>Bear #513</h3>
        <h5 className="text-lg font-normal leading-5 tracking-wide">Furry Bear Club </h5>
        </div>
        <div className='flex ml-20 rating-circle'>
          <img src={score} alt="rarity score" loading='lazy'  />
          </div>
        </div>
        <div className='flex flex-col text-left'>
        <p className='mt-8 mb-3 text-base font-normal leading-5'>Current Bid</p>
        <div className='flex'>
        <img src={eth} alt="Eth Symbol" loading='lazy'  />
        <h3 className='ml-2 text-xl font-bold leading-6 '>1.567 ETH</h3>
        <span className='mt-2 ml-2 text-xs text-gray-400 '>$2,001.34</span>
        </div>
        </div>
      </div>
      <button className='mt-6 w-[300px] h-[50px] card-btn-gradient'>Place Bid</button>
    </div>
    <div className="flex ml-8 lg:ml-16 flex-col text-white w-[300px]  mt-6 lg:mt-16 card">
      <div className="max-w-[300px]">
      <img src={tails} alt="bear"  loading='lazy' />
      </div>
      <div className='flex flex-col mt-5 container-content'>
        <div className='flex'>
          <div className='flex flex-col text-left'>
        <h3 className='text-2xl font-bold leading-8 tracking-wide w-36'>Fuzzy #11</h3>
        <h5 className="text-lg font-normal leading-5 tracking-wide">Fuzzy Tails Crib </h5>
        </div>
        <div className='flex ml-20 rating-circle'>
          <img src={score1} alt="rarity score" loading='lazy'  />
          </div>
        </div>
        <div className='flex flex-col text-left'>
        <p className='mt-8 mb-3 text-base font-normal leading-5'>Current Bid</p>
        <div className='flex'>
        <img src={eth} alt="Eth Symbol" loading='lazy' />
        <h3 className='ml-2 text-xl font-bold leading-6 '>.550 ETH</h3>
        <span className='mt-2 ml-2 text-xs text-gray-400 '>$707.45</span>
        </div>
        </div>
      </div>
      <button className='mt-6 w-[300px] h-[50px] card-btn-gradient'>Place Bid</button>
    </div>
    <div className="flex ml-8 lg:ml-16 flex-col text-white w-[300px]  mt-6 lg:mt-16 card">
      <div className="max-w-[300px]">
      <img src={fairy} alt="bear" loading='lazy'  />
      </div>
      <div className='flex flex-col mt-5 container-content'>
        <div className='flex'>
          <div className='flex flex-col text-left'>
        <h3 className='text-2xl font-bold leading-8 tracking-wide'>Fairy #230</h3>
        <h5 className="text-lg font-normal leading-5 tracking-wide">Fairy Land</h5>
        </div>
        <div className='flex ml-20 rating-circle'>
          <img src={score2} alt="rarity score" loading='lazy'  />
          </div>
        </div>
        <div className='flex flex-col text-left'>
        <p className='mt-8 mb-3 text-base font-normal leading-5'>Current Bid</p>
        <div className='flex'>
        <img src={eth} alt="Eth Symbol" loading='lazy'  />
        <h3 className='ml-2 text-xl font-bold leading-6 '>2.721 ETH</h3>
        <span className='mt-2 ml-2 text-xs text-gray-400 '>$3,429.14</span>
        </div>
        </div>
      </div>
      <button className='mt-6 w-[300px] h-[50px] card-btn-gradient'>Place Bid</button>
    </div>
    <div className="flex ml-8 lg:ml-16 flex-col text-white w-[300px]  mt-6 lg:mt-16 card">
      <div className="max-w-[300px]">
      <img src={bull} alt="bear" loading='lazy'  />
      </div>
      <div className='flex flex-col mt-5 container-content'>
        <div className='flex'>
          <div className='flex flex-col text-left'>
        <h3 className='text-2xl font-bold leading-8 tracking-wide'>Bull #6896</h3>
        <h5 className="text-lg font-normal leading-5 tracking-wide">Bulls & Apes Project</h5>
        </div>
        <div className='flex ml-20 rating-circle'>
          <img src={score3} alt="rarity score" loading='lazy'  />
          </div>
        </div>
        <div className='flex flex-col text-left'>
        <p className='mt-8 mb-3 text-base font-normal leading-5'>Current Bid</p>
        <div className='flex'>
        <img src={eth} alt="Eth Symbol" loading='lazy'  />
        <h3 className='ml-2 text-xl font-bold leading-6 '>10 ETH</h3>
        <span className='mt-2 ml-2 text-xs text-gray-400 '>$17,312.73</span>
        </div>
        </div>
      </div>
      <button className='mt-6 w-[300px] h-[50px] card-btn-gradient'>Place Bid</button>
    </div>
    </div>
  )
}

export default Card