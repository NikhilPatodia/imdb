"use client"
import React, { useEffect, useState } from 'react'

import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const DarkMode = () => {
    const {systemTheme,  theme, setTheme } = useTheme();
    const currnetTheme = theme === "system "? systemTheme: theme;
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true)
    }, [])
    
  return (
    <div>
      {mounted && (currnetTheme === "dark"?<MdLightMode className='cursor-pointer' onClick={()=>{setTheme("light")}}/>:<BsFillMoonFill className='cursor-pointer' onClick={()=>{setTheme("dark")}}/>)
    }
    </div>
  )
}

export default DarkMode 