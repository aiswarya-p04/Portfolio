import React from 'react'
import "./about.css";
import AboutMe from "../../images/about.jpg"; 

const About = () => {
  return (
    <div className='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img
            src={AboutMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ab.
        </p>
        <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cumque voluptatem architecto facilis cupiditate itaque voluptatibus quia aperiam veniam eligendi. Quidem quaerat vitae, maxime nisi magnam ex voluptatum suscipit atque eum deserunt voluptatibus cum veniam quo, commodi sed tempore! Assumenda dignissimos eligendi consequuntur fuga. Doloribus eum vitae nesciunt. Sint, veniam?</p>
        
      </div>
    </div>
  )
}

export default About
