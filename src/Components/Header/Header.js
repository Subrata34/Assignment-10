import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';


const Header = () => {
  const {user,logOut}=useAuth();
    return (
      <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
        // // <div  >
        // //   <div className="row bg-primary">
        // //     <div className="col-md-2">

        // //     </div>
        // //     <div className="col-md-10 d-flex item-style ">
        // //       <Link to='/home'className="items-style">
        // //         {""}
        // //         <li>Home</li>
        // //       </Link>
        // //       <Link to='/about' className="items-style">
        // //         {""}
        // //         <li>About</li>
        // //       </Link>
        // //       <Link to='/service' className="items-style">
        // //         {""}
        // //         <li>Service</li>
        // //       </Link>
        // //       <Link to='/care'className="items-style">
        // //         {""}
        // //         <li>Care</li>
        // //       </Link>
        // //       <Link to='/register'className="items-style">
        // //         {""}
        // //         <li>Register</li>
        // //       </Link>
              
        // //       <Link to='/login'className="items-style">
        // //         {""}
        // //         <li>Login</li>
        // //       </Link>
        // //       <Navbar.Text>
        // //         Signed in as: <a href="#login">{user.displayName && {user.displayName}}</a>
        // //        </Navbar.Text>
              
              
        //     </div>
        //   </div>
            
        // </div>
    );
};

export default Header;