import React from 'react'
import Nav from './nav'
import Maindisplay from './maindisplay'

function Main() {
  return (
    <div className='flex max-w-full bg-green-400/60 max-h-[100vh]'>
     <Nav/>
     <Maindisplay/>
     </div>
  )
}

export default Main