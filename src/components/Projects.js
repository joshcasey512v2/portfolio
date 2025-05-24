import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import snake from '../pictures/snake.png'
import bash from '../pictures/bash.png'
import euler from '../pictures/euler.png'
import third from '../pictures/3rd.png';	
import st from '../pictures/smart_turn.png'

export const Projects = () => {

    const projects = [
        {
          title: "Custom Shell",
          description: "Custom Shell built using the C language",
          link: 'https://github.com/joshcasey512v2/custom-C-shell',
          img: bash,
        },
        {
          title: "Snake",
          description: "Old snake game made using JAVA",
          link: 'https://github.com/joshcasey512v2/Snake',
          img: snake,
        },
        {
          title: "3rd Year project",
          description: "Check out my 3rd Year DCU Project",
          link: 'https://gitlab.computing.dcu.ie/caseyj24/2024-ca326-jcasey-3rdyearproject',
          img: third,
        },
        {
          title: "Smart Turn",
          description: "4th Year DCU Project consisting of an Iot Device and a Flutter Application",
          link: 'https://github.com/joshcasey512v2/Smart-Turn',
          img: st,
        },
        {
          title: "Euler Problems",
          description: "Mathamatical problems solved with C++",
          link: '',
          img: euler,
        },
      ];
      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Here are my completed projects</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h5>To be added.</h5>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <h5>To be added.</h5>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
}