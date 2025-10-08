import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room }) => {
	return (
		<Link
			to={`/rooms/${room._id}`}
			onClick={() => window.scrollTo(0, 0)}
			className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer 
                 w-full md:w-64 flex-shrink-0">
			{/* Image */}
			<div className="relative w-full h-40 md:h-48">
				<img
					src={room.images[0]}
					alt={room.name}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Hotel info */}
			<div className="flex flex-col p-3 gap-1">
				{/* Name + Rating */}
				<div className="flex items-center justify-between">
					<p className="font-playfair text-md font-medium text-gray-800 truncate">
						{room.hotel.name}
					</p>
					<div className="flex items-center gap-1 text-xs text-gray-600">
						<img
							src={assets.starIconFilled}
							alt="star"
							className="w-3 h-3"
						/>
						4.5
					</div>
				</div>

				{/* Location */}
				<div className="flex items-center gap-1 text-xs text-gray-600 truncate">
					<img
						src={assets.locationIcon}
						alt="location"
						className="w-3 h-3"
					/>
					<span>
						{room.hotel.address}, {room.hotel.city}
					</span>
				</div>

				{/* Price + Book Now */}
				<div className="flex items-center justify-between mt-2">
					<p className="text-gray-800 font-semibold text-sm">
						${room.pricePerNight}/night
					</p>
					<button className="px-2 py-1 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all">
						Book
					</button>
				</div>
			</div>
		</Link>
	);
};

export default HotelCard;
