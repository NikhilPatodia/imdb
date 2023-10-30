import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {HiThumbUp} from 'react-icons/hi';

const Card = ({result}) => {
  return (
    <div className='sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:py-4 sm:m-3 sm:border sm:border-slate-400 transition-shadow duration-200 cursor-pointer group'>
        <Link href={`/movie/${result.id}`}> 
        <Image className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'  src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          style={{
            maxWidth:" 100%",
            height: "auto"

          }}
          placeholder='blur'
          blurDataURL='/spinner.svg'
          width={500}
          height={300} alt='Image not found'></Image>
          <div className="p-2">
            <p className='line-clamp-2'>{result.overview}</p>
          </div>
          <div>
            <h2 className='text-lg font-bold p-2 truncate'>{result.title || result.name}</h2>
            <div className='flex px-2'>
            {result.release_date || result.first_air_date}
            <HiThumbUp className='text-xl ml-3 mr-1'/> {result.vote_count}
            </div>
          </div>
          </Link>
    </div>
  )
}

export default Card