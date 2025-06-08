// src/pages/Carrito.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../assets/styles.css";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  const navigate = useNavigate();

  const totalGeneral = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <main className="carrito-main">
      <h2>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {cart.map((item, index) => (
              <li
                key={index}
                className="carrito-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px"
                }}
              >
                {item.imagen && (
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    style={{
                      width: "80px",
                      height: "auto",
                      marginRight: "15px",
                      borderRadius: "8px"
                    }}
                  />
                )}
                <div>
                  <p><strong>{item.name}</strong></p>
                  <p>Precio unitario: ${item.precio}</p>
                  <p>
                    Cantidad:
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={{ margin: "0 5px" }}
                    >
                      −
                    </button>
                    {item.cantidad}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={{ margin: "0 5px" }}
                    >
                      +
                    </button>
                  </p>
                  <p>Subtotal: ${item.precio * item.cantidad}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total a pagar: ${totalGeneral}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={() => navigate("/checkout")}>
            Finalizar compra
          </button>
        </>
      )}
    </main>
  );
}

export default Carrito;



