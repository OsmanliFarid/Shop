import React from "react";
import Nav from "../Nav";
import { FiSearch } from "react-icons/fi"; import Link from 'next/link'

const Navbar = () => {
    return (
        <>


            <header className="w-full h-[90px] flex justify-center gap-27 bg-white    items-center px-5 fixed">
                <Link href=""> <img src="Logo.svg" alt="logo" /></Link>
                <form >
                    <div className="w-full max-w-md">
                        <div className="flex items-center h-[56px] w-[330px] bg-gray-100 rounded-lg px-4 py-2">
                            <FiSearch className="text-gray-400 text-xl" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-100 ml-2 outline-none text-xl w-full placeholder-gray-400"
                            />
                        </div>
                    </div>
                </form>

                <Nav />

                <div className="flex gap-7 ">
                    <Link href="/" className='hover:rotate-360 duration-400 '><img src="like.svg" alt="" /></Link>
                    <Link href="/" className='hover:rotate-360 duration-400 '><img src="Cart.svg" alt="" /></Link>
                    <Link href="/" className='hover:rotate-360 duration-400 '> <img src="User.svg" alt="" /></Link>


                </div>
            </header>

        </>
    );
};

export default Navbar;
