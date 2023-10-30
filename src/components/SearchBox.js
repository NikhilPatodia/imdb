"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchBox = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/search/${search}`)

    }
  return (
    <form onSubmit={handleSubmit} className="max-w-6xl flex p-4 mx-auto"> 
       <input onChange={(e)=>{setSearch(e.target.value)}} value={search} type="text" className='w-full text-lg h-14 outline-none bg-transparent flex-1' placeholder='Search keyword'/>
   <button type='submit' className='disabled:text-gray-200 text-amber-600' disabled={!search}>Search</button>
    </form>
  )
}

export default SearchBox