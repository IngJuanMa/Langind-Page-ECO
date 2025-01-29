import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Nosotros</h3>
          <p>
          Estamos comprometidos a ofrecer productos de limpieza de la más alta calidad preservando la naturaleza.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contáctanos</h3>  
          <ul>
            <li>Cel: +57 310 810 9406</li>
            <li>Email: ecoproducts@gmail.com</li>
            <li>Ubicación: Oporapa - Huila, Colombia</li>
          </ul>
        </div>  

        <div className="footer-socials">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/img/face.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="/img/insta.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Eco Clean. All Rights Reserved.</p>
        <p>&copy; Desing By: IngJuanMa.</p>
      </div>
    </footer>
  );
};

export default Footer;
