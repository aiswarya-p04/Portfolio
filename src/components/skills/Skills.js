import React from 'react'
import "./skills.css";

const Skills = () => {
  return (
    <div>
      <h1 className='skills'>MY SKILLS</h1>
        <div className="s">
        <div className="s-left">
      <ul>
        <li className='l-skill'>React</li>
        <li className='l-skill'>HTML</li>
        <li className='l-skill'>Bootstrap</li>
        <li className='l-skill'>MongoDB</li>
        <li className='l-skill'>C++</li>
        <li className='l-skill'>SQL</li>
      </ul>
      </div>
      <div className="s-right">
      <ul>
        <li className='l-skill'>Javascript</li>
        <li className='l-skill'>CSS</li>
        <li className='l-skill'>Angular</li>
        <li className='l-skill'>Java</li>
        <li className='l-skill'>C</li>
        <li className='l-skill'>NodeJS</li>
      </ul>
      </div>
        </div>
      
      
    </div>
  )
}

export default Skills
