import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Info from "./pages/Info";
import CustomerRecords from "./pages/CustomerRecords";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import SignUp from "./pages/signup";
import { RequireToken } from "./services/authhandler";

function App() {
  const location = useLocation();

  // Function to determine whether to show Navbar and Footer
  const shouldShowNavbarAndFooter = () => {
    const excludedPaths = ["/login", "/signup", "/verify-email"];
    return !excludedPaths.includes(location.pathname);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Conditionally render Navbar */}
      {shouldShowNavbarAndFooter() && <Navbar />}

      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<EmailVerification />} />

          {/* Protected routes */}
          <Route path='/' element={
            <RequireToken>
              <Home />
            </RequireToken>
          }>
            <Route path='' element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customerecords" element={<CustomerRecords />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {shouldShowNavbarAndFooter() && <Footer />}
    </div>
  );
}

export default App;
