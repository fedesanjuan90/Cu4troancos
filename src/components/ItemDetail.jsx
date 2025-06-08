// src/components/ItemDetail.jsx
import React from "react";

function ItemDetail({ producto, onAdd }) {
  return (
    <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: "200px" }} />
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      <button onClick={() => onAdd(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
