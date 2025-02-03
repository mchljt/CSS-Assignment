//For page layout by Tay King Yu, Galen
//Navbar for navigation
//Collapses into side bar when past a certain viewport
'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropDown';
import NavItem from 'react-bootstrap/NavItem';
import styles from "./Navbar.module.css";
import Image from "next/legacy/image";


const NavBar = () => {
  return (
    <Navbar expand="lg" className={`bg-body-tertiary justify-content-center ${styles.navbar} me-0`}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt="Brawl stars logo"
            src="/media/Brawl-Stars-Logo.png" /* Logo sourced from https://logos-world.net/brawl-stars-logo/ */
            height={70}
            width={70}
            className= {` d-inline-block align-center text-white position-absoulte ml-4`}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="d-flex align-items-center mx-auto justify-content-center"> {/* Add justify-content-center class here */}
            <NavItem>
              <Nav.Link href="/" className={`text-white pe-5 fs-4 `}>
                Home
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="./brawlers" className={`text-white pe-5 fs-4`}>
                <span>Brawlers</span>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="./mini-game" className={`text-white pe-5 fs-4`}>
                <span>Mini-Game</span>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <NavDropdown title={
                <span className='text-white my-auto'>More</span>
                } className={`fs-4 `}>
                <NavDropdown.Item href="./events">Events</NavDropdown.Item>
                <NavDropdown.Item href="./maps">Maps</NavDropdown.Item>
              </NavDropdown>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;




