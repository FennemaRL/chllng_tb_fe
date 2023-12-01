import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >       
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
};

export default Header;