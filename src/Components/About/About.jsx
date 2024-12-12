import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} className='profile-img' height='330px' width='280px' alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>"As a frontend developer, I’m dedicated to delivering high-quality
            code and engaging user experiences. I will apply my skills
            and creativity to help your company stand out in the digital space.
           Together, we can build innovative solutions that delight
            users and drive success! </p> <p>As a fresher, I am passionate about frontend development and excited
            to learn the latest technologies.I’m eager to create
            engaging user interfaces that make a positive impact on users’
            experiences." </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Mongo DB</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Node JS</p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
