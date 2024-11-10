import React from 'react'
import image from "../../public/image.png"
import Image from 'next/image'
import "./Home.css"
const Homee = () => {
  return (
    <div >
      <div className='andr'>
        <Image src={image} alt='cho'/>
        <h1>WelCome to oue Website</h1>
        <p>All you need is love. But a little chocolate now and then doesnt hurt. - Charles M. Schulz What you see before you, my friend, is the result of a lifetime of chocolate. - Katharine Hepburn As long as there is chocolate, there will be happiness.</p>
        <button>Contact Us</button>
      </div>
    </div>
  )
}

export default Homee
