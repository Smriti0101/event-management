import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceSelector.css";

function ServiceSelector() {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);

  const serviceList = [
    "Decoration",
    "Photography",
    "Catering",
    "DJ & Music",
    "Makeup Artist",
    "Invitation Cards",
    "Live Band",
    "Videography",
  ];

  const handleCheckbox = (service) => {
    if (services.includes(service)) {
      setServices(
        services.filter((item) => item !== service)
      );
    } else {
      setServices([...services, service]);
    }
  };

  const handleContinue = () => {
    localStorage.setItem(
      "selectedServices",
      JSON.stringify(services)
    );

    navigate("/budget");
  };

  return (
    <div className="service-page">
      <h1>Select Services</h1>

      <div className="service-grid">
        {serviceList.map((service, index) => (
          <div className="service-card" key={index}>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleCheckbox(service)
                }
              />

              {service}
            </label>
          </div>
        ))}
      </div>

      <button
        className="continue-btn"
        onClick={handleContinue}
      >
        Continue to Budget
      </button>
    </div>
  );
}

export default ServiceSelector;