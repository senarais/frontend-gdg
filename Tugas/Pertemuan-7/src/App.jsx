/* ==========================================================================
TUGAS REACT: REUSABLE COMPONENT, PROPS, & STATE
==========================================================================
Tujuan: 
1. Mengubah elemen HTML statis menjadi Reusable Component.
2. Mengirim data menggunakan Props.
3. Menggunakan useState untuk mengelola daftar produk.
========================================================================== */

import React from 'react'; // TODO: Jangan lupa import useState!
import './App.css';

// Data awal katalog produk
const initialData = [
  { id: 1, title: "Laptop Gaming Super Cepat", price: 1299.99, rating: "⭐⭐⭐⭐⭐", image: "💻" },
  { id: 2, title: "Mouse Wireless Ergonomis", price: 49.50, rating: "⭐⭐⭐⭐", image: "🖱️" }
];

// TODO 1
// Buat Component baru bernama `ProductCard`.
// Component ini harus menerima parameter `props` (atau destructuring props: image, title, price, rating).
// Pindahkan struktur HTML <div className="product-card"> yang ada di bawah ke dalam return component ini!
function ProductCard() {
  return (
    // Pindahkan elemen statisnya ke sini dan ubah isinya jadi dinamis pake props!
    null // hapus null ini ya. 
  );
}

export default function App() {
  
  // TODO 2
  // Integrasi useState!
  // Ubah variabel products di bawah ini menggunakan `useState`.
  // Jadikan `initialData` sebagai nilai awal state-nya.
  const products = initialData; 

  // Function ini SUDAH FUNGSIONAL untuk mengambil data dari form.
  const handleAddProduct = (event) => {
    event.preventDefault(); // Mencegah page reload saat form disubmit
    
    // Mengambil data dari input form
    const formData = new FormData(event.target);
    const newProduct = {
      id: Date.now(),
      title: formData.get("title"),
      price: parseFloat(formData.get("price")),
      rating: formData.get("rating"),
      image: formData.get("image") || "📦" // Default icon jika kosong
    };

    // TODO 3
    // Logika penambahan state.
    // Gunakan setter dari useState (misal: setProducts) untuk menambahkan `newProduct` 
    // ke dalam array state produk yang sudah ada.
    // PERHATIAN: Ingat konsep Immutability di React (gunakan spread operator `...`)!
    
    
    // Mengosongkan form setelah disubmit (Jangan diubah)
    event.target.reset(); 
  };

  return (
    <div className="amazon-container">
      {/* Navbar / Header */}
      <header className="amazon-header">
        <div className="logo">🛒 Amazonk</div>
      </header>

      {/* ========================================================= */}
      {/* AREA FORM: SUDAH FUNGSIONAL, DILARANG MENGUBAH KODE INI!  */}
      {/* ========================================================= */}
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
      {/* ========================================================= */}

      {/* Katalog Produk */}
      <main className="product-grid">
        
        {/* TODO 4 */}
        {/* Gunakan metode .map() pada state `products` untuk me-render component <ProductCard /> */}
        {/* Jangan lupa berikan `key` dan passing props (title, price, image, rating) ke component tersebut! */}
        
        {/* ========================================================= */}
        {/* HAPUS KODE HARDCODE DI BAWAH INI SETELAH TODO 4 SELESAI! */}
        {/* ========================================================= */}
        <div className="product-card">
          <div className="product-image">💻</div>
          <div className="product-info">
            <h3 className="product-title">Laptop Gaming Super Cepat</h3>
            <p className="product-rating">⭐⭐⭐⭐⭐</p>
            <p className="product-price">$1299.99</p>
          </div>
        </div>
        
        <div className="product-card">
          <div className="product-image">🖱️</div>
          <div className="product-info">
            <h3 className="product-title">Mouse Wireless Ergonomis</h3>
            <p className="product-rating">⭐⭐⭐⭐</p>
            <p className="product-price">$49.50</p>
          </div>
        </div>
        {/* ========================================================= */}
        
      </main>
    </div>
  );
}