import React from 'react'
// import Inavbar from './navbar/Inavbar';
import Intro from './intro/Intro';
import About from './about/About';
import Contact from './Contact/Contact';
import Skills from './skills/Skills';
import Publication from './Publication/Publication';
import Experience from './experience/Experience';
import Education from './education/Education';
import Certificate from './certificates/Certificate';
import Project from './project/Project';

const Home = () => {
  return (
    <div>
      {/* <Inavbar /> */}
      <Intro />
      <About />
      <Skills/>
      <Experience/>
      <Education/>
      <Publication/>
      <Certificate/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home
