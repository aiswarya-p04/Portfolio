import React from 'react'
import "./education.css";

const Education = () => {
    return (
        <div className='ed'>
            <h1>Education</h1>
            <div className="edu">
                <div className="left">
                    <div className='tit'>Graduation in Computer Science Engineering</div>
                    <div className="clg">SRM Institute of Science and Technology, Chennai, India</div>
                    <div className="clg-date">2016-2020</div>
                    <div className="per">90.08%</div>
                </div>
                <div className="middle">
                <div className='tit'>Class XII</div>
                    <div className="clg">ODM Public School, Bhubaneswar, India</div>
                    <div className="clg-date">2015-2016</div>
                    <div className="per">90.4%</div>
                </div>
                <div className="right">
                <div className='tit'>Class X</div>
                    <div className="clg">St. Vincent's Convent Sr. Sec. School, Balasore, India</div>
                    <div className="clg-date">2013-2014</div>
                    <div className="per">93.33%</div>
                </div>
            </div>

        </div>
    )
}

export default Education
