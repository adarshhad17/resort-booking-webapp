import mongoose, { Schema, Document } from "mongoose";

export interface BookingType extends Document {
  fullName: string;
  email: string;
  phone: string;
  checkInDate: Date;
  checkOutDate: Date;
  guests: number;
  roomType: string;
  createdAt: Date;
}

const bookingSchema = new Schema<BookingType>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
    },
    roomType: {
      type: String,
      required: true,
      enum: ["Single", "Deluxe", "Suite"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model<BookingType>("Booking", bookingSchema);
