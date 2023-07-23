import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  const navigate = useNavigate();

  //     <Button size="lg" variant="success" onClick={() => navigate("/home")}>
  //     HOME
  //   </Button>
  //   <Button size="lg" variant="warning" onClick={() => navigate("/about")}>
  //     ABOUT
  //   </Button>

  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          variant="dark"
          bg="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link onClick={() => navigate("/home")}>HOME</Nav.Link>
                <Nav.Link onClick={() => navigate("/institutions")}>
                  INSTITUTIONS
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/login")}>LOGIN</Nav.Link>
                <Nav.Link onClick={() => navigate("/contact")}>
                  CONTACT
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/about")}>ABOUT-US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <span>
              <img
                style={{ width: "13rem", height: "3rem", borderRadius: "25px" }}
                alt="logo"
                src="https://firebasestorage.googleapis.com/v0/b/doorofhope-180e4.appspot.com/o/logo3.jpg?alt=media&token=a711c0b9-fc16-4975-8949-d2a98bc039b3"
              />
            </span>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
