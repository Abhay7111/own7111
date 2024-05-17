import React from 'react'
import Displaynav from './displaynav'
import Home from './home/Home'

function Maindisplay() {
  return (
    <div className='bg-red-600 relative max-h-full overflow-hidden overflow-y-auto w-full'>
     <div className=''><Displaynav/></div>
     <div className='w-full h-96 bg-green-700'>
      <Home/>
     </div>
     </div>
  )
}

export default Maindisplay