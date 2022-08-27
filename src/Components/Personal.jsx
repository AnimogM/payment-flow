import React from "react";
import Input from "./Input";
import Button from "./Button";

const Personal = () => {
	return (
		<div className="flex flex-col space-y-8">
			<Input label="Name" type="text" placeholder="Opara Linus Ahmed" />
			<Input
				label="Email"
				type="email"
				required={true}
				description="The purchase reciept would be sent to this address"
				placeholder="Opara Linus Ahmed"
			/>
			<Input
				label="Address 1"
				type="text"
				placeholder="The address of the user goes here"
			/>
			<Input label="Address 2" type="text" placeholder="and here" />
			<div className="flex">
				<Button text="Next" />
			</div>
		</div>
	);
};

export default Personal;
