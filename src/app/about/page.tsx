import Image from 'next/image'
import React from 'react'
import image from "../../../public/image.png";
import "./about.css"
const page = () => {
  return (
    <div className='about '>
           <div><Image src={image} alt="" width={600} height={600} className='lg:hidden block mt-8' /></div>
      <h2>About Us</h2>< br/>
      <div className='aboutt'>
      <div>
      <h1>Who we are ?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus sapiente possimus nisi sunt, dolor ad rem ut numquam earum eius architecto quis consequatur quia alias sint exercitationem. Aperiam, quas.</p>
      <button>More About Us</button>
     </div>
     <div><Image src={image} alt="" width={600} height={600} className='lg:block hidden'/></div>
      </div>
    </div>
  )
}
export default page
