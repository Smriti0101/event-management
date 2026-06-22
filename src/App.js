import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import VenueBooking from "./pages/VenueBooking";
import ServiceSelector from "./pages/ServiceSelector";
import BudgetCalculator from "./pages/BudgetCalculator";

import Admin from "./pages/Admin";
import ManageUsers from "./pages/ManageUsers";
import ManageVenues from "./pages/ManageVenues";
import ManageBookings from "./pages/ManageBookings";
import RevenueAnalytics from "./pages/RevenueAnalytics";
import Settings from "./pages/Settings";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/venues" element={<VenueBooking />} />

        <Route path="/services" element={<ServiceSelector />} />

        <Route path="/budget" element={<BudgetCalculator />} />

        <Route path="/admin" element={<Admin />} />

        <Route
          path="/admin/users"
          element={<ManageUsers />}
        />

        <Route
          path="/admin/venues"
          element={<ManageVenues />}
        />

        <Route
          path="/admin/bookings"
          element={<ManageBookings />}
        />

        <Route
          path="/admin/revenue"
          element={<RevenueAnalytics />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
