import { motion } from "framer-motion";
const images = [
  { name: "bee1", URL: "/public/images/fv1rr.png" },
  { name: "bee2", URL: "/public/images/fv2.png" },
  { name: "bee3", URL: "/public/images/fvrr.png" },
  { name: "bee4", URL: "/public/images/fv4.png" },
];
const Gallery = () => {
  return (
    <motion.div id="pics" className="bg-white pb-8">
      <h3 className="text-3xl text-center md:hidden md:text-6xl font-playfair text-sky-950 pt-[2rem]">
        <span>Gallery</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:p-20 px-5  gap-1 pt-[2rem]">
        {images.map((img) => (
          <motion.img
            key={img.name}
            loading="lazy"
            src={img.URL}
            className=" place-self-auto hover:scale-[1.02] transition-all duration-500 border border-sky-900 place-items-start shadow-sm rounded-md"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
