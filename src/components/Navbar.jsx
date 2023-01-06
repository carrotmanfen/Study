import { useState } from "react";
import { hamburger } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    
    <nav className=" flex-1 flex justify-center items-center">
      <div className="flex flex-row flex-1 justify-between items-center z-10 p-6 sm:max-w-[696px] md:max-w-[960px] lg:max-w-[1140px]">
        <h1 className="text-white font-outfit font-semibold text-[20px] z-10">
          KRYPTO
        </h1>

        <ul className="list-none hidden sm:flex sm:flex-row items-center z-10">
          {navLinks.map((link, index) => (
              <li
              key={link.title}
              className={`text-white text-[16px] font-outfit font-normal ${
                  index === navLinks.length - 1
                  ? "mr-0 bg-secondary rounded-[25px] px-3 py-1"
                  : "pr-6"
                }`}
                >
              <a href={`#${link.title}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <img
          src={hamburger}
          alt="hamburger"
          className={`w-[25px] sm:hidden p-1 ${
              toggle ? "bg-[#182A3F]  rounded-sm" : ""
            }`}
            onClick={() => setToggle((prev) => !prev)}
            />
        <div
          className={`${
              toggle ? "flex" : "hidden"
            } sm:hidden absolute top-16 right-6 p-2 bg-[#182A3F] rounded-lg`}
            >
          <ul className="list-none sm:hidden flex flex-col items-center">
            {navLinks.map((link, index) => (
                <li
                key={link.title}
                className={`text-white text-[16px] font-outfit font-normal ${
                    index === navLinks.length - 1
                    ? "mb-0 bg-secondary rounded-[25px] px-3 py-1"
                    : "mb-2"
                }`}
                >
                <a href={`#${link.title}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
      
  );
};

export default Navbar;
