import React from "react";
import "./Nosotros.css";
import Carrusel from "../Carrusel";

const founders = [
    {
        id: 1,
        name: "Andrés Felipe López",
        position: "CEO & Fundador",
        email: "felipelopex@gmail.com",
        celu: "321 678 4567"
    },
    {
        id: 2,
        name: "Fabían López",
        position: "Jefe de producción",
        email: "fabiancho@gmail.com",
        celu: "320 237 7858"
    },
    {
        id: 3,
        name: "Santiago López",
        position: "Jefe de Logística",
        email: "santiagolopex@gmail.com",
        celu: "326 487 9648"
    },
];

const images = [
    "/Fundadores/dos.jpeg",
    "/Fundadores/uno.jpeg",
    "/Fundadores/uno.jpeg"
];
const SobreNosotros = () => {
    return (
        <section className="sobre-nosotros">
            <h1>Sobre Nosotros</h1>
            <header className="headerSobre">
                <div>
                    <h2>Somos ECO</h2>
                    <p>Una marca Oporapense que ofrece productos de limpieza de calidad y a un precio muy accecible</p>
                </div>
                <img src="/img/eco.jpeg" />
            </header>
            <section className="mision-vision">
                <div className="cardmisi">
                    <h2>Misión</h2>
                    <p>
                        Nuestra misión es ofrecer productos de limpieza ecológicos que
                        cuiden del medio ambiente y mejoren la calidad de vida de nuestros
                        clientes.
                    </p>
                </div>
                <div className="cardmisi">
                    <h2>Visión</h2>
                    <p>
                        Ser la empresa líder en innovación y sostenibilidad en la industria
                        de productos de limpieza para el hogar y empresas en el departamento del Huila.
                    </p>
                </div>
            </section>

            <Carrusel images={images} />

            <h2 className="tituloFundad">Nuestros Fundadores</h2>
            <div className="founders">
                {founders.map((founder) => (
                    <div key={founder.id} className="founder-card">
                        <h3>{founder.name}</h3>
                        <p>{founder.position}</p>
                        <p>{founder.email}</p>
                        <p>{founder.celu}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default SobreNosotros;
