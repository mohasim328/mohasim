import React from 'react'

const Education = () => {
  return (

    <div className="container py-10 min-h-screen px-10">
        <div className="heading  text-center  py-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold inline-block">Education</h1>
        </div>
        <div className="min-h-[80vh] flex justify-center items-center flex-wrap gap-10">
            <div className="h-80 w-96 shadow-sm shadow-white px-10 py-14">
                <h1 class="text-3xl font-bold  tracking-tight py-2 text-white ">2021-Present</h1>
                <p className="leading-6 text-white text-lg tracking-wide font-light">I.E.T. Rohilkhand University,
                    Bareilly</p>
                <p className="leading-6 text-white text-sm tracking-wide font-extralight">Bachelor of Technology in
                    Computer Science & Information Technology</p>
            </div>
            <div className="h-80 w-96 shadow-sm shadow-white px-10 py-14">
                <h1 className="text-3xl font-bold  tracking-tight py-2 text-white ">2020</h1>
                <p className="leading-6 text-white text-lg tracking-wide font-light">Mission Academy Inter Collage,Baheri, Bareilly</p>
                <p className="leading-6 text-white text-sm tracking-wide font-extralight">Persentage : 75%</p>
            </div>
            <div className="h-80 w-96 shadow-sm shadow-white px-10 py-14">
            <h1 className="text-3xl font-bold  tracking-tight py-2 text-white ">2018</h1>
                <p className="leading-6 text-white text-lg tracking-wide font-light">Neta Ji Shubhas Chandra bosh,Baheri, Bareilly</p>
                <p className="leading-6 text-white text-sm tracking-wide font-extralight">Persentage : 80%</p>
            </div>
        </div>
    </div>

  )
}

export default Education
