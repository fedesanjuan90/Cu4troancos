import React from "react";
import "../assets/styles.css";
import logo from "../assets/images/logo market negro sin fondo.png";
import canalWa from "../assets/images/canal de wa.png";
import deliveryNov from "../assets/images/delivery nov.png";
import arganaReserva from "../assets/images/argana reserva premio.png";
import bosque from "../assets/images/bosque.JPG";
import marketImg from "../assets/images/nuevo imagen market.png";
import amigos from "../assets/images/amigos.jpg";
import whatsappIcon from "../assets/images/whatsapp_icon.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-body">
      

      <main className="home-main">
        <section className="welcome">
          <p>Bienvenido a Cu4troancos</p>
        </section>

        <section className="carousel">
          <input type="radio" name="slides" id="slide1" defaultChecked />
          <input type="radio" name="slides" id="slide2" />
          <input type="radio" name="slides" id="slide3" />

          <div className="carousel-slides">
            <div className="carousel-slide">
              <img src={canalWa} alt="Foto del local 1" />
            </div>
            <div className="carousel-slide">
              <img src={deliveryNov} alt="Foto del local 2" />
            </div>
            <div className="carousel-slide">
              <img src={arganaReserva} alt="Foto del local 3" />
            </div>
          </div>

          <div className="carousel-navigation">
            <label htmlFor="slide1"></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
          </div>
        </section>

        <section className="about">
          <h2>Sobre Nosotros</h2>
          <p>
            "Cu4troancos es una tienda dedicada a ofrecer una amplia variedad de bebidas y productos de almacén de alta calidad. Nuestra misión es proporcionar a nuestros clientes una experiencia única y satisfactoria. Nos destacamos por la calidad de nuestros productos y el compromiso con la satisfacción de quienes nos eligen. Ya sea que busques bebidas exclusivas o productos para tu hogar, en Cu4troancos encontrarás la mejor selección acompañada de un servicio personalizado que te hará sentir como en casa."
          </p>
        </section>

        <section className="features">
          <div className="feature-item">
            <img src={bosque} alt="imagen gin" />
            <h3>Bebidas</h3>
            <p>Descubre nuestra selección de bebidas alcohólicas y no alcohólicas.</p>
            <Link to="/bebidas" className="cta-button">Ver más</Link>
          </div>
          <div className="feature-item">
            <img src={marketImg} alt="Market imagen" />
            <h3>Market</h3>
            <p>Encuentra todos los productos que necesitas para tu hogar.</p>
            <Link to="/market" className="cta-button">Ver más</Link>
          </div>
          <div className="feature-item">
            <img src={amigos} alt="imagen amigos" />
            <h3>Club Cu4troancos</h3>
            <p>Únete a nuestro club y disfruta de beneficios exclusivos.</p>
            <Link to="/club" className="cta-button">Únete ahora</Link>
          </div>
          <div className="feature-item">
            <img src={canalWa} alt="imagen canal wtp" />
            <h3>Contacto</h3>
            <p>Únete a nuestro club y disfruta de beneficios exclusivos.</p>
            <Link to="/contacto" className="cta-button">Contáctanos</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

