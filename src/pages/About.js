import React from "react";
import "./About.css"; // Import CSS

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1>About Pixle and Vibes</h1>
        <p>Your one-stop shop for stylish and high-quality products.</p>
      </section>

      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          Pixle and Vibes was founded with a vision to bring trendy, high-quality products to modern consumers.
          Our journey started with a passion for fashion, tech, and lifestyle products, ensuring that our customers
          always have access to the best.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>✨ **Quality First** – We source the best products.</li>
          <li>🚀 **Innovation** – Always bringing the latest trends.</li>
          <li>❤️ **Customer-Centric** – You are our priority.</li>
        </ul>
      </section>

      <section className="about-footer">
        <h2>Join Our Journey</h2>
        <p>
          Be a part of Pixle and Vibes. Follow us on social media and stay updated with the latest trends.
        </p>
      </section>
    </div>
  );
};

export default About;
