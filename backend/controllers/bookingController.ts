import { Request, Response } from "express";
import Booking from "../models/Booking";


// 1. CREATE BOOKING  
export const createBooking = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      phone,
      checkInDate,
      checkOutDate,
      guests,
      roomType,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !checkInDate ||
      !checkOutDate ||
      !guests ||
      !roomType
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check-out date must be after check-in date
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      return res.status(400).json({
        success: false,
        message: "Check-out date must be after check-in date",
      });
    }

    const booking = await Booking.create({
      fullName,
      email,
      phone,
      checkInDate,
      checkOutDate,
      guests,
      roomType,
    });

    return res.json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



// 2. ADMIN – GET ALL BOOKINGS 
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
