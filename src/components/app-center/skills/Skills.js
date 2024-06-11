import React from 'react'
import Image from 'next/image'

import html from './icons/html-1.svg'
import css from './icons/css-3.svg'
import javascript from './icons/logo-javascript.svg'
import bootstrap from "./icons/bootstrap-5-1.svg";
import tailwind from "./icons/tailwind-css-2.svg";
import python from "./icons/python-5.svg";
import react from "./icons/react-2.svg";
import next from "./icons/next-js.svg";
import graphql from "./icons/graphql.svg";
import redux from "./icons/redux.svg";
import node from "./icons/node.svg";
import express from "./icons/express-109.svg";
import mongoDb from "./icons/mongodb-icon-2.svg";
import mongoose from "./icons/mongoose-1.svg";
import postman from "./icons/postman.svg";
import npm from "./icons/npm.svg";
import mUi from "./icons/material-ui-1.svg";
import git from "./icons/git-icon.svg";
import github from "./icons/github-icon-1.svg";
import docker from "./icons/docker-4.svg";
import notion from "./icons/notion-1-1.svg";
import monday from "./icons/monday.svg";
import clickUp from "./icons/clickup.svg";
import firebase from "./icons/firebase-1.svg";
import terminal from "./icons/terminal-1.svg";
import vsCode from "./icons/visual-studio-code-1.svg";


function Skills() {

    let skillsIcon = [
        {icon:html, title:'html'},
        {icon:css, title:'css'},
        {icon:javascript, title:'javascript'},
        {icon:bootstrap, title:'bootstrap'},
        {icon:tailwind, title:'tailwind'},
        {icon:python, title:'python'},
        {icon:react, title:'react'},
        {icon:next, title:'next'},
        {icon:graphql, title:'graphql'},
        {icon:redux, title:'redux'},
        {icon:mUi, title:'mUi'},
        {icon:node, title:'node'},
        {icon:express, title:'express'},
        {icon:mongoDb, title:'mongoDb'},
        {icon:mongoose, title:'mongoose'},
        {icon:postman, title:'postman'},
        {icon:npm, title:'npm'},
        {icon:git, title:'git'},
        {icon:github, title:'github'},
        {icon:docker, title:'docker'},
        {icon:notion, title:'notion'},
        {icon:monday, title:'monday'},
        {icon:clickUp, title:'clickUp'},
        {icon:firebase, title:'firebase'},
        {icon:terminal, title:'terminal'},
        {icon:vsCode, title:'vsCode'},
    ]

    return (
        <div id='skills' className='w-full flex flex-col items-center justify-center flex-wrap gap-16 mt-28'>

            <div className='flex flex-col items-center gap-6'>
                <h1 className='text-[32px] font-semibold text-[#2b2b2b]'><span className='text-[#ffb400]'>My</span> Skills</h1>
                <p className='w-[80%] text-center text-[17px] text-[#6a6a6a] font-[400]'>These Are The Skills I Use In Building Projects And Which I Have Mastered Well</p>
            </div>

            {/* skills icon */}
            <div className='w-full flex flex-wrap px-[5%] items-center justify-center gap-9'>
                    {
                        skillsIcon.map((skills, index) => (
                            <Image key={index} src={skills.icon} title={skills.title} width={50} alt='' className='hover:scale-125 cursor-pointer transition-all delay-75' />
                        ))
                    }
            </div>
        </div>
    )
}

export default Skills;
