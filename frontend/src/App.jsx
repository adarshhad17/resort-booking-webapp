import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/userLayout/navar/Navbar";
import Footer from "./components/layout/userLayout/Footer";

import Home from "./pages/user/Home";
import Booking from "./pages/user/Booking";

import AdminLogin from "./pages/admin/adminAuth/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

import NotFound from "./pages/user/NotFound";
import AdminProtectedRoute from "./utils/AdminProtectedRoute";
import AdminRegister from "./pages/admin/adminAuth/AdminRegister";

function App() {
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <div
      className="
      min-h-screen 
      bg-linear-to-b 
      from-black 
      via-[#05080f]/70 
      to-[#1a0014]/20
      text-white
      overflow-x-hidden
    "
    >
      {!hideLayout && <Navbar />}

      <main className="w-full max-w-[2000px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />

          {/* <Route path="/admin/register" element={<AdminRegister />} /> */}
          <Route path="/admin/login" element={<AdminLogin />} />
         <Route
  path="/admin/dashboard"
  element={
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  }
/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
