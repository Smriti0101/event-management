import React from "react";
import "./BookingConfirmation.css";

function BookingConfirmation() {
  const bookingId =
    "UST" + Math.floor(Math.random() * 100000);

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Booking Confirmed!</h1>

        <p>
          Thank you for choosing Ustav Marriage Planner.
        </p>

        <div className="booking-details">

          <h3>Booking Details</h3>

          <p>
            <strong>Booking ID:</strong> {bookingId}
          </p>

          <p>
            <strong>Event:</strong> Wedding
          </p>

          <p>
            <strong>Date:</strong> 25 December 2026
          </p>

          <p>
            <strong>Venue:</strong> Royal Garden Lawn
          </p>

          <p>
            <strong>Package:</strong> Gold Package
          </p>

        </div>

        <div className="btn-group">

          <button className="download-btn">
            Download Receipt
          </button>

          <button className="dashboard-btn">
            Go To Dashboard
          </button>

        </div>

      </div>
    </div>
  );
}

export default BookingConfirmation;