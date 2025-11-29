import express from "express";
import { adminRegister, adminLogin } from "../controllers/adminController";
import { getAllBookings } from "../controllers/bookingController";
import { adminAuth } from "../middleware/adminAuth";

const router = express.Router();

// Public Routes
router.post("/register", adminRegister);
router.post("/login", adminLogin);

// Protected Admin Routes
router.get("/bookings", adminAuth, getAllBookings);

export default router;
