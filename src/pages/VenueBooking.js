import React from "react";
import { useNavigate } from "react-router-dom";
import "./VenueBooking.css";

function VenueBooking() {
  const navigate = useNavigate();

  const venues = [
    {
      name: "Royal Lawn",
      location: "Lucknow",
      price: "₹2,50,000",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
    },
    {
      name: "Grand Palace Hotel",
      location: "Lucknow",
      price: "₹4,00,000",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    },
    {
      name: "Celebration Hall",
      location: "Lucknow",
      price: "₹1,80,000",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    },
  ];

  const handleVenueSelect = (venue) => {
    localStorage.setItem("selectedVenue", JSON.stringify(venue));
    navigate("/services");
  };

  return (
    <div className="venue-page">
      <h1>Select Your Venue</h1>

      <div className="venue-grid">
        {venues.map((venue, index) => (
          <div className="venue-card" key={index}>
            <img src={venue.image} alt={venue.name} />

            <h2>{venue.name}</h2>

            <p>{venue.location}</p>

            <h3>{venue.price}</h3>

            <button
              onClick={() => handleVenueSelect(venue)}
            >
              Select Venue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VenueBooking;