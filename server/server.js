import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhook from "./controllers/clerkwebhooks.js";

connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware);

app.use("/api/clerk", clerkWebhook);
app.get("/", (req, res) => {
	res.send("server is working");
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
