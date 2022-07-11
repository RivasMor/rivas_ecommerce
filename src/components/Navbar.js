import React from "react";
import CartWidget from "./CartWidget";
import {Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand={ 'lg' }
        style={{ backgroundColor: "#ab6f45" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div className="d-none d-lg-block d-print-block">
            <Navbar.Brand>
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Store
              </Link>
            </Navbar.Brand>          
          </div>
          <div className="d-block d-sm-none ">
            <Navbar.Brand>               
                <Link to="/" style={{ textDecoration: "none", color: "white", paddingRight: "10%"}}>
                  Store
                </Link>
                <CartWidget />
              </Navbar.Brand> 
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link
                  to="/category/2"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Abrigos{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/category/1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Blusas{" "}
                </Link>
              </Nav.Link>
              
            </Nav>
            <div className="d-none d-sm-block">
              <Nav className="me-auto mx-lg-3" >            
              <Nav.Link>
                  <CartWidget />
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
      <Box sx={{ width: "100%", height: "6%", backgroundColor: "#d68d5a" }}>
        <Typography
          align="center"
          pt="1%"
          variant="body1"
          sx={{ color: "white" }}
        >
          6 cuotas sin interes | Envio gratis a partir de $10000
        </Typography>
      </Box>
    </>
  );
};
export default NavBar;
