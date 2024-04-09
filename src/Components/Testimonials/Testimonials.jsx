import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'




const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    

    const slideForward = ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }







  return (
    <div className='test'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Dr.Vinodh Nowal</h3>
                                <span>CEO & Director, JSW Steel Ltd.</span>
                            </div>
                        </div>
                        <p>Very good experience by interacting with faculties of Institute,
                             Computer lab and also various others labs. Facilities are excellent. 
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Mr.Chakravarthy E.S</h3>
                                <span>Center Head,TCS Bangalace</span>
                            </div>
                        </div>
                        <p>Excellent commitment towards building a great institute and bridging 
                            the gap between academics and corporate</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Mr. Shashi Kiran Shetty</h3>
                                <span>Chairman, AllCargo Logistics Ltd.</span>
                            </div>
                        </div>
                        <p>Extremely pleased to be in Sahyadri College on Graduation Day. 
                            It has been a very memorable and proud day.
                             Full credit to the organizers and Sri Manjunathanna.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Mr. Lakshmi Narayanan</h3>
                                <span>ice Chairman, Cognizant Technology</span>
                            </div>
                        </div>
                        <p>I visited the College on 28 November 2013, for the Graduation Day and enjoyed my visit. 
                            The faculty are committed and I learnt from them their areas of interest during the interaction. 
                            I found the students confident, disciplined and above all appeared to have a larger purpose. 
                            I am very happy that I took time to visit the wonderful college. 
                            I wish Sahyadri great success and it gets a reputation as a top Institution soon</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
