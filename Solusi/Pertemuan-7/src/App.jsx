import React, { useState } from 'react';
import './App.css';

const initialData = [
  { id: 1, title: "Laptop Gaming Super Cepat", price: 1299.99, rating: "⭐⭐⭐⭐⭐", image: "💻" },
  { id: 2, title: "Mouse Wireless Ergonomis", price: 49.50, rating: "⭐⭐⭐⭐", image: "🖱️" }
];

function ProductCard({ image, title, price, rating }) {
  return (
    <div className="product-card">
      <div className="product-image">{image}</div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-rating">{rating}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState(initialData); 

  const handleAddProduct = (event) => {
    event.preventDefault(); 
    
    const formData = new FormData(event.target);
    const newProduct = {
      id: Date.now(),
      title: formData.get("title"),
      price: parseFloat(formData.get("price")),
      rating: formData.get("rating"),
      image: formData.get("image") || "📦" 
    };

    setProducts([...products, newProduct]);
    
    event.target.reset(); 
  };

  return (
    <div className="amazon-container">
      <header className="amazon-header">
        <div className="logo">🛒 Amazonk</div>
      </header>

      <section className="form-section">
        <form onSubmit={handleAddProduct} className="add-product-form">
          <h3>Add New Product</h3>
          <div className="input-group">
            <input type="text" name="title" placeholder="Product Name" required />
            <input type="number" name="price" placeholder="Price ($)" step="0.01" required />
            <select name="rating" required>
              <option value="">Select Rating</option>
              <option value="⭐">⭐</option>
              <option value="⭐⭐">⭐⭐</option>
              <option value="⭐⭐⭐">⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
            <input type="text" name="image" placeholder="Emoji (e.g. 🎧, 📱)" />
            <button type="submit" className="add-product-btn">Add Product</button>
          </div>
        </form>
      </section>

      <main className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </main>
    </div>
  );
}