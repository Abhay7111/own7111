import React from 'react';
import Displaynav from './displaynav';
import Home from './home/Home';
import Gaamatop from './home/site/gaamatop';

const gaamatopsite = [
  {
    name:'',
    img:'',
    url:'',
    numberofsites:'',
    team:{
      numberse:'',
    },
  },
];

function Maindisplay() {
  return (
    <div className='w-full h-[100vh] overflow-hidden relative overflow-y-auto bg-red-400'>
      <div className='w-full h-16 absolute top-0 right-0'>
        <Displaynav/>
      </div>
      <div className='w-full h-full bg-zinc-100 overflow-hidden overflow-y-auto'>
        <div className='w-full mt-16 h-auto px-2'>
          <Gaamatop/>
        </div>
      </div>
     </div>
  )
}

export default Maindisplay