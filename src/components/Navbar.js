import { useEffect, useState } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import link from '../pictures/link.png'
import git from '../pictures/Git1.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className="navbar-toggle-icon"></span>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#languages" className={activeLink === 'languages' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('languages')}>Languages</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('experience')}>Education & Experience</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/josh-casey-7452aa263/"><img src={link} alt=""/></a>
                    <a href="https://github.com/joshcasey512v2"><img src={git} alt=""/></a>
                </div>
                <button className="vvd" onClick={() => window.scrollTo(0, document.body.scrollHeight)}><span>Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}