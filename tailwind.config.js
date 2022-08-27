/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					100: "#F2994A",
					200: "#2F80ED",
					300: "#4E598C",
					400: "#BDBDBD",
					500: "#EB5757",
					600: "#4F4F4F",
				},
			},
			backgroundImage: {
				hero: "url('/public/assets/background.png')",
			},
		},
	},
	plugins: [],
};
