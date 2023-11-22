import { LiaCocktailSolid } from "react-icons/lia";
import { FaPeopleRoof, FaChurch } from "react-icons/fa6";
import { BiLogoYoutube } from "react-icons/bi";
import Quotes from "../quotes/Quotes";
import { IoMdArrowDropright } from "react-icons/io";
// import { motion } from "framer-motion";

// const Details = () => {

//   return (
//     <div id="details" className="bg-sky-50 text-sky-950 md:pb-20 md:pt-8">
//       <div className=" pt-10 pb-5">
//         <h2 className=" text-center text-4xl font-playfair ">
//           Wedding Schedule
//         </h2>
//         <div className="w-[20%] h-1 bg-sky-900 ml-auto mr-auto rounded-lg" />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 justify-center justify-items-center p-5 gap-0  md:w-2/3 mr-auto ml-auto">
//         <article className="border border-solid py-3 px-6 md:justify-self-end rounded-md text-center shadow-md bg-white my-5 md:my-0">
//           <PiFlowerTulip className=" mr-auto ml-auto text-4xl my-4 animate-pulse" />
//           <h3 className=" font-bold font-pacifico text-xl">Church Wedding</h3>
//           <address>Winners chapel igbelerin, lagos nigeria.</address>
//           <p>Sat 17/02/24</p>
//           <p>10am</p>
//         </article>
//         <div className=" hidden sm:inline-block justify-self-center md:inline-block h-40 border border-solid py-3 sm:my-9 md:my-10"></div>
//         <article className="border border-solid py-3 px-6 md:justify-self-end rounded-md text-center shadow-md bg-white my-5 md:my-0">
//           <PiFlowerTulip className=" mr-auto ml-auto text-4xl my-4 animate-pulse" />
//           <h3 className=" font-bold font-pacifico text-xl">Reception</h3>
//           <address>Winners chapel igbelerin, lagos nigeria.</address>
//           <p>Sat 17/02/24</p>
//           <p>10am</p>
//         </article>
//       </div>
//     </div>
//   );
// };

// export default Details;

const colors = [
  { id: "#50C878", name: "Emerald Green" },
  { id: "#B76E79", name: "Rose Gold" },
  { id: "#111111", name: "White" },
];

const Details = () => {
  return (
    <div
      id="details"
      className="bg-church1 bg-cover bg-center -z-40 md:pb-20 md:pt-8"
    >
      <div className=" pt-10 pb-5">
        <h2 className=" text-center text-2xl md:text-4xl font-playfair text-white">
          Wedding Schedule
        </h2>
        <div className="w-[20%] md:w-[10%] h-1 bg-white ml-auto mr-auto rounded-lg" />
      </div>
      <div className="p-5 gap-0  md:w-2/3 mr-auto ml-auto">
        <article className="border border-solid py-3 px-6 md:justify-self-end rounded-md shadow-md bg-white text-sky-950  my-5 md:my-0 w-full">
          <div className="">
            <FaPeopleRoof className=" mx-auto text-4xl my-4 animate-pulse" />
            <h3 className=" font-bold font-pacifico text-xl flex justify-start items-center text-center">
              <IoMdArrowDropright />
              <span> Tradional Ceremmony</span>
            </h3>
            <p>8:00 am - 9:00 am</p>
            {/* <p>
              <a href="/" className="flex justify-start items-center gap-2">
                <span>Join Our Livestream</span>{" "}
                <span className="text-2xl">
                  <BiLogoYoutube />
                </span>
              </a>
            </p> */}
            <p className=" pt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              sit molestiae, labore, a debitis nihil officiis doloribus rerum,
              quo eum sunt exercitationem mollitia neque cumque animi laudantium
              veniam. At numquam sapiente, cupiditate quibusdam sit delectus
              autem officia dolore, deserunt ipsum repellat ipsa quaerat culpa
              nam veritatis quidem praesentium ea sed et? Debitis aliquam
              molestias numquam fugit, vitae cum veniam. Alias.
            </p>
          </div>
          <div className="">
            <FaChurch className=" mx-auto text-4xl my-4 animate-pulse" />
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
              sit molestiae, labore, a debitis nihil officiis doloribus rerum,
              quo eum sunt exercitationem mollitia neque cumque animi laudantium
              veniam. At numquam sapiente, cupiditate quibusdam sit delectus
              autem officia dolore, deserunt ipsum repellat ipsa quaerat culpa
              nam veritatis quidem praesentium ea sed et? Debitis aliquam
              molestias numquam fugit, vitae cum veniam. Alias.
            </p>
          </div>
          <div className="">
            <span>
              <LiaCocktailSolid className=" mx-auto text-4xl my-4 animate-pulse" />
            </span>
            <h3 className=" font-bold font-pacifico text-xl flex justify-start items-center">
              <IoMdArrowDropright />
              <span>Reception</span>
            </h3>
            <p>1:00 pm</p>

            <p className=" pt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              sit molestiae, labore, a debitis nihil officiis doloribus rerum,
              quo eum sunt exercitationem mollitia neque cumque animi laudantium
              veniam. At numquam sapiente, cupiditate quibusdam sit delectus
              autem officia dolore, deserunt ipsum repellat ipsa quaerat culpa
              nam veritatis quidem praesentium ea sed et? Debitis aliquam
              molestias numquam fugit, vitae cum veniam. Alias.
            </p>
          </div>
          <div className="w-[90%] h-1 mt-5 bg-sky-900 ml-auto mr-auto rounded-lg" />
          <div>
            <h3 className=" text-center text-2xl font-playfair p-5 ">
              Colors of the day
            </h3>
            <ul className="flex justify-center items-center flex-wrap gap-5">
              {colors.map((color) => (
                <li
                  style={{ backgroundColor: color.id }}
                  key={color.id}
                  className=" w-[30%] md:py-3 md:px-10 font-openSans text-[90%] font-semibold text-white text-center rounded-md"
                >
                  {color.name}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <Quotes />
    </div>
  );
};

export default Details;
