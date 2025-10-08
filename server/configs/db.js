import mongoose from "mongoose";

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", true);

		mongoose.connection.on("connected", () =>
			console.log("Database connected")
		);

		await mongoose.connect(process.env.MONGODB_URL);
		console.log("MongoDB connection successful");
	} catch (error) {
		console.error("DB connection error:", error.message);
		process.exit(1); // Exit on DB error
	}
};

export default connectDB;
