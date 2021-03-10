import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.svg';

const Header = () => {
    return (
        <>
            <Navbar expand={'sm' | 'md' | 'lg' | 'xl'} bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={Logo}
                            height="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />{' '}
                        <h2 className="d-inline-block mb-0" style={{fontWeight: "700", color: "#2F2135"}}>Soccer Club</h2>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;