import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Shiv Jani",
    email: "shiv@example.com",
    phone: "+91 8160308850",
    address: "Ahmedabad, Gujarat",
    shippingAddress: "Surat, Gujarat",
    billingAddress: "Surat, Gujarat",
    avatar: "https://avatars.githubusercontent.com/u/153932136?v=4",
    orderHistory: [],
    wishlist: [],
    paymentMethods: [],
  });

  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>My Account</h1>
      <div className="profile-card">
        {!isEditing ? (
          <>
            <div className="profile-header">
              <img
                src={user.avatar}
                alt="Profile Picture"
                className="profile-avatar"
              />
              <h2>{user.name}</h2>
            </div>
            <div className="profile-info">
              <div className="info-item">
                <label>Email:</label>
                <p>{user.email}</p>
              </div>
              <div className="info-item">
                <label>Phone:</label>
                <p>{user.phone}</p>
              </div>
              <div className="info-item">
                <label>Address:</label>
                <p>{user.address}</p>
              </div>
              <div className="info-item">
                <label>Shipping Address:</label>
                <p>{user.shippingAddress}</p>
              </div>
              <div className="info-item">
                <label>Billing Address:</label>
                <p>{user.billingAddress}</p>
              </div>
            </div>
            <div className="profile-sections">
              <div className="recent-orders">
                <h3>Recent Orders</h3>
                {user.orderHistory.length === 0 ? (
                  <p>No recent orders</p>
                ) : (
                  <div className="order-list">
                    {user.orderHistory.map((order) => (
                      <div key={order.id} className="order-item">
                        {/* Order details */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="wishlist-preview">
                <h3>Wishlist</h3>
                {user.wishlist.length === 0 ? (
                  <p>Your wishlist is empty</p>
                ) : (
                  <div className="wishlist-items">
                    {user.wishlist.map((item) => (
                      <div key={item.id} className="wishlist-item">
                        {/* Wishlist item details */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="payment-methods">
                <h3>Payment Methods</h3>
                {user.paymentMethods.length === 0 ? (
                  <p>No payment methods saved</p>
                ) : (
                  <div className="payment-list">
                    {user.paymentMethods.map((method) => (
                      <div key={method.id} className="payment-item">
                        {/* Payment method details */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button 
              className="edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="edit-form">
            <div className="profile-header">
              <img
                src={formData.avatar}
                alt="Profile"
                className="profile-avatar"
              />
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleInputChange}
                placeholder="Profile Picture URL"
              />
            </div>
            <div className="profile-info">
              <div className="info-item">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="info-item">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="info-item">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="info-item">
                <label>Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="info-item">
                <label>Shipping Address:</label>
                <textarea
                  name="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="info-item">
                <label>Billing Address:</label>
                <textarea
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="button-group">
              <button type="submit" className="save-button">
                Save Changes
              </button>
              <button 
                type="button" 
                className="cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;