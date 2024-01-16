import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <NavbarBrand>
            <NavLink className="nav-link" to="/">
            Ahsen Müzik Okulu
            </NavLink>
          </NavbarBrand>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Ana sayfa</NavLink>
            <NavLink className="nav-link" to="/ContactPage">İletişim</NavLink>
            <NavLink className="nav-link" to="/AboutUsPage">Hakkımızda</NavLink>
            <NavLink className="nav-link" to="/TrainingPage">Eğitimler</NavLink>
            <NavLink className="nav-link" to="/InstructorsPage">Eğitmenler</NavLink>
         
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Header;