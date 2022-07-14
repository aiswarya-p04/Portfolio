import React from 'react'
import "./project.css";

const Project = () => {
  return (
    <div className='project'>
      <h1>Projects</h1>
      <div className="pro">
        <div className="pro-left">
    <div className="pro-title">
        Emotion Recognition by inclusion of Age and Gender parameters with a novel hierarchical approach using Deep Learning
    </div>
    <div className="pro-desc">
        The emotion, gender and age recognition has been dealt in real-time video stream. This model implements Sqeezenet and mini-Xception architectures that are combined in a hierarchical order. Techs used: <span>Deep Learning, Python</span> .
    </div>
        </div>
        <div className="pro-right">
        <div className="pro-title">
        Vehicle booking system by using Robotic Process Automation
    </div>
    <div className="pro-desc">
        Worked on a tool which automates the whole process of choosing the vehicle according to our preferences and location and booking it. Techs used: <span>Robotic Process Automation using UIPath</span>.
    </div>
        </div>
      </div>
    </div>
  )
}

export default Project
