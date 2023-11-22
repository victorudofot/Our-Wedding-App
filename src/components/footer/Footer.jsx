import { AiOutlineHeart } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-sky-950 text-white p-3 font-playfair">
        <p className="flex justify-center items-center">
          <span className="mt-1 pr-1">©</span>
          <span>2023</span>
        </p>
        <p className="flex justify-center items-center">
          <span className="pr-1 pl-5">Bee</span>
          <span className="mt-1">
            <AiOutlineHeart />
          </span>
        </p>
        <ul className="flex justify-normal items-center gap-2">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className=" hover:text-pink-700" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook className=" hover:text-blue-500" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <FaSquareTwitter className=" hover:text-blue-800" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-red-700" />
          </a>
        </ul>
      </div>
    </>
  );
};

export default Footer;
