import { FaGift } from "react-icons/fa6";
import Quotes from "../quotes/Quotes";
import { IoMdArrowDropright } from "react-icons/io";

const GiftUs = () => {
  return (
    <div
      id="details"
      className="bg-church1 bg-cover bg-center -z-40 md:pb-20 md:pt-8"
    >
      <div className=" pt-10 pb-5">
        <h2 className=" text-center text-2xl md:text-4xl font-playfair text-white">
          Help Us Have A Successful Celebration
        </h2>
        <div className="w-[20%] md:w-[10%] h-1 bg-white ml-auto mr-auto rounded-lg" />
      </div>
      <div className="p-5 gap-0  md:w-2/3 mr-auto ml-auto">
        <article className="border border-solid py-3 px-6 md:justify-self-end rounded-md shadow-md bg-white text-sky-950  my-5 md:my-0 w-full">
          <div className="">
            <FaGift className=" mx-auto text-4xl my-4 animate-pulse" />
            <h3 className=" font-bold font-pacifico text-xl flex justify-start items-center">
              <IoMdArrowDropright />
              <span>The Joining</span>
            </h3>
            <p>10:00 am - 12:00 pm</p>
            {/* <p>
              <a href="/" className="flex justify-start items-center gap-2">
                <span>Wedding Ceremony Livestream</span>
                <span className="text-2xl">
                  <BiLogoYoutube />
                </span>
              </a>
            </p> */}
            <p className=" pt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            </p>
          </div>
          <div className="w-[90%] h-1 mt-5 bg-sky-900 ml-auto mr-auto rounded-lg" />
          <div>
            <h3 className=" text-center text-2xl font-playfair p-5 ">
              Account Details
            </h3>
          </div>
        </article>
      </div>
      <Quotes />
    </div>
  );
};

export default GiftUs;
