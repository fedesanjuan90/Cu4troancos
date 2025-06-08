import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Config";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ItemListContainer() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const obtenerProductos = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const productosFiltrados = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(prod => prod.categoria === categoria);
      setProductos(productosFiltrados);
    };

    obtenerProductos();
  }, [categoria]);

  return (
    <main className="bebidas-main">
      <h2>{categoria === "bebida" ? "Galería de Bebidas" : "Galería de Productos"}</h2>
      {productos.map(prod => (
        <div className="bebidas-item" key={prod.id}>
          <Link to={`/producto/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {prod.imagen && <img src={prod.imagen} alt={prod.nombre} />}
            <div className="descripcion">
              <h3>{prod.nombre}</h3>
              <p>${prod.precio}</p>
            </div>
          </Link>
          <button onClick={() => addToCart({ ...prod, cantidad: 1 })}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </main>
  );
}

export default ItemListContainer;


