import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        Ghaniya Khan
      </div>
      <div className='icons'>
      <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
        <a href="https://github.com/Ghaniya08"><FaGithubSquare /></a> 
    <a href="https://instagram.com/ghaniya08"><FaInstagramSquare/></a>
    <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebookSquare/></a>
      </div>
    </div>
  )
}

export default Footer