import React from 'react'
import Header from './header/Header';
import Skills from './skills/Skills';
import Projects from './projects/projects';
import Explains from './explains/Explains';


function AppCenter() {
  return (
    <div className='w-full h-svh flex items-center flex-col gap-14 overflow-y-scroll scroll-smooth'>
      <Header/>
      <Skills />
      <Projects />
      <Explains />

    </div>
  )
}

export default AppCenter;
