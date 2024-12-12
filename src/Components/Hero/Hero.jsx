import React from 'react'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from '../../assets/profile_img.jpeg'
import resume from '../../assets/resume.pdf'
const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume; 
    link.download = 'resume.pdf';
    link.click();
  };
  return (
      <div id='hero' className='hero'>
      <img src={profile_img} height='280px' width='260px' alt="" />
      <h1>Hello, <span>I'm Abhishek Hondale</span> <br /> <span className='hero-job'>Frontend Developer</span> </h1>
      <p>I completed my Frontend Developer course at Jspiders Basavanagudi, Bengaluru. The program equipped me with essential skills in HTML, CSS, and JavaScript and frameworks such as React JS.I gained hands-on experience through projects and real-world scenarios.  This experience has prepared me to build dynamic and responsive web applications." </p>
      <p> Take a look at my work and let's collaborate on building something amazing!</p>
      
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume" onClick={handleDownloadResume}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
