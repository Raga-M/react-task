import React from "react";
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa"
import DarkTheme from "./DarkTheme";
const navMenu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];
const dropDownMenu = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];


const Navbar = () => {
  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/35 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* search bar & order btn */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
                 rounded-full transition-all duration-300 border border-gray-300 px-2 py-1 focus:outline-none
                 focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoSearch className="text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4" />
            </div>
            {/* order btn */}
            <button
              onClick={() => alert("order not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-500 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="hidden transition-all duration-500  group-hover:block">
                Order
              </span>
              <TiShoppingCart className="cursor-point text-2xl text-white drop-shadow-md" />
            </button>

            {/* theme switch btn */}
            <div>
              <DarkTheme />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="flex justify-center items-center">
        <ul className="sm:flex hidden item-center gap-3 ">
          {navMenu.map((menu) => (
            <li key={menu.id}>
              <a href={menu.link} className="inline-block px-3 py-2 font-medium hover:text-primary  duration-300 ">{menu.name}</a>
            </li>
          ))}
          {/* drop down menu */}
          <li className="relative cursor-pointer group">
            <a href="#" className="flex items-center font-medium py-2 gap-1  hover:text-primary  duration-200">
           Trending
           <span>
< FaAngleDown className="transition-all duration-200 group-hover:rotate-180"/>
           </span>
            </a>
            <div className="absolute top-10  sm:-left-24 md:left-0 z-[9999] hidden group-hover:block w-[180px] rounded-md shadow-lg bg-white p-2 dark:bg-black">
              <ul>
                {dropDownMenu.map((menu)=>(
                <li key={menu.id}>
                 <a href={menu.link} 
                 className="inline-block w-full p-1 rounded-md hover:bg-primary/80 hover:text-white">{menu.name}</a> 
                </li>
                ))}
               </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
