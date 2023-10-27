import Link from "next/link"
import { MainSubTitle } from "../PersonalComponent/cardTitle"

interface Props {
    title: string
    section: string
    _id: string
    summary: string
    date: string
}

export default function ArticleMain({title,section, _id, summary, date}: Props){
    const sectioon = section.charAt(0).toUpperCase() + section.slice(1)
    return(
        <Link href={`/${section}/${_id}`} className="text-left text-white flex flex-col justify-end items-center gap-4 p-2 bg-gradient-to-t from-black to-transparent h-full w-full hover:text-title">
           <p className="w-full text-sm max-sm:text-sm">{sectioon}</p>
           {/* <h4 className="text-base font-bold w-full hover:text-title max-sm:text-2xl">{title}</h4> */}
           <MainSubTitle title={title}/>
        </Link>)
}