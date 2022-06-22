import React ,{useState} from 'react'
import './index.scss'
///import git from '../../public/images/git1.png'
import info from '../../../public/images/info.png'
import git from '../../../public/images/git1.png'




const Video =({item}) =>{
    console.log(item)
/////////////


//////////
  return (
    <div className='item'>
<div className='video'>

<video width="550" height="300" controls >

<source src={item.src} type="video/mp4"/>

</video> 
    <div className='info'>
      
      <div className='icon iconMoreInfo'><img src={info} /></div> 
     <div className='icon'> <a href={item.link}>  <img src={git} /> </a></div> 
      </div>
      <div className={'moreInfo'}>{item.dis}</div>
</div >



    </div>
  )
}

export default Video




// const [show ,setShow] =useState(false)
// const [show1 ,setShow1] =useState(false)
// const [show2 ,setShow2] =useState(false)
//  const handelMouseEnter=()=>{
//     setShow(!show)

//   }
// const handelMouseEnter1=()=>{
//   setShow1(true)
// }
// const handelMouseEnter2=()=>{
//   setShow2(true)
// }