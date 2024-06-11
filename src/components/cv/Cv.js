'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Profile from './img/IMG_7498.JPEG'


// icons
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io"; import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";


function Cv() {

    // const [show, setShow] = useState()

    const handleBodyClick = () => {
        let cv = document.getElementById('cv')
        let show = document.getElementById('show')
        cv.style.marginLeft = '-300px'
        show.style.display = 'none'
        
    };

    let styleIconSocial = 'cursor-pointer hover:scale-[1.1] transition-all delay-75'

    const skills = [
        "HTML", "CSS", "JavaScript", "Bootstrap", "TailwindCSS", "Python", "React", "Next.js", "Apollo GraphQL", "Redux", "Material-UI", "Node.js", "Express", "MongoDB", "Mongoose", "Postman", "NPM", "Git", "GitHub", "Docker", "Notion", "Monday", "ClickUp", "Firebase", "Terminal", "VS Code"
    ]

    return (
        <div id='cv' className='min-w-[300px] max-w-[300px] h-[100vh] bg-white p-6 box-border bg-wite shadow-xl overflow-y-scroll flex items-center flex-col pt-10 max-[1170px]:ml-[-300px] relative transition-[all_.2s] ease-in-out z-50'>
            {/* top profile */}

            <FaAnglesLeft onClick={handleBodyClick} className=' absolute right-4 top-4 cursor-pointer hover:bg-slate-100 text-slate-600 min-[1170px]:hidden' />

            <div id="show" className={` fixed left-[300px] top-0 w-full h-[100vh] bg-[#00000034] transition-[all_.2s]`} onClick={handleBodyClick}></div>

            <div className='w-full flex flex-col gap-3 items-center '>
                <Image src={Profile} alt='' className='rounded-full w-36 ' />
                <h3 className='text-[20px] text-gray-900 font-medium	'>Youssef Eid</h3>
                <h3 className='text-[18px] text-gray-800'>Full-Stack Developer</h3>
                {/* icons */}
                <div className='flex items-center justify-between w-full mt-4 text-[25px] text-[#ffb400] px-[2px]'>
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100079286477497&locale=ar_AR"><FaFacebook className={`${styleIconSocial} hover:text-[#0866ff]`} /></a>
                    <a target='_blank' href="https://wa.me/+201155975886"><IoLogoWhatsapp className={`${styleIconSocial} hover:text-[#4dc95b]`} /></a>
                    <a target='_blank' href='https://www.linkedin.com/in/yousef-eid-080b75290/'><FaLinkedin className={`${styleIconSocial} hover:text-[#0866ff]`} /></a>
                    <a target='_blank' href='https://www.youtube.com/@jo-script'><FaYoutube className={`${styleIconSocial} hover:text-[#fe0808]`} /></a>
                    <a target='_blank' href="https://github.com/Yosef-Eid"><FaGithub className={`${styleIconSocial} hover:text-gray-900`} /></a>

                </div>
            </div>

            <pre className='h-[.5px] w-[85%] bg-gray-300 mt-12' > </pre>

            {/* about */}
            <div className='w-full flex items-center text-[15px] flex-col gap-2 text-[#2b2b2b] mt-7'>
                <div className='w-full flex items-center justify-between '>
                    <p className='bg-[#ffb400] px-1 font-medium' >Age :</p>
                    <p className=' font-medium'>23</p>
                </div>
                <div className='w-full flex items-center justify-between '>
                    <p className='bg-[#ffb400] px-1 font-medium' >Address :</p>
                    <p className=' font-medium'>Egypt, Alex</p>
                </div>
                <div className='w-full flex items-center justify-between '>
                    <p className='bg-[#ffb400] px-1 font-medium' >Phone :</p>
                    <p className=' font-medium'>01155975886</p>
                </div>
                <div className='w-full flex items-center justify-between '>
                    <p className='bg-[#ffb400] px-1 font-medium' >Email :</p>
                    <p className=' font-medium'>yosefeid058@gmail.com</p>
                </div>
                <div className='w-full flex items-center justify-between '>
                    <p className='bg-[#ffb400] px-1 font-medium' >Freelance :</p>
                    <p className=' font-medium'>Available</p>
                </div>
            </div>

            <pre className='h-[.5px] w-[85%] bg-gray-300 mt-12' > </pre>

            {/* skills /////////////////////////////////// */}
            <div className='w-full flex flex-col gap-5 items-start mt-7'>
                <h2 className='text-[18px] font-bold text-[#2b2b2b] ' >Skills</h2>

                {
                    skills.map((skill, index) => (
                        <div key={index} className='flex flex-col items-start justify-between gap-1 w-full text-[#767676] '>
                            <li className='text-[#ffb400] font-medium'><span className='text-[#767676] '>{skill}</span></li>
                        </div>
                    ))
                }
            </div>

            {/* Language ////////////////////////////// */}
            <div className='w-full flex flex-col gap-5 items-start mt-7'>
                <h2 className='text-[18px] font-bold text-[#2b2b2b] ' >Language</h2>

                {/* Arabic */}
                <div className='flex flex-col items-center justify-between gap-1 w-full text-[#767676] '>
                    <div className='flex items-center justify-between w-full'>
                        <p>Arabic</p> <p>100%</p>
                    </div>
                    <div className='w-full h-[6px] border-[1px] rounded-full border-[#ffb400] flex  items-center '><p className='bg-[#ffb400] w-[100%] h-[2px] rounded-full'></p></div>
                </div>

                {/* English */}
                <div className='flex flex-col items-center justify-between gap-1 w-full text-[#767676] '>
                    <div className='flex items-center justify-between w-full'>
                        <p>English</p> <p>70%</p>
                    </div>
                    <div className='w-full h-[6px] border-[1px] rounded-full border-[#ffb400] flex  items-center '><p className='bg-[#ffb400] w-[70%] h-[2px] rounded-full'></p></div>
                </div>
            </div>
        </div>
    )
}

export default Cv;