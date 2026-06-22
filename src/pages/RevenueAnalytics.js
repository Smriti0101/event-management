import React from "react";
import "./RevenueAnalytics.css";

function RevenueAnalytics() {
  return (
    <div className="revenue-container">

      <h1>Revenue Analytics</h1>

      {/* Revenue Cards */}
      <div className="analytics-cards">

        <div className="analytics-card">
          <h2>₹12.5L</h2>
          <p>Total Revenue</p>
        </div>

        <div className="analytics-card">
          <h2>120</h2>
          <p>Total Bookings</p>
        </div>

        <div className="analytics-card">
          <h2>45</h2>
          <p>Total Venues</p>
        </div>

        <div className="analytics-card">
          <h2>250</h2>
          <p>Total Users</p>
        </div>

      </div>

      {/* Monthly Revenue Table */}
      <div className="revenue-table">

        <h2>Monthly Revenue Report</h2>

        <table>

          <thead>
            <tr>
              <th>Month</th>
              <th>Bookings</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>January</td>
              <td>12</td>
              <td>₹1,20,000</td>
            </tr>

            <tr>
              <td>February</td>
              <td>18</td>
              <td>₹2,10,000</td>
            </tr>

            <tr>
              <td>March</td>
              <td>25</td>
              <td>₹3,40,000</td>
            </tr>

            <tr>
              <td>April</td>
              <td>30</td>
              <td>₹4,20,000</td>
            </tr>

            <tr>
              <td>May</td>
              <td>35</td>
              <td>₹5,10,000</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RevenueAnalytics;