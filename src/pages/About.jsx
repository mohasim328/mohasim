import React from 'react'
import Pic2 from '../assets/mypic.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa6";

const About = ({ ContactSec }) => {
    return (
        <div className="container pt-20 min-h-screen md:px-10 px-5 mx-auto">
            <div className="ab-heading  text-center ">
                <h1 className=" text-5xl sm:text-6xl font-extrabold">About Me</h1>
            </div>
            <div className="flex flex-col items-center lg:flex-row min-h-[80vh] md:px-4">
                <div class="ab-left lg:w-[30%] p-10 w-full">
                    <img src={Pic2} alt=""
                        className=" rounded-full bg-secondry border border-color-while" />
                </div>
                <div className="ab-right lg:w-[70%] w-full">
                    <h2 className="text-5xl text-color-secondry my-5 font-extrabold text-center lg:text-left">Mo Hasim
                    </h2>
                  

                    <p className="text-white text-sm tracking-wide font-extralight mt-4 mb-4">I am currently
                        studying in B.Tech in Computer Science & Information Technology at Mahatma
                        Jyotiba Phule Rohilkhand University Bareilly, and I love to create and design attractive
                        webpages. I enjoy spending my time doing competitive programming and solving DSA
                        problems on popular platforms like HackerRank, GFG, and CodeChef.
                    </p>
                    <div className="w-full flex justify-center lg:justify-start items-center py-5 gap-5">
                        <a href="https://github.com/mohdmustaqeem" target="_blank" className="px-5 py-2 rounded border border-secondry bg-secondry hover:bg-transparent duration-200">Know more</a>
                        <button onClick={() => ScrollHandler(ContactSec)} className="px-5 py-2 rounded border border-secondry  bg-transparent text-secondry">Contact</button>
                    </div>
                    <div class="w-full flex justify-center lg:justify-start items-center py-5 gap-5">
                        <a href="" target="_blank"><FaHackerrank size={30} /></a>
                        <a href="" target="_blank"><FaCode size={30} /></a>
                        <a href="https://www.linkedin.com/in/mohasim328" target="_blank"><FaLinkedinIn size={30} /></a>
                        <a href="https://github.com/mohasim328" target="_blank"><FaGithub size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
