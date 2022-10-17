import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BiArrowFromTop } from 'react-icons/bi'
import headerImg from '../assets/img/header-img-01.png'
import '../App.css'


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Mobile Developer', 'Full-Stack Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect (() => {
        let ticker = setInterval(()=> {
        tick()
        },delta)

        return () => {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText)
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(100)
        } 
    }
    
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my space</span>
                <h2>{`Hello I'm Dario:  `}<h1 className='wrap'>{text}</h1></h2>
                <p>
                    I'm a lover of technology, from a very young age I have been ambitious
                    in designing and developing video games which is my greatest 
                    passion, over time I have realized that developing new solutions and 
                    solving problems is what fills me the most, so i've been working in this industry
                    for over 10 years,in different positions and different projects, I want to find a position in 
                    which I can offer all my knowledge and my passion for what I love but 
                    more than anything that challenges me and teaches me so in that way 
                    we can both grow.
                </p>
                <button onClick={()=>console.log('cliked')}>Download Resume in PDF <BiArrowFromTop size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img  src={headerImg} alt='DAB-HAPPY-LOGO'/>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
