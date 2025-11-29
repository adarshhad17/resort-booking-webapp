import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../../api/api";

const Booking = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    roomType: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    const response = await createBooking(form);

    if (response.success) {
      setMessage("Booking successful!");
      setMessageType("success");

      setForm({
        fullName: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
        guests: 1,
        roomType: "",
      });

      // Delay so user can see success state
      setTimeout(() => navigate("/"), 1500);
    } else {
      setMessage(response.message || "Something went wrong!");
      setMessageType("error");
    }

    setLoading(false);
  };

  return (
    <div
      className="
        min-h-screen w-full 
        bg-linear-to-b from-black via-[#0a1230] to-[#020617]
        pt-28 pb-20 px-4
      "
    >
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="
            space-y-7 
            bg-black/40 backdrop-blur-xl
            p-5 md:p-10 rounded-2xl 
            border border-pink-600/40
            shadow-2xl shadow-purple-900/30
          "
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-pink-500">
              Booking Details
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              Fill in the details below to secure your stay
            </p>
          </div>

    

          {/* FULL NAME */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="
                w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500
                border border-gray-700 mt-1
              "
              required
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="
                w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500
                border border-gray-700 mt-1
              "
              required
            />
          </div>

          {/* PHONE */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="
                w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500
                border border-gray-700 mt-1
              "
              required
            />
          </div>

          {/* DATES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium">
                Check-In Date
              </label>
              <input
                type="date"
                name="checkInDate"
                value={form.checkInDate}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-md bg-gray-800 text-white
                  border border-gray-700 mt-1
                "
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium">
                Check-Out Date
              </label>
              <input
                type="date"
                name="checkOutDate"
                value={form.checkOutDate}
                onChange={handleChange}
                className="
                  w-full p-3 rounded-md bg-gray-800 text-white
                  border border-gray-700 mt-1
                "
                required
              />
            </div>
          </div>

          {/* GUESTS */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300 font-medium">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              value={form.guests}
              min="1"
              onChange={handleChange}
              className="
                w-full p-3 rounded-md bg-gray-800 text-white
                border border-gray-700 mt-1
              "
            />
          </div>

          {/* ROOM TYPE */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300 font-medium">
              Room Type
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
              {["Single", "Deluxe", "Suite"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 p-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="roomType"
                    value={type}
                    checked={form.roomType === type}
                    onChange={handleChange}
                    className="h-5 w-5"
                  />
                  <span
                    className={
                      form.roomType === type
                        ? "text-pink-500 font-semibold"
                        : "text-gray-300"
                    }
                  >
                    {type} Room
                  </span>
                </label>
              ))}
            </div>
          </div>

                {message && (
            <p
              className={`text-center font-semibold ${
                messageType === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full text-white py-3 rounded-lg font-semibold text-lg mt-10 transition shadow-xl
              ${
                messageType === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          >
            {loading
              ? "Booking..."
              : messageType === "success"
              ? "Booking Confirmed"
              : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
