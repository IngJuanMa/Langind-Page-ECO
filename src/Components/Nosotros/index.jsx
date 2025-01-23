import React from "react";
import "./Nosotros.css";

const founders = [
    {
        id: 1,
        name: "Alan Smith",
        position: "CEO & Fundador",
        email: "alan.smith@beclean.com",
        image: "/founders/alan-smith.png", // Cambia según tu estructura
        joinedDate: "Jan/23",
        expiryDate: "Jan/24",
    },
    {
        id: 2,
        name: "Jane Doe",
        position: "Directora de Marketing",
        email: "jane.doe@beclean.com",
        image: "/founders/jane-doe.png",
        joinedDate: "Feb/23",
        expiryDate: "Feb/24",
    },
    {
        id: 3,
        name: "John Doe",
        position: "Jefe de Operaciones",
        email: "john.doe@beclean.com",
        image: "/founders/john-doe.png",
        joinedDate: "Mar/23",
        expiryDate: "Mar/24",
    },
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
            <div className="mision-vision">
                <div className="card">
                    <h2>Misión</h2>
                    <p>
                        Nuestra misión es ofrecer productos de limpieza ecológicos que
                        cuiden del medio ambiente y mejoren la calidad de vida de nuestros
                        clientes.
                    </p>
                </div>
                <div className="card">
                    <h2>Visión</h2>
                    <p>
                        Ser la empresa líder en innovación y sostenibilidad en la industria
                        de productos de limpieza para el hogar y empresas.
                    </p>
                </div>
            </div>

            <h2>Nuestros Fundadores</h2>
            <div className="founders">
                {founders.map((founder) => (
                    <div key={founder.id} className="founder-card">
                        <img src={founder.image} alt={founder.name} />
                        <h3>{founder.name}</h3>
                        <p>{founder.position}</p>
                        <p>ID: {founder.id}</p>
                        <p>{founder.email}</p>
                        <p>Joined Date: {founder.joinedDate}</p>
                        <p>Expiry Date: {founder.expiryDate}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SobreNosotros;
