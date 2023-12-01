import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <Navbar style={{backgroundColor:'#ff6666'}}>
    <Container style={{marginLeft:'0px',paddingLeft:'1px'}}>
      <Navbar.Brand >       
        <h4 style={{fontWeight:'bold',color:'white'}}>React Test App</h4>
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
};

export default Header;