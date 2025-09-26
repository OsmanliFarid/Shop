import Link from 'next/link'
import React from 'react'
import Navdata from '../../mock/[nav]'
const Nav = () => {
    return (
        // <div className='w-fit h-[60px] gap-10 text-xl text-[gray] flex justify-around items-center '>
        //     <Link href="/" className=' text-black font-bold'>Home</Link>
        //     <Link href="/" className='hover:text-black duration-100'>About</Link>
        //     <Link href="/" className='hover:text-black duration-100'> Contact Us</Link>
        //     <Link href="/" className='hover:text-black duration-100'> Blog</Link>
        // </div>

        //${item.toLowerCase()}
        <div className="flex gap-x-8 h-[60px] items-center text-xl">
            {Navdata.map((item, index) => (
                <Link
                    key={index}
                    href={`/${item.toLowerCase()}`}
                    className={`transition ${index === 0 ? "text-black font-bold" : "text-gray-500"} hover:text-black`}
                >
                    <span className='p-3 duration-100'>{item}</span>
                </Link>
            ))}
        </div>
    )
}

export default Nav
