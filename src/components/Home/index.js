import React , {useEffect, useState}from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function Home() {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['N', 'a', 's', 'r', 'i',  'n',' ', 'H', 'a', 'g', 'h', 'i', 'g', 'h', 'i']
    const jobArray = [
      'w',
      'e',
      'b',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]
  
     useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000);
          return () => clearTimeout(timer);
     }, [])
  
  return (
    <div className='conatiner home-page'>
         <div className="text-zone">
             <h1>
             <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                 <br/>
               
              
                 <AnimatedLetters
                 letterClass={letterClass}
                 strArray={nameArray}
                 idx={15}
                  />
                     <br />
                <AnimatedLetters
                 letterClass={letterClass}
                strArray={jobArray}
                 idx={22}
            />
             </h1>
             <h2>Fronrend Developer | Javascript | React | Redux</h2>
             <Link to='contact' className='flat-button'> CONTACT ME</Link>
    </div>
    <Logo />
    </div>
  )
}

export default Home