import React from 'react'
// import Inavbar from './navbar/Inavbar';
import Intro from './intro/Intro';
import About from './about/About';
import Contact from './Contact/Contact';
import Skills from './skills/Skills';
import Publication from './Publication/Publication';

const Home = () => {
  return (
    <div>
      {/* <Inavbar /> */}
      <Intro />
      <About />
      <Skills/>
      <Publication/>
      <Contact/>
    </div>
  )
}

export default Home
