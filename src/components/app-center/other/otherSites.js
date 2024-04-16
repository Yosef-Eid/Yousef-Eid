import React from 'react'

import figma from "./icon/5968705.png";
import codewars from "./icon/Codewars.png";
import github from "./icon/github.svg";
import linkedin from "./icon/linkedin.svg";
import hacker from "./icon/HackerRank_Icon-1000px.png";
import edapid from "./icon/pPOnSc6C_400x400.png";
import stack from "./icon/stack-overflow.png";


import Image from 'next/image';

function OtherSites() {
  return (
    <div id='other-site' className='w-full flex flex-col items-center justify-center gap-16 my-28  '>
            <div className='flex flex-col items-center gap-6'>
        <h1 className='text-[32px] font-semibold text-[#2b2b2b]'><span className='text-[#ffb400]'>Other</span> Sites</h1>
        <p className='w-[80%] text-center text-[17px] text-[#6a6a6a] font-[400]'>Some Other Sites Related To The Programming Environment</p>
      </div>

      <div className='w-full flex items-center justify-center gap-8 flex-wrap'>
                <a href='https://github.com/Yosef-Eid' title='github'><Image width={50} className='rounded-full hover:scale-[1.3] transition-[all_.3s]'  alt='' src={github}/></a>
                <a href='https://www.linkedin.com/in/yousef-eid-080b75290/' title='hacker'><Image width={50} className='rounded-full hover:scale-[1.3] transition-[all_.3s]' alt='' src={linkedin} /></a>
                <a href='https://stackoverflow.com/users/20879903/yosef-eid' title='stack overflow'><Image width={50} className='rounded-full hover:scale-[1.3] transition-[all_.3s]' alt='' src={stack}/></a>
                <a href='https://edabit.com/user/9qAq9AqiPQTa3mgxf' title='edapid'><Image width={50} className='rounded-full hover:scale-[1.3] transition-[all_.3s]' alt='' src={edapid}/></a>
                <a href='https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1188826160154781518' title='figma'><Image width={50} className='rounded-full hover:scale-[1.3] transition-[all_.3s]' alt='' src={figma} style={{borderRadius:'0'}}/></a>
                <a href='https://www.codewars.com/users/Yosef-Eid' title='codewars'><Image width={50} className='rounded-full hover:scale-[1.3] transition-[all_.3s]' alt='' src={codewars}/></a>
                <a href='https://www.hackerrank.com/yosefeid058' title='hacker'><Image width={50} className='rounded-full hover:scale-[1.3] transition-[all_.3s]' alt='' src={hacker} /></a>
            </div>
    </div>
  )
}

export default OtherSites
