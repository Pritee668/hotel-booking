import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
	const [rooms, setRooms] = useState(roomsDummyData);

	return (
		<>
			<div>
				<Title
					align="left"
					font="outfit"
					title="Room Listings"
					subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
				/>
				<p className="text-gray-500 mt-8"></p>

				<div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
					<table className="w-full">
						<thead className="bg-gray-50">
							<tr>
								<th className="py-3 px-4 text-gray-800 font-medium">Name</th>
								<th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
									Facilities
								</th>
								<th className="py-3 px-4 text-gray-800 text-center font-medium">
									Price/night
								</th>
								<th className="py-3 px-4 text-gray-800 text-center font-medium min-w-[80px]">
									Action
								</th>
							</tr>
						</thead>

						<tbody className="text-sm">
							{rooms.map((item, index) => (
								<tr key={index}>
									<td className="py-3 px-4 text-gray-700 border-t border-gray-300">
										{item.roomType}
									</td>
									<td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
										{item.amenities.join(", ")}
									</td>
									<td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
										₹{item.pricePerNight}
									</td>
									<td className="py-3 px-4 border-t border-gray-300 text-center min-w-[60px]">
										<label className="relative inline-flex items-center cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={item.isAvailable}
												onChange={() => {
													const newRooms = [...rooms];
													newRooms[index].isAvailable =
														!newRooms[index].isAvailable;
													setRooms(newRooms);
												}}
											/>
											<div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-colors duration-200"></div>
											<div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-6"></div>
										</label>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ListRoom;
