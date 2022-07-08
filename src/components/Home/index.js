import React , {useEffect, useState}from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



import Loader from 'react-loaders'

function Home() {

    const [letterClass, setLetterClass] = useState('text-animate')


  //   const [activeMenu, setActiveMenu] = useState(true);
  // const [screenSize, setScreenSize] = useState(undefined);

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // useEffect(() => {
  //   if (screenSize <= 1000) {
  //     setActiveMenu(false);
  //   } else {
  //     setActiveMenu(true);
  //   }
  // }, [screenSize]);


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
    <>
    <div className='conatiner home-page'>
         <div className="text-zone">
             <h1>
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
    <Loader type='pacman'/>
    </>
  )
}

export default Home