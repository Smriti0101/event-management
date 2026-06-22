import React from "react";
import "./ManageBookings.css";

function ManageBookings() {
  const bookings = [
    {
      id: "UST101",
      customer: "Smriti Singh",
      event: "Wedding",
      venue: "Royal Garden Lawn",
      date: "20 Dec 2026",
      status: "Pending",
    },
    {
      id: "UST102",
      customer: "Rahul Sharma",
      event: "Reception",
      venue: "Grand Palace Hotel",
      date: "22 Dec 2026",
      status: "Approved",
    },
    {
      id: "UST103",
      customer: "Anjali Verma",
      event: "Birthday",
      venue: "Celebration Banquet",
      date: "25 Dec 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="bookings-container">

      <div className="booking-header">
        <h1>Manage Bookings</h1>
      </div>

      <div className="booking-table">

        <table>

          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Event</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.customer}</td>
                <td>{booking.event}</td>
                <td>{booking.venue}</td>
                <td>{booking.date}</td>

                <td>
                  <span
                    className={
                      booking.status === "Approved"
                        ? "approved"
                        : "pending"
                    }
                  >
                    {booking.status}
                  </span>
                </td>

                <td>
                  <button className="approve-btn">
                    Approve
                  </button>

                  <button className="reject-btn">
                    Reject
                  </button>

                  <button className="view-btn">
                    View
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageBookings;