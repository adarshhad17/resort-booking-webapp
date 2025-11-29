import axios from "axios";

export const getAdminToken = () => {
  return localStorage.getItem("adminToken");
};

export const logoutAdmin = () => {
  localStorage.removeItem("adminToken");
  window.location.href = "/admin/login";
};

/* AXIOS INSTANCE (Admin Only) */
const API = axios.create({
  baseURL: "http://localhost:5000/admin",
});

/* 🔥 FIXED INTERCEPTOR */
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



/* REGISTER  */
export const adminRegisterApi = async (data) => {
  try {
    const res = await API.post("/register", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Server Error" };
  }
};



/*  LOGIN  */
export const adminLoginApi = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Server Error" };
  }
};


/* GetAllBookings Bookings */
export const getAllBookings = async () => {
  try {
    const res = await API.get("/bookings");
    return res.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Server Error" };
  }
};


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
