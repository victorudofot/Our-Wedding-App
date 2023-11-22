/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans - serif"],
        pacifico: ["Pacifico", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        hashimage: "url('/images/hashimage.jpg')",
        hashimage2: "url('/images/hasimage2.jpg')",
        hashimage3:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)),url('/images/darren-nunis-cxE7SXKnzv0-unsplash.jpg')",
        hashimage5:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)),url('/images/Pink_flower_frame_background_with_watercolor.png')",
        detailsimg:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)),url('/public/images/pexels-nathan-cowley-1128782.jpg')",
        hashimage4: "url('/images/bee.jpg')",
        header1:
          "linear-gradient(to right bottom, rgba(18, 16, 14, 0.5), rgba(43, 65, 98, 0.5)),url('/images/wedding1.jpg')",
        church1:
          "linear-gradient(to right bottom, rgba(18, 16, 14, 0.7), rgba(43, 65, 98, 0.7)),url('/images/church1.jpg')",
      },
      boxShadow: {
        beebox: "2px 2px 2px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography")],
};
