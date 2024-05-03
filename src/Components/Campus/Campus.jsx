import React from 'react'
import './Campus.css'
import jpg6 from '../../assets/jpg6.png'
import jpg7 from '../../assets/jpg7.png'
import jpg8 from '../../assets/jpg8.png'
import jpg9 from '../../assets/jpg9.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={jpg6} alt="" />
        <img src={jpg7} alt="" />
        <img src={jpg8} alt="" />
        <img src={jpg9} alt="" />
      </div>
      <button className='btn dark-btn'>See more here</button>
    </div>
  )
}

export default Campus
