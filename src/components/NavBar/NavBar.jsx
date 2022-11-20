import React, { useState } from "react";
import { Icon } from '@iconify/react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className='pl-5 pr-5 position-absolute fixed-top' light expand='lg'>
      <NavbarBrand href='/' className='me-auto'>
        Suha Shehadeh
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='#header'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#skills'>Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#services'>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#contact'>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Suha523" target='_blank'
          rel='noopener noreferrer'><Icon icon="mdi:github" fontSize='30'/>GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
