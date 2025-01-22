import { useRef } from 'react'
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

function App() {

  const carritoRef = useRef(null);

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
              <ProductGrid onOpenDialog={openDialog} />
              <Carrito carritoRef={carritoRef} onCloseDialog={closeDialog} />
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
