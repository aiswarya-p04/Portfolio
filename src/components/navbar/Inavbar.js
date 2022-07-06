import React from 'react'
import "./inavbar.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from '@mui/material/Container';
import Nav from 'react-bootstrap/Nav';


const Inavbar = () => {
   
  return (
    <>
<Navbar bg="light" expand="lg" className='nav-bar' sticky="top">
  <Container>
    {/* <Navbar.Brand href="#home">Portfolio</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Navbar.Brand className='brand' href="#home">Portfolio</Navbar.Brand>
        <Nav.Link href="#home" className='links'>Home</Nav.Link>
        <Nav.Link href="#" className='links'>About</Nav.Link>
        <Nav.Link href="#" className='links'>Skills</Nav.Link>
        <Nav.Link href="#" className='links'>Experience</Nav.Link>
        <Nav.Link href="#" className='links'>Education</Nav.Link>
        <Nav.Link href="#" className='links'>Publication</Nav.Link>
        <Nav.Link href="#" className='links'>Certificates</Nav.Link>
        <Nav.Link href="#" className='links'>Projects</Nav.Link>
        <Nav.Link href="#" className='links'>Languages</Nav.Link>
        <Nav.Link href="#" className='links'>Contact</Nav.Link>
        <Nav.Link href="#" className='links'>Hobbies</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Inavbar
