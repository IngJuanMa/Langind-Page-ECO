import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductsCard";
import { Link } from "react-router-dom";

const products = [
    { id: 1, name: "Detergente Líquido ECO", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/detergenteuno.png" },
    { id: 2, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/deter.png" },
    { id: 3, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/deter.png" },
    { id: 4, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/deter.png" },
    { id: 5, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/deter.png" },
    { id: 6, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/deter.png" },
    { id: 7, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/deter.png" },
    { id: 8, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con perlas que ayudan a mejorar el lavado", image: "/product/deter.png" },
];

const ProductGrid = ({onOpenDialog}) => {
    return (
        <>
            <div className="carritoCompra">
                <aside className="presiona">Presiona aquí para ver tu carrito ➔ </aside>
                <img src="/img/carrito.svg" className="carrito" onClick={onOpenDialog}></img>
            </div>
            <section className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};

export default ProductGrid;
