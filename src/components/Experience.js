import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import cnoc from '../pictures/cnoc.png';
import dcu from '../pictures/dcu.png';
import mech from '../pictures/mech.png';
import retail from '../pictures/retail.png';
import cd from '../pictures/cd.png';
import dtec from '../pictures/dtec.png';
import { ExpCard } from "./ExpCard";

export const Experience = () => {

    const experience = [
        {
          title: "Assistant Mechanic",
          duration: "2018-2019",
          description: "Heavy lifting and car repairs",
          img: mech,
        },
        {
          title: "Retail",
          duration: "2021-2022",
          description: "Handling currency exchanges and stock checks",
          img: retail,
        },
        {
          title: "General operator",
          duration: "Summer 2023",
          description: "Production of raw materials for cat and dog food",
          img: cd,
        },
        {
          title: "Field Engineer",
          duration: "2024 - Present",
          description: "Finding solutions for network issues",
          img: dtec,
        }
      ];

      const education = [
        {
            title: "Cnocmhuire Granard",
            duration: "2015 - 2021",
            img: cnoc,
        },
        {
            title: "DCU",
            duration: "2021 - present",
            img: dcu,
        }
      ];
      return (
        <section className="project" id="experience">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Experience</h2>
                    <p>Here is my current experience and education</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Education</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              experience.map((experience, index) => {
                                return (
                                  <ExpCard
                                    key={index}
                                    {...experience}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                              education.map((education, index) => {
                                return (
                                  <ExpCard
                                    key={index}
                                    {...education}
                                    />
                                )
                              })
                            }
                          </Row>
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