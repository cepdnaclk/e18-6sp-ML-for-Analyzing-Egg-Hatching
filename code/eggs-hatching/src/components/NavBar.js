import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import './NavBar.css';

export default function NavBar() {
  const [ setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate('/login')
    } catch {
      setError("Failed to log out")
    }
  }

  

  return (
    
    <Navbar style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', paddingLeft: '30px' }} variant="light" expand="lg" sticky="top" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">Egg Hatchability Predictor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="#action2">Compare Relations</Nav.Link> */}
            
            {/* <NavDropdown title="Downloads" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Report</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Previous Report
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              
              <NavDropdown.Item href="#action5">
                FAQ
              </NavDropdown.Item>
            </NavDropdown> */}
            
            
            {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
          </Nav>
          
          <Image src="" roundedCircle={true}></Image>
          <NavDropdown title={currentUser.email} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/update-profile">Update Farm Details</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Preferences
              </NavDropdown.Item>
              <NavDropdown.Item href="/login" onClick={() => handleLogout()}>
                Log out
              </NavDropdown.Item>
              
              
            </NavDropdown>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

    
    
    
    
  )
}