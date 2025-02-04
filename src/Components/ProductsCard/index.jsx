
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
 

    return (
        <div className="product-card">
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
        </div>
    );
};

export default ProductCard;