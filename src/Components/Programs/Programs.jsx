import React from 'react'
import './Programs.css'
import jpg2 from '../../assets/jpg2.png'
import jpg3 from '../../assets/jpg3.png'
import jpg4 from '../../assets/jpg4.png'
import icon_1 from '../../assets/icon_1.png'
import icon_3 from '../../assets/icon_3.png'
import post_icon from '../../assets/post_icon.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program' >
        <img src={jpg2} alt="" />
        <div className="caption">
          <img src={icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className='program' >
        <img src={jpg3} alt="" />
        <div className='caption'>
          <img src={icon_3} alt="" />
          <p>Master Degree</p>
        </div>
      </div>


      <div className='program' >
        <img src={jpg4} alt="" />
        <div className='caption'>
          <img src={post_icon} alt="" />
          <p>Post Degree</p>
        </div>
      </div>


    </div>
  )
}

export default Programs
