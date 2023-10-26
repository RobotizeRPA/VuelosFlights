'use client'
import { useEffect, useState } from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/navigation'
// import SideBar from '../Sidebar/Sidebar'
import { HiOutlineBars3 } from 'react-icons/hi2'
import Link from 'next/link'

export default function Navbar(){
    const router = useRouter()
    // const [search, setSearch] = useState(false)

    return(
        <nav className='border-b-2 border-black w-full sticky top-0 bg-black z-10 text-white'>
            <div className="flex justify-between items-center mx-auto py-4 w-3/4 max-sm:w-full max-sm:justify-around">
                
                <h1 className="font-bold text-4xl cursor-pointer max-sm:text-4xl" onClick={() => router.push('/')}>FlightPosting</h1>
                <div className='flex justify-center items-center gap-4 font-bold max-sm:hidden'>
                    <Link href='/aeropuertos' className='hover:border-b-2 hover:border-b-white'>Aeropuertos</Link>
                    <Link href='/aerolineas' className='hover:border-b-2 hover:border-b-white'>Aerolineas</Link>
                    <AiOutlineSearch className='flex text-lg cursor-pointer max-sm:hidden' onClick={() => router.push('/search')}/>
                </div>
            </div> 
        </nav>
        )
}