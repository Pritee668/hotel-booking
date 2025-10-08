import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import "dotenv/config";
import connectDB from "../configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhook from "../controllers/clerkwebhooks.js";

const app = express();

// Connect to MongoDB
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware);

// Routes
app.use("/api/clerk", clerkWebhook);

app.get("/", (req, res) => {
	res.send("Server is working");
});

// Export serverless handler
export default app;
export const handler = serverless(app);
