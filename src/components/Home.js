import React from 'react'
// import Inavbar from './navbar/Inavbar';
import Intro from './intro/Intro';
import About from './about/About';
import Contact from './Contact/Contact';
import Skills from './skills/Skills';

const Home = () => {
  return (
    <div>
      {/* <Inavbar /> */}
      <Intro />
      <About />
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
