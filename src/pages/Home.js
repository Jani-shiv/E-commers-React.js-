import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Pixel & Vibes</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="shop-now-btn">Shop Now</Link>
      </div>

      <div className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661" alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050" alt="Fashion" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1484101403633-562f891dc89a" alt="Home & Living" />
            <h3>Home & Living</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66" alt="Books" />
            <h3>Books</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd" alt="Sports" />
            <h3>Sports</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1" alt="Beauty" />
            <h3>Beauty</h3>
          </div>
        </div>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Smart Watch" />
            <h3>Smart Watch Pro</h3>
            <p>$99.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" alt="Wireless Headphones" />
            <h3>Premium Headphones</h3>
            <p>$149.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f" alt="Sunglasses" />
            <h3>Designer Sunglasses</h3>
            <p>$199.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12" alt="Smart Speaker" />
            <h3>Smart Speaker</h3>
            <p>$79.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Running Shoes" />
            <h3>Athletic Shoes</h3>
            <p>$129.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62" alt="Backpack" />
            <h3>Travel Backpack</h3>
            <p>$89.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and exclusive offers</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Home;