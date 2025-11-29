import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes";
import adminRoutes from "./routes/adminRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/booking", bookingRoutes); 
app.use("/admin", adminRoutes);     

export default app;
