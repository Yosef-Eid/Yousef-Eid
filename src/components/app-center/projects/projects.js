
'use client'
import React from 'react'
import Image from 'next/image'
import './style.css'

// images projects
import note from './img-projects/note1.png'
import eid from './img-projects/ed-circle.svg'
import api from './img-projects/api.png'
import cover from './img-projects/Cover.png'
import curser from './img-projects/curser.png'
import filter from './img-projects/filter.png'
import hover from './img-projects/hover.png'
import imgClick from './img-projects/img-click.png'
import imgCss from './img-projects/img-css.png'
import todoList from './img-projects/Screenshot 2023-09-12 194504.png'
import singUp from './img-projects/singUp.png'
import training from './img-projects/training.png'
import web from './img-projects/web.png'
import calculator from './img-projects/Calculator.png'

// icons skills
import html from '../skills/icons/html-1.svg'
import css from '../skills/icons/css-3.svg'
import javascript from '../skills/icons/logo-javascript.svg'
import bootstrap from "../skills/icons/bootstrap-5-1.svg";
import tailwind from "../skills/icons/tailwind-css-2.svg";
import python from "../skills/icons/python-5.svg";
import react from "../skills/icons/react-2.svg";
import next from "../skills/icons/next-js.svg";
import redux from "../skills/icons/redux.svg";
import node from "../skills/icons/node.svg";
import express from "../skills/icons/express-109.svg";
import mongoDb from "../skills/icons/mongodb-icon-2.svg";
import mongoose from "../skills/icons/mongoose-1.svg";
import postman from "../skills/icons/postman.svg";
import npm from "../skills/icons/npm.svg";
import mUi from "../skills/icons/material-ui-1.svg";
import git from "../skills/icons/git-icon.svg";
import github from "../skills/icons/github-icon-1.svg";

function Projects() {

  let projects = [
    {
      img: note,
      firstTitle: 'My',
      lastTitle: 'Note',
      skills: [css, javascript, git, github],
      description: 'Note: The program uses pure JavaScript',
      linkCode: 'https://github.com/Yosef-Eid/Note',
      linkWebsite: 'https://yosef-eid.github.io/Ed-Circal/',
    },
    {
      img: todoList,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: calculator,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: cover,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: api,
      firstTitle: 'Api ',
      lastTitle: 'Fetching',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: cover,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: curser,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: filter,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: hover,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: imgClick,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: imgCss,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: singUp,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: training,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    
    {
      img: web,
      firstTitle: 'Eid',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    
  ]

  return (
    <div id='projects' className='w-full flex flex-col items-center justify-center flex-wrap gap-16 mt-28'>

      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-[32px] font-semibold text-[#2b2b2b]'><span className='text-[#ffb400]'>My</span> Projects</h1>
        <p className='w-[80%] text-center text-[17px] text-[#6a6a6a] font-[400]'>Latest work in website design using different tools and techniques</p>
      </div>

      {/* cards */}
      <div className='w-full flex flex-wrap items-center justify-center px-[1%] gap-2'>
        {
          projects.map((project, index) => (
            <div key={index} className='card w-[270px] h-[370px] max-[350px]:h-[370px] max-[350px]:w-[270px] max-[400px]:h-[200px] max-[400px]:w-[165px] flex flex-col justify-start shadow-[0_0_10px_0_rgba(0,0,0,.237)] rounded-xl overflow-hidden border-[1px] border-gray-300  '>
              <div className='h-[220px w-full bg-cover bg-center ' >
                <img src={`${project.img.src}`} className='h-[200px] w-full' />
              </div>

              <div className={`about w-full py-2 px-4 flex flex-col justify-between gap-y-[15px]`}>

                <div className='title w-full flex items-center justify-between'>
                  {/* title */}
                  <div className=''>
                    <span className='text-[#ffb400] font-bold text-[19px]'>{project.firstTitle} </span>
                    <span className='text-[#0c0c0ce5] font-bold text-[19px]'>{project.lastTitle}</span>
                  </div>

                  {/* skills */}
                  <div className='flex items-center gap-1'>
                    {
                      project.skills.map((skill, index) => ( <Image key={index} src={skill} width={12} alt='' />))
                    }
                  </div>
                </div>
                <span className='description text-[#2b2b2b] text-[13px]'>{project.description}</span>
                <div className='links flex items-center justify-between '>
                  <a href={project.linkCode} target='_blank' className='max-[400px]:text-white text-[#0c0c0c] decoration-inherit shadow-md border-[1px] border-gray-300  text-[15px] rounded-md py-1 w-24 text-center  hover:bg-[#ffb400] transition-all delay-75 ease-in-out'>View code </a>
                  <a href={project.linkWebsite} target='_blank' className='  text-[#0c0c0c] w-28 py-1 bg-[#ffb400] text-center text-[14px] font-bold rounded-md hover:bg-gray-900 hover:text-[#ffb400] transition-all delay-75 ease-in-out'>Live Preview</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Projects;
