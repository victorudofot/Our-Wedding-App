// import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
// import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "Our Story", link: "story" },
    { name: "Gallery", link: "pics" },
    { name: "Wedding Details", link: "details" },
    { name: "Gift Us", link: "gift" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function handleNav() {
    setIsOpen(false);
  }

  return (
    <div className=" z-50 shadow-beebox w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-sky-950 py-4 md:px-10 px-7">
        <a href="/">
          <div className="font-bold text-xl md:text-2xl cursor-pointer flex items-center  font-pacifico text-stone-300">
            <span>FVLoveBound</span>
          </div>
        </a>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" text-stone-300 text-3xl absolute right-8 top-[15px] md:top-5 cursor-pointer md:hidden"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </div>
        <ul
          className={`pt-5 sm:pt-5 md:pt-0 md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-sky-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-21 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-100 `}
        >
          {links.map((link) => (
            <li
              className={`md:ml-8 lg:text-[1rem] md:my-0 my-5`}
              key={link.name}
            >
              {/* <a
                href={link.link}
                className=" text-stone-300 hover:text-cyan-200 duration-500"
              >
                {link.name}
              </a> */}
              <Link
                className=" text-stone-300 hover:text-cyan-200 duration-500 cursor-pointer font-playfair"
                to={link.link}
                spy={true}
                smooth={true}
                duration={1000}
                onClick={handleNav}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
