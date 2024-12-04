import { useEffect, useRef } from "react"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"
import Header from "../components/Header/Header"
import Intro from "../components/Intro/Intro"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"

const Layout = () => {

  return (
    <>
      <main className=" w-dvw h-dvh select-none dark overflow-x-hidden ">
         
        <Header/>
       <section  className="mt-[80px] flex gap-5 justify-center items-center flex-col ">
        <Intro/>
        <Skills/>
        <Projects/>
        <AboutMe/>
        <Contact/>
       </section>
      </main>
    </>
  )
}

export default Layout