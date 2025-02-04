import { Link } from "react-router-dom";
import "./Banner.css"
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <motion.section className="banner"
        initial={{ scale: 0.8, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  transition={{ duration: 0.5 }}>
                    
            <div className="banner-content">
                <h1>
                    TU ESPACIO ES <br></br><span className="highlight"> NUESTRO COMPROMISO</span>
                </h1>
                <p className="subtext"> Te ofrecemos calidad, efectividad y pureza en cada gota</p>
                <ul className="features">
                    <li>✔ Buenos precios</li>
                    <li>✔ Gran calidad</li>
                    <li>✔ Industria oporapense</li>
                    <li>✔ Compromiso medio ambiental</li>
                </ul>
                <Link to="/productos" className="btn" >Ver Productos</Link>
            </div>
        </motion.section>
    )
}

export default Banner;