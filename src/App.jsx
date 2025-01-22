import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Tarjetas from './Components/Tarjetas'

function App() {
  return (
    <>
      <Header />
      <section className='seccionBan'>
        <Banner />
      </section>
      <Tarjetas />
    </>
  )
}

export default App
