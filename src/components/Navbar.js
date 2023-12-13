import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const isLoggedIn = !!localStorage.getItem("token");
  const email = !!localStorage.getItem("email")
    ? localStorage.getItem("email")
    : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          SellNow
        </Link>
      </div>
      <ul className="navbar-nav">
        {isLoggedIn ? (
          <>
              <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-products" className="nav-link">
                My Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-product" className="nav-link">
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit-product" className="nav-link">
                EditProduct
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">{email}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
