import React from 'react'
import dino from '../assets/IMAGE.svg'
import eth from '../assets/ETH Icon.svg'
import panda from '../assets/Panda8 2.svg'
import fairy from '../assets/Fairy 1.svg'
import bull from '../assets/image 3.svg'
import worm from '../assets/FuzzyTails8 2.svg'
import bear from '../assets/KILLABEAR 1.svg'
import dog from '../assets/GUTTER DOGS 1.svg'
import ape from '../assets/BOREDAPE 1.svg'
import cat from '../assets/SHEBA CAT 1.svg'

const Creators = () => {
  return ( 
    <section className='w-full mt-48 overflow-x-hidden'>
      <div className=' w-[90%] flex ml-16'>
        <h1 className='text-2xl w-[200px] font-black tracking-wide text-white lg:text-4xl '>TRENDING CREATORS</h1>
        <button className='uppercase w-[250px] h-[65px] bg-[#08012A] border border-white text-white ml-[660px]'> last 24 Hours</button>
        
      </div>
      <div className='border border-white w-[80%] lg:w-[95%]  bg-[#08012A] mt-16 mx-auto grid lg:grid-cols-2 p-4 lg:grid-rows-5 '>
        <div className='xl:w-[655px] first h-[80px] mt-8 mb-6'>
        <div className='flex mb-4 '>
          <h1 className='mx-4 text-xl font-bold text-white lg:mx-8 lg:text-3xl'>1</h1>
          <img src={dino} alt="dino land product nft" loading="lazy" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-xl font-bold leading-8 tracking-wide text-white uppercase lg:text-3xl '>Dino Land</h3>
            <div className='flex w-[200px] lg:w-[300px]'>
              <p className='mr-4 font-normal text-white lg:uppercase md:mr-6 text-md lg:text-lg tex-left'>Floor Price</p>
              <img src={eth} alt="eth icon" loading='lazy' />
              <span className='ml-2 text-white uppercase'>1.25 Eth</span>
            </div>
          </div>
          <div className='flex-col hidden ml-24 lg:flex'>
            <h5 className="text-3xl leading-8 text-[#04B916]">+25.50%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} alt="eth price icon" loading='lazy' />
              <span className="ml-2">1.25K</span>

            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[330px] xl:w-[650px]' />
        </div>
       
        <div className='xl:w-[655px] sixth hidden lg:block h-[80px] mt-8 mb-4'>
        <div className='flex mb-4'>
          <h1 className='mx-8 text-xl font-bold text-white lg:text-3xl'>6</h1>
          <img src={bear} alt="killa bears product nft" loading='lazy' />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-3xl font-bold leading-8 tracking-wide text-white uppercase '>Killa bear</h3>
            <div className='flex w-[200px] lg:w-[300px]'>
              <p className='mr-4 font-normal text-white lg:uppercase md:mr-6 text-md lg:text-lg tex-left'>Floor price</p>
              <img src={eth} alt="eth icon" loading='lazy' />
              <span className='ml-2 text-white uppercase'>2.75 Eth</span>
            </div>
          </div>
          <div className='flex flex-col ml-24'>
            <h5 className="text-3xl leading-8 text-[#04B916]">+13.75%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} alt="eth price icon" loading='lazy' />
              <span className="ml-2">1.25K</span>
            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[330px] xl:w-[650px]' />
        </div>
        <div className='xl:w-[655px] second h-[80px] mt-8 mb-6'>
        <div className='flex mb-4 '>
          <h1 className='mx-4 text-xl font-bold text-white lg:mx-8 lg:text-3xl'>2</h1>
          <img src={panda} alt="dino land product nft" loading="lazy" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-xl font-bold leading-8 tracking-wide text-white uppercase lg:text-3xl '>bears club</h3>
            <div className='flex w-[200px] lg:w-[300px]'>
              <p className='mr-4 font-normal text-left text-white lg:uppercase md:mr-6 text-md lg:text-lg'>Floor Price</p>
              <img src={eth} alt="eth icon" loading='lazy' />
              <span className='ml-2 text-white uppercase'>1.25 Eth</span>
            </div>
          </div>
          <div className='flex-col items-center justify-center hidden ml-24 lg:flex'>
            <h5 className="text-3xl leading-8 text-[#04B916]">+9.50%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} alt="eth price icon" loading='lazy' />
              <span className="ml-2">1.25K</span>

            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[330px]  xl:w-[650px]' />
        </div>
        <div className='lg:w-[655px] seven hidden lg:block h-[80px] mt-8 mb-4'>
        <div className='flex mb-4'>
          <h1 className='mx-8 text-xl font-bold text-white lg:text-3xl'>7</h1>
          <img src={dog} loading='lazy' alt="gutter dogs product nft" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-3xl font-bold leading-8 tracking-wide text-white uppercase '>gutter dogs</h3>
            <div className='flex w-[300px]'>
              <p className='mr-6 text-lg font-normal text-white uppercase tex-left'>floor price</p>
              <img src={eth} loading='lazy' alt="eth icon"/>
              <span className='ml-2 text-white uppercase'>1.85 Eth</span>
            </div>
          </div>
          <div className='flex flex-col ml-24'>
            <h5 className="text-3xl leading-8 text-[#04B916]">+3.75%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} loading='lazy' alt="eth price icon" />
              <span className="ml-2">1.25K</span>
            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[650px]' />
        </div>
        <div className='lg:w-[655px] three h-[80px] mt-8 mb-6 '>
        <div className='flex mb-4 '>
          <h1 className='mx-4 text-xl font-bold text-white lg:mx-8 lg:text-3xl'>3</h1>
          <img src={fairy} loading='lazy' alt="fairy land product nft" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-xl font-bold leading-8 tracking-wide text-white uppercase lg:text-3xl '>fairy land</h3>
            <div className='flex w-[200px] lg:w-[300px]'>
              <p className='mr-4 font-normal text-white lg:uppercase md:mr-6 text-md lg:text-lg tex-left'>Floor price</p>
              <img src={eth} loading='lazy' alt="eth icon" />
              <span className='ml-2 text-white uppercase'>.75 Eth</span>
            </div>
          </div>
          <div className='flex-col hidden ml-24 lg:flex'>
            <h5 className="text-3xl leading-8 text-[#FF2E00]">-3.50%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} loading='lazy' alt="eth price icon" />
              <span className="ml-2">1.25K</span>

            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[330px] xl:w-[650px]' />
        </div>
       
        <div className='lg:w-[655px] eight  hidden lg:block h-[80px] mt-8 mb-4'>
        <div className='flex mb-4'>
          <h1 className='mx-8 text-xl font-bold text-white lg:text-3xl'>8</h1>
          <img src={ape} loading='lazy' alt="bored product nft" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-3xl font-bold leading-8 tracking-wide text-white uppercase '>B.A.Y.C</h3>
            <div className='flex w-[300px]'>
              <p className='mr-6 text-lg font-normal text-white uppercase tex-left'>floor price</p>
              <img src={eth} loading='lazy' alt="eth icon" />
              <span className='ml-2 text-white uppercase'>2.75 Eth</span>
            </div>
          </div>
          <div className='flex flex-col ml-24'>
            <h5 className="text-3xl leading-8 text-[#FF2E00]">-1.75%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} loading='lazy' alt="eth price icon" />
              <span className="ml-2">1.25K</span>
            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[650px]' />
        </div>
        <div className='lg:w-[655px] h-[80px] mt-8 mb-4'>
        <div className='flex mb-4'>
          <h1 className='mx-4 text-xl font-bold text-white lg:mx-8 lg:text-3xl'>4</h1>
          <img src={bull} loading='lazy' alt="bull project product nft" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-xl font-bold leading-8 tracking-wide text-white uppercase lg:text-3xl'>bulls project</h3>
            <div className='flex w-[200px] lg:w-[300px]'>
              <p className='mr-4 font-normal text-white lg:uppercase md:mr-6 text-md lg:text-lg tex-left'>Floor price</p>
              <img src={eth} loading='lazy' alt="eth icon" />
              <span className='ml-2 text-white uppercase'>1.55 Eth</span>
            </div>
          </div>
          <div className='flex-col hidden ml-24 lg:flex'>
            <h5 className="text-3xl leading-8 text-[#04B916]">+5.50%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} loading='lazy' alt="eth price icon" />
              <span className="ml-2">1.25K</span>
            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[330px] xl:w-[650px]' />
        </div>
        <div className='lg:w-[655px] nine  hidden lg:block h-[80px] mt-8 mb-4'>
        <div className='flex mb-4'>
          <h1 className='mx-8 text-xl font-bold text-white lg:text-3xl'>9</h1>
          <img src={cat} loading='lazy' alt="shaba cat product nft" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-3xl font-bold leading-8 tracking-wide text-white uppercase '>Sheba Cats</h3>
            <div className='flex w-[300px]'>
              <p className='mr-6 text-lg font-normal text-white uppercase tex-left'>floor price</p>
              <img src={eth} loading='lazy' alt="eth icon" />
              <span className='ml-2 text-white uppercase'>2.25 Eth</span>
            </div>
          </div>
          <div className='flex flex-col ml-24'>
            <h5 className="text-3xl leading-8 text-[#FF2E00]">-14.20%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} loading='lazy' alt="eth price icon" />
              <span className="ml-2">1.25K</span>
            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[650px]' />
        </div>
        <div className='lg:w-[655px] h-[80px] mt-8 mb-4'>
        <div className='flex mb-4'>
          <h1 className='mx-4 text-xl font-bold text-white lg:mx-8 lg:text-3xl'>5</h1>
          <img src={worm}  loading='lazy' alt="fuzzy tails product nft" />
          <div className='ml-5 text-left '>
            <h3 className='mb-4 text-xl font-bold leading-8 tracking-wide text-white uppercase lg:text-3xl '> tails crib</h3>
            <div className='flex w-[200px] lg:w-[300px]'>
              <p className='mr-4 font-normal text-white lg:uppercase md:mr-6 text-md lg:text-lg tex-left'>Floor price</p>
              <img src={eth} loading='lazy' alt="eth icon" />
              <span className='ml-2 text-white uppercase'>1.05 Eth</span>
            </div>
          </div>
          <div className='flex-col hidden lg:flex'>
            <h5 className="text-3xl leading-8 text-[#FF2E00]">-8.50%</h5>
            <div className='flex mt-4 text-white'>
              <p className='mr-2 uppercase'>Vol.</p>
              <img src={eth} loading='lazy' alt="eth price icon" />
              <span className="ml-2">1.25K</span>
            </div>

          </div>
          
        </div>
        <hr className='ml-8 w-[330px] xl:w-[650px]' />
        </div>

        <button className="bg-[#AB98FF] mt-4 mb-5 ml-8 w-[320px] text-lg h-8 lg:hidden text-white">View Collection</button>

      </div>
    </section>
  )
}

export default Creators