import React from 'react'
import "./inavbar.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from '@mui/material/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";




const Inavbar = () => {
   
  return (
    <>
   
<Navbar  expand="lg" className='nav-bar' sticky="top">
  <Container>
    {/* <Navbar.Brand href="#home">Portfolio</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Navbar.Brand className='brand' href="/">Portfolio</Navbar.Brand>
        <Link to="/intro" className='links'>Intro</Link>
        <Link to="/about" className='links'>About</Link>
        <Link to="/skills" className='links'>Skills</Link>
        <Link to="/experience" className='links'>Experience</Link>
        <Link to="/education" className='links'>Education</Link>
        <Link to="/publication" className='links'>Publication</Link>
        <Link to="/certificate" className='links'>Certificates</Link>
        <Link to="#" className='links'>Projects</Link>
        <Link to="#" className='links'>Languages</Link>
        <Link to="/Contact" className='links'>Contact</Link>
        <Link to="#" className='links'>Hobbies</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



    </>
  )
  
}

export default Inavbar
