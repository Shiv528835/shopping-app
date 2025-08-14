import React, { useState } from 'react';
import products from '../data/products';

const ProductList = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '1rem' }}>
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />

      {/* Category Buttons */}
      <div style={{ marginBottom: '1.5rem' }}>
        {categories.map((category, index) => (
          <button
            key={index}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              backgroundColor: selectedCategory === category ? '#007BFF' : '#eee',
              color: selectedCategory === category ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1rem'
      }}>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff'
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
              <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{product.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#333' }}>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
