import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function UserDashboard() {

  const navigate = useNavigate();

  const events = [
    "Wedding",
    "Reception",
    "Haldi",
    "Mehndi",
    "Birthday",
    "Corporate Event",
    "Anniversary",
    "Engagement",
  ];

  const handleEventBooking = (event) => {

    // Pass selected event to venue page

    navigate("/venue-booking", {
      state: {
        selectedEvent: event,
      },
    });

  };

  return (

    <div className="dashboard">

      {/* Header */}

      <div className="header">

        <h1>Ustav Event Planner</h1>

        <div className="profile">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
          />

          <div>

            <h3>Smriti Singh</h3>

            <p>smriti@gmail.com</p>

          </div>

        </div>

      </div>

      {/* Welcome Section */}

      <div className="welcome">

        <h2>Welcome Back 👋</h2>

        <p>

          Plan your dream event with Ustav.

        </p>

      </div>

      {/* Quick Actions */}

      <div className="quick-actions">

        <button
          onClick={() => navigate("/venue-booking")}
        >

          Book Event

        </button>

        <button
          onClick={() => navigate("/budget")}
        >

          Budget Calculator

        </button>

        <button>

          Contact Support

        </button>

        <button

          className="logout"

          onClick={() => navigate("/")}

        >

          Logout

        </button>

      </div>

      {/* Event Categories */}

      <h2 className="title">

        Choose Your Event

      </h2>

      <div className="event-grid">

        {

          events.map((event, index) => (

            <div

              className="event-card"

              key={index}

            >

              <h3>

                {event}

              </h3>

              <button

                onClick={() =>

                  handleEventBooking(event)

                }

              >

                Book Now

              </button>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default UserDashboard;