import "./Descuento.css";
import { motion } from "framer-motion";

const Descuento = () => {
    return (
        <motion.div className="discount-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            <div className="card-header">
            </div>
            <div className="card-body">
                <h3>¡TRAE TUS ENVACES VACÍOS!</h3>
                <p>
                    Recibe un <strong>descuento especial</strong> en tu próxima compra al reciclar tus envases usados. Contribuye al cuidado del medio ambiente.
                </p>
                <div className="qr-section">
                    <img src="/img/descuento.svg" alt="Código QR para descuento" className="qr-image" />
                    <img src="/img/ecoo.jpeg" alt="Código QR para descuento" className="qr-image" />
                </div>
                <ul className="benefits-list">
                    <li>Contribuyes al reciclaje.</li>
                    <li>Obtienes descuentos exclusivos.</li>
                    <li>Ayudas a reducir el impacto ambiental.</li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Descuento;