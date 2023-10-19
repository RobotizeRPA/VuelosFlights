'use client'
import { useEffect, useState } from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/navigation'
// import SideBar from '../Sidebar/Sidebar'
import { HiOutlineBars3 } from 'react-icons/hi2'

export default function Navbar(){

    return(
        <nav className='border-b-2 border-[#441eae] w-full sticky top-0'>
            <div className="flex justify-between items-center mx-auto py-4 bg-white w-3/4 max-sm:w-full max-sm:justify-around">
                
                <h1 className="font-bold text-6xl cursor-pointer text-[#441eae] max-sm:text-4xl">FlightPosting</h1>
                <AiOutlineSearch className='flex text-lg cursor-pointer text-[#441eae] max-sm:hidden'/>
            </div> 
                {/* {
                    sidebar && <SideBar setSidebar={setSidebar} sidebar={sidebar}/>
                } */}
        </nav>
        )
}