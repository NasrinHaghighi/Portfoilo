import React, {useState, useEffect, Component } from 'react'
import './index.scss'

import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Video from './video/index'

import beauty from '../video/beauty-1.mp4'
import shows from '../video/showsApp.mp4'

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carousel from 'react-elastic-carousel';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow:2},
  { width: 1200, itemsToShow: 3}
];
const items=[
  {id:1, src:'/video/beauty-1.mp4', dis:'ggagdgasgdg', likn:'https://github.com/NasrinHaghighi/Beauty_shop'},
  {id:2, src:'/video/showsApp.mp4', dis:'rrrrrrrrr', likn:'https://github.com/NasrinHaghighi/Beauty_shop'},
  {id:3, src: '/video/showsApp.mp4', dis:'/video/showsApp.mp4', likn:'https://github.com/NasrinHaghighi/Beauty_shop'},
  {id:4, src: '/video/showsApp.mp4', dis:'/video/showsApp.mp4', likn:'https://github.com/NasrinHaghighi/Beauty_shop'},
  {id:5, src: '/video/showsApp.mp4', dis:'/video/showsApp.mp4', likn:'https://github.com/NasrinHaghighi/Beauty_shop'},
]
function Portfolio() {



  const [letterClass, setLetterClass] = useState('text-animate')

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
      <Carousel breakPoints={breakPoints} className='carosel'>
           {items.map((item)=> {
          return <Video key={item.id} item={item} />
           })}
      </Carousel>

    
    
 
   
    </div>
  
  </div>
  <Loader type='pacman'/>
  </>
)
  }
export default Portfolio



{/* <div className='video'>
<video width="550" height="300" controls >
<source src={beauty} type="video/mp4"/>
</video> 
    <div className='info'>
      
      <div className='icon iconMoreInfo' onMouseEnter={handelMouseEnter} onMouseOut={()=>setShow(false)}><img src={info} /></div> 
     <div className='icon'> <a href='https://github.com/NasrinHaghighi/Beauty_shop'>  <img src={git} /> </a></div> 
      </div>
     <div className={show ? 'activeInfo' : 'moreInfo'}>ggggggggggggggggggggggggg</div>
</div >
<div className='video'>
<video width="550" height="300" controls >
<source src={shows} type="video/mp4"/>

</video>
<div className='info'><span className='icon' onMouseEnter={handelMouseEnter1} onMouseOut={()=>setShow1(false)}

> 
<img src={info} /></span>  <span className='icon'> <img src={git} /></span> 
</div>
 <div className={show1 ? 'activeInfo' : 'moreInfo'}>ggggggggggggggggggggggggg</div>
</div>

<div className='video'>
<video width="550" height="300" controls >
<source src={shows} type="video/mp4"/>

</video>
<div className='info'><span className='icon' onMouseEnter={handelMouseEnter2} onMouseOut={()=>setShow2(false)}

> 
<img src={info} /></span>  <span className='icon'> <img src={git} /></span> 
</div>
 <div className={show2 ? 'activeInfo' : 'moreInfo'}>ggggggggggggggggggggggggg</div>
</div> */}