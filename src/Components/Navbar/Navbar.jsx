import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/footer_logo_new.png'
import { Link } from 'react-scroll';


export const Navbar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])





  return (
    <nav className={`contianer ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='test' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
    </nav>
  )
}
