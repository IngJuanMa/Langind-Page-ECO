import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductsCard";
const products = [
    { id: 1, name: "Limpiador Multiusos ECO 1L (Lavanda)", price: "6.000", descripcion: "Delicioso aroma a lavanda, ideal para cualquier superficie", image: "/product/limpiador.png" },
    { id: 2, name: "Limpiador Multiusos ECO 5L (Lavanda)", price: "20.000", descripcion: "Delicioso aroma a lavanda, ideal para cualquier superficie", image: "/product/mcincolitro.png" },
    { id: 3, name: "Jabón Lavaplatos ECO 500mL", price: "7.000", descripcion: "excelente calidad con delicioso aroma a limón", image: "/product/lavaplatos.png" },
    { id: 4, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con tecnología de eliminación de olores", image: "/product/deter.png" }
];

const ProductGrid = ({onOpenDialog, onAddToCart}) => {
    return (
        <>
            <h1 className="tituloproduct">Nuestro Productos</h1>
            <div className="carritoCompra">
                <aside className="presiona"> ⚠️ Presiona aquí para ver tus productos seleccionados y hacer tu pedido ➔ </aside>
                <img src="/img/carrito.svg" className="carrito" onClick={onOpenDialog} alt="Carrito"></img>
            </div>
            <section className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </section>
        </>
    );
};

export default ProductGrid;
