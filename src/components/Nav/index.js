import React from "react";
// import "../App.css";
// import logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import context from "react-bootstrap/esm/AccordionContext";


const NavBar1 = () => {
  return (
    <Navbar  bg="light" variant="light">
    
    <Navbar.Brand href="#home"><img src="/image/logo.jpg" alt="logo" width= "150px" ></img></Navbar.Brand>
    
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/completed">Completed</Nav.Link>
    </Nav>
  </Navbar>

  //  <Nav bg="light" expand="lg">
  //    <Nav.Item>
  //     <img src="/image/logo.jpg" alt="logo" width= "110px" ></img>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link href="   "></Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link href="   "></Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link href="   "></Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link href="/">Home</Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link href="/">Home</Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link href="/completed">Completed</Nav.Link>
  //     </Nav.Item>

  //     <Nav.Item>
  //       <button style={{display: 'flex', justifyContent: 'right', margin:'1rem'}}>display type</button>
  //     </Nav.Item>
      
  //     </Nav>
    
  )
};

export default NavBar1;




//  <Navbar bg="light" expand="lg">
//   {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//   <Navbar.Collapse id="basic-navbar-nav">
//    <img src="/image/logo.jpg" alt="logo" width= "100px" ></img> 
   
//    <Nav  className="mr-auto">
//       <Link to="/" >Home</Link>
//       <Link to="/about" >About</Link>
//       <Link to="/completed" >Completed</Link>
//       {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Completed</NavDropdown.Item>
//         <NavDropdown.Divider />
//       </NavDropdown> */}
//     </Nav>
//   </Navbar.Collapse>
// </Navbar> 


   // <div className="navbar">
    //   <img src="../boardlogo.jpg"></img>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/completed">Completed</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>