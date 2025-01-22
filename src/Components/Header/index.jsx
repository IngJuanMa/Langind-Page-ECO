import ".//Header.css"


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/img/eco.jpeg " alt="Logo" className="logo-img" />
            </div>
            <nav className="nav">
                <a href="#inicio" className="nav-link">INICIO</a>
                <a href="#nosotros" className="nav-link">NOSOTROS</a>
                <a href="#productos" className="nav-link">PRODUCTOS</a>
            </nav>
            <div className="contact">
                <a href="https://wa.me/" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <img src="/img/whatsapp.svg" alt="WhatsApp" className="contact-icon" />
                    <span className="numero">+57 3204336996</span>
                </a>
            </div>
        </header>
    )
}

export default Header;