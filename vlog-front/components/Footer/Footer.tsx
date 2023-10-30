import Link from "next/link";
import {AiOutlineTwitter, AiFillLinkedin, AiFillMail} from 'react-icons/ai'

export default function Footer(){
    return(
        <footer className="w-3/4 mx-auto mt-4 flex max-sm:flex-col max-sm:gap-4 justify-between p-4 text-center items-center max-sm:w-full">
            <div className="flex flex-col gap-2 max-sm:hidden">
                <p className="font-semibold"><u>Secciones:</u></p>
                <Link href='/aeropuertos'>Aeropuertos</Link>
                <Link href='/aerolineas'>Aerolineas</Link>
            </div>
            <div>
            <h2 className="text-3xl py-2 text-black">FLIGHTPOSTING</h2>
            <span>Copyright 2023 | Todos los derechos reservados</span>
            </div>
            <div className="text-center flex justify-center gap-2">
                <Link href='https://www.linkedin.com/in/agopchorbadjian/' target="_blank"><AiFillLinkedin className='text-2xl'/></Link>
                <Link href='#' target="_blank"><AiOutlineTwitter className='text-2xl'/></Link>
                <AiFillMail className='text-2xl'/>
            </div>
        </footer>)
}