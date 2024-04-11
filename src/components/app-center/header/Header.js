'use client'
import React from 'react'
import Image from 'next/image';
// icons
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


import myImg from './img/IMG_7498.JPEG'

function Header() {    


  function openCv() {
    let cv = document.getElementById('cv')
    cv.style.marginLeft = 0
    cv.style.position = 'fixed'
  }

  return (
    <div id='home' className='w-full flex items-center flex-col justify-center px-[3.5%] z-0 relative '>
        <div className='w-full flex  items-center justify-center  bg-white py-7 px-[5%] max-[1170px]:gap-7 max-[900px]:flex-col-reverse '>
          {/* about */}
          <div className='h-auto w-[60%] flex flex-col items-start gap-5 max-[1170px]:w-full max-[900px]:items-center '>
            <div className='text-[48px] font-[600] text-[#161616] max-[900px]:text-center max-[700px]:text-[40px] max-[535px]:text-[35px]'>
              <h1>I’m Youssef Eid</h1>
              <h1 className='mt-[-10px]'><span className='text-[#ffb400]'>Full-Stack</span> Developer</h1>
            </div>
            <p className='text-[#767676] w-[80%] max-[900px]:text-center'>I Am A Highly Skilled And Experienced Front-End And Front-End Programmer With A Passion For Creating User-Friendly And Visually Appealing Web Applications I Am Confident That I Have The Skills And Experience That You Are Looking For In A Front-End And Front-End Programmer.</p>
            <button onClick={openCv} className='min-[1170px]:hidden w-36 py-[6px] bg-[#ffb400] text-[#2b2b2b] rounded-md focus:outline-none hover:bg-[#2b2b2b] hover:text-[#ffb400] text-[16px] transition-all delay-75 '>Show Cv</button>
          </div>

          {/* my image */}
          <div className='h-auto w-[40%] flex items-center justify-end max-[1170px]:w-full max-[900px]:justify-center'>
            <Image src={myImg} alt='' width={300} height={100} className='rounded-tr-[20%] rounded-bl-[20%]' />
          </div>
      </div>
    </div>
  )
}

export default Header;
