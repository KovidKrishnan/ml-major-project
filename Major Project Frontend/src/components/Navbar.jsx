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

  return (
    <Navbar bg="dark" variant="dark" expand="xl" className="pt-3 pb-3">
      <Container className="">
        <Navbar.Brand href="/home" onClick={() => handleNavLinkClick("")}
              style={{ fontWeight: activeLink === "logo" ? "bold" : "normal" }}
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
            <Nav.Link
              href="documents"
              onClick={() => handleNavLinkClick("documents")}
              style={{ fontWeight: activeLink === "documents" ? "bold" : "normal" }}
              className={activeLink == 'documents' ? 'text-light' : ''}
            >
              Documents &nbsp;<FontAwesomeIcon icon={faFile} className="ml-1 fa-light" />
            </Nav.Link>
            <Nav.Link
              href="code"
              onClick={() => handleNavLinkClick("code")}
              style={{ fontWeight: activeLink === "code" ? "bold" : "normal" }}
              className={activeLink == 'code' ? 'text-light' : ''}
            >
              Code &nbsp;<FontAwesomeIcon icon={faLaptopCode} className="ml-1" />
            </Nav.Link>
            <Nav.Link
              href="team"
              onClick={() => handleNavLinkClick("team")}
              style={{ fontWeight: activeLink === "team" ? "bold" : "normal" }}
              className={activeLink == 'team' ? 'text-light' : ''}
            >
              Team &nbsp;<FontAwesomeIcon icon={faPeopleGroup} className="ml-1 " />
            </Nav.Link>
            <Nav.Link
              href="dataset"
              onClick={() => handleNavLinkClick("Dataset")}
              style={{ fontWeight: activeLink === "Dataset" ? "bold" : "normal" }}
              className={activeLink == 'Dataset' ? 'text-light' : ''}
            >
              Dataset &nbsp;<FontAwesomeIcon icon={faDatabase} className="ml-1 " />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
