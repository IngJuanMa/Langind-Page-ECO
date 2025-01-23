import { Link } from "react-router-dom";
import ".//Header.css"


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/img/eco.jpeg " alt="Logo" className="logo-img" />
            </div>
            <nav className="nav">
                <Link to="/" className="nav-link">INICIO</Link>
                <Link to="/Sapo" className="nav-link">NOSOTROS</Link>
                <Link to="/productos" className="nav-link">PRODUCTOS</Link>
            </nav>
            <div className="contact">
                <Link  to="https://wa.me/+573204336996" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <img src="/img/whatsapp.svg" alt="WhatsApp" className="contact-icon" />
                    <span className="numero">+57 320 433 6996</span>
                </Link>
            </div>
        </header>
    )
}

export default Header;