import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT - LOGO + DESCRIPTION */}
        <div className="footer-brand">
          <img src={logo} alt="Pedipedi Energy Logo" className="footer-logo" />

          <p>
            Pedipedi Energy is a South African renewable energy company
            providing reliable solar and backup power solutions.
          </p>
        </div>

        {/* MENU */}
        <div className="footer-links">
          <h3>Menu</h3>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📞 +27 79 842 0219</p>
          <p>📧 info@pedipedienergy.co.za</p>
          <p>📍 South Africa</p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pedipedi energy (pty) Ltd. All rights reserved.
        </p>

        <p className="footer-credit">
          Website designed & built by{" "}
          <strong>
            <a href="https://ellentra.co.za/" target="_blank" rel="noreferrer">
              Ellentra Technologies
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
}