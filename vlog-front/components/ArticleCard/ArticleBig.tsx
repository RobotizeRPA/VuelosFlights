import Image from "next/image"
import Link from "next/link"
import { MainTitle } from "../PersonalComponent/cardTitle"

interface Props {
    title: string
    section: string
    _id: string
    summary: string
    date: string
}

export default function ArticleBig({title,section, _id, summary, date}: Props){
    const sectioon = section.charAt(0).toUpperCase() + section.slice(1)
    return(
        <Link href={`/${section}/${_id}`} className="text-left text-white p-2 flex flex-col justify-end items-end gap-4 rounded-t-lg bg-gradient-to-t from-black to-transparent h-full w-full hover:text-title">
            <p className="text-xl w-full max-sm:text-sm">{sectioon}</p>
            <MainTitle title={title}/>
            <p>Por <strong>Vuelos Gatulin</strong></p>
        </Link>)
}