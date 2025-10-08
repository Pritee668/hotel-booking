import mongoose from "mongoose";

const connectDB = async () => {
	try {
		mongoose.connection.on("connected", () =>
			console.log("Database connected")
		);

		await mongoose.connect(process.env.MONGODB_URL); // fixed variable name
	} catch (error) {
		console.log("DB connection error:", error.message);
	}
};

export default connectDB;
