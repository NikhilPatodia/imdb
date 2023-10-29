import React from 'react'
import MenuItem from './MenuItem'
 import { AiFillHome } from 'react-icons/ai'; 
 import { BsFillInfoCircleFill } from 'react-icons/bs'; 
import DarkMode from './DarkMode';


const Header = () => {
  return (
   
    <div className='max-w-6xl mx-auto flex justify-between  space-y-2 p-4 items-center '>
        <div className='flex space-x-8'>
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex space-x-6 items-center'>
          <DarkMode/>
          <div>
          <span className='bg-amber-600 py-2 px-4 rounded-lg font-bold text-2xl'>IMDb</span> <span className='hidden sm:inline text-2xl'>clone</span></div>
        </div>
    </div>
    
  )
}

export default Header