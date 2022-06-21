import React, {useState, useEffect} from 'react'
import './index.scss'
import git from '../../public/images/git1.png'
import info from '../../public/images/info.png'
import beauty from '../video/beauty-1.mp4'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'




function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')
const [show ,setShow] =useState(false)
const [show1 ,setShow1] =useState(false)
 const handelMouseEnter=()=>{
    setShow(!show)

  }
const handelMouseEnter1=()=>{
  setShow1(true)
}
useEffect(() => {
  const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
}, [])

return(
 <>
  <div className='container portfolio-page'>
  <div className="text-zone portfolioTitle">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['R', 'e', 'c', 'e', 'n', 't',  ' ', 'w','o' ,'r', 'k']}
              idx={15}
            />
          </h1>
         
        </div>
    <div className='main'>
 <div className='video'>
      <video width="450" height="300" controls >
      <source src={beauty} type="video/mp4"/>
     </video> 
          <div className='info'>
            
            <div className='icon iconMoreInfo' onMouseEnter={handelMouseEnter} onMouseOut={()=>setShow(false)}><img src={info} /></div> 
           <div className='icon'> <a href='https://github.com/NasrinHaghighi/Beauty_shop'>  <img src={git} /> </a></div> 
            </div>
           <div className={show ? 'activeInfo' : 'moreInfo'}>ggggggggggggggggggggggggg</div>
     </div >
     <div className='video'>
      <video width="450" height="300" controls >
      <source src={beauty} type="video/mp4"/>

     </video>
     <div className='info'><span className='icon' onMouseEnter={handelMouseEnter1} onMouseOut={()=>setShow1(false)}
      
    > 
      <img src={info} /></span>  <span className='icon'> <img src={git} /></span> 
      </div>
       <div className={show1 ? 'activeInfo' : 'moreInfo'}>ggggggggggggggggggggggggg</div>
     </div>
 
    </div>
  
  </div>
  <Loader type='pacman'/>
  </>
)
  }
export default Portfolio