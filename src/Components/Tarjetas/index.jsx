import "./Tarjetas.css";

const cardsData = [
    {
        icon: "/img/cash.svg",
        title: "Expert Team",
        description: "Our highly trained professionals bring a wealth of experience.",
    },
    {
        icon: "🔧",
        title: "Quality Service",
        description: "We specialize in seamless fixes that exceed your expectations.",
    },
    {
        icon: "💵",
        title: "Affordable Price",
        description: "We offer exceptional services at prices that are affordable for everyone.",
    },
    {
        icon: "💵",
        title: "Affordable Price",
        description: "We offer exceptional services at prices that are affordable for everyone.",
    }
];

const Tarjetas = () => {
    return (
        <div className="cards-container">

            <figure className="card">
                <img className="card-icon" src="/img/puerquito.svg"></img>
                <h3 className="card-title">Ahorro</h3>
                <p className="card-description">Nuestros productos tienen precios accesibles</p>
            </figure>

            <figure className="card">
                <img className="card-icon" src="/img/cash.svg"></img>
                <h3 className="card-title">Expert Team</h3>
                <p className="card-description">Our highly trained professionals bring a wealth of experience.</p>
            </figure>

            <figure className="card">
                <img className="card-icon" src="/img/cash.svg"></img>
                <h3 className="card-title">Expert Team</h3>
                <p className="card-description">Our highly trained professionals bring a wealth of experience.</p>
            </figure>

            <figure className="card">
                <img className="card-icon" src="/img/cash.svg"></img>
                <h3 className="card-title">Expert Team</h3>
                <p className="card-description">Our highly trained professionals bring a wealth of experience.</p>
            </figure>
        </div>
    );
};

export default Tarjetas;
