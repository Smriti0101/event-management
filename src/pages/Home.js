import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">USTAV</h2>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <div className="auth-buttons">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Make Your Dream Event Memorable</h1>

        <p>
          Wedding • Reception • Haldi • Mehndi • Birthday •
          Anniversary • Corporate Events
        </p>

        <button
          className="book-btn"
          onClick={() => navigate("/login")}
        >
          Book Your Event
        </button>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">

          <div className="card">
            <h3>Wedding Planning</h3>
            <p>Complete wedding management and decoration.</p>
          </div>

          <div className="card">
            <h3>Reception Events</h3>
            <p>Elegant reception arrangements with premium decor.</p>
          </div>

          <div className="card">
            <h3>Birthday Parties</h3>
            <p>Creative themes and unforgettable celebrations.</p>
          </div>

          <div className="card">
            <h3>Corporate Events</h3>
            <p>Professional meetings and conferences.</p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="services">
        <h2>Why Choose Ustav?</h2>

        <div className="cards">

          <div className="card">
            <h3>Premium Venues</h3>
            <p>Best locations for every occasion.</p>
          </div>

          <div className="card">
            <h3>Budget Friendly</h3>
            <p>Affordable plans for every budget.</p>
          </div>

          <div className="card">
            <h3>Expert Team</h3>
            <p>Professional event organizers and decorators.</p>
          </div>

          <div className="card">
            <h3>24/7 Support</h3>
            <p>Always available for your assistance.</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <footer className="contact">
        <h2>Contact Us</h2>

        <p>📍 Lucknow, Uttar Pradesh</p>
        <p>📞 +91 9876543210</p>
        <p>✉ support@ustavplanner.com</p>

        <br />

        <p>© 2026 Ustav Event Planner. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;