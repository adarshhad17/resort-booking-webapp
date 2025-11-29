import React from "react";
import { FiMail, FiPhone, FiCalendar, FiUsers, FiHome } from "react-icons/fi";

const MobileBookings = ({ data, loading }) => {
  const roomColors = {
    Deluxe: "bg-blue-600/20 text-blue-300 border-blue-700",
    Premium: "bg-yellow-600/20 text-yellow-300 border-yellow-700",
    Standard: "bg-green-600/20 text-green-300 border-green-700",
  };

  return (
    <div className="space-y-7 md:hidden">
      {loading ? (
        <p className="text-center text-gray-300 py-5">Loading...</p>
      ) : data.length > 0 ? (
        data.map((b) => {
          const badgeColor =
            roomColors[b.roomType] ||
            "bg-pink-600/20 text-pink-300 border-pink-700";

          return (
            <div
              key={b._id}
              className="
                p-5 
                rounded-2xl 
                bg-gray-900 
                border border-pink-900
                shadow-xl 
                backdrop-blur-md
              "
            >
              {/* Name */}
              <h3 className="text-xl font-bold text-green-500 tracking-wide capitalize">
                {b.fullName}
              </h3>

              <div className="h-px bg-white/10 my-4"></div>

              {/* DETAILS */}
              <div className="space-y-4 text-sm">

                {/* EMAIL */}
                <div className="flex items-center gap-3">
                  <FiMail className="text-gray-400 text-lg" />
                  <div>
                    <p className="text-[11px] text-gray-400 leading-none">Email</p>
                    <p className="text-white break-all font-medium">{b.email}</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-3">
                  <FiPhone className="text-gray-400 text-lg" />
                  <div>
                    <p className="text-[11px] text-gray-400 leading-none">Phone</p>
                    <p className="text-white font-medium">{b.phone}</p>
                  </div>
                </div>

                {/* CHECK-IN */}
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-gray-400 text-lg" />
                  <div>
                    <p className="text-[11px] text-gray-400 leading-none">Check-In</p>
                    <p className="text-yellow-200 font-medium">
                      {new Date(b.checkInDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* CHECK-OUT */}
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-gray-400 text-lg" />
                  <div>
                    <p className="text-[11px] text-gray-400 leading-none">Check-Out</p>
                    <p className="text-yellow-200 font-medium">
                      {new Date(b.checkOutDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* GUESTS */}
                <div className="flex items-center gap-3">
                  <FiUsers className="text-gray-400 text-lg" />
                  <div>
                    <p className="text-[11px] text-gray-400 leading-none">Guests</p>
                    <p className="text-white font-medium">{b.guests}</p>
                  </div>
                </div>

                {/* ROOM TYPE */}
                <div className="flex items-center gap-3">
                  <FiHome className="text-gray-400 text-lg" />
                  <div>
                    <p className="text-[11px] text-gray-400 leading-none">Room Type</p>
                    <span
                      className={`
                        inline-block mt-1 px-3 py-1 
                        rounded-full border text-xs font-medium
                        ${badgeColor}
                      `}
                    >
                      {b.roomType}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-400 py-5">No bookings found.</p>
      )}
    </div>
  );
};

export default MobileBookings;
