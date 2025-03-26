import React from 'react'
import Footer from '../components/NavBar&Footer/Footer'
import NavBar from '../components/NavBar&Footer/NavBar'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Project/Projects'
import Qualification from '../components/Qualification/Qualification'
import About from '../components/About/About'
import Skills from '../components/skill/skills'

function Main() {
  return (
    <>
    <NavBar />
    <About />
    <Skills />
    <Qualification />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Main