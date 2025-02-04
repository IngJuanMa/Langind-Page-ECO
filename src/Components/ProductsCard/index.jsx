import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
 
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.5, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="product-card"
        >
            <div className="card-image">
                <img src={product.image} alt={product.name} />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <div className="card-info">

                <p className="product-descrip">{product.descripcion}</p>
            </div>
            <div className="button-section">
                <p className="product-price">COP {product.price}</p>
                <button className="add-button" onClick={() => onAddToCart(product)}>Comprar</button>
            </div>
        </motion.div>
    );
};

export default ProductCard;