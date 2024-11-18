/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			secondary:'#EEEEFF',
			primary: '#f5f6fa',
  			neutral: '#4880FF',
  			cta: '#2a6fff',
  			cta2: '#adbbda',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
