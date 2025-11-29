import axios from "axios";

export const getAdminToken = () => {
  return localStorage.getItem("adminToken");
};

const API = axios.create({
  baseURL: "http://localhost:5000/admin",
});


API.interceptors.request.use((config) => {
  const token = getAdminToken();

  if (
    !config.url.includes("/login") &&
    !config.url.includes("/register")
  ) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});


// -----------------------------------------------------------------------------------------------------------
// ------------------------------------ Admin ------------------------------------------------------------------------

/* REGISTER  */
export const adminRegisterApi = async (data) => {
  try {
    const res = await API.post("/register", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Server Error" };
  }
};

/* LOGIN */
export const adminLoginApi = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Server Error" };
  }
};

/* GetAllBookings */
export const getAllBookings = async () => {
  try {
    const res = await API.get("/bookings");
    return res.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Server Error" };
  }
};

/* Logout Admin */
export const logoutAdmin = (navigate) => {
  localStorage.removeItem("adminToken");
  navigate("/admin/login");
};



// -------------------------------------------------------------------------------------------------------
// -------------------------------------------User---------------------------------------------------
/* User Booking */
export const createBooking = async (formData) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/booking",
      formData
    );
    return res.data;
  } catch (error) {
    return (
      error.response?.data || {
        success: false,
        message: "Server Error",
      }
    );
  }
};
