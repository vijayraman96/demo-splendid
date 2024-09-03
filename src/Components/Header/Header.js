import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import './Header.css';
import splendid from '../../assets/images/BlackLogo/splendid_type2.png';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton2';
import { useEffect, useState } from "react";
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';


function NavbarComponent() {
    const [fixHeader, setFixHeader] = useState(false);
    const [removeHeight, setRemoveHeight] = useState("");
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setFixHeader(true);
            setRemoveHeight("removeHeight");
          } else {
            setFixHeader(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        
      }, [removeHeight]);
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
    }, []);
     

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div>
      <Navbar  expand="lg" fixed="top" className={fixHeader ?  "navbarWhiteDiv" : `navbarDiv`}>
        <Container className="d-flex justify-content-between w-100">
          <Nav className={`header d-flex justify-content-between w-100 align-items-center `} >
          <Navbar.Brand href="/">
            <img
              src={splendid}
              className="d-inline-block align-top"
              alt="Splendid"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className={`${removeHeight}`} id="basic-navbar-nav">
              <Nav className={`ms-auto d-flex align-items-center nav_mob`}>
                <Nav.Link as={RouterNavLink} to="/" className={isActive('/') ? 'activeMenu' : ''}>For Brand </Nav.Link>
                <Nav.Link as={RouterNavLink} to="/creator" className={isActive('/creator') ? 'activeMenu' : ''}>For Creator</Nav.Link>
                <a href="https://app.splendid.app/orders" className="track">Track Your Order</a>
                <div className="navButtonDiv"> 
                   <PrimaryButton title="Get Started" iconState="false" url={`/contact`}/>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Nav>
       </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
