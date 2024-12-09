import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import sequelize from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// COnnect database
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Run server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
