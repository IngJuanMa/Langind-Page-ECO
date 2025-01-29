import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <img src="/img/eco.jpeg" alt="Logo" className="logo-img" />
      </div>
      <nav className="nav">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          INICIO
        </Link>
        <Link
          to="/Nosotros"
          className={`nav-link ${
            location.pathname === "/Nosotros" ? "active" : ""
          }`}
        >
          NOSOTROS
        </Link>
        <Link
          to="/productos"
          className={`nav-link ${
            location.pathname === "/productos" ? "active" : ""
          }`}
        >
          PRODUCTOS
        </Link>
      </nav>
      <div className="contact">
        <Link
          to="https://wa.me/+573108109406"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/whatsapp.svg" alt="WhatsApp" className="contact-icon" />
          <span className="numero">+57 310 810 9406</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
