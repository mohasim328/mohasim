import React, { useEffect, useRef, useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
import Skill from './pages/Skill.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer';
import { FaArrowUp } from "react-icons/fa";
import Education from './pages/Education.jsx'

const App = () => {

  const HomeSec = useRef();
  const AboutSec = useRef();
  const EducationSec = useRef();
  const ContactSec = useRef();
  const SkilltSec = useRef();
  const ProjectSec = useRef();
  const toTop = useRef();
  const [show, setShow] = useState(false);


  const ScrollHandler = (eleRef) => {

    // console.log(eleRef.current)

    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });

  };

  const ScrollToTop = (eleRef) => {

    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 500) {
        //  console.log(scrollY)
        setShow(true);
      } else {
        setShow(false);
      }


    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }

  }, [])

  return (
    <div>
      <Header HomeSec={HomeSec} AboutSec={AboutSec} ContactSec={ContactSec} ProjectSec={ProjectSec} EducationSec={EducationSec} SkillSec={SkilltSec} ScrollHandler={ScrollHandler} />
      <section
        ref={HomeSec}
      >
        <Home />
      </section>

      <section
        ref={AboutSec}
      >
        <About ref={ContactSec}/>
      </section>

      <section
        ref={EducationSec}
      >
        <Education/>
      </section>
      <section
        ref={SkilltSec}
      >
        <Skill />
      </section>

      <section
        ref={ProjectSec}
      >
        <Project />
      </section>

      <section
        ref={ContactSec}
      >
        <Contact />
      </section>

      <section>
        <Footer />
      </section>

      <div onClick={() => ScrollToTop(toTop)} className='fixed right-4 bottom-4 rounded-full animate-bounce text-white '> {show && <FaArrowUp size={30}/>}</div>

    </div>
  )
}

export default App