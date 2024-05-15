import React from 'react'

function Nav() {
  return (
    <div className='nav h-fit w-24 flex flex-col items-start px-2 sm:px-5 sm:w-96'>
     <div className='h-[100vh] py-3 flex flex-col gap-3'>
          <div className='min-w-10 min-h-10 sm:bg-violet-400/30 flex flex-col items-center py-1.5 rounded-lg sm:items-center sm:w-full sm:p-2 sm:flex sm:flex-row sm:gap-2'>
               <div className='w-12 overflow-hidden h-12 bg-yellow-300 rounded-lg'>
                    <img className=' w-full rounded-lg h-full object-cover object-center' src="https://images.unsplash.com/photo-1715590876582-18e4844864a6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sorry we could not loade your image" />
               </div>
               <span className='w-[2px] h-7 bg-white rotate-12 hidden sm:block sm:ml-2'></span>
               <div className='w-10 h-10 bg-yellow-300 rounded-lg sm:ml-2 hidden sm:block'>
               <img className=' w-full h-full object-cover rounded-lg object-center' src="https://images.unsplash.com/photo-1712600582575-0cfb91ee2198?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sorry we could not loade your image" />
               </div>
               <a href="https://www.gaama.top"><h3 className='font-semibold text-xs text-center sm:text-base mt-2 sm:mt-0'>Gaama.top <i className='ri-arrow-down-s-line'></i></h3></a>
               {/* <div className='w-10 h-10 bg-yellow-300 rounded-lg hidden sm:block'></div> */}
          </div>
          <ul className='py-3 w-full h-fit flex pb-5 flex-col items-center sm:items-start gap-3 px-2 border-b border-zinc-100/30'>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-home-2-fill'></i> <span className='hidden sm:block'>Home</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-file-user-fill'></i> <span className='hidden sm:block'>About</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-terminal-box-fill'></i> <span className='hidden sm:block'>Code</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-earth-fill'></i> <span className='hidden sm:block'>Sites</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-map-pin-user-fill'></i> <span className='hidden sm:block'>Accounts</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-service-fill'></i> <span className='hidden sm:block'>Clients</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-creative-commons-nd-fill'></i> <span className='hidden sm:block'>Projects</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-money-rupee-circle-fill'></i> <span className='hidden sm:block'>Prising</span></a></li>
               <li><a className='flex gap-1.5 ' href="#"> <i className=' text-2xl sm:text-lg ri-settings-5-fill'></i> <span className='hidden sm:block'>Setting</span></a></li>
          </ul>
          <div className='w-full sm:min-h-14 mt-3 rounded-lg border border-dotted overflow-hidden'>
               <p className='break-words py-2 px-1 text-sm sm:p-2 line-clamp-3 sm:line-clamp-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit totam repellendus ipsum explicabo eum veniam quod praesentium quos corrupti.</p>
          </div>
     </div>
    </div>
  )
}

export default Nav