import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
	const navigator = useNavigate();

	return (
		<div className="px-4 md:px-16 lg:px-24 bg-slate-50 py-20">
			<Title
				title="Featured Destinations"
				subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences"
			/>

			{/* Horizontal scrollable row on md+, vertical stack on small devices */}
			<div className="flex flex-col md:flex-row md:gap-4 gap-6 overflow-x-auto md:overflow-x-visible py-4 -mx-4 px-4 no-scrollbar">
				{roomsDummyData.slice(0, 4).map((room) => (
					<HotelCard
						key={room._id}
						room={room}
					/>
				))}
			</div>
			<button
				onClick={() => {
					navigator("/rooms");
					scrollTo(0, 0);
				}}
				className="my-16 text-center px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50  transition-all cursor-pointer">
				View All Destination
			</button>
		</div>
	);
};

export default FeaturedDestination;
