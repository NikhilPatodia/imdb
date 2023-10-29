import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center  p-4 dark:bg-gray-400 space-x-8 bg-amber-100 lg:text-xl'>
        <NavbarItem title="Trending" param= "fetchTrending"/>
        <NavbarItem title="Top Rated" param= "fetchTopTrending"/>
    </div>
  )
}

export default Navbar
