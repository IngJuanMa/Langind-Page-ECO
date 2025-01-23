import { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './Components/Banner'
import Descuento from './Components/Descuento'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Tarjetas from './Components/Tarjetas'
import NoFound from './Components/NoFound'
import ProductGrid from './Components/ProductGrid'
import Carrito from './Components/Carrito'
import SobreNosotros from './Components/Nosotros'

function App() {

  const carritoRef = useRef(null);
  const [cartItems, setCartItems] = useState([]); // Estado del carrito
  const [popupMessage, setPopupMessage] = useState(""); // Estado del popup
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Control de visibilidad del popup

  // Función para abrir el diálogo
  const openDialog = () => {
    if (carritoRef.current) {
      carritoRef.current.showModal();
    }
  };

  // Función para cerrar el diálogo
  const closeDialog = () => {
    if (carritoRef.current) {
      carritoRef.current.close();
    }
  };

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);

    // Mostrar el mensaje emergente
    setPopupMessage(`${product.name} agregado al carrito`);
    setIsPopupVisible(true);

    // Ocultar el popup después de 3 segundos
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };


  return (
    <>
      <Router >
        <Header />
        <Routes>

          <Route path="/" element={
            <>
              <section className='seccionBan'>
                <Banner />
              </section>
              <Tarjetas />
              <Descuento />

            </>
          } />
          <Route path='/Productos' element={
            <>
              <ProductGrid onOpenDialog={openDialog} onAddToCart={addToCart} />
              <Carrito
                carritoRef={carritoRef}
                onCloseDialog={closeDialog}
                cartItems={cartItems}
                onRemoveFromCart={removeFromCart} />
              {/* Popup de confirmación */}
              {isPopupVisible && <div className="popup">{popupMessage}</div>}
            </>
          } />

          <Route path='/Nosotros' element={
            <>
              <SobreNosotros />
            </>
          } />
          <Route path='*' element={
            <>
              <NoFound />
            </>
          } />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
