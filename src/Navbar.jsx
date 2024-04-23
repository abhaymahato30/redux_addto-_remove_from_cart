import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const productCart = useSelector((state) => state.cart);
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>

        <li className="nav-link">{productCart.length}</li>
      </ul>
    </>
  );
};

export default Navbar;
