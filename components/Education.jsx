import React from 'react'
import '../App.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from 'react-bootstrap';
import logoedu1 from '../assets/img/logoedu1.png'
import logoedu2 from '../assets/img/logoedu2.png'
import logoedu3 from '../assets/img/logoedu3.png'
import logoedu4 from '../assets/img/logoedu4.png'
import logoedu5 from '../assets/img/logoedu5.png'
import colorSharp from '../assets/img/color-sharp.png' 

const Education = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </Carousel>;
  return (
    <section className='skills' id='education'>
    <container>
    <Row>
      <Col>
        <div className='skill-bx'>
          <h2>
            Education and Courses
          </h2>
          <p>Behind every code there is an enigma!</p>
          <Carousel responsive={responsive} infinite={true} className='skill-slider'>
            <div className='item'>
              <img src={logoedu1} alt='img' />
              <h5>Professional Technician in Programming and Computers Networks</h5>
              <p>2007-2011</p>
            </div>
            <div className='item'>
              <img src={logoedu2} alt='img' />
              <h5>Telematic Engineering</h5>
              <p>2012-2016</p>
            </div>
            <div className='item'>
              <img src={logoedu3} alt='img' />
              <h5>Full Stack Web Developer</h5>
              <p>2022</p>
            </div>
            <div className='item'>
              <img src={logoedu4} alt='img' />
              <h5>Node-JS Advanced</h5>
              <h5>Angular Advanced</h5>
              <h5>React Advanced</h5>
            </div>
            <div className='item'>
              <img src={logoedu5} alt='img' />
              <h5>Algorithms & Data Structures</h5>
            </div>
          </Carousel>
        </div>
      </Col>
    </Row>
    </container>
    <img className='background-image-left' src={colorSharp}/>
    </section>
  )
}

export default Education
