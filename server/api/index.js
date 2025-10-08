import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import "dotenv/config";
import connectDB from "../configs/db.js";
import clerkWebhookRouter from "../controllers/clerkwebhooks.js";

const app = express();

// Connect to MongoDB
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
// Use raw body parser ONLY for webhook verification
app.use("/api/clerk", clerkWebhookRouter);

app.get("/", (req, res) => {
	res.send("Server is working");
});

// Local dev server
if (process.env.NODE_ENV !== "production") {
	const PORT = process.env.PORT || 5000;
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
export const handler = serverless(app);
