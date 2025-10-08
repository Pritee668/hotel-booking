import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
	return (
		<div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 w-full">
			{/* Section Header */}
			<div className="flex flex-col md:flex-row items-center justify-between w-full">
				<Title
					align="left"
					title="Exclusive Offers"
					subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
				/>
				<button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-6">
					View All Offers
					<img
						src={assets.arrowIcon}
						alt="arrow"
						className="group-hover:translate-x-1 transition-all"
					/>
				</button>
			</div>

			{/* Cards Container */}
			<div className="mt-12 w-full">
				{/* Mobile: Horizontal Scroll */}
				<div className="flex gap-6 overflow-x-auto md:hidden no-scrollbar py-4">
					{exclusiveOffers.map((item) => (
						<div
							key={item._id}
							className="group relative flex-shrink-0 flex flex-col justify-between gap-1 pt-12 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
							style={{
								backgroundImage: `url(${item.image})`,
								width: "280px",
								height: "200px",
							}}>
							<p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
								{item.priceOff}%
							</p>
							<div>
								<p className="text-2xl font-medium font-playfair">
									{item.title}
								</p>
								<p>{item.description}</p>
								<p className="text-xs text-white/70 mt-3">{item.expiryDate}</p>
							</div>
							<button className="mb-5 mt-4 flex items-center font-medium cursor-pointer">
								View Offers
								<img
									src={assets.arrowIcon}
									alt="arrow"
									className="invert group-hover:translate-x-1 transition-all"
								/>
							</button>
						</div>
					))}
				</div>

				{/* Tablet+ : Grid Layout */}
				<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{exclusiveOffers.map((item) => (
						<div
							key={item._id}
							className="group relative flex flex-col justify-between gap-1 pt-12 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
							style={{
								backgroundImage: `url(${item.image})`,
								aspectRatio: "280 / 220",
								width: "100%",
							}}>
							<p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
								{item.priceOff}%
							</p>
							<div>
								<p className="text-2xl font-medium font-playfair">
									{item.title}
								</p>
								<p>{item.description}</p>
								<p className="text-xs text-white/70 mt-3">{item.expiryDate}</p>
							</div>
							<button className="mb-5 mt-4 flex items-center font-medium cursor-pointer">
								View Offers
								<img
									src={assets.arrowIcon}
									alt="arrow"
									className="invert group-hover:translate-x-1 transition-all"
								/>
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExclusiveOffers;
