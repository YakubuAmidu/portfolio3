import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>
            <i className='fas fa-user-tie'></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/portfolio'>PORTFOLIO</Nav.Link>
              <NavDropdown title='DROPDOWN' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='/portfolio'>PORTFOLIO</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
