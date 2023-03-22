import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTags,
} from "react-icons/ai";
import { BsFillCartFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center container mx-auto p-4">
      {/* left section  */}
      <div className="flex items-center gap-4">
        <AiOutlineMenu
          className="cursor-pointer"
          onClick={() => setNav(true)}
          size={30}
        />
        <h1 className="text-3xl md:text-4xl">
          Best<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden md:flex items-center bg-gray-300 py-1 px-1 rounded-full">
          <p className="p-1 bg-black text-white rounded-full px-2">Delivery</p>
          <p className="px-3">Pickup</p>
        </div>
      </div>

      {/* search icon  */}
      <div className="bg-gray-300 gap-3 rounded-full p-1 hidden sm:flex">
        <AiOutlineSearch size={35} />
        <input
          type="text"
          className="bg-transparent w-[200px] lg:w-[450px] focus:outline-none"
          placeholder="Search Food"
        />
      </div>

      {/* cart icon  */}
      <div>
        <button className="flex items-center gap-2 rounded-full bg-black text-white">
          <BsFillCartFill />
          Cart
        </button>
      </div>

      {/* mobile menu  */}
      {/* overlay  */}
      {nav && (
        <div className="bg-black/80 fixed top-0 left-0 w-full h-full"></div>
      )}

      {/* drawer  */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-2/3 md:w-[300px] h-screen bg-white z-20 ease-in-out duration-150"
            : "fixed top-0 left-[-200%]"
        }
      >
        <div className="relative">
          <AiOutlineClose
            onClick={() => setNav(false)}
            size={35}
            className="cursor-pointer absolute top-4 right-4"
          />
          <div className="p-5">
            <h1 className="text-2xl md:text-3xl">
              Best<span className="font-bold">Eats</span>
            </h1>
          </div>
          <div className="bg-gray-300 gap-3 rounded-full p-1 flex sm:hidden mx-5">
            <AiOutlineSearch size={35} />
            <input
              type="text"
              className="bg-transparent w-[100px] focus:outline-none"
              placeholder="Search Food"
            />
          </div>
          <div className="p-5">
            <ul className="flex flex-col gap-4 text-gray-800">
              <li className="text-xl font-semibold flex items-center gap-5">
                <TbTruckDelivery size={30} />
                Orders
              </li>
              <li className="text-xl font-semibold flex items-center gap-5">
                <MdFavorite size={30} />
                Favourites
              </li>
              <li className="text-xl font-semibold flex items-center gap-5">
                <FaWallet size={30} />
                Wallet
              </li>
              <li className="text-xl font-semibold flex items-center gap-5">
                <MdHelp size={30} />
                Help
              </li>
              <li className="text-xl font-semibold flex items-center gap-5">
                <AiFillTags size={30} />
                Promotions
              </li>
              <li className="text-xl font-semibold flex items-center gap-5">
                <BsFillArrowDownSquareFill size={30} />
                Best Ones
              </li>
              <li className="text-xl font-semibold flex items-center gap-5">
                <FaUserFriends size={30} />
                Invite Friends
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
