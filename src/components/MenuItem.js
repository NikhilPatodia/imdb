import Link from 'next/link'
import React from 'react'

const MenuItem = ({title, address, Icon}) => {
  return (
    <div className=' flex '>
        <div className='hover:text-amber-600'>
          <Link href={address}>
          <Icon className="sm:hidden text-xl"/>
          <span className='hidden sm:inline text-xl' >{title}</span></Link>
        </div>
        
    </div>
  )
}

export default MenuItem