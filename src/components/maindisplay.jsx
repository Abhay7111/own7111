import React from 'react';
import Displaynav from './displaynav';
import Home from './home/Home';
import rightarow from '/right-arow.png';

function Maindisplay() {
  return (
    <div className='w-full h-[100vh] overflow-hidden relative overflow-y-auto bg-red-400'>
      <div className='w-full h-16 absolute top-0 right-0'>
        <Displaynav/>
      </div>
      <div className='w-full h-full bg-zinc-100 overflow-hidden overflow-y-auto'>
        <div className='w-full mt-16 h-auto px-2'>
          <div className='w-full h-fit flex py-2 items-start flex-wrap justify-center gap-3'>
            <div className='w-full h-60 cardgrad py-3 rounded-lg sm:w-96 sm:h-52'>
              <h1 className=' text-6xl font-medium w-full text-center'>Welcome to <a className='font-semibold text-5xl leading-none' href="#">Gaama.top</a></h1>
              <p className=' line-clamp-3 tracking-tighte text-sm px-3 leading-4.5 mt-3 sm:line-clamp-2 sm:mt-4'>signifies achieving expertise in navigating, utilizing, and creating content for the internet. It involves understanding web technologies, digital marketing, design principles, and effective communication strategies in a constantly evolving digital landscape</p>
            </div>
            <div className='size-32 bg-[#9650DB] rounded-lg overflow-hidden sm:size-52'>
              <a href="https://www.gaama.top"><img className='w-full h-full object-cover object-top rounded-lg' src="https://cdn.pixabay.com/photo/2024/02/21/11/34/ai-generated-8587505_1280.png" /></a>
            </div>
            <div className=' w-1/2 sm:w-96 h-52 cardgrad relative rounded-lg flex items-center justify-center'>
              <img className='absolute size-10 -top-3 -right-5' src={rightarow} />
              <h1 className=' text-2xl sm:text-4xl font-semibold flex flex-col'><a href="https://www.gaama.top"><span>Gaama.top <i class="ri-bard-line font-thin text-sky-400"></i></span><span className='w-full flex items-center justify-center text-xl sm:text-3xl'><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-half-s-line text-yellow-400 font-thin"></i></span></a></h1>
            </div>
            <div className='w-96 h-52 cardgrad rounded-lg'></div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Maindisplay