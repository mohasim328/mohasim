import React from 'react'
import Weather from '../assets/weatherApp.jpg';
import Todo from '../assets/todoList.jpg'
import Authentication from '../assets/authentication.png'
import Gradient from '../assets/grgenerator.png'
import { FaGlobeAmericas } from "react-icons/fa";
import {FaGithub } from "react-icons/fa6";

const Project = () => {
  return (
    
        <div className="container py-10 min-h-screen px-10">
            <div className="heading  py-10 text-center ">
                <h1 className="text-5xl sm:text-6xl font-extrabold inline-block">Project</h1>
            </div>
            <div className="min-h-[80vh] flex flex-wrap gap-10 justify-center items-center ">
                <div className="h-80 w-96 rounded-lg shadow-sm shadow-white ">
                    <div className="overflow-hidden w-full rounded-t-lg h-[80%]">
                    <img src={Weather} alt=""/>
                    </div>
                    <div className="flex justify-between bg-color-primary h-[20%] rounded-b-lg pt-3 px-2">

                        <div>
                            <h2>Weather App</h2>
                        </div>

                        <div>
                            <a href="https://github.com/mohasim328/weather" target="_blank"><FaGithub size={25}/></a>
                            <a href="https://weather-roan-nine.vercel.app" target="_blank"><FaGlobeAmericas size={25}/></a>
                        </div>

                    </div>

                </div>
                <div className="h-80 w-96 rounded-lg shadow-sm shadow-white ">
                    <div className="overflow-hidden w-full rounded-t-lg h-[80%]">
                    <img src={Todo} alt=""/>
                    </div>
                    <div className="flex justify-between bg-color-primary h-[20%] rounded-b-lg pt-3 px-2">

                        <div>
                            <h2>To Do List</h2>
                        </div>

                        <div>
                            <a href="https://github.com/mohasim328/To-Do-Listh" target="_blank"><FaGithub size={25}/></a>
                            <a href="https://to-do-list-eight-pink.vercel.app" target="_blank"><FaGlobeAmericas size={25}/></a>
                        </div>

                    </div>

                </div>
                <div className="h-80 w-96 rounded-lg shadow-sm shadow-white"> 
                    <div className="overflow-hidden w-full rounded-t-lg h-[80%]">
                    <img src={Gradient} alt=""/>
                    </div>
                    <div className="flex justify-between bg-color-primary h-[20%] rounded-b-lg pt-3 px-2">

                        <div>
                            <h2>Greadient Generator</h2>
                        </div>

                        <div>
                            <a href="https://github.com/mohasim328/codeclause-bg" target="_blank"><FaGithub size={25}/></a>
                            <a href="https://codeclause-bg.vercel.app/" target="_blank"><FaGlobeAmericas size={25}/></a>
                        </div>

                    </div>
                </div>
                <div className="h-80 w-96 rounded-lg shadow-sm shadow-white">
                    <div className="overflow-hidden w-full rounded-t-lg h-[80%]">
                    <img src={Authentication} alt=""/>
                    </div>
                    <div className="flex justify-between bg-color-primary h-[20%] rounded-b-lg pt-3 px-2">

                        <div>
                            <h2>Full Authentication App</h2>
                        </div>

                        <div>
                            <a href="https://github.com/mohasim328/SocialAuth" target="_blank"><FaGithub size={25}/></a>
                            <a href="https://socialauth-n2bd.onrender.com" target="_blank"><FaGlobeAmericas size={25}/></a>
                        </div>

                    </div>
                
                </div>
               
            </div>

        </div>
  

  )
}

export default Project
