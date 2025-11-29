import React from "react";

const DesktopBookings = ({ data, loading }) => {
  return (
    <div className="hidden md:block overflow-x-auto">

      <table
        className="
          w-full 
          table-auto 
          text-sm 
          bg-[#0c0f1f]/60 
          backdrop-blur-xl
          rounded-xl 
          overflow-hidden 
          border border-white/10
          shadow-2xl
        "
      >
        <thead>
          <tr className="bg-blue-700 text-white text-sm uppercase tracking-wide">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Check-In</th>
            <th className="p-4 text-left">Check-Out</th>
            <th className="p-4 text-left">Guests</th>
            <th className="p-4 text-left">Room</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="7" className="p-6 text-gray-300 text-center">
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((b, index) => {
              const roomColors = {
                Deluxe: "bg-blue-600/20 text-blue-300 border-blue-700",
                Premium: "bg-yellow-600/20 text-yellow-300 border-yellow-700",
                Standard: "bg-green-600/20 text-green-300 border-green-700",
              };

              const badgeColor =
                roomColors[b.roomType] ||
                "bg-pink-600/20 text-pink-300 border-pink-700";

              return (
                <tr
                  key={b._id}
                  className={`
                    transition 
                    border-b border-white/10
                    ${index % 2 === 0 ? "bg-white/5" : "bg-white/10"}
                    hover:bg-white/20
                  `}
                >
                  <td className="p-4 font-medium text-yellow-300">{b.fullName}</td>

                  <td className="p-4 text-gray-300">{b.email}</td>

                  <td className="p-4 text-gray-300">{b.phone}</td>

                  <td className="p-4 text-yellow-200">
                    {new Date(b.checkInDate).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-yellow-200">
                    {new Date(b.checkOutDate).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-gray-200">{b.guests}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs border rounded-full ${badgeColor}`}
                    >
                      {b.roomType}
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" className="p-6 text-gray-400 text-center">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default DesktopBookings;
