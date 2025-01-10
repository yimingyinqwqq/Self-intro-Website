// Example in NavBar.jsx or App.js

import React, { useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

// Sections
import About from './About';
import Courses from './Courses';
import Projects from './Projects';
import Skills from './Skills';
import Contacts from './Contacts';

const NavBar = () => {
  // create Refs for each section if you want "scroll to" behavior
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 70, // adjust for navbar
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar fixed="top" bg="light" variant="light" className="navbar-custom">
        <Container>
          <Navbar.Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection(aboutRef)}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(coursesRef)}>Courses</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(projectsRef)}>Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(skillsRef)}>Skills</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(contactsRef)}>Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sections as siblings (not nested) */}
      <About ref={aboutRef} />
      <Courses ref={coursesRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contacts ref={contactsRef} />
    </>
  );
};

export default NavBar;