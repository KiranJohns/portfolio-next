import React from 'react'
// import { NavLink } from 'react-router-dom'
import Link from 'next/link'

const Navbar = () => {
  return (
<header className='header m-0'>
<Link href='/' className="w-10 h-10 rounded-lg bg-white  items-center justify-center flex font-bold shadow-md">
 <p className='blue-gradient_text'>
    KJ
 </p>
</Link>
 <nav className='flex text-lg gap-7 font-medium'>
 <Link href='/about' className={({isActive})=> isActive ? 'text-yellow-50':'text-black'}>
 About
 </Link>
 <Link href='/projects' className={({isActive})=> isActive ? 'text-yellow-50':'text-black'}>
Projects
 </Link>
</nav>
</header>
  )
}

export default Navbar