import React, { useState, useEffect } from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

import Kairavilogo from "../Assets/img/Kairavilogo.png";

interface NavbarProps {
  onContentChange: (content: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContentChange }) => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(true);
  const [navbarExpanded, setNavbarExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <>
      <div className={`navbar-container ${navbarVisible ? "" : "hidden"}`}>
        <div className="logo-container">
          <img src={Kairavilogo} alt="Logo" />
        </div>

        <div className="navbar-background"></div>

        <BootstrapNavbar
          className={`custom-navbar ${navbarExpanded ? "expanded" : ""}`}
          expand="lg"
          expanded={navbarExpanded}
        >
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavbarToggle}
          />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                as={Link}
                to="about"
                smooth={true}
                duration={500}
                onClick={() => onContentChange("about")}
                style={{ color: "black" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => onContentChange("projects")}
                style={{ color: "black" }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="art-form"
                smooth={true}
                duration={500}
                onClick={() => onContentChange("art-form")}
                style={{ color: "black" }}
              >
                Art-form
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => onContentChange("contact")}
                style={{ color: "black" }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
    </>
  );
};

export default Navbar;
