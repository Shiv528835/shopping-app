import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          fontSize: "1.5rem",
          letterSpacing: "1px"
        }}
      >
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ marginTop: "15px", color: "#777" }}>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              margin: "8px 0",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <span>
              {item.name} - ${item.price}
            </span>
            <button
              onClick={() => removeFromCart(index)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s ease"
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e63939")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
