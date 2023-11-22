import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Quotes = () => {
  return (
    <div className=" w-[300px] pt-1 pb-5 mx-auto">
      <blockquote className="text-white antialiased font-semibold">
        <cite className=" font-playfair pl-[7rem] text-lg">1 John 4:7</cite>
        <span className="inline">
          <BiSolidQuoteAltLeft />
        </span>
        <span className="font-openSans">
          Dear friends, let us love one another, for love comes from God.
          Everyone who loves has been born of God and knows God.
        </span>
        <span>
          <BiSolidQuoteAltRight />
        </span>
      </blockquote>
    </div>
  );
};

export default Quotes;
