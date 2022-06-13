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
  
  import css from '../../public/images/css.svg'
  import js from '../../public/images/javascript.svg'
  import next from '../../public/images/next.svg'
  import html from '../../public/images/html.svg'
  import bootstrap from '../../public/images/bootstrap.svg'
  import jquery from '../../public/images/jquery.svg'
  import jira from '../../public/images/jira.svg'
  import redux from '../../public/images/redux.svg'
  import react3 from '../../public/images/react-2.svg'


  import Loader from 'react-loaders'

  
function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000);
          return () => clearTimeout(timer);
     }, [])
  return (
    <>
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
      
      
        <div> <img src={html} /><span>Html</span></div>
        <div> <img src={css} /><span>Css</span></div>
        <div> <img src={js} /><span>JavaScript</span></div>
        <div> <img src={react3} /><span>React</span></div>
        <div> <img src={redux} /><span>Redux</span></div>
        <div> <img src={next} /><span>Next</span></div>
        <div> <img src={bootstrap} /><span>Bootestrap</span></div>
        <div> <img src={jquery} /><span>JQuery</span></div>
        <div> <img src={jira} /><span>Jira</span></div>
    </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default About