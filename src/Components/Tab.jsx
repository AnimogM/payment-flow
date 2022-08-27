import React from "react";
import {Link} from 'react-router-dom'

const Tab = () => {
	return (
		<div className="flex justify-between my-14 pb-5 border-b relative border-black">
			<div className=" ">
				<Link to="/">
					<span
						
					>
						Personal Info
					</span>
				</Link>
				{/* {active === "personal" && (
					<div className="bg-brand-100 w-32 -bottom-1 z-2 py-1 rounded-md absolute" />
				)} */}
			</div>
			<div>
				<span
					// className={`${
					// 	active === "billing" ? "text-brand-100" : "text-brand-400"
					// }  md:text-md px-3 font-bold`}
				>
					Billing Info
				</span>
				{/* {active === "billing" && (
					<div className="bg-brand-100 w-32 left-68 -bottom-1 z-2 py-1 rounded-md absolute" />
				)} */}
			</div>
			<div>
				<span
					// onClick={() => setActive("confirmation")}
					// className={`${
					// 	active === "confirmation" ? "text-brand-100" : "text-brand-400"
					// }  md:text-md px-3 font-bold`}
				>
					Confirm Payment
				</span>
				{/* {active === "confirmation" && (
					<div className="bg-brand-100 w-40 -bottom-1 z-2 py-1 rounded-md absolute" />
				)} */}
			</div>
		</div>
	);
};

export default Tab;
