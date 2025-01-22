import "./Banner.css"

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>
                    TU ESPACIO ES <br></br><span className="highlight"> NUESTRO COMPROMISO</span>
                </h1>
                <p className="subtext"> Te ofrecemos calidad, efectividad y pureza en cada gota</p>
                <ul className="features">
                    <li>✔ Buenos precios</li>
                    <li>✔ Gran calidad</li>
                    <li>✔ Industria oporapense</li>
                    <li>✔ Compromiso medio ambiental</li>
                </ul>
                <button className="btn">Ver Catálogo</button>
            </div>
        </section>
    )
}

export default Banner;