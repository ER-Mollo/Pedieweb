import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Pedipedi Energy" className="nav-logo" />
        <h1 className="logo">Pedipedi Energy</h1>
      </div>

      {/* Desktop */}
      <div className="nav-links desktop">
        <a
          href="#"
          className={activeSection === "home" ? "active" : ""}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
        >
          About Us
        </a>

        <a
          href="#services"
          className={activeSection === "services" ? "active" : ""}
        >
          Services
        </a>

        <a
          href="#how"
          className={activeSection === "how" ? "active" : ""}
        >
          How It Works
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>

        <a href="#contact" className="contact-btn">
          Contact Us
        </a>
      </div>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile */}
      {open && (
        <div className="mobile-menu">

          <a
            href="#"
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About Us
          </a>

          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>

          <a
            href="#how"
            className={activeSection === "how" ? "active" : ""}
          >
            How It Works
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>

          <a href="#contact" className="contact-btn">
            Contact Us
          </a>

        </div>
      )}
    </nav>
  );
}