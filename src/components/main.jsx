import React from 'react'
import Nav from './nav'
import Maindisplay from './maindisplay'

function Main() {
  return (
    <div className='flex items-center justify-between w-full h-full bg-green-400/60'>
     <Nav/>
      <Maindisplay/>
     </div>
  )
}

export default Main