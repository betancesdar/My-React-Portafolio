import React from 'react'
import { Col, Container, Nav, Row,Tab} from 'react-bootstrap'
import '../App.css'
import { ProjectCard } from './ProjectsCards'
import sharpImg2 from '../assets/img/color-sharp2.png'
import proImg1 from '../assets/img/project-img1.png'
import proImg2 from '../assets/img/project-img2.png'
import proImg3 from '../assets/img/project-img3.png'

const Projects = () => {
    const projects = [
        {
            title:  'Proyecto 1',
            description: 'Description of the project in here',
            imgUrl: proImg1,
            netUrl: ''
        },
        {
            title:  'Proyecto 1',
            description: 'Description of the project in here',
            imgUrl: proImg2,
            netUrl: ''
        },
        {
            title:  'Proyecto 1',
            description: 'Description of the project in here',
            imgUrl: proImg3,
            netUrl: ''
        },
        {
            title:  'Proyecto 1',
            description: 'Description of the project in here',
            imgUrl: proImg1,
            netUrl: ''
        },
        {
            title:  'Proyecto 1',
            description: 'Description of the project in here',
            imgUrl: proImg2,
            netUrl: ''
        },
        {
            title:  'Proyecto 1',
            description: 'Description of the project in here',
            imgUrl: proImg3,
            netUrl: ''
        },
    ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Some of the projects that i've been working since 2009</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Web</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Mobile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" disabled>Designs</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first"> 
                    <Row>
                        {
                          projects.map((project,index) => {
                            return (
                                <ProjectCard 
                                    key={index}
                                    {...project} />
                            )
                          })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <img className='background-image-right' src={sharpImg2} />
      </Container>
    </section>
  );
}

export default Projects
