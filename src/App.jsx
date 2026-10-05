import products from "./products.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import './App.css'
import { useState } from "react";

function ProductCard({ product }) {
  return (
    <article>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}$</p>
      <button className="add-to-cart">Add to Cart</button>
    </article>
  );
}

function App() {
   const [query, setQuery] = useState("");


  const term = query.trim().toLowerCase();


    const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
  );
  return (
    <div className="store-page">
      <Navbar query={query} setQuery={setQuery} />
       <main className="store-main">
        <Routes>
          <Route
            path="/"
            element={
              filteredProducts.length === 0 ? (
                <p className="no-results">No products found for "{query}"</p>
              ) : (
                <section className="product-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </section>
              )
            }
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;