'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
const NavbarItem = ({title, param}) => {
    const search = useSearchParams();
    const genre = search.get('genre');
  return (
    <div>
        <Link className={`hover:text-amber-600 font-semibold ${genre && genre === param && 'underline underline-offset-4 decoration-amber-500 decoration-4'}`} href={`/?genre=${param}`}>{title}</Link>

    </div>
  )
}

export default NavbarItem