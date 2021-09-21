import React from 'react';
import "./nav.css";
import {CardWidget} from "./CardWidget"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container,Row,Col,Image } from 'react-bootstrap'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Logo from './beerlogo.png';
import { NavLink, Link } from 'react-router-dom';
import ItemListContainer from './views/ItemListContainer';
import Products from './views/Products';
import Contact from './views/Contact';

const MiNavBar = () => {

    return (
    
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/ItemListContainer"><img src={Logo} width='100' alt='logo no disponible'/>
    
    <NavLink to='/ItemListContainer' activeClassName='navLink' className='Option'>
        Navbar Brand (logo) DESDE REACT ROUTER
         </NavLink>
    
    
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/ItemListContainer">Inicio</Nav.Link>

        <NavLink to='/ItemListContainer' activeClassName='navLink' className='Option'>
        ItemListContainer DESDE REACT ROUTER
         </NavLink>

        <Nav.Link href="/Products">Productos</Nav.Link> 

        <NavLink to='/Products' activeClassName='navLink' className='Option'>
          PRODUCTOS DESDE REACT ROUTER
         </NavLink>

        <NavDropdown title="Servicios" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Aseoramiento Técnico</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Eventos</NavDropdown.Item>
          
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Contactenos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    );
    }   
    export default MiNavBar;


