import React from 'react'
import './index.scss'
import banner from '../../../public/images/js.jpg'

function Logo() {
  return (
    <div className='logo-conatiner'>
       <img src={banner}/>
    </div>
  )
}

export default Logo