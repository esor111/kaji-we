/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#090967', // Dark Blue from site
                secondary: '#f5f6fd', // Light Blue background
                accent: '#0000ff', // Bright Blue
            },
            fontFamily: {
                sans: ['"Nunito Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
