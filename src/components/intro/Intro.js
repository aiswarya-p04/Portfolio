import React from 'react'
import './intro.css';
import Me from "../../images/aiswarya.jpeg";

const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left">
        <div className="i-left-wrap">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h2 className='i-name'>Aiswarya</h2>
            <div className="i-title">
                <div className="i-title-wrap">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">aa</div>
                    <div className="i-title-item">dkncc</div>
                    <div className="i-title-item">sssss</div>
                    <div className="i-title-item">avvg</div>
                </div>
            </div>
            <p className="i-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus numquam, fugiat delectus laborum quibusdam alias explicabo dolores nostrum consequuntur quos autem. Sit reprehenderit inventore numquam obcaecati recusandae nam nulla?</p>
        </div>
        </div>
        <div className="intro-right">
            <img src={Me} alt="" className="i-img" />
        </div>

    </div>
  )
}

export default Intro

