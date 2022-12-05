import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MailChimpForm from './MailChimpForm'
import logo from '../assets/img/logo.svg'
import socialIcon1 from '../assets/img/nav-icon1.svg'
import socialIcon2 from '../assets/img/nav-icon2.svg'
import socialIcon3 from '../assets/img/nav-icon3.svg'
import '../app'

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <MailChimpForm />
                    <Col sm={6}>
                        <img src={logo} alt='logo'/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-en'>
                    <div className='social-icon'>
                        <a href=''><img src={socialIcon1}/></a>
                        <a href=''><img src={socialIcon2}/></a>
                    </div>    
                    <p>Copyright 2022. All Right Reserved Dario Betances.</p>
                    </Col>
            </Row>
        </Container>
      
    </footer>
  )
}

export default Footer
