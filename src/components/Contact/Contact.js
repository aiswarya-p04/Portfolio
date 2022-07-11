import React from 'react'
import "./Contact.css";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me!</h1>
          <div className="c-info">
            <div className="c-info-item">
                    <PhoneInTalkIcon className='c-icon'/> +46764491061
                    
                    </div>
                    <div className="c-info-item">
                    <EmailIcon className='c-icon'/>aiswarya123p@gmail.com
                    </div>

                    <div className="c-info-item">
                    <HomeIcon className='c-icon'/> Södertälje
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Let's get in touch</b>
                </p>
                <form>
                <input className='inputt' type="text" placeholder="Name" name="user_name" />
            <input className='inputt' type="text" placeholder="Subject" name="user_subject" />
            <input className='inputt' type="text" placeholder="Email" name="user_email" />
            <textarea className='textareaa' rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
                </form>
            </div>
        </div>

      

    </div>
  )
}

export default Contact
