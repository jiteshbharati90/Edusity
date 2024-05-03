import React from 'react'
import { useRef } from 'react'
import './Testimonials.css'
import left_arrow from '../../assets/left_arrow.png'
import right_icon from '../../assets/right_icon.png'
import user_1 from '../../assets/user_1.png'

const Testimonials = () => {


    const slider = useRef();
    let tx = 0;

 const slideForward = () =>{
     if(tx > -50){
        tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`
 }

const slideBackward =() =>{
    if(tx < 0){
        tx += 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`

}


    return (
        <div className='testimonials'>
            <img src={right_icon} alt=""  className='next-btn' onClick={slideForward}/>
            <img src={left_arrow} alt=""  className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-ingo">
                                <img src={user_1} alt=""  className='user'/>
                                <div>
                                <h3>Ayush chubey</h3>
                                <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>College has been a transformative journey for me. The academic rigor challenged me to push my boundaries and discover my true potential. The diverse community welcomed me with open arms, exposing me to new cultures and perspectives that broadened my worldview.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-ingo">
                                <img src={user_1} alt=""  className='user'/>
                                <div>
                                <h3>Basant Bharati</h3>
                                <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Reflecting on my college experience, I've had mixed feelings. While the academic environment has been intellectually stimulating, with passionate professors and engaging coursework, the pressure to excel sometimes felt overwhelming</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-ingo">
                                <img src={user_1} alt=""  className='user'/>
                                <div>
                                <h3>Abhishek kumar</h3>
                                <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>College has been a whirlwind of experiences, both positive and negative. On one hand, the academic environment has been intellectually stimulating, challenging me to think critically and expand my horizons.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-ingo">
                                <img src={user_1} alt="" className='user'/>
                                <div>
                                <h3>Ankit kumar</h3>
                                <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>My college experience has been nothing short of amazing. The academic opportunities have allowed me to explore my interests deeply and develop a strong foundation for my future career. </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
