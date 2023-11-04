'use client'
import { useEffect, useState } from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import { useRouter, usePathname } from 'next/navigation'
// import SideBar from '../Sidebar/Sidebar'
import { HiOutlineBars3 } from 'react-icons/hi2'
import Link from 'next/link'

export default function Navbar(){
    const router = useRouter()
    let path = usePathname()
    path = path.replace('/','')
    const [pathName,setPathName] = useState('path')

    return(
        <nav className='border-b-2 border-black w-full sticky top-0 bg-black z-10 text-white'>
            <div className="flex justify-between items-center mx-auto py-4 w-3/4 max-sm:w-full max-sm:justify-around">
                <h1 className="font-bold text-4xl cursor-pointer max-sm:text-4xl" onClick={() => router.push('/')}>FlightPosting</h1>
                <div className='flex justify-center items-center gap-4 font-bold max-sm:hidden'>
                    <Link href='/aeropuertos' className={path === 'aeropuertos' ? 'border-b-2 border-b-white' : 'hover:border-b-2 hover:border-b-white'}>Aeropuertos</Link>
                    <Link href='/aerolineas' className={path === 'aerolineas' ? 'border-b-2 border-b-white' : 'hover:border-b-2 hover:border-b-white'}>Aerolineas</Link>
                    <Link href='/industria' className={path === 'industria' ? 'border-b-2 border-b-white' : 'hover:border-b-2 hover:border-b-white'}>Industria</Link>
                </div>
                <AiOutlineSearch className='text-lg cursor-pointer max-sm:hidden' onClick={() => router.push('/search')}/>
            </div> 
        </nav>
        )
}
