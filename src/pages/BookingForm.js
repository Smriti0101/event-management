import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "",
    venue: "",
    packageType: "",
    guests: "",
    requirements: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    console.log(formData);
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Book Your Event</h1>
        <p>Fill in the details to confirm your booking</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />

          <input
            type="date"
            name="eventDate"
            required
            onChange={handleChange}
          />

          <select
            name="eventType"
            required
            onChange={handleChange}
          >
            <option value="">Select Event Type</option>
            <option>Wedding</option>
            <option>Reception</option>
            <option>Haldi</option>
            <option>Mehndi</option>
            <option>Birthday</option>
            <option>Corporate Event</option>
          </select>

          <select
            name="venue"
            required
            onChange={handleChange}
          >
            <option value="">Select Venue</option>
            <option>Lawn</option>
            <option>Banquet Hall</option>
            <option>Hotel</option>
            <option>Resort</option>
          </select>

          <select
            name="packageType"
            required
            onChange={handleChange}
          >
            <option value="">Select Package</option>
            <option>Silver</option>
            <option>Gold</option>
            <option>Platinum</option>
          </select>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            required
            onChange={handleChange}
          />

          <textarea
            name="requirements"
            placeholder="Special Requirements"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Confirm Booking
          </button>
        </form>

        {success && (
          <div className="success-message">
            🎉 Booking Submitted Successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;