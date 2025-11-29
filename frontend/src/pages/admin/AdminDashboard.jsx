import React, { useEffect, useState, useMemo } from "react";
import { getAllBookings } from "../../api/api";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/layout/adminLayout/AdminNavbar";
import { FiChevronDown } from "react-icons/fi";

import MobileBookings from "./MobileBookings";
import DesktopBookings from "./DesktopBookings";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await getAllBookings();

        if (!res.success) {
          navigate("/admin/login");
          return;
        }

        setBookings(res.bookings);
      } catch {
        // ✔ Removed err variable to fix eslint no-unused-vars
        navigate("/admin/login");
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, navigate]);


  // FILTER + SORT
  const displayBookings = useMemo(() => {
    let filtered = [...bookings];

    // Search
    if (search.trim()) {
      filtered = filtered.filter(
        (b) =>
          b.fullName.toLowerCase().includes(search.toLowerCase()) ||
          b.phone.includes(search)
      );
    }

    switch (sortType) {
      case "date-new":
        filtered.sort(
          (a, b) => new Date(b.checkInDate) - new Date(a.checkInDate)
        );
        break;
      case "date-old":
        filtered.sort(
          (a, b) => new Date(a.checkInDate) - new Date(b.checkInDate)
        );
        break;
      case "guest-low":
        filtered.sort((a, b) => a.guests - b.guests);
        break;
      case "guest-high":
        filtered.sort((a, b) => b.guests - a.guests);
        break;
      default:
        break;
    }

    return filtered;
  }, [bookings, search, sortType]);

  return (
    <>
      <AdminNavbar showDashboard={true} showLogout={true} />

      <div className="min-h-screen bg-linear-to-br from-black via-[#0b0f2c] to-[#1a0f24] text-white pt-24 px-4 pb-20">
        <h2 className="text-3xl sm:text-4xl text-center text-pink-400 mb-8 font-extrabold">
          Bookings
        </h2>

        {/* SEARCH & SORT */}
        <div className="rounded-xl bg-white/5 p-5 border border-pink-900 mb-6 backdrop-blur-xl shadow-xl">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search by name or phone..."
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-blue-900 outline-none placeholder-gray-400 mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Mobile Sort */}
          <div className="md:hidden relative w-fit">
            <select
              className="px-3 py-2 text-sm rounded-md bg-gray-800 text-white border border-blue-800 appearance-none pr-8"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort</option>
              <option value="date-new">Newest</option>
              <option value="date-old">Oldest</option>
              <option value="guest-low">Guests Low→High</option>
              <option value="guest-high">Guests High→Low</option>
            </select>

            <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-base" />
          </div>

          {/* Desktop Sort */}
          <div className="hidden md:flex relative w-1/3 mt-4">
            <select
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-blue-800 appearance-none pr-10"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort Options</option>
              <option value="date-new">Date: Newest First</option>
              <option value="date-old">Date: Oldest First</option>
              <option value="guest-low">Guests: Low → High</option>
              <option value="guest-high">Guests: High → Low</option>
            </select>

            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg" />
          </div>
        </div>

        <MobileBookings data={displayBookings} loading={loading} />
        <DesktopBookings data={displayBookings} loading={loading} />
      </div>
    </>
  );
};

export default AdminDashboard;
