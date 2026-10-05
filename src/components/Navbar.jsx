import './navbar.css'
import { Link } from "react-router-dom";

function Navbar({query , setQuery, cartCount}) {
  return (
    <header className="site-header">
      <div className="navbar">

        <div className="navbar-brand">
         <span className="brand-mark">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.5 18.5 11.1 5.2a1 1 0 0 1 1.8 0l2.2 3.9-5.4 9.4H3.5Z" />
    <path d="m13.9 12.4 3.5 6.1h-7l3.5-6.1Z" />
  </svg>
</span>

          <span className="brand-name">Acme Store</span>
        </div>

        <div className="category-links">
          <a href=""><span>All</span></a>
           <a href=""><span>Shirts</span></a>
           <a href=""><span>Stickers</span></a>
        </div>

        <div className="search-form">
             <input
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

         <a href=""> <span className="search-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="10.8" cy="10.8" r="6.3" />
              <path d="m15.5 15.5 4 4" />
            </svg>
            
          </span>
          </a>
        </div>

        <Link to="/cart" className="cart-link">
          <span className="cart-icon">
            <svg viewBox="0 0 24 24">
              <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.9-1.4L21 8H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

      </div>
    </header>
  )
}

export default Navbar