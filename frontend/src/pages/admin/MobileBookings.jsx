import React from "react";
import { FiMail, FiPhone, FiCalendar, FiUsers, FiHome } from "react-icons/fi";

const MobileBookings = ({ data, loading }) => {
  const roomColors = {
    Single: "bg-orange-600/20 text-orange-300 border-orange-700",
    Deluxe: "bg-blue-600/20 text-blue-300 border-blue-700",
    Suite: "bg-purple-600/20 text-purple-300 border-purple-700",
  };

  return (
    <div className="space-y-8 md:hidden px-4 py-4">
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
                p-6 
                rounded-2xl 
                bg-[#0c0f1f]/90
                border border-pink-600
                shadow-xl 
                backdrop-blur-xl
                transition-all
                space-y-6
              "
            >
              {/* NAME */}
              <h3 className="text-2xl font-semibold text-blue-500 capitalize tracking-wide">
                {b.fullName}
              </h3>

              <div className="h-px bg-white/10"></div>

              {/* DETAILS */}
              <div className="space-y-6 text-sm">

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <FiMail className="text-gray-400 text-xl mt-1" />
                  <div>
                    <p className="text-[12px] text-gray-400">Email</p>
                    <p className="text-gray-200 font-medium break-all">
                      {b.email}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <FiPhone className="text-gray-400 text-xl mt-1" />
                  <div>
                    <p className="text-[12px] text-gray-400">Phone</p>
                    <p className="text-gray-200 font-medium">{b.phone}</p>
                  </div>
                </div>

                {/* CHECK-IN */}
                <div className="flex items-start gap-4">
                  <FiCalendar className="text-gray-400 text-xl mt-1" />
                  <div>
                    <p className="text-[12px] text-gray-400">Check-In</p>
                    <p className="text-yellow-300 font-medium">
                      {new Date(b.checkInDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* CHECK-OUT */}
                <div className="flex items-start gap-4">
                  <FiCalendar className="text-gray-400 text-xl mt-1" />
                  <div>
                    <p className="text-[12px] text-gray-400">Check-Out</p>
                    <p className="text-yellow-300 font-medium">
                      {new Date(b.checkOutDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* GUESTS */}
                <div className="flex items-start gap-4">
                  <FiUsers className="text-gray-400 text-xl mt-1" />
                  <div>
                    <p className="text-[12px] text-gray-400">Guests</p>
                    <p className="text-gray-200 mt-1 font-medium">{b.guests}</p>
                  </div>
                </div>

                {/* ROOM TYPE */}
                <div className="flex items-start gap-4">
                  <FiHome className="text-gray-400 text-xl mt-1" />
                  <div>
                    <p className="text-[12px] text-gray-400">Room Type</p>
                    <span
                      className={`
                        inline-block 
                        mt-2 px-3 py-1 
                        rounded-full border 
                        text-xs font-semibold 
                        w-28 text-center 
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
