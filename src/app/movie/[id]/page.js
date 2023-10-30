import Image from 'next/image';
import React from 'react'

const Movie = async({params}) => {
    const getMovie = async(movieId)=>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
        return await res.json();
        
    }
    const movieId = params.id;
     const movie =await getMovie(movieId)
    
  return (
    <div className='w-full my-6'>
        <div className='max-w-6xl p-4 md:pt-8 flex md:flex-row flex-col mx-auto'>
        <Image className='rounded-lg'  src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          style={{
            maxWidth:" 100%",
            height: "100%"

          }}
          placeholder='blur'
          blurDataURL='/spinner.svg'
          width={500}
          height={300} alt='Image not found'></Image>
          <div className='p-4'>
            <h2 className='text-lg font-bold my-2'>{movie.original_title || movie.title} </h2>
            <p className='my-2'><span className='text-lg font-semibold mr-1'>Overview:</span>{movie.overview}</p>
            <p className='my-2'> <span className='text-lg font-semibold mr-1'>Release Date:</span>{movie.release_date}</p>
          </div>
        </div>

    </div>
  )
}

export default Movie