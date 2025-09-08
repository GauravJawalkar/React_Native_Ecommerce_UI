/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "inter-light": ["Inter-Light"],
        "inter-light": ["Inter-ExtraLight"],
        "inter": ["Inter-Regular"],
        "inter-normal": ["Inter-Medium"],
        "inter-bold": ["Inter_24pt-Bold"],
        "inter-semibold": ["Inter-SemiBold"],
        "inter-extrabold": ["Inter-ExtraBold"],
      }
    },
  },
  plugins: [],
}