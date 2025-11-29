import mongoose, { Schema, Document } from "mongoose";

export interface AdminType extends Document {
  email: string;
  password: string;
  role: "user" | "admin"; 
}

const adminSchema = new Schema<AdminType>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],  
      default: "user",               
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<AdminType>("Admin", adminSchema);
