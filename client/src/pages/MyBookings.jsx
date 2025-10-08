import React from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
	const [bookings] = React.useState(userBookingsDummyData);

	return (
		<div className="pt-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-[70vh]">
			<Title
				title="My Bookings"
				subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
				align="left"
			/>

			<div className="max-w-6xl mt-8 w-full text-gray-800">
				{/* Table Header for Desktop */}
				<div className="hidden md:flex w-full border-b border-gray-300 font-medium text-base py-3 justify-between">
					<div className="flex-[3] text-left">Hotels</div>
					<div className="flex-[2] text-left">Date & Timings</div>
					<div className="flex-[1] text-left">Payments</div>
				</div>

				{/* Booking Rows */}
				{bookings.map((booking) => (
					<div
						key={booking._id}
						className="flex flex-col md:flex-row border-gray-300 py-6 gap-x-6 first:border-t md:flex w-full border-b border-gray-300 font-medium text-base py-3 justify-between">
						{/* Hotels Section */}
						<div className="flex-[3] flex mb-4 md:mb-0">
							<img
								src={booking.room.images[0]}
								alt="hotel-img"
								className="w-24 h-20 md:w-28 md:h-24 rounded-lg shadow object-cover flex-shrink-0"
							/>
							<div className="ml-4 flex flex-col justify-between gap-2">
								<p className="font-playfair text-lg md:text-xl">
									{booking.hotel.name}{" "}
									<span className="font-inter text-sm text-gray-600">
										({booking.room.roomType})
									</span>
								</p>

								<div className="flex items-center gap-2 text-sm text-gray-600">
									<img
										src={assets.locationIcon}
										alt="location-icon"
										className="w-4 h-4 object-contain"
									/>
									<span>{booking.hotel.address}</span>
								</div>

								<div className="flex items-center gap-2 text-sm text-gray-600">
									<img
										src={assets.guestsIcon}
										alt="guest-icon"
										className="w-4 h-4 object-contain"
									/>
									<span>Guests: {booking.guests}</span>
								</div>

								<p className="text-base font-medium text-gray-800">
									Total: ${booking.totalPrice}
								</p>
							</div>
						</div>

						{/* Date & Timings Section */}
						<div className="flex-[2] flex flex-row  items-center justify-start gap-10 ">
							<div>
								<p className="font-medium text-gray-800">Check-In</p>
								<p className="text-gray-500 text-sm">
									{new Date(booking.checkInDate).toDateString()}
								</p>
							</div>
							<div>
								<p className="font-medium text-gray-800">Check-Out</p>
								<p className="text-gray-500 text-sm">
									{new Date(booking.checkOutDate).toDateString()}
								</p>
							</div>
						</div>

						{/* Payment / Status Section */}
						<div className="flex-[1] flex flex-col justify-center">
							<div className="flex item-center mb-4">
								<div
									className={`h-3 w-3 rounded-full ${
										booking.isPaid ? "bg-green-500" : "bg-red-500"
									}`}></div>
								<p
									className={`text-sm ${
										booking.isPaid ? "text-green-500" : "text-red-500"
									}`}>
									{booking.isPaid ? "Paid" : "unpaid"}
								</p>
							</div>

							{!booking.isPaid && (
								<button className="w-20 h-8 text-xs border border-gray-400 rounded hover:bg-gray-50 trnsition-all cursor-pointer">
									Pay Now
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyBookings;
