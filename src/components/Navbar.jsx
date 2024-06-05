import React from 'react'
// import { NavLink } from 'react-router-dom'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleClick = (path) => {
    window.history.pushState({}, '', path);
    setActivePath(path);
  };
  return (
<header className='header m-0'>
<Link href='/' className="w-10 h-10 rounded-lg bg-white  items-center justify-center flex font-bold shadow-md">
 <p className='blue-gradient_text'>
    KJ
 </p>
</Link>
 <nav className='flex text-lg gap-7 font-medium'>
 <Link href='/about'  onClick={(e) => {   
          handleClick('/about');
        }} className={activePath === '/about' ? 'text-yellow-50' : 'text-black'}>
 About
 </Link>
 <Link href='/projects'   onClick={(e) => {
          handleClick('/projects');
        }} className={activePath === '/projects' ? 'text-yellow-50' : 'text-black'}>
Projects
 </Link>
</nav>
</header>
  )
}

export default Navbar