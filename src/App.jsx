import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './Components/Banner'
import Descuento from './Components/Descuento'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Tarjetas from './Components/Tarjetas'
import NoFound from './Components/NoFound'

function App() {
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

          <Route path='*' element={
            <>
            <NoFound />
            </>
          }/>

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
