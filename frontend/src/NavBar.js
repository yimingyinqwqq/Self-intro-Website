import React, { Component, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Courses from './Courses';
import Contacts from './Contacts';

const NavBar = () => {
  const about = useRef(null);
  const courses = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contacts = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      Scrollbehavior: 'smooth'
    })
  }

  return (
    <>
      <Navbar className='navbar-container' bg="dark" variant="dark" expand='lg'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#about-section" onClick={() => scrollToSection(about)}> About </Nav.Link>
            <Nav.Link href="#courses-section" onClick={() => scrollToSection(courses)}> Courses </Nav.Link>
            <Nav.Link href="#projects-section" onClick={() => scrollToSection(projects)}> Projects </Nav.Link>
            <Nav.Link href="#skills-section" onClick={() => scrollToSection(skills)}> Skills </Nav.Link>
            <Nav.Link href="#contacts-section" onClick={() => scrollToSection(contacts)}> Contacts </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <About ref={about}/>
      <Courses ref={courses}/>
      <Projects ref={projects}/>
      <Skills ref={skills}/>
      <Contacts ref={contacts}/>
    </>
  );
}

export default NavBar;


