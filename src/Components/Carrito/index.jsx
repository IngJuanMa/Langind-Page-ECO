import { useState } from "react";
import "./Carrito.css"

const Carrito = ({ carritoRef, onCloseDialog, cartItems, onRemoveFromCart }) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price.replace(".", "")), 0);
      };

    const handleWhatsAppOrder = () => {
        if (!name || !address) {
            alert("Por favor, completa tu nombre y dirección antes de enviar el pedido.");
            return;
        }

        const productList = cartItems
            .map((item) => `${item.name} - COP ${item.price}`)
            .join("\n");

            const total = calculateTotal();

            const message = `Hola, me gustaría realizar el siguiente pedido:\n\n${productList}\n\nTotal: COP ${total.toLocaleString("es-CO")}\n\nNombre: ${name}\nDirección: ${address}`;
        const whatsappURL = `https://wa.me/+573204336996?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <>
            <dialog ref={carritoRef}>
                <div method="dialog" className="seccioncarrito">
                    <img src="/img/close.svg" onClick={onCloseDialog} alt="Cerrar Carrito" />
                </div>
                <h2 className="titulocarrito">Tu Carrito</h2>
                <section method="dialog" className="seccioncarritoproduct">
                    {cartItems.length === 0 ? (
                        <p className="vacio">El carrito está vacío, selecciona productos para realizar tu compra.</p>
                    ) : (
                        <>
                        <ul className="cart-list">
                            {cartItems.map((item, index) => (
                                <figure key={index} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>
                                        <p>Precio: COP {item.price}</p>
                                        <button
                                            className="remove-button"
                                            onClick={() => onRemoveFromCart(index)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </figure>
                            ))}
                        </ul>
                        <div className="cart-total">
                        <h3>Total: COP {calculateTotal().toLocaleString("es-CO")}</h3>
                      </div>
                      </>
                    )}

                    <div className="sectionformulario">
                        <h3>Datos del Cliente</h3>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Dirección"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <button className="whatsapp-button" onClick={handleWhatsAppOrder}>
                            Enviar Pedido por WhatsApp
                        </button>
                    </div>
                </section>

            </dialog>
        </>
    );
};

export default Carrito;