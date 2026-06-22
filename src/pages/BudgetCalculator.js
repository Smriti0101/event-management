import React, { useState } from "react";
import "./BudgetCalculator.css";

function BudgetCalculator() {
  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [packageType, setPackageType] = useState("");
  const [guests, setGuests] = useState("");
  const [total, setTotal] = useState(null);

  const calculateBudget = () => {
    if (!eventType || !venue || !packageType || !guests) {
      alert("Please fill all fields");
      return;
    }

    let eventCost = 0;
    let venueCost = 0;
    let packageCost = 0;

    // Event Cost
    switch (eventType) {
      case "Wedding":
        eventCost = 100000;
        break;
      case "Reception":
        eventCost = 70000;
        break;
      case "Birthday":
        eventCost = 30000;
        break;
      case "Corporate":
        eventCost = 50000;
        break;
      default:
        eventCost = 0;
    }

    // Venue Cost
    switch (venue) {
      case "Lawn":
        venueCost = 250000;
        break;
      case "Hotel":
        venueCost = 350000;
        break;
      case "Hall":
        venueCost = 180000;
        break;
      case "Cafe":
        venueCost = 80000;
        break;
      default:
        venueCost = 0;
    }

    // Package Cost
    switch (packageType) {
      case "Silver":
        packageCost = 150000;
        break;
      case "Gold":
        packageCost = 300000;
        break;
      case "Platinum":
        packageCost = 500000;
        break;
      default:
        packageCost = 0;
    }

    const cateringCost = Number(guests) * 600;

    const totalBudget =
      eventCost +
      venueCost +
      packageCost +
      cateringCost;

    setTotal(totalBudget);
  };

  return (
    <div className="budget-page">
      <div className="budget-box">
        <h1>Budget Calculator</h1>
        <p>Calculate your estimated event budget</p>

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="">Select Event</option>
          <option value="Wedding">Wedding</option>
          <option value="Reception">Reception</option>
          <option value="Birthday">Birthday</option>
          <option value="Corporate">Corporate</option>
        </select>

        <select
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        >
          <option value="">Select Venue</option>
          <option value="Lawn">Lawn</option>
          <option value="Hotel">Hotel</option>
          <option value="Hall">Hall</option>
          <option value="Cafe">Cafe</option>
        </select>

        <select
          value={packageType}
          onChange={(e) => setPackageType(e.target.value)}
        >
          <option value="">Select Package</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
          <option value="Platinum">Platinum</option>
        </select>

        <input
          type="number"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <button onClick={calculateBudget}>
          Calculate Budget
        </button>

        {total !== null && (
          <div className="result">
            <h2>Estimated Budget</h2>
            <h1>₹ {total.toLocaleString("en-IN")}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default BudgetCalculator;