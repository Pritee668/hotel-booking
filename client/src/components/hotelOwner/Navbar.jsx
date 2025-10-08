import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between px-4 md:px-8 border-b bordder-gray-300 py-3 bg-black transition-all duration-300">
			<Link>
				<img
					src={assets.logo}
					alt=""
					className="h-9 invert-100  opacity-100"
				/>
			</Link>
			<UserButton />
		</div>
	);
};

export default Navbar;
