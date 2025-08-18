import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

const ProductList = ({ addToCart, isLoggedIn }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  // Dynamically get all categories from products
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // Filter products based on category and search term
  const filteredProducts = products.filter(
    p =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Recommended products (other products from same category)
  const recommended =
    filteredProducts.length > 0
      ? products
          .filter(
            p =>
              p.category === filteredProducts[0].category &&
              p.id !== filteredProducts[0].id
          )
          .slice(0, 4)
      : [];

  const topDeals = products.slice(0, 3);
  const newArrivals = products.slice(-3);

  const handleBuy = product => {
    if (!isLoggedIn) return navigate("/login");
    addToCart(product);
    alert(`You bought ${product.name}!`);
  };

  const ProductCard = ({ product }) => (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3
          onClick={() => navigate(`/product/${product.id}`)}
          style={{
            cursor: "pointer",
            margin: "5px 0",
            fontSize: "1.1rem",
            color: "#333",
          }}
        >
          {product.name}
        </h3>
        <p style={{ fontWeight: "bold", color: "#007BFF", marginBottom: "10px" }}>
          ${product.price}
        </p>
        <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#28a745",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#218838")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#28a745")}
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleBuy(product)}
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#ffc107",
              color: "#000",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e0a800")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ffc107")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );

  const HorizontalProductList = ({ title, productsList, highlightColor }) => (
    <div
      style={{
        marginBottom: "2rem",
        padding: "1rem",
        borderRadius: "12px",
        backgroundColor: highlightColor || "#f0f8ff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          marginBottom: "10px",
          fontWeight: "700",
          fontSize: "1.3rem",
          color: "#007BFF",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          paddingBottom: "1rem",
        }}
      >
        {productsList.map(p => (
          <div
            key={p.id}
            style={{
              minWidth: "150px",
              cursor: "pointer",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onClick={() => navigate(`/product/${p.id}`)}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />
            <p style={{ margin: "5px 0", fontWeight: "600" }}>{p.name}</p>
            <p style={{ fontWeight: "bold", color: "#007BFF" }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        }}
      />

      {/* Category Buttons */}
      <div style={{ marginBottom: "1rem" }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: selectedCategory === cat ? "#007BFF" : "#f0f0f0",
              color: selectedCategory === cat ? "#fff" : "#333",
              cursor: "pointer",
              transition: "all 0.2s",
              fontWeight: "500",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Show Horizontal Sections only if "All" is selected */}
      {selectedCategory === "All" && (
        <>
          <HorizontalProductList
            title="🔥 Top Deals"
            productsList={topDeals}
            highlightColor="#fff9c4" // yellow
          />
          <HorizontalProductList
            title="🌟 New Arrivals"
            productsList={newArrivals}
            highlightColor="#ffcdd2" // red
          />
          {recommended.length > 0 && (
            <HorizontalProductList
              title="Recommended for you"
              productsList={recommended}
              highlightColor="#bbdefb" // blue
            />
          )}
        </>
      )}

      {/* Category Title */}
      {selectedCategory !== "All" && (
        <h2
          style={{
            margin: "1.5rem 0 1rem 0",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#333",
          }}
        >
          {selectedCategory}
        </h2>
      )}

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Rate Us Section */}
      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          border: "1px solid #ccc",
          borderRadius: "12px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>Rate Us ⭐</h3>
        <div>
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                fontSize: "2.2rem",
                cursor: "pointer",
                color: star <= rating ? "#ffc107" : "#ddd",
                transition: "color 0.2s",
                marginRight: "5px",
              }}
            >
              ★
            </span>
          ))}
        </div>
        {rating > 0 && (
          <p style={{ marginTop: "10px", fontWeight: "500", color: "#555" }}>
            You rated us {rating} star{rating > 1 ? "s" : ""}!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
