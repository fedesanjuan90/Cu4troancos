// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Bebidas from "./pages/Bebidas";
import Market from "./pages/Market";
import Club from "./pages/Club";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import Gracias from "./pages/Gracias";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";

import "./assets/styles.css";

function App() {
  return (
    <Router>
      <NavBar />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/market" element={<Market />} />
        <Route path="/club" element={<Club />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;




