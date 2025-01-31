import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faFile, faPeopleGroup,  faLaptopCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

const AppNavbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  const gradientStyle = {
    background: `-webkit-linear-gradient(45deg, #FF6B6B, #6B6BFF)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };

  return (
    <Navbar bg="dark" variant="dark" expand="xl" className="pt-3 pb-3">
      <Container className="">
        <Navbar.Brand href="/home" onClick={() => handleNavLinkClick("")}
              style={gradientStyle}
              className={activeLink == 'logo' ? 'text-light' : ''}>
          Android Malware Detection
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav >
            <Nav.Link
              href="about"
              onClick={() => handleNavLinkClick("about")}
              style={{ fontWeight: activeLink === "about" ? "bold" : "normal" }}
              className={activeLink == 'about' ? 'text-light' : ''}
            >
              About &nbsp;<FontAwesomeIcon icon={faCircleInfo} className="ml-1" />
            </Nav.Link>
            <div className="mx-auto"></div>
            <Nav.Link
              href="documents"
              onClick={() => handleNavLinkClick("documents")}
              style={{ fontWeight: activeLink === "documents" ? "bold" : "normal" }}
              className={activeLink == 'documents' ? 'text-light' : ''}
            >
              Documents &nbsp;<FontAwesomeIcon icon={faFile} className="ml-1 fa-light" />
            </Nav.Link>
            
            <Nav.Link
              href="team"
              onClick={() => handleNavLinkClick("team")}
              style={{ fontWeight: activeLink === "team" ? "bold" : "normal" }}
              className={activeLink == 'team' ? 'text-light' : ''}
            >
              Team &nbsp;<FontAwesomeIcon icon={faPeopleGroup} className="ml-1 " />
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
