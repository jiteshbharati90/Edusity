import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon'/>
        </div>
        <div className="about-right">
           <h3>ABOUT  UNIVERSITY</h3>
           <h2>Nurturing Tomorrow's Leaders Today </h2>
           <p>University life is a vibrant tapestry woven with various experiences and challenges. At its core lies academic rigor, where students engage in challenging coursework that demands dedication and effort to excel. Beyond the lecture halls and libraries, universities are bustling communities characterized by diversity</p>
           <p>Here, students from different backgrounds, cultures, and perspectives converge, fostering a rich tapestry of ideas and experiences. Alongside academics, extracurricular activities abound, offering avenues for students to explore interests outside their majors, from joining clubs to participating in sports teams or volunteering in the community.</p>
           <p>This multifaceted environment cultivates not only academic prowess but also personal growth, fostering independence and responsibility as students manage their schedules, finances, and daily lives. Moreover, university life is ripe with networking opportunities, providing students with the chance to connect with professors, alumni, and peers,</p>
        </div>
      
    </div>
  )
}

export default About
