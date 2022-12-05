import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg'
import socialIcon1 from '../assets/img/nav-icon1.svg'
import socialIcon2 from '../assets/img/nav-icon2.svg'
import socialIcon3 from '../assets/img/nav-icon3.svg'
import '../App.css'

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }     
        
        window.addEventListener('scroll',onScroll)

        return () => window.removeEventListener('scroll',onScroll)
    },[])

    const onUpdateActivateLink = () => {
        setActiveLink(value)
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
         <img className='navbar-logo' src={logo} alt='Logo' /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'activate navbar-link' : 'navbar-link'} onClick={()=> onUpdateActivateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'activate navbar-link' : 'navbar-link'} onClick={()=> onUpdateActivateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#education" className={activeLink === 'education' ? 'activate navbar-link' : 'navbar-link'} onClick={()=> onUpdateActivateLink('education')}>Education & Courses</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'activate navbar-link' : 'navbar-link'} onClick={()=> onUpdateActivateLink('projects')}>Projects</Nav.Link>
                      
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/dario-betances-16a213228/'><img src= {socialIcon1} alt="linkednin"/></a>
                <a href='https://github.com/betancesdar'><img src= {socialIcon2} alt="github"/></a>
            </div>
            <a href='#connect'> <button className='btn_connect' onClick={() => console.log('Contact ME')}>Contact Me</button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
