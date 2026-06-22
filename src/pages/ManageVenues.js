import React from "react";
import "./ManageVenues.css";

function ManageVenues() {
  const venues = [
    {
      id: 1,
      name: "Royal Garden Lawn",
      location: "Lucknow",
      capacity: "500 Guests",
      price: "₹2,50,000",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
    },
    {
      id: 2,
      name: "Grand Palace Hotel",
      location: "Kanpur",
      capacity: "300 Guests",
      price: "₹3,50,000",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    },
    {
      id: 3,
      name: "Celebration Banquet",
      location: "Delhi",
      capacity: "700 Guests",
      price: "₹4,20,000",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
    },
  ];

  return (
    <div className="venues-container">

      <div className="venues-header">
        <h1>Manage Venues</h1>

        <button className="add-venue-btn">
          + Add Venue
        </button>
      </div>

      <div className="venues-grid">

        {venues.map((venue) => (
          <div className="venue-card" key={venue.id}>

            <img
              src={venue.image}
              alt={venue.name}
            />

            <div className="venue-info">

              <h2>{venue.name}</h2>

              <p>📍 {venue.location}</p>

              <p>👥 {venue.capacity}</p>

              <p className="price">
                {venue.price}
              </p>

              <div className="venue-buttons">

                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ManageVenues;