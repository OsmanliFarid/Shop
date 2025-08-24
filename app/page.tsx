import GridImage from "@/components/Home/GridImage";
import React from "react";
import Navbar from "../Components/Navbar";
import { FiSearch } from "react-icons/fi"; import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className="max-w-[90vw] mx-auto"></div>
      <GridImage />

      <header className="w-full h-[90px] flex justify-center gap-27   items-center px-5 fixed">
        <Link href=""> <img src="Logo.svg" alt="logo" /></Link>
        <form >
          <div className="w-full max-w-md">
            <div className="flex items-center h-[56px] w-[330px] bg-gray-100 rounded-lg px-4 py-2">
              <FiSearch className="text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 ml-2 outline-none w-full placeholder-gray-400"
              />
            </div>
          </div>
        </form>

        <Navbar />

        <div className="flex gap-7 ">
          <Link href="/" className='hover:rotate-360 duration-400'><img src="like.svg" alt="" /></Link>
          <Link href="/" className='hover:rotate-360 duration-400'><img src="Cart.svg" alt="" /></Link>
          <Link href="/" className='hover:rotate-360 duration-400'> <img src="User.svg" alt="" /></Link>


        </div>
      </header>
    </>
  );
};

export default Home;
