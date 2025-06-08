// src/pages/Contacto.jsx
import React from "react";
import instagramIcon from "../assets/images/instagram_icon.png";

function Contacto() {
  return (
    <div className="contacto-body">
      <main className="contacto-main">
        <h2>Contacto</h2>
        <p>¡Contáctanos para más información!</p>

        <p><strong>Dirección:</strong> Avenida Alem 555, San Miguel de Tucumán, Argentina</p>


        <p>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/543816098089"
            target="_blank"
            rel="noreferrer"
          >
            +54 381 6098089
          </a>
        </p>

        <p>
          <strong>Correo electrónico:</strong>{" "}
          <a href="mailto:cu4troancos@gmail.com">cu4troancos@gmail.com</a>
        </p>

        <p><strong>Redes Sociales:</strong></p>
        <a
          href="https://www.instagram.com/cu4troancos/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className="icono-instagram"
          />
        </a>

        {/* Mapa clickeable */}
        <div className="map-container" style={{ position: "relative", width: "400px", height: "300px", marginTop: "20px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.901426481578!2d-65.2061084849376!3d-26.830920583159316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c3c4c83edfb%3A0x47b7c6e9fd046a!2sAvenida%20Alem%20555%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1sen!2sus!4v1593025346000!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa Cu4troancos"
          ></iframe>
          <a
            href="https://www.google.com/maps?q=Avenida+Alem+555,+San+Miguel+de+Tucumán,+Argentina"
            target="_blank"
            rel="noreferrer"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
            }}
            aria-label="Abrir en Google Maps"
          >
            {/* Este link está vacío pero cubre todo el mapa */}
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contacto;


