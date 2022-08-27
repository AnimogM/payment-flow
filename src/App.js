
import Tab from "./Components/Tab";
import Billing from "./Components/Billing";
import Personal from "./Components/Personal";
import Confirmation from "./Components/Confirmation";
import { Routes, Route } from "react-router-dom";

function App() {

	return (
		<div className="bg-hero bg-no-repeat bg-bottom bg-cover min-h-screen">
			<div className="w-1/2 mx-auto py-20">
				<h1 className="text-4xl text-brand-300 font-bold">
					Complete your Purchase
				</h1>
				<Tab />
				<Routes>
					<Route path="/" element={<Personal />} />
					<Route path="/billing" element={<Billing />} />
					<Route path="/confirm" element={<Confirmation/>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

// {
/* 
				{active === "personal" ? (
					<Personal />
				) : active === "billing" ? (
					<Billing />
				) : (
					<Confirmation />
				)} */
// }
