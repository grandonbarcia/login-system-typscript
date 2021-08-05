import React, { FC } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navi: FC = () => {
    return (
        <Navbar bg="light" expand="xl">
            <Container>
                <Navbar.Brand as={Link} to='/Login'>Login-System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/SignUp'>SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navi
