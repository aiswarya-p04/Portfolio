import React from 'react'
import "./experience.css";

const Experience = () => {
    return (
        <div className='exp'>
            <h1>Work Experience</h1>
            <div className="exp-all">
            <div className="exp-left">
                <ul>
                    <li className='exp-l' >
                        <div className="exp-t">Digital Specialist Engineer</div> 
                        <div className="exp-name">Infosys Ltd.</div>
                        <div className="exp-date">09/2020 - 12/2021</div>
                        <div className="exp-desc">Software developer at Morgan Stanley</div>
                        <div className="exp-tasks">
                           <div className="et">Tasks:</div> 
                        <ul>
                            <li>
                                Worked in an Agile Project which involves designing web pages in Struts 2 framework.
                                </li>
                                <li>
                                    Migrating web pages from struts1 to struts2 framework.
                                    
                                    <ul>
                                    <li>Javascript, HTML, JSP, Struts2, JSTL, SQL.</li>
                                    <li>IntelliJ, Git, Jira</li>
                                    </ul>
                                    
                                </li>
                                </ul>
                                </div>
                    </li>
                    <li className='exp-l'>
                    <div className="exp-t"> Vocational Training </div>
                        <div className="exp-name">Integrated Test Range, Chandipur, DRDO</div>
                        <div className="exp-date">05/2018 - 06/2018</div>
                        {/* <div className="exp-desc">Software developer at Morgan Stanley</div> */}
                        <div className="exp-tasks">
                           <div className="et">Achievements/Tasks:</div> 
                        <ul>
                            <li>
                                Worked on a project which involves implementation of FTP using C++.
                                </li>
                                
                                </ul>
                                </div>
                    </li>
                </ul>
            </div>
            <div className="exp-right">
                <ul>
                    <li className='exp-l'>
                    <div className="exp-t">Internship</div>
                        <div className="exp-name">ITPlusPoint Solutions Pvt. Ltd.</div>
                        <div className="exp-date">11/2018 - 12/2019</div>
                        {/* <div className="exp-desc">Software developer at Morgan Stanley</div> */}
                        <div className="exp-tasks">
                           <div className="et">Achievements/Tasks:</div> 
                        <ul>
                            <li>
                                Worked on a project which includes vehicle booking system by using Robotic Process Automation with UI Path.
                                </li>
                                <li>
                                   Worked on a tool which automates the whole process of choosing the vehicle according to our preferences and location and booking it.
                                    
                                   
                                    
                                </li>
                                </ul>
                                </div>
                    </li>

                    <li className='exp-l'>
                    <div className="exp-t"> Vocational Training in Basic IT</div>
                        <div className="exp-name">Bharat Sanchar Nigam Limited (BSNL)</div>
                        <div className="exp-date">06/2017 - 06/2017</div>
                        {/* <div className="exp-desc">Software developer at Morgan Stanley</div> */}
                        <div className="exp-tasks">
                           <div className="et">Achievements/Tasks:</div> 
                        <ul>
                            <li>
                               Trained in basic computer networks.
                                </li>
                                
                                </ul>
                                </div>
                    </li>
                </ul>
            </div>
            </div>
           

        </div>
    )
}

export default Experience
