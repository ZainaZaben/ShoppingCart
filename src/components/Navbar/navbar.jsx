import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/"> Zaina&apos;s Shop </Link>
        <Link to="/cart">
          <ShoppingCart className="cart-icon" />
        </Link>
      </div>
    </nav>
  );
}
