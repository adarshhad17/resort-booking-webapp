import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { adminRegisterApi } from "../../../api/api";
import AdminNavbar from "../../../components/layout/adminLayout/AdminNavbar";

const AdminRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState(""); 

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg("");
    setMsgType("");

    const response = await adminRegisterApi({ email, password });

    if (response.success) {
      localStorage.setItem("adminToken", response.token);

      setMsg("Registration successful!");
      setMsgType("success");

      navigate("/");

    } else {
      setMsg(response.message || "Registration failed!");
      setMsgType("error");
    }
  };

  return (
    <>
      <AdminNavbar showRegister={false} showLogin={true} />

      <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-black via-[#0a0f2a] to-[#1a0b29] pt-24">
        <div className="w-full max-w-md bg-black/40 border border-gray-700 shadow-2xl rounded-2xl p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-green-400 to-yellow-400 mb-6">
             Register
          </h2>

          {msg && (
            <p
              className={`mb-4 p-3 text-center rounded-lg font-semibold transition-all 
                ${msgType === "success" ? " text-green-500 " : " text-red-600 "}`}
            >
              {msg}
            </p>
          )}

          <form className="space-y-5" onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-600"
              required
            />

            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-black/40 text-white border border-gray-600"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
