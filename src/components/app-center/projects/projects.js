
'use client'
import React from 'react'
import Image from 'next/image'
import './style.css'

// images projects
import note from './img-projects/note1.png'
import eid from './img-projects/ed-circle.svg'
import painter from './img-projects/painter.png'

import api from './img-projects/api.png'
import searchWords from './img-projects/search-words.png'
import cover from './img-projects/Cover.png'
import joscript from './img-projects/joscript.png'
import back from './img-projects/back-end.png'
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
      img: back,
      firstTitle: 'Add ',
      lastTitle: 'User',
      skills: [ node, express, mongoDb, mongoose],
      description: 'Add, delete and modify users using the database',
      linkCode: 'https://github.com/Yosef-Eid/Back-End-dataUser',
      linkWebsite: 'https://joscript.onrender.com/',
    },
    {
      img: joscript,
      firstTitle: 'Jo',
      lastTitle: 'script',
      skills: [react, next, tailwind, git, github],
      description: 'A website about an academy for teaching programming',
      linkCode: 'https://github.com/jo-script/joscript',
      linkWebsite: 'https://joscript.vercel.app',
    },
    {
      img: note,
      firstTitle: 'My ',
      lastTitle: 'Note',
      skills: [html, css, javascript, git, github],
      description: 'Note: The program uses pure JavaScript',
      linkCode: 'https://github.com/Yosef-Eid/Note',
      linkWebsite: 'https://note-me00.netlify.app/',
    },
    {
      img: todoList,
      firstTitle: 'Todo ',
      lastTitle: 'List',
      skills: [html, css, javascript, git, github],
      description: 'Add daily duties and tasks using React',
      linkCode: 'https://github.com/Yosef-Eid/Todo-List',
      linkWebsite: 'https://todo-list000.netlify.app',
    },
    {
      img: calculator,
      firstTitle: 'Calc',
      lastTitle: 'ulator',
      skills: [react, git, github],
      description: 'A simple calculator using React ...............',
      linkCode: 'https://github.com/Yosef-Eid/Calculator-react',
      linkWebsite: 'https://calculator0r.netlify.app/',
    },
    {
      img: painter,
      firstTitle: 'Pai',
      lastTitle: 'nter',
      skills: [html, css, javascript,],
      description: 'A painter program that can draw, delete, and add images',
      linkCode: 'hhttps://github.com/Yosef-Eid/painter',
      linkWebsite: 'https://painter-theta.vercel.app/',
    },
    {
      img: searchWords,
      firstTitle: 'Search ',
      lastTitle: 'Words',
      skills: [html, css, javascript,],
      description: 'A search application that identifies the intended letters among the letters',
      linkCode: 'https://github.com/Yosef-Eid/Search-for-words',
      linkWebsite: 'https://search-for-words.vercel.app/',
    },
    {
      img: api,
      firstTitle: 'API ',
      lastTitle: 'Fetching',
      skills: [react, bootstrap, git, github],
      description: 'Retrieve data from the API and display it in the browser',
      linkCode: 'https://github.com/Yosef-Eid/fetch_API',
      linkWebsite: 'https://fetch-api0.netlify.app',
    },
    {
      img: cover,
      firstTitle: 'Eid ',
      lastTitle: 'Circle',
      skills: [html, css, javascript, git, github],
      description: 'A Website For Providing Educational Courses And Scholarships',
      linkCode: 'https://github.com/Yosef-Eid/Ed-Circal',
      linkWebsite: 'https://yosef-eid.github.io/Ed-Circal/',
    },
    {
      img: curser,
      firstTitle: 'Service ',
      lastTitle: 'price',
      skills: [html, css, javascript, git, github],
      description: 'View paid plan details and pricing using your mouse cursor',
      linkCode: 'https://github.com/Yosef-Eid/Course',
      linkWebsite: 'https://yosef-eid.github.io/Course/',
    },
    {
      img: filter,
      firstTitle: 'Filter ',
      lastTitle: 'Project',
      skills: [html, css, javascript, git, github],
      description: 'You can easily filter projects among what you are looking for',
      linkCode: 'https://github.com/Yosef-Eid/Filter-Projects',
      linkWebsite: 'https://yosef-eid.github.io/Filter-Projects/',
    },
    {
      img: hover,
      firstTitle: 'Hover ',
      lastTitle: 'Window',
      skills: [html, css, javascript, git, github],
      description: 'Add a blurred interface to the window using the mouse cursor',
      linkCode: 'https://github.com/Yosef-Eid/Hover',
      linkWebsite: 'https://yosef-eid.github.io/Hover/',
    },
    {
      img: imgClick,
      firstTitle: 'Click ',
      lastTitle: 'Img-JS',
      skills: [html, css, javascript, git, github],
      description: 'Enlarge image with a mouse click using JavaScript',
      linkCode: 'https://github.com/Yosef-Eid/img',
      linkWebsite: 'https://yosef-eid.github.io/img/',
    },
    {
      img: imgCss,
      firstTitle: 'Click ',
      lastTitle: 'Img-Css',
      skills: [html, css, git, github],
      description: 'Enlarge image with a mouse click using only css',
      linkCode: 'https://github.com/Yosef-Eid/Open-Image-',
      linkWebsite: 'https://yosef-eid.github.io/Open-Image-/',
    },
    {
      img: singUp,
      firstTitle: 'Sing',
      lastTitle: 'Up',
      skills: [react, git, github],
      description: 'A login form that meets all conditions ......',
      linkCode: 'https://github.com/Yosef-Eid/singUp-page',
      linkWebsite: 'https://singup-page-5ce56.web.app/',
    },
    {
      img: training,
      firstTitle: 'Tra',
      lastTitle: 'ining',
      skills: [html, css, javascript, git, github],
      description: 'You Can Choose Between Countries Of The World',
      linkCode: 'https://github.com/Yosef-Eid/webket-training',
      linkWebsite: 'https://yosef-eid.github.io/webket-training/',
    },

    {
      img: web,
      firstTitle: 'Web ',
      lastTitle: 'Design',
      skills: [html, css, javascript, git, github],
      description: 'You Can Choose Agents All Over The World',
      linkCode: 'https://github.com/Yosef-Eid/Web-Design',
      linkWebsite: 'https://yosef-eid.github.io/Web-Design/',
    },

  ]

  return (
    <div id='projects' className='w-full flex flex-col items-center justify-center flex-wrap gap-16 mt-28 '>

      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-[32px] font-semibold text-[#2b2b2b]'><span className='text-[#ffb400]'>My</span> Projects</h1>
        <p className='w-[80%] text-center text-[17px] text-[#6a6a6a] font-[400]'>Latest work in website design using different tools and techniques</p>
      </div>

      {/* cards */}
      <div className='w-full flex flex-wrap items-center justify-center px-[1%] gap-2 max-[640px]:grid max-[640px]:grid-cols-2 max-[640px]:place-content-center max-[640px]:place-items-center  '>
        {
          projects.map((project, index) => (
            <div key={index} className='card bg-white w-[270px] h-[370px] max-[350px]:h-[370px] max-[350px]:w-[270px] max-[640px]:h-[200px] max-[640px]:w-full   flex flex-col justify-start shadow-[0_0_10px_0_rgba(0,0,0,.237)] rounded-xl overflow-hidden border-[1px] border-gray-300 '>
              <div className='h-[220px] w-full bg-cover bg-center overflow-hidden' >
                <img src={`${project.img.src}`} className='h-[220px] w-full min-[400px]:hover:scale-[1.1] transition-[all_.3s] ' />
              </div>

              <div className={`about w-full py-2 px-4 flex flex-col justify-between gap-y-[15px]`}>

                <div className='title w-full flex items-center justify-between'>
                  {/* title */}
                  <div className=''>
                    <span className='text-[#ffb400] font-bold text-[19px]'>{project.firstTitle}</span>
                    <span className='text-[#0c0c0ce5] font-bold text-[19px]'>{project.lastTitle}</span>
                  </div>

                  {/* skills */}
                  <div className='flex items-center justify-center gap-1 px-4 py-1 rounded-full backdrop-blur-sm bg-white/30'>
                    {
                      project.skills.map((skill, index) => (<Image key={index} src={skill} width={12} alt='' />))
                    }
                  </div>
                </div>
                <span className='description text-[#2b2b2b] text-[13px]'>{project.description}</span>
                <div className='links flex items-center justify-between '>
                  <a href={project.linkCode} target='_blank' className='max-[400px]:text-white text-[#0c0c0c] max-[640px]:text-[#ffffff]  decoration-inherit shadow-md border-[1px] border-gray-300  text-[15px] rounded-md py-1 w-24 text-center  hover:bg-[#ffb400] transition-all delay-75 ease-in-out'>View code </a>
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
