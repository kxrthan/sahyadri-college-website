import React from 'react'
import './About.css'
import about_img from '../../assets/scemhero.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Sahyadri College of Engineering and Management (SCEM), Mangaluru, an Autonomous Institute affiliated to 
            the Visvesvaraya Technological University (VTU), Belagavi, was established in the year 2007 under the Bhandary Foundation.</p> 
            <p>It is one of the premier technological institutions inculcating quality and value-based education through innovative teaching learning process for holistic development of the graduates.</p>
                
                 <p>The institute has a permanent affiliation for most of the programs, approved by the AICTE & the Government of Karnataka, Accredited by the National Assessment and Accreditation Council (NAAC) with 'A' grade,
             National Board of Accreditation (NBA) for Five Engineering Programs, and the Institution of Engineers (India) (IE(I)). </p>
             
            


        </div>
      
    </div>
  )
}

export default About
