import React from "react";
import { useParams } from "react-router-dom";
import {
	assets,
	facilityIcons,
	roomCommonData,
	roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
	const { id } = useParams();
	const [room, setRoom] = React.useState(null);
	const [mainImage, setMainImage] = React.useState("");

	React.useEffect(() => {
		const foundRoom = roomsDummyData.find((r) => r._id === id);
		if (foundRoom) {
			setRoom(foundRoom);
			setMainImage(foundRoom.images[0]);
		}
	}, [id]);

	if (!room)
		return (
			<div className="flex justify-center items-center min-h-[50vh]">
				<p className="text-gray-600 text-lg animate-pulse">
					Loading room details…
				</p>
			</div>
		);

	return (
		<div className="py-28 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
			{/* -------- Room Title Section -------- */}
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
				<h1 className="font-playfair text-3xl md:text-[40px] font-semibold text-gray-900">
					{room.hotel.name}{" "}
					<span className="font-inter text-sm text-gray-500">
						({room.roomType})
					</span>
				</h1>
				<p className="text-xs font-inter py-1.5 px-3 bg-red-500 text-white rounded-full">
					20% OFF
				</p>
			</div>

			{/* -------- Rating & Location -------- */}
			<div className="flex flex-wrap items-center gap-3 mt-3">
				<div className="flex items-center gap-1">
					<StarRating />
					<p className="ml-2 text-sm text-gray-600">200+ reviews</p>
				</div>
				<div className="flex items-center gap-1 text-gray-500 text-sm">
					<img
						src={assets.locationIcon}
						alt="location"
						className="w-4 h-4"
					/>
					<span>{room.hotel.address}</span>
				</div>
			</div>

			{/* -------- Images Section -------- */}
			<div className="flex flex-col lg:flex-row mt-8 gap-6">
				<div className="lg:w-1/2 w-full">
					<img
						className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
						src={mainImage}
						alt="Main Room"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
					{room?.images.length > 1 &&
						room.images.map((image, index) => (
							<img
								onClick={() => setMainImage(image)}
								src={image}
								alt={`Room ${index}`}
								key={index}
								className={`w-full h-36 object-cover rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
									mainImage === image
										? "ring-4 ring-orange-500"
										: "hover:opacity-80"
								}`}
							/>
						))}
				</div>
			</div>

			{/* -------- Amenities & Price -------- */}
			<div className="mt-10">
				<h2 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-4">
					Experience Luxury Like Never Before
				</h2>
				<div className="flex flex-wrap items-center mt-2 mb-6 gap-3">
					{room.amenities.map((item, index) => (
						<div
							className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm shadow-sm"
							key={index}>
							<img
								src={facilityIcons[item]}
								alt={item}
								className="w-5 h-5"
							/>
							<p>{item}</p>
						</div>
					))}
				</div>
				<p className="text-2xl font-semibold text-gray-800">
					${room.pricePerNight}
					<span className="text-base text-gray-500 font-normal"> / night</span>
				</p>
			</div>

			{/* -------- Booking Form -------- */}
			<form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-lg p-6 rounded-xl mx-auto mt-16 max-w-6xl gap-6">
				<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
					{/* Check-in */}
					<div className="flex flex-col">
						<label
							htmlFor="check-in"
							className="text-gray-600 mb-1 text-sm">
							Check-in
						</label>
						<input
							id="check-in"
							type="date"
							className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-48 focus:ring-2 focus:ring-orange-400 outline-none"
							required
						/>
					</div>

					{/* Check-out */}
					<div className="flex flex-col">
						<label
							htmlFor="check-out"
							className="text-gray-600 mb-1 text-sm">
							Check-out
						</label>
						<input
							id="check-out"
							type="date"
							className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-48 focus:ring-2 focus:ring-orange-400 outline-none"
							required
						/>
					</div>

					{/* Guests */}
					<div className="flex flex-col">
						<label
							htmlFor="guests"
							className="text-gray-600 mb-1 text-sm">
							Guests
						</label>
						<input
							id="guests"
							type="number"
							min="1"
							placeholder="0"
							className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-20 focus:ring-2 focus:ring-orange-400 outline-none"
							required
						/>
					</div>
				</div>

				{/* Book Now Button */}
				<button
					type="submit"
					className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-black font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-green-500 hover:to-orange-500 focus:outline-none focus:ring-2 hover:text-white focus:ring-orange-400">
					Check Availability
				</button>
			</form>
			<div className="mt-20 space-y-4">
				{roomCommonData.map((spec, index) => (
					<div
						key={index}
						className="flex items-start gap-2">
						<img
							src={spec.icon}
							alt={spec.title}
							className="w-6.5"
						/>
						<div>
							<p className="text-base">{spec.title}</p>
							<p className="text-gray-500">{spec.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
				<p>
					Guests will be allocated on the ground floor according to
					availability. You get a comfortable Two bedroom apartment has a true
					city feeling. The price quoted is for two guest, at the guest slot
					please mark the number of guests to get the exact price for groups.
					The Guests will be allocated ground floor according to availability.
					You get the comfortable two bedroom apartment that has a true city
					feeling.
				</p>
			</div>
			<div className="flex flex-col items-start gap-4">
				<div className="flex gap-4 items-center">
					<span
						// src={room.hotel.owner.image}
						className="h-14 md:h-18 md:w-18 ">
						Host (Owner)
					</span>

					<p className="text-lg md:text-xl">Hosted by {room.hotel.name}</p>
					<div className="flex items-center gap-2">
						<StarRating />
						<p className="ml-2">200+ reviews</p>
					</div>
				</div>
			</div>
			<button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
				Contact Now
			</button>
		</div>
	);
};

export default RoomDetails;
