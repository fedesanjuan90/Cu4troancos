import React from "react";
import { Link } from "react-router-dom";

function Gracias() {
  return (
    <main className="gracias-main">
      <h2>🎉 ¡Gracias por tu compra!</h2>
      <p>Te contactaremos pronto con los detalles de envío.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}

export default Gracias;
