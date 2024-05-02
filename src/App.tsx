import { Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import CustomerRecords from "./pages/CustomerRecords";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import SignUp from "./pages/signup";
import PredictionForm from "./pages/TestForm";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />


      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/customerrecords" element={<CustomerRecords />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/test" element={<PredictionForm />} />
        </Routes>
      </div>


      <Footer />
    </div>
  );
}

export default App;