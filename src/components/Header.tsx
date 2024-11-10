import React from 'react'
import "./Header.css";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='herder'>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header
