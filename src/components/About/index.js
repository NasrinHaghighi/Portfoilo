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
        <p>I am a front-end developer able to build the front-end portion of
           websites and web applications. I have the experience to create e-commercial
            websites, with the possibility to select products by color, and size, apply discounts,
             and add or remove from cart list and favorite list and registration form by validation.
              also, I am able to work with API. also I made various portfolio websites.</p>

             <p>for this approach, I used JavaScript/ React /NextJs /Redux/React-Bootestarp/ 
              MaterialUi/Ant Design / Animate.css and much more technology to make a perfect user experience.</p>


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