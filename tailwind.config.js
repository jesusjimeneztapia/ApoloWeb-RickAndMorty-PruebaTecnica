/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chevron-down": `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='black'><path d='M0 0h24v24H0z' fill='none'/><path d='M18 9c.852 0 1.297.986.783 1.623l-.076.084-6 6a1 1 0 0 1-1.32.083l-.094-.083-6-6-.083-.094-.054-.077-.054-.096-.017-.036-.027-.067-.032-.108-.01-.053-.01-.06-.004-.057v-.118l.005-.058.009-.06.01-.052.032-.108.027-.067.07-.132.065-.09.073-.081.094-.083.077-.054.096-.054.036-.017.067-.027.108-.032.053-.01.06-.01.057-.004L18 9z'/></svg>")`,
      },
      colors: {
        "portal-green": "#97CE4C",
        "slimy-yellow": "#FCEC58",
        "ricks-hair-blue": "#7EB2DD",
        "sombre-pink": "#F08FB3",
        "alien-purple": "#9266CC",
        "intergalactic-black": "#1C1C1C",
        "morty-red": "#E63946",
      },
      fontFamily: {
        "get-schwifty": "Get Schwifty",
        karla: "'Karla Variable', sans-serif",
      },
    },
  },
  plugins: [],
};
