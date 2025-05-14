import React from 'react'
import Pic from '../assets/backpng.png'
import TypingAnimation from '../components/TypingAnimation'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Home = () => {
  return (
    <div className="container pt-20 flex items-center justify-center min-h-screen mx-auto">
      <div className="flex flex-col items-center lg:flex-row px-10">
        <div className="lg:w-[60%] my-20 ">
          <h2 className=" text-white text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 mb-4">Hi, there!</h2>
          <h1 className=" text-white text-4xl sm:text-5xl md:text-6xl font-bold  tracking-tight my-3 ">I'm Mo Hasim
          </h1>
         <TypingAnimation/>
          <div className=" md:flex gap-5 my-3">
            <a href="tel:+919528545024"><p className="text-color-secondry flex items-center"> <FaPhone size={25}/> +91-9528545054</p></a>
            <a href="mailto:mohasim3283@gmail.com" > <p className="text-color-secondry flex items-center "><MdOutlineMailOutline size={25}/>mohasim3283@gmail.com</p></a>
          </div>
          <p className="text-white text-sm tracking-wide font-extralight mt-4 mb-8">I am currently studying in
            B.Tech in Computer Science & Information Technology at Mahatma Jyotiba Phule Rohilkhand
            University Bareilly, and I love to create and design attractive webpages. I enjoy spending
            my time doing competitive programming and solving DSA problems on popular platforms like
            HackerRank, GFG, and CodeChef.
          </p>
          <div className="flex gap-8 my-8">
            <a href="https://www.linkedin.com/in/mohasim328" target="_blank" className="px-5 py-2 rounded border border-secondry bg-secondry hover:bg-transparent duration-200">Linkdin</a>
            <a href="https://github.com/mohasim328" target="_blank" className="px-5 py-2 rounded border border-secondry  bg-transparent text-secondry">GitHub</a>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <img src={Pic} alt="mypic" className="fluid " />
        </div>
      </div>
    </div>
  )
}

export default Home
