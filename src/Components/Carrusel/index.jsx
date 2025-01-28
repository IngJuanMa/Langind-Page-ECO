import React, { useState } from "react";
import "./Carrusel.css";

const Carrusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrusel">
      <button className="carrusel-button prev" onClick={handlePrev}>
        {"<"}
      </button>
      <div
        className="carrusel-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Mueve las imágenes
        }}
      >
        {images.map((image, index) => (
          <div className="carrusel-image-container" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="carrusel-image" />
          </div>
        ))}
      </div>
      <button className="carrusel-button next" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default Carrusel;
