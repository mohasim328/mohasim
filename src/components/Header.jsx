import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"

const Header = ({ HomeSec, AboutSec, ContactSec, ProjectSec, SkillSec,EducationSec, ScrollHandler }) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {

        setMobileOpen(!mobileOpen)

    }

    return (

        <div className="flex md:flex justify-between items-center fixed top-0 left-0 w-full backdrop-blur-xl h-20 px-8">
            <div>
                <h1 className="text-5xl font-extrabold">MH<span className="text-secondry">.</span>
                </h1>
            </div>
            <nav className="hidden md:block">
                <ul
                    className="flex justify-center gap-5 items-center h-20"
                    role="navigation"
                    aria-label="Main Navigation"
                >
                    <li>
                        <button
                            className="hover:border-b-3 border-b-secondry duration-100"
                            onClick={() => ScrollHandler(HomeSec)}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className="hover:border-b-3 border-b-secondry duration-100"
                            onClick={() => ScrollHandler(AboutSec)}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className="hover:border-b-3 border-b-secondry duration-100"
                            onClick={() => ScrollHandler(EducationSec)}
                        >
                            Education
                        </button>
                    </li>
                    <li>
                        <button
                            className="hover:border-b-3 border-b-secondry duration-100"
                            onClick={() => ScrollHandler(SkillSec)}
                        >
                            Skill
                        </button>
                    </li>
                    <li>
                        <button
                            className="hover:border-b-3 border-b-secondry duration-100"
                            onClick={() => ScrollHandler(ProjectSec)}
                        >
                            Project
                        </button>
                    </li>

                    <li>
                        <button
                            className="hover:border-b-3 border-b-secondry duration-100"
                            onClick={() => ScrollHandler(ContactSec)}
                        >
                            Contact
                        </button>
                    </li>
                    <li>
                        <a
                            className="bg-secondry border border-secondry rounded py-2 px-5 hover:bg-transparent duration-200"
                            href="https://drive.google.com/file/d/1ExwzkMnVMiDXo9lN6kfbbFWAAXN2nUqP/view?usp=drivesdk"
                              target="_blank"
                        >
                            Resume
                        </a>
                    </li>

                </ul>
            </nav>
            <div className={`${mobileOpen ? 'translate-x-full' : 'translate-x-0'} w-full  bg-[#01051e]  fixed top-0 left-[-100%] bottom-0 min-h-screen duration-500`}>
                <nav onClick={handleDrawerToggle} className="h-screen flex justify-center items-center">
                    <ul
                        className="flex flex-col justify-center gap-5 items-center "
                        role="navigation"
                        aria-label="Main Navigation"
                        onClick={handleDrawerToggle}
                    >
                        <li>
                            <button
                                className="hover:border-b-3 border-b-secondry duration-100"
                                onClick={() => ScrollHandler(HomeSec)}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:border-b-3 border-b-secondry duration-100"
                                onClick={() => ScrollHandler(AboutSec)}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:border-b-3 border-b-secondry duration-100"
                                onClick={() => ScrollHandler(EducationSec)}
                            >
                                Education
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:border-b-3 border-b-secondry duration-100"
                                onClick={() => ScrollHandler(SkillSec)}
                            >
                                Skill
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:border-b-3 border-b-secondry duration-100"
                                onClick={() => ScrollHandler(ProjectSec)}
                            >
                                Project
                            </button>
                        </li>

                        <li>
                            <button
                                className="hover:border-b-3 border-b-secondry duration-100"
                                onClick={() => ScrollHandler(ContactSec)}

                            >
                                Contact
                            </button>
                        </li>
                        <li>
                        <a
                            className="bg-secondry border border-secondry rounded py-2 px-5 hover:bg-transparent duration-200"
                              href="https://drive.google.com/file/d/1ExwzkMnVMiDXo9lN6kfbbFWAAXN2nUqP/view?usp=drivesdk"
                              target="_blank"
                        >
                            Resume
                        </a>
                    </li>

                    </ul>
                </nav>
            </div>

            <div className="md:hidden">
                <button className="w-full h-full" onClick={handleDrawerToggle}>
                    {mobileOpen ? <IoMdClose size={30} /> : <AiOutlineMenu size={30} />}
                </button>
            </div>
        </div>
    );
};

export default Header;
