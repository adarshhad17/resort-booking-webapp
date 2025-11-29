import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiLogOut } from "react-icons/fi";
import { logoutAdmin } from "../../../api/api"; 

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("adminToken");

  const handleLogout = () => {
    logoutAdmin(navigate); 
  };

  const isLoginPage = location.pathname === "/admin/login";
  const isRegisterPage = location.pathname === "/admin/register";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
          Admin Panel
        </h1>

        <div className="flex items-center gap-8 text-sm sm:text-base">

          {!token && (isLoginPage || isRegisterPage) && (
            <NavLink 
              to="/"
              className="flex items-center gap-2 text-gray-300 font-extrabold hover:text-white transition"
            >
              <FiHome className="text-lg" />
              Home
            </NavLink>
          )}

          {token && !isLoginPage && !isRegisterPage && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-white font-extrabold transition cursor-pointer"
            >
              <FiLogOut className="text-lg" />
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
