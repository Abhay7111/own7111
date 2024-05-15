import React, { useEffect } from 'react'

function Displaynav() {
     useEffect(()=>{
          const openwindow = document.querySelector('#openwindow')
          const closewindow = document.querySelector('#closewindow')
          const linkdis = document.querySelector('#linkdis')

          openwindow.addEventListener("click", () => {
               linkdis.style.display = "block";
               openwindow.style.display = 'none';
               closewindow.style.display = 'block';
          })
          closewindow.addEventListener("click", () => {
               linkdis.style.display = "none"
               openwindow.style.display = 'block';
               closewindow.style.display = 'none';
          })
     })
  return (
    <div className='w-full h-14 disnav flex items-center relative justify-end px-2 sm:px-5 gap-2'>
     <input type="text" name="search" id="search" placeholder='Search here' className=' rounded-md px-1.5 bg-zinc-200/20 border' />
     <span className=' font-semibold absolute bg-[#7c3ebb] mt-1 sm:mt-0 py-2 top-full rounded-lg px-3 right-2 text-sm hidden gap-1 sm:block sm:top-0 sm:left-0 sm:relative sm:bg-transparent' id='linkdis'>
     <span className='flex flex-col sm:flex sm:flex-row'>
     <a href="#" className='py-1 px-2 hover:bg-zinc-100/20 rounded-md flex gap-1 items-center'><i class="ri-cup-fill text-xl"></i> Buy me a coffey</a>
     <a href="#" className='py-1 px-2 hover:bg-zinc-100/20 rounded-md text-center flex gap-1 items-center'>< i class="ri-github-fill text-xl"></i> Github</a>
     </span>
     </span>
     <div className='size-10 rounded-lg'>
          <img className='w-full h-full rounded-lg object-cover' src="https://images.unsplash.com/photo-1642952317900-fa90e2c89115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="sorry we could not loade" />
     </div>
     <span className='sm:hidden flex rounded-lg ml-2 items-center justify-center size-10 bg-zinc-100/20'>
     <i class="ri-menu-4-line text-3xl font-medium transition-all cursor-pointer" id='openwindow'></i>
     <i class="ri-menu-5-line text-3xl font-medium transition-all hidden cursor-pointer" id='closewindow'></i>
     </span>
    </div>
  )
}

export default Displaynav