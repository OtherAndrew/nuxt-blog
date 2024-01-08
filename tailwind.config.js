/** @type {import('tailwindcss').Config} */

const dracula = require('tailwind-dracula/colors')

export default {
  corePlugins: {
    // preflight: false, // to render markdown correctly
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // ...dracula //adds all the colors
        "darkest": "#0e0d11",
      }
    },
  },
  plugins: [
    require('tailwind-dracula')(),
  ],
}

