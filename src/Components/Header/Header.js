import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header'>
            <Navbar bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MyTeam11</Navbar.Brand>
                    <Nav className="link me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#players">Player</Nav.Link>
                        <Nav.Link href="#auctioned-list">Auctioned List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </div>
        
    );
};

export default Header;