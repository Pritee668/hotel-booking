import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import "dotenv/config";
import connectDB from "../configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhook from "../controllers/clerkwebhooks.js";

const app = express();

try {
	await connectDB();
} catch (err) {
	console.error("❌ DB connection failed at startup:", err);
}

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware);

// Routes
app.use("/api/clerk", clerkWebhook);

app.get("/", (req, res) => {
	res.send("✅ Server is working");
});

app.get("/debug-env", (req, res) => {
	res.json({
		MONGODB_URL: !!process.env.MONGODB_URL,
		CLERK_WEBHOOK_SECRET: !!process.env.CLERK_WEBHOOK_SECRET,
	});
});

export default app;
export const handler = serverless(app);
