import React,{useEffect, useState} from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 

  
function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000);
          return () => clearTimeout(timer);
     }, [])
  return (
    <div className="container about-page">
    <div className="text-zone">
        <h1>
        <AnimatedLetters
                 letterClass={letterClass}
                 strArray={['A', 'b', 'o', 'u','t', '  ', 'm', 'e']}
                 idx={15}
                  />
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis consectetur officia nobis vero atque rerum animi error ad odio pariatur laboriosam harum
             voluptates quidem vitae similique, illum perferendis reprehenderit tempore!</p>

             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis consectetur officia nobis vero atque rerum animi error ad odio pariatur laboriosam harum
             voluptates quidem vitae similique, illum perferendis reprehenderit tempore!</p>

             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis consectetur officia nobis vero atque rerum animi error ad odio pariatur laboriosam harum
             voluptates quidem vitae similique, illum perferendis reprehenderit tempore!</p>
    </div>
    <div className="skills">
      
        <div> <FontAwesomeIcon icon={faHtml5} color="#F06529"   size = '10x'/></div>
        <div> <FontAwesomeIcon icon={faCss3} color="#28A4D9" size = '10x' mask="fa-regular fa-circle"/></div>
        <div> <FontAwesomeIcon icon={faReact} color="#5ED4F4" size = '10x'/></div>
        <div> <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size = '10x'/></div>
        <div> <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" size = '10x'/></div>
        {/* <div><img src={redux}/> </div> */}
    </div>
    </div>
  )
}

export default About