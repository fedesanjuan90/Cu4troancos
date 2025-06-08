// src/pages/ItemDetailContainer.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/CartContext";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No existe el producto");
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  const handleAgregar = () => {
    addToCart({ ...producto, cantidad });
  };

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <main className="detalle-main">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} width={200} />
      <p>Precio: ${producto.precio}</p>

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>−</button>
        <span style={{ margin: "0 10px" }}>{cantidad}</span>
        <button onClick={() => setCantidad(cantidad + 1)}>+</button>
      </div>

      <button onClick={handleAgregar}>Agregar al carrito</button>
    </main>
  );
}

export default ItemDetailContainer;

