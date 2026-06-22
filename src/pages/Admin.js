import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin-container">

      {/* Sidebar */}

      <div className="sidebar">

        <h2 className="logo">
          USTAV ADMIN PANEL
        </h2>

        <ul className="menu">

          <li className="active">

            <Link to="/admin">

              🏠 Dashboard

            </Link>

          </li>

          <li>

            <Link to="/admin/users">

              👥 Manage Users

            </Link>

          </li>

          <li>

            <Link to="/admin/venues">

              🏛 Manage Venues

            </Link>

          </li>

          <li>

            <Link to="/admin/bookings">

              📅 Manage Bookings

            </Link>

          </li>

          <li>

            <Link to="/admin/revenue">

              📊 Revenue Analytics

            </Link>

          </li>

          <li>

            <Link to="/admin/settings">

              ⚙️ Settings

            </Link>

          </li>

          <li>

            <Link to="/">

              🚪 Logout

            </Link>

          </li>

        </ul>

      </div>

      {/* Main Content */}

      <div className="main-content">

        <h1>Welcome Admin 👋</h1>

        <p className="subtitle">

          Manage your events, venues, users and bookings.

        </p>

        {/* Stats Cards */}

        <div className="stats">

          <div className="card">

            <h2>250</h2>

            <p>Total Users</p>

          </div>

          <div className="card">

            <h2>45</h2>

            <p>Total Venues</p>

          </div>

          <div className="card">

            <h2>120</h2>

            <p>Total Bookings</p>

          </div>

          <div className="card revenue">

            <h2>₹12.5L</h2>

            <p>Total Revenue</p>

          </div>

        </div>

        {/* Recent Bookings */}

        <div className="table-box">

          <h2>Recent Bookings</h2>

          <table>

            <thead>

              <tr>

                <th>Booking ID</th>

                <th>Customer</th>

                <th>Event</th>

                <th>Date</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>UST101</td>

                <td>Smriti Singh</td>

                <td>Wedding</td>

                <td>20 Dec 2026</td>

                <td>

                  <span className="approved">

                    Approved

                  </span>

                </td>

              </tr>

              <tr>

                <td>UST102</td>

                <td>Rahul Sharma</td>

                <td>Reception</td>

                <td>22 Dec 2026</td>

                <td>

                  <span className="pending">

                    Pending

                  </span>

                </td>

              </tr>

              <tr>

                <td>UST103</td>

                <td>Anjali Verma</td>

                <td>Birthday</td>

                <td>25 Dec 2026</td>

                <td>

                  <span className="approved">

                    Approved

                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Admin;