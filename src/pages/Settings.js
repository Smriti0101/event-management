import React from "react";

function Settings() {
  return (
    <div style={{ padding: "40px" }}>

      <h1>⚙️ Settings</h1>

      <h3>Admin Settings Page</h3>

      <button
        style={{
          padding: "10px 20px",
          background: "#8B0000",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Change Password
      </button>

    </div>
  );
}

export default Settings;