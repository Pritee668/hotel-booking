import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
	const [images, setImages] = useState({
		1: null,
		2: null,
		3: null,
		4: null,
	});

	const [inputs, setInputs] = useState({
		roomType: "",
		pricePerNight: 0,
		amenities: {
			"Free Wifi": false,
			"Free Breakfast": false,
			"Room Service": false,
			"Mountain View": false,
			"Pool Access": false,
		},
	});

	return (
		<form>
			<Title
				align="left"
				font="outfit"
				title="Add Room"
				subTitle="Fill in the details carefully and accurately, including room details, pricing, and amenities to enhance the user booking experience."
			/>

			{/* Image Upload Section */}
			<p className="text-gray-800 mt-10">Images</p>
			<div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
				{Object.keys(images).map((key) => (
					<label
						htmlFor={`roomImages${key}`}
						key={key}>
						<img
							className="max-h-28 w-full sm:w-32 object-cover rounded cursor-pointer opacity-80 border border-gray-300"
							src={
								images[key]
									? URL.createObjectURL(images[key])
									: assets.uploadArea
							}
							alt="room-upload"
						/>
						<input
							onChange={(e) =>
								setImages({ ...images, [key]: e.target.files[0] })
							}
							type="file"
							accept="image/*"
							id={`roomImages${key}`}
							hidden
						/>
					</label>
				))}
			</div>

			{/* Room Type & Price Section */}
			<div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
				<div className="flex-1 max-w-10">
					<p className="text-gray-800 mt-4">Room Type</p>
					<select
						onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
						className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full">
						<option value="">Select Room Type</option>
						<option value="Single Bed">Single Bed</option>
						<option value="Double Bed">Double Bed</option>
						<option value="Luxury Room">Luxury Room</option>
						<option value="Family Suite">Family Suite</option>
					</select>
				</div>

				<div>
					<p className="mt-4 text-gray-800">
						Price <span className="text-xs">/night</span>
					</p>
					<input
						type="number"
						placeholder="0"
						className="border border-gray-300 mt-1 rounded p-2 w-24"
						value={inputs.pricePerNight}
						onChange={(e) =>
							setInputs({ ...inputs, pricePerNight: e.target.value })
						}
					/>
				</div>
			</div>
			<p clas>Amenities</p>
			<div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
				{Object.keys(inputs.amenities).map((amenity, index) => (
					<div key={index}>
						<input
							type="checkbox"
							id={`amenities${index + 1}`}
							checked={inputs.amenities[amenity]}
							onChange={() =>
								setInputs({
									...inputs,
									amenities: {
										...inputs.amenities,
										[amenity]: !inputs.amenities[amenity],
									},
								})
							}
						/>
						<label htmlFor={`amenities${index + 1}`}>&nbsp;{amenity}</label>
					</div>
				))}
			</div>
			<button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium px-8 py-2 rounded-lg mt-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
				Add Room
			</button>
		</form>
	);
};

export default AddRoom;
