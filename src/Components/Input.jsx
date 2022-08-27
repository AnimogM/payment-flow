import React from "react";

const Input = ({ label, type, placeholder, required, description }) => {
	return (
		<div className="flex flex-col space-y-3">
			<label className="font-bold">
				{label} {required && <span className="text-brand-500">*</span>}
			</label>
			{description && <small className="text-[#817E9E] pb-2">{description}</small>}
			<input
				className="w-full py-3 px-5 rounded-lg border border-brand-300 placeholder:text-gray-500 focus:border-2 focus-within:border-brand-300"
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
