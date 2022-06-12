import React from 'react'

import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
 
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase,  faAdjust } from '@fortawesome/free-solid-svg-icons'
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='nav-bar'>
  
      <NavLink to="/" exact="true" className='logo'>
            <FontAwesomeIcon className='logoImg' icon={faAdjust} color="#ffd700" />
        </NavLink>
        
      

        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link"    to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
    
             </ul>
    </div>
  )
}

export default Sidebar