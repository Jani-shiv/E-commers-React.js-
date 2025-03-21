import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 82999.17,
      quantity: 1,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=150&hei=150&fmt=jpeg&qlt=95"
    },
    {
      id: 2,
      name: "MacBook Pro M2",
      price: 124499.17,
      quantity: 1,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=150&hei=150&fmt=jpeg&qlt=95"
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 20749.17,
      quantity: 1,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=150&hei=150&fmt=jpeg&qlt=95"
    },
    {
      id: 4,
      name: "Apple Watch Series 8",
      price: 33199.17,
      quantity: 1,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=150&hei=150&fmt=jpeg&qlt=95"
    },
    {
      id: 5,
      name: "iPad Pro 12.9",
      price: 91299.17,
      quantity: 1,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104?wid=150&hei=150&fmt=jpeg&qlt=95"
    },
    {
      id: 6,
      name: "Magic Keyboard",
      price: 24899.17,
      quantity: 1,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMR3?wid=150&hei=150&fmt=jpeg&qlt=95"
    },
    {
      id: 7,
      name: "HomePod Mini",
      price: 8299.17,
      quantity: 1,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=150&hei=150&fmt=jpeg&qlt=95"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: Math.max(1, newQuantity)} : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            <div className="item-total">
              ₹{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">
          <h2>Total: ₹{calculateTotal().toFixed(2)}</h2>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;