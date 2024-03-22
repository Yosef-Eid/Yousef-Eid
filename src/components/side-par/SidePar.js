
import React from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
import { PiPlanetLight } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import Link from 'next/link';



function SideBar() {

  let styleIcon = "flex flex-col items-center justify-center text-[23px] max-[400px]:text-[22px] cursor-pointe w-10 h-10 max-[400px]:w-8 max-[400px]:h-8 rounded-xl max-[400px]:bg-white bg-gray-100 hover:bg-[#ffb400] hover:text-white cursor-pointer transition-all delay-75 ease-out "
  return (
    <div className='h-svh min-w-16 shadow-2xl flex flex-col items-center justify-center bg-white max-[400px]:fixed bottom-0 max-[400px]:w-full max-[400px]:h-12 z-50 relative '>
      <div className='w-full flex flex-col items-center justify-center gap-10 max-[400px]:gap-[4%]  text-gray-600 max-[400px]:flex-row z-40 max-[400px]:justify-between max-[400px]:px-[5%]' >
        <a href='#home' className={styleIcon} title='Home'>
          <HiOutlineHome />
        </a>

        <a href='#skills' className={styleIcon} title='Skills'>
          <IoExtensionPuzzleOutline />
        </a>

        <a href='#projects' className={styleIcon} title='Projects'>
          <GrAppsRounded />
        </a>

        <div className={styleIcon} title='Explains'>
          <GrWorkshop />
        </div>

        <div className={styleIcon} title='Contact'>
          <IoEarthOutline />
        </div>

        <div className={styleIcon} title='Other website'>
          <PiPlanetLight />
        </div>
      </div>
    </div>
  )
}

export default SideBar
