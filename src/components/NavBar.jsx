import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo market negro sin fondo.png";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.length;

  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo Cu4troancos" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/productos/bebida">Bebidas</Link></li>
          <li><Link to="/productos/market">Market</Link></li>
          <li><Link to="/club">Club Cu4troancos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li>
            <Link to="/carrito">
              🛒 Carrito {totalItems > 0 && <span>({totalItems})</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;


