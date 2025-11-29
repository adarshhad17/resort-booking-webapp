import { Request, Response } from "express";
import Admin from "../models/Admin";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";


// ADMIN REGISTER (role is managed ONLY in DB)
export const adminRegister = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;  // ❗ removed role from request

    const exist = await Admin.findOne({ email });
    if (exist) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Always create normal user
    const admin = await Admin.create({
      email,
      password: hashedPassword,
      role: "user",         // ❗ role fixed here — safe
    });

    const token = generateToken(admin._id.toString(), admin.role);

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
      admin,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



// ADMIN LOGIN (role comes ONLY from DB)
export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Role is taken from DB, safe
    const token = generateToken(admin._id.toString(), admin.role);

    return res.json({
      success: true,
      message: "Admin login successful",
      token,
      admin,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
