import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./assets/page/Login";
import VerifyOTP from "./assets/page/VerifyOTP";
import Home from "./assets/page/Home";
import VehicleDetails from "./assets/page/VehicleDetails";
import ShowVehicleDetails from "./assets/page/ShowVehicleDetails";
import AddVehicle from "./assets/page/AddVehicle";
import Pending from "./assets/page/Pending";
import Approved from "./assets/page/Approved";
import Success from "./assets/page/Success";
import AddTransport from "./assets/page/AddTransport";
import ProtectedRoute from "./assets/components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
         <Route element={<ProtectedRoute type="auth" />}>
          <Route path="/" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
        </Route>
         <Route element={<ProtectedRoute type="protected" />}>
          <Route path="/home" element={<Home />} />
          <Route path="/pending-payment" element={<Pending />} />
          <Route path="/approved-payment" element={<Approved />} />
          <Route path="/success-payment" element={<Success />} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/show-vehicle-details" element={<ShowVehicleDetails />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/add-transport" element={<AddTransport />} />
        </Route>

        {/* abcd */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
