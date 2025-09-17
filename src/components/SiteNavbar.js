// src/components/SiteNavbar.js
import { useContext } from "react";
import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageSwitcher";
import "./SiteNavbar.css";

export default function SiteNavbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <BSNavbar
      bg="white"
      variant="light"
      expand="lg"
      sticky="top"
      className="custom-navbar shadow-sm"
    >
      <Container>
        {/* Logo */}
        <BSNavbar.Brand as={Link} to="/" className="brand-text">
          {language === "en" ? "Qatar Auto Care" : "قطر لخدمات السيارات"}
        </BSNavbar.Brand>

        {/* Always visible language toggle */}
        <div className="lang-toggle d-lg-none ms-auto">
          <Button
            variant="outline-dark"
            size="sm"
            className="lang-btn"
            onClick={toggleLanguage}
          >
            {language === "en" ? "عربي" : "EN"}
          </Button>
        </div>

        {/* Mobile toggle */}
        <BSNavbar.Toggle aria-controls="main-nav" className="custom-toggler" />

        <BSNavbar.Collapse id="main-nav">
          {/* Center: Navigation Links */}
          <Nav className="mx-auto mx-lg-0 nav-links">
            <Nav.Link as={Link} to="/" className="nav-link-hover mx-lg-3">
              {language === "en" ? "Home" : "الرئيسية"}
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-hover mx-lg-3">
              {language === "en" ? "Services" : "الخدمات"}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-hover mx-lg-3">
              {language === "en" ? "About" : "معلومات عنا"}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="contact-link mx-lg-2">
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </Nav.Link>
          </Nav>

          {/* Right side (desktop only) */}
          <div className="lang-toggle d-none d-lg-flex ms-lg-auto">
            <Button
              variant="outline-dark"
              size="sm"
              className="lang-btn"
              onClick={toggleLanguage}
            >
              {language === "en" ? "عربي" : "EN"}
            </Button>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
