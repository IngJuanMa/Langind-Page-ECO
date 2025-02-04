import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductsCard";
const products = [
    { id: 1, name: "Limpiador Multiusos ECO 1L (Lavanda)", price: "6.000", descripcion: "Delicioso aroma a lavanda, ideal para cualquier superficie", image: "/product/limpiador.png", category: "Limpiador Multiusos" },
    { id: 2, name: "Limpiador Multiusos ECO 5L (Lavanda)", price: "20.000", descripcion: "Delicioso aroma a lavanda, ideal para cualquier superficie", image: "/product/mcincolitro.png", category: "Limpiador Multiusos" },
    { id: 4, name: "Detergente Liquido ECO 2L", price: "10.000", descripcion: "Delicioso aroma con tecnología de eliminación de olores", image: "/product/deter.png", category: "Jabones y Detergentes" },
    { id: 5, name: "Suavizante Eco 2L (Manzana)", price: "12.000", descripcion: "Prolonga la duración del color, cuida tu ropa delicoso olor a Manzana", image: "/product/Sua-Dos-Man.png", category: "Suavizantes" },
    { id: 6, name: "Suavizante Eco 2L (Esplendor)", price: "12.000", descripcion: "Prolonga la duración del color, cuida tu ropa delicoso olor.", image: "/product/suavizantedos.png", category: "Suavizantes" },
    { id: 7, name: "Suavizante Eco 2L (Algodón)", price: "12.000", descripcion: "Prolonga la duración del color, cuida tu ropa delicoso olor a Algodón", image: "/product/Sua-Dos-Algo.png", category: "Suavizantes" },
    { id: 8, name: "Suavizante Eco 2L (Vainilla)", price: "12.000", descripcion: "Prolonga la duración del color, cuida tu ropa delicoso olor a Vainilla", image: "/product/Sua-Dos-Vai.png", category: "Suavizantes" },
    { id: 9, name: "Suavizante Eco 2L (Coco)", price: "12.000", descripcion: "Prolonga la duración del color, cuida tu ropa delicoso olor a Coco", image: "/product/Sua-Dos-Coco.png", category: "Suavizantes" },
    { id: 10, name: "Jabón líquido Lavaplatos ECO 500mL", price: "6.000", descripcion: "excelente calidad con delicioso aroma a limón", image: "/product/lavaplatos.png", category: "Jabones y Detergentes" },
    { id: 11, name: "Jabón líquido Lavaplatos ECO 1000mL", price: "10.000", descripcion: "excelente calidad con delicioso aroma a limón", image: "/product/lavaplatoslitro.png", category: "Jabones y Detergentes" },
    { id: 12, name: "Limpiador Multiusos ECO 1L (Mazana Verde)", price: "5.000", descripcion: "Delicioso aroma a Manzana Verde, ideal para cualquier superficie", image: "/product/m-manzana.png", category: "Limpiador Multiusos" },
    { id: 13, name: "Limpiador Multiusos ECO 1L (Maracuyá)", price: "5.000", descripcion: "Delicioso aroma a Maracuyá, ideal para cualquier superficie", image: "/product/m-maracuya.png", category: "Limpiador Multiusos" },
    { id: 14, name: "Limpiador Multiusos ECO 1L (Canela)", price: "5.000", descripcion: "Delicioso aroma a Canela, ideal para cualquier superficie", image: "/product/m-canela.png", category: "Limpiador Multiusos" },
    { id: 3, name: "Cepillo para aseo IMUSA (Unidad)", price: "4.700", descripcion: "Unidad de cepillo para aseo con cerdas excelente calidad", image: "/product/cepillos.png", category: "Accesorios" }
    
];
const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
}, {});

const ProductGrid = ({onOpenDialog, onAddToCart}) => {
    return (
        <>
            <h1 className="tituloproduct">Nuestro Productos</h1>
            <div className="carritoCompra">
                <aside className="presiona"> ⚠️ Presiona aquí para ver tus productos seleccionados y hacer tu pedido ➔ </aside>
                <img src="/img/carrito.svg" className="carrito" onClick={onOpenDialog} alt="Carrito"></img>
            </div>
            {Object.entries(groupedProducts).map(([category, items]) => (
            <section key={category} className="product-category">
                <h2 className="category-title">{category}</h2>
                <div className="product-grid">
                    {items.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </section>
        ))}
        </>
    );
};

export default ProductGrid;
