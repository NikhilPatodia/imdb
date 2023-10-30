
import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='flex justify-center items-center'>
       
       <Image height={250} width={250} src="spinner.svg" alt="loading"  />
        
        </div>
  )
}

export default loading