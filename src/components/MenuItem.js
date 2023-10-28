import Link from 'next/link'
import React from 'react'

const MenuItem = ({title, address, Icon}) => {
  return (
    <div className=' flex '>
        <div className='hover:text-amber-600'>
          <Icon className="sm:hidden text-xl"/>
          <Link className='hidden sm:inline text-xl' href={address}>{title}</Link>
        </div>
        
    </div>
  )
}

export default MenuItem