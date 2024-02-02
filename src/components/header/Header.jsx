/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import CountDown from "../countdown/CountDown";
// const imagesSlide = {};

const Header = () => {
  return (
    <header className="" id="hero">
      <div className="flex justify-center items-center max-w-full h-96 md:h-screen bg-cover bg-center bg-no-repeat transition-all duration-500">
        <div className="  flex justify-center items-center w-full bg-header1 h-[100%] bg-cover bg-no-repeat bg-top transition-all duration-500">
          <motion.div
            className=" text-3xl md:text-5xl text-orange-300 opacity-50 font-playfair text-center -z-5"
            animate={{
              y: 50,
            }}
            transition={{ duration: "1", ease: "easeIn" }}
          >
            <h1>We're Getting Married</h1>
            <span className=" text-xl text-yellow-300">#FVlovebound24</span>
          </motion.div>
        </div>
        <Link
          className="fixed bottom-9 left-[2%] font-semibold text-2xl scale-95 active:scale-100 z-5"
          to="hero"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <BsFillArrowUpSquareFill />
        </Link>
      </div>
      <CountDown />
    </header>
  );
};

export default Header;
