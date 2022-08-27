import React from "react";
import Input from "./Input";

const Billing = () => {
	return (
		<div>
			<Input
				label="Name on Card"
				type="text"
				placeholder="Opara Linus Ahmed"
				required={true}
			/>
		</div>
	);
};

export default Billing;
