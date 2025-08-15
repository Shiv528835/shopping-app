import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./pages/Login";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <Router>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#4CAF50",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          marginBottom: "1rem",
        }}
      >
        {/* Logo / Title */}
        <h1 style={{ margin: 0, color: "white", fontSize: "1.5rem" }}>🛍️ My Shop</h1>

        {/* Links */}
        <div>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "20px",
              fontWeight: "bold",
              padding: "6px 10px",
              borderRadius: "5px",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Home
          </Link>

          <Link
            to="/cart"
            style={{
              color: "#4CAF50",
              backgroundColor: "white",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "6px 12px",
              borderRadius: "5px",
              transition: "background 0.3s ease",
              marginRight: "20px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f2f2f2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            Cart ({cartItems.length})
          </Link>

          <Link
            to={isLoggedIn ? "/" : "/login"}
            style={{
              color: isLoggedIn ? "white" : "#4CAF50",
              backgroundColor: isLoggedIn ? "#f44336" : "white",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "6px 12px",
              borderRadius: "5px",
              transition: "background 0.3s ease",
            }}
            onClick={() => {
              if (isLoggedIn) {
                setIsLoggedIn(false);
                alert("Logged out successfully!");
              }
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <ProductList addToCart={addToCart} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
