import React from 'react'
import Game from './Spline'
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Header(){
return (
    <>
    <div>
        <Navbar expand="lg" bg='dark' data-bs-theme="dark">
        < Container>
        <Navbar.Brand className='Web-name' style={{
            marginRight: '200px',
            fontFamily: 'Anton,sans-serif',
            fontWeight: 700,
            fontSize: '60px',
            background: "linear-gradient(to right ,purple,hsl(250, 75%, 61%),hsl(269, 85%, 49%))",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
        }} >Website Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id='navSettings'>
            <Nav className='nav-headings'><Link to={'/Header'} style={{textDecoration:'none' ,color:'blueviolet'}}>Home</Link></Nav>
            <Nav className='nav-headings'><Link to={'/Header'} style={{textDecoration:'none' ,color:'blueviolet'}}>Contact</Link></Nav>        
            <NavDropdown title="Club-Names" className="nav-headings" data-bs-theme="light">
            <NavDropdown.Item><Link to={'/Club1'} style={{textDecoration:"none",color:'black'}}>Club-1</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/Club2'} style={{textDecoration:"none",color:'black'}}>Club-2</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/Club3'} style={{textDecoration:"none",color:'black'}}>Club-3</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/Club4'} style={{textDecoration:"none",color:'black'}}>Club-4</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/Club5'} style={{textDecoration:"none",color:'black'}}>Club-5</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/Club6'} style={{textDecoration:"none",color:'black'}}>Club-6</Link></NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
        <Game/>
    </div>
    <Footer/>
    </>
)
}

export default Header
