import React from 'react'
import "./publication.css";
import ieee from "../../images/ieee.jpg"

const Publication = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='publication'>
      <h1>Paper Publication : (IEEE)</h1>
      <div className='h22'>Emotion recognition by inclusion of age and gender parameters with a novel hierarchical approach using deep learning:</div>
      <div className="pub">
      <div className="pub-left">
            <img src={ieee} alt="ieee" className='pub-img' />
        </div>
        <div className="pub-right">
            <div className="pub-about">
            In this paper, the emotion, gender and age recognition has been dealt in real time video stream. This model implements Squeezenet and mini-Xception architectures that are combined in a hierarchical order. In order to train these different networks, different types of large labelled datasets have been utilized which are available publicly through a semi-supervised pipeline to reduce the annotations efforts and time. The results show that the emotion-based system gave better performance than the previous model-based system.
            <div className="p-link">
            <a href="https://ieeexplore.ieee.org/document/9350479" target="_blank">
                <button className='btn-link' onClick={handleSubmit} >Read More</button>
            </a>
            </div>
            
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Publication
