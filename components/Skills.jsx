import React from 'react'
import '../App.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'

import { SkillBar } from 'react-skills';


const Skills = () => {
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
    <section className='skills' id='skills'>
      <container>
      <Row>
        <Col>
          <div className='skill-bx'>
            <h2>
              Stacks
            </h2>
            <p>Here the explanantion of the skills</p>
            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
              <div className='item'>
                <img src={meter1} alt='img' />
                <h5>MERN- Mongo, Express, React, NodeJS</h5>
              </div>
              <div className='item'>
                <img src={meter3} alt='img' />
                <h5>LAMP- Linux, Apache, MySQL, PHP 7 & 8</h5>
              </div>
              <div className='item'>
                <img src={meter2} alt='img' />
                <h5>MEAN- Mongo, Express, Angular, NodeJS</h5>
              </div>
              <div className='item'>
                <img src={meter1} alt='img' />
                <h5>Java Web Development - Spring Boot & React</h5>
              </div>
              <div className='item'>
                <img src={meter3} alt='img' />
                <h5>Mobile Development - Android/Java, React Native, IOS/Swift, Ionic, Cordoba</h5>
              </div>
              <div className='item'>
                <img src={meter1} alt='img' />
                <h5>Graphic Design - Illustrator, Photoshop, Adobe XD</h5>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
      <div className='skill-bx'>
      <h2>Skils</h2>
      <div className='skill-bx'>
      <Col>
        <Row>
          <h4>Programming languages</h4>   
          <SkillBar name="Java" level={95} color="purple" duration={4}/>
          <SkillBar name="Javascript" level={95} color="purple" />
          <SkillBar name="PHP" level={90} color="purple" />
          <SkillBar name="C#" level={80} color="purple" />
          <SkillBar name="Python" level={80} color="purple" />
          <SkillBar name="Groovy" level={80} color="purple" />
          <SkillBar name="C" level={80} color="purple" />
          <SkillBar name="Swift" level={90} color="purple" />
        </Row>
      </Col>
      <Col>
        <Row>
            <h4>Frameworks</h4>   
            <h6>Front-End</h6>
              <SkillBar name="React" level={95} color="#cc0099" />
              <SkillBar name="Angular" level={80} color="#cc0099" />
              <SkillBar name="Next-JS" level={80} color="#cc0099" />
              <SkillBar name="Vaadin 14" level={90} color="#cc0099" />
             <h6>Back-End</h6> 
              <SkillBar name="Spring" level={95} color="#cc0099" />
              <SkillBar name="Express" level={95} color="#cc0099" />
              <SkillBar name="Django" level={80} color="#cc0099" />
              <SkillBar name="Flask" level={80} color="#cc0099" />
              <SkillBar name="Code Igniter" level={95} color="#cc0099" />
              <SkillBar name="Laravel" level={95} color="#cc0099" />
          </Row>
      </Col>
      <Col>
        <Row>
            <h4>Databases</h4>   
            <h6>Sql and MySql</h6>
              <SkillBar name="PostgreSql" level={95} color="#330025" />
              <SkillBar name="MariaDB" level={95} color="#330025" />
              <SkillBar name="MySql" level={80} color="#330025" />
              <SkillBar name="SQLite" level={90} color="#330025" />

             <h6>No-SQL</h6>  
              <SkillBar name="Mongo DB" level={95} color="#330025" />
            

          </Row>
      </Col>
      <Col>
        <Row>
            <h4>Web Layout</h4>   
            <h6>Markup languages</h6>
              <SkillBar name="HTML - 4 & 5" level={95} color="#DC0303" />
              <SkillBar name="XML" level={95} color="#DC0303" />
              <SkillBar name="JSX" level={95} color="#DC0303" />
             <h6>Style sheet languages and Frameworks </h6>  
              <SkillBar name="CSS" level={95} color="#DC0303" />
              <SkillBar name="Tailwind" level={80} color="#DC0303" />
              <SkillBar name="Flexbox" level={95} color="#DC0303" />
              <SkillBar name="Sass" level={85} color="#DC0303" />
              <SkillBar name="Bootstrap" level={85} color="#DC0303" />
              <SkillBar name="StyledComponent" level={85} color="#DC0303" />
              <h6>Design Tools</h6>
              <SkillBar name="Adobe Suite" level={95} color="#DC0303" />
              <SkillBar name="Figma" level={80} color="#DC0303" />
              <SkillBar name="Sketch" level={95} color="#DC0303" />
              <SkillBar name="Corel Draw" level={95} color="#DC0303" />
          </Row>
      </Col>
      <Col>
        <Row>
            <h4>Languages & Soft-Skills</h4>   
            <h6>Languages</h6>
              <SkillBar name="English" level={95} color="#350E2F" />
              <SkillBar name="Spanish" level={95} color="#350E2F" />
              <SkillBar name="French" level={70} color="#350E2F" />
              <SkillBar name="German" level={70} color="#350E2F" />
             <h6>Soft-Skills</h6>  
              <SkillBar name="Leadership" level={100} color="#350E2F" />
              <SkillBar name="Time Managment" level={100} color="#350E2F" />
              <SkillBar name="Team work" level={100} color="#350E2F" />
              <SkillBar name="Problem-solving" level={100} color="#350E2F" />
              <SkillBar name="Customer Service" level={100} color="#350E2F" />
              <SkillBar name="Communication" level={100} color="#350E2F" />
          </Row>
      </Col>
        
      
        
      </div>
      </div>
      </container>
      
    </section>
  )
}

export default Skills
