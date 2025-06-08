// src/pages/Checkout.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.nombre || !formData.email || !formData.direccion) {
    alert("Por favor completá todos los campos.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "ordenes"), {
      comprador: formData,
      items: cart,
      total,
      fecha: new Date(),
    });

    alert(`✅ Compra confirmada\n\nID de orden: ${docRef.id}`);
    clearCart();
    navigate("/gracias");
  } catch (error) {
    console.error("Error al guardar la orden:", error);
    alert("❌ Ocurrió un error al confirmar la compra. Revisá la consola.");
  }
};


  if (cart.length === 0) {
    return (
      <main className="checkout-main">
        <h2>El carrito está vacío.</h2>
      </main>
    );
  }

  return (
    <main className="checkout-main">
      <h2>Resumen de tu compra</h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.nombre ?? item.name} × {item.cantidad} = ${item.precio * item.cantidad}
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Confirmar compra</button>
      </form>
    </main>
  );
}

export default Checkout;

