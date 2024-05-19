import React from 'react'
import gaamatop from '/gaamatop.png';
import rightarow from '/right-arow.png';

function Gaamatop() {
  return (
     <div className='w-full h-fit flex py-2 items-start flex-wrap justify-center gap-3'>
     <div className='w-full h-52 cardgrad rounded-lg flex sm:flex-row'>
      <div>
        
      </div>
     </div>
     <div className='size-32 bg-[#9650DB] rounded-lg overflow-hidden sm:size-52'>
       <a href="https://www.gaama.top"><img className='w-full h-full object-cover object-top rounded-lg' src="https://cdn.pixabay.com/photo/2024/02/21/11/34/ai-generated-8587505_1280.png" /></a>
     </div>
     <div className=' w-1/2 sm:w-96 h-52 cardgrad relative rounded-lg flex items-center justify-center'>
       <img className='absolute size-10 -top-3 -right-5' src={rightarow} />
       <h1 className=' text-2xl sm:text-4xl font-semibold flex flex-col'><a href="https://www.gaama.top"><span>Gaama.top <i class="ri-bard-line font-thin text-sky-400"></i></span><span className='w-full flex items-center justify-center text-xl sm:text-3xl'><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-s-fill text-yellow-400 font-thin"></i><i class="ri-star-half-s-line text-yellow-400 font-thin"></i></span></a></h1>
     </div>
     <div className='w-96 h-52 cardgrad rounded-lg'>
       <a href="https://www.gaama.top"><img className='w-full h-full rounded-lg opacity-85' src={gaamatop} /></a>
     </div>
   </div>
  )
}

export default Gaamatop